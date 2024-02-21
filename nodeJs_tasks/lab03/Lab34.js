const foo = [1, 2, 5, 8, 9, 23];
const bar = [1, 7, 12, 8, 6, 24];
const merge = [];
const fooLength = foo.length;
const barLength = bar.length;
let fooPosition = 0;
let barPosition = 0;
let mergePosition = 0;

while(fooPosition < fooLength && barPosition < barLength){
    const fooValue = foo[fooPosition];
    const barValue = bar[barPosition];
    if(fooValue <= barValue){
        merge[mergePosition] = fooValue;
        mergePosition++;
        fooPosition++;
    } else {
        merge[mergePosition] = barValue;
        mergePosition++;
        barPosition++;
    }
}
