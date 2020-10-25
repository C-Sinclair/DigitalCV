import { firestore } from './firebase'
import { filter, map, startWith, tap } from 'rxjs/operators'
import { docData } from 'rxfire/firestore'
import { BehaviorSubject, combineLatest } from 'rxjs'

const ref = firestore.collection('thumbsup')
const doc = ref.doc('counter')

interface ThumbsUpCounter {
  total: number
}

export const thumbsUp = docData(doc).pipe(
  map<ThumbsUpCounter, number>(doc => doc.total),
  startWith(0),
  tap(console.log)
)

const pushes = new BehaviorSubject(false)

export const pushThumbsUp = () => pushes.next(true)

/**
 * Monitors both user clicks and current value
 * If clicked, update db with +1 to current
 */
combineLatest([pushes, thumbsUp])
  .pipe(
    filter(([pushed, _]) => pushed)
  )
  .subscribe(([_, total]) => {
    console.log(`You've hit the subscribe method ${_} ${total}`)
    doc.update({ total: total + 1 })
    pushes.next(false)
  })