'use strict'

// let testscore = 60;

// if(testscore >= 80){
//     document.write("合格です！おめでとうございます");
// }
// else if (testscore >= 70){
//     document.write("惜しい！あと少し");
//     else {
//         document.write("不合格です！もう少し勉強しましょう");
//     }

// 

function scorecheck() {
let testscore = document.getElementById('score').value
if(testscore >= 80) {
    document.write("合格おめでとうございます");
} else if (testscore >=70) {
    document.write("惜しいあと少し");
} else {
    document.write("不合格また挑戦しよう");
}
}
