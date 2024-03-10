//CRUD | Create, Read, Update, Delete
/**
 * Map là tập hợp của key và value
 */
// CREATE
let emercyList = new Map([
    ['113', 'Police]'],
    ['114', 'Fire Dept'],
    ['115', 'Hospital'],
    ['116', 'Other'],
]);
// emercyList.set("113", "Police");
// emercyList.set("114", "Fire Dept");
// emercyList.set("115", "Hospital");
// emercyList.set("116", "Other");

// Read a single value
console.log(emercyList.get("113"));
console.log(`Is 113 key exist? ${emercyList.has("113")}`);

//Loop the map's entries via keys
for (const key of emercyList.keys()) {
  console.log(`${key} - ${emercyList.get(key)}`);
}

//Loop the map's entries via values
for (const value of emercyList.values()) {
  console.log(`value: - ${value}`);
}

console.log("====Iterator| keys==========");
console.log(Array.from(emercyList.keys())[0]);
// Number(string) -> chuyển từ string về number
//Array.from(IterableIterator) --> array

console.log(`Map size: ${emercyList.size}`);

//DELETE
emercyList.delete("113");
printTheMap(emercyList);

function printTheMap(emercyList) {
    for (const key of emercyList.keys()) {
        console.log(`${key} - ${emercyList.get(key)}`);
    }
}