alert("Welcome");
let i = 0;
let result = 0;
let table1 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31];
let table2 = [2, 3, 6, 7, 10, 11, 14, 15, 18, 19, 22, 23, 26, 27, 30, 31];
let table3 = [4, 5, 6, 7, 12, 13, 14, 15, 20, 21, 22, 23, 28, 29, 30, 31];
let table4 = [8, 9, 10, 11, 12, 13, 14, 15, 24, 25, 26, 27, 28, 29,30, 31];
let table5 = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
let tableValue = [1, 2, 4, 8, 16];

document.getElementById("y").addEventListener("click", yFunction);
document.getElementById("n").addEventListener("click", count_i);

function yFunction() {
    result = result + tableValue[i];
    count_i();
}

function count_i() {
    console.log(result);
    if (i >= 4) {
        i = 0;
        alert(result);
        result = 0;
    } else {
        i++;
    }
}