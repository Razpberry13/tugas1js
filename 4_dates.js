let date1 = new Date("2024-03-19");
let date2 = new Date("2024-03-21");

let timeDiff = date2 - date1; // hasil dalam milidetik
let dayDiff = timeDiff / (1000 * 60 * 60 * 24);

console.log("Selisih hari: " + dayDiff);
// Output: 2
