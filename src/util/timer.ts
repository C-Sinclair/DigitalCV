import { timer } from "rxjs";
import { startWith } from "rxjs/operators";

export const secondsPassed = (n: number) => timer(n * 1000).pipe(
  startWith(false)
)