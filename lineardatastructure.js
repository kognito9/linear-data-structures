let arr1 = [1, 3, 5, 7];

let arr2 = [2, 4, 6, 8];

let Total1 = 0;

let arr = arr1.concat(arr2);

let Total2 = 0;
for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) { if (arr1[i] == arr2[j]) { Total1 += arr1[i] + arr2[j]; } }
}
for (let i = 0; i < arr.length; i++) {
    Total2 = Total2 + arr[i]
}
const Total3 = Total2 - Total1;

console.log("Distinct sum is " + Total3);


for (let i = 0; i < a.length; i++) {
    if (hash.has(arr1[i])) hash.set(arr1[i], 1 + hash.get(arr1[i]));
    else hash.set(arr1[i], 1);
}
for (let i = 0; i < b.length; i++) {
    if (hash.has(arr2[i])) hash.set(arr2[i], 1 + hash.get(arr2[i]));
    else hash.set(arr2[i], 1);
}
let sum = 0;

for (let entry of hash) {
    if (parseInt(entry[1].toString()) == 1) sum += parseInt((entry[0]).toString());
}


return sum;

console.log("Distinct sum is " + addUniqueElement(arr1, arr2)); 