import { firestore } from "./firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore/lite";
import { filter, map, switchMap, tap } from "rxjs/operators";
import { BehaviorSubject, combineLatest, from } from "rxjs";

const ref = doc(firestore, "thumbsup", "counter");

interface ThumbsUpCounter {
  total: number;
}

async function getThumbsUp() {
  const doc = await getDoc(ref);
  const { total } = doc.data() as ThumbsUpCounter;
  return total;
}

/**
 * Local state of thumbs up total
 */
export const thumbsUp = new BehaviorSubject(0);

/**
 * Fetches the database value of thumbsup
 * Will default to current local value whilst fetching
 */
const fetch$ = from(getThumbsUp());
/**
 * Call fetch immediately
 */
fetch$.subscribe((value) => {
  thumbsUp.next(value);
});

/**
 * Simple toggle between whether user has clicked or not
 * Will reset ready to be reclicked after database update
 */
const pushes = new BehaviorSubject(false);
const resetPushes = () => pushes.next(false);
export const pushThumbsUp = () => pushes.next(true);

/**
 * Monitors both user clicks and current value
 * If clicked, update db with +1 to current
 */
combineLatest([pushes, thumbsUp])
  .pipe(
    filter(([pushed, _]) => pushed),
    tap(resetPushes),
    map(([_, total]) => total + 1),
    tap((total) => thumbsUp.next(total)),
    switchMap((total) => from(updateDoc(ref, { total }).then(() => total))),
  )
  .subscribe();
