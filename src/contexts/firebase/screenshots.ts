import { storage } from "./firebase";
import { ref, getDownloadURL, listAll } from "firebase/storage";
import type { StorageReference } from "firebase/storage";
import { from, map, startWith, switchMap } from "rxjs";

interface Shot {
  name: string;
  url: string;
}

async function getShot(item: StorageReference): Promise<Shot> {
  return {
    name: item.name,
    url: await getDownloadURL(item),
  };
}

async function getShots(items: StorageReference[]): Promise<Shot[]> {
  return Promise.all(items.map(getShot));
}

export const shots = from(listAll(ref(storage, "shots"))).pipe(
  map((res) => res.items),
  switchMap((items) => getShots(items)),
  startWith([])
);
