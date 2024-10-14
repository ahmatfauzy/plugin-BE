"use strict";
let num = 5;
if (num > 6) {
    console.log("kondisi pertama");
}
else if (num > 3) {
    console.log("kondisi kedua");
}
else {
    console.log("kondisi ketiga");
}
//
let day = 3;
let dayName;
switch (day) {
    case 1:
        dayName = "senin";
        break;
    case 2:
        dayName = "selasa";
        break;
    case 3:
        dayName = "rabu";
        break;
    case 4:
        dayName = "kamis";
        break;
    case 5:
        dayName = "jumat";
        break;
    case 6:
        dayName = "sabtu";
        break;
    case 7:
        dayName = "minggu";
        break;
    default:
        dayName = "tidakvalid";
}
console.log(`hari ${day}: ${dayName}`);
