import { fromEvent } from "rxjs";
import { debounceTime, map, tap } from "rxjs/operators";

const scrollY = fromEvent(window, 'scroll').pipe(
  // debounceTime(200),
  tap(console.log),
  map(e => window.scrollY)
)

type Section = "Title" | "JS"

const sectionMap: { [key: number]: Section } = {
  0: "Title",
  250: "JS",
}
const convertToSection = (i: number) => Object
  .entries(sectionMap)
  .sort(([maxA], [maxB]) => Number(maxA) - Number(maxB))
  .reduce((acc, [max, sect]) => {
    if (i < Number(max)) return acc
    return sect
  }, "Title")


export const currentSection = scrollY.pipe(
  map(convertToSection)
)
