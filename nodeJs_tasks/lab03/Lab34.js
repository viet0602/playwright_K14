/**
 fooPosition, barPosition, mergePosition
 while(fooStillHasElement && barStillHasElement){
    if (fooValue <= barValue)
       merge[mergePosition] = fooValue
       mergePosition ++
       fooPosition ++
    Else
       merge[mergePosition] = barValue
        mergePosition ++
        barPosition ++
while(fooStillHasElement)
    Put all foo's element into merge array
while(barStillHasElement)
    Put all bar's element into merge array
 */

const foo = [1, 2, 5, 8, 9, 23];
const bar = [1, 7, 12, 13, 22, 24];
const mergeArray = merge(foo, bar);
console.log("foo: ", foo);
console.log("bar: ", bar);
console.log("mergeArray: ", mergeArray);
function merge(foo, bar) {
  const fooLength = foo.length;
  const barLength = bar.length;
  let fooPosition = 0;
  let barPosition = 0;
  let mergePosition = 0;
  let merge = [];

  while (fooPosition < fooLength && barPosition < barLength) {
    const fooValue = foo[fooPosition];
    const barValue = bar[barPosition];
    if (fooValue <= barValue) {
      merge[mergePosition] = fooValue;
      mergePosition++;
      fooPosition++;
    } else {
      merge[mergePosition] = barValue;
      mergePosition++;
      barPosition++;
    }
  }

  while (fooPosition < fooLength) {
    merge[mergePosition] = foo[fooPosition];
    mergePosition++;
    fooPosition++;
  }

  while (barPosition < barLength) {
    merge[mergePosition] = bar[barPosition];
    mergePosition++;
    barPosition++;
  }
  return merge;
}
