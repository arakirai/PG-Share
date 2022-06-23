/*  課題2で行った5教科の変数をオブジェクトに修正し合計点数を出力する
数学、国語、理科、社会、英語の変数を作成し合計点数を出力する
数学：40 国語：35 理科：80 社会：50 英語：98 
期限：6/19

suugaku=40;
kokugo=35;
rika=80;
syakai=50;
eigo=98

*/
const point = [
    { name: "数学", scoa: 40 },
    { name: "国語", scoa: 35 },
    { name: "理科", scoa: 80 },
    { name: "社会", scoa: 50 },
    { name: "英語", scoa: 98 },
];

const total = point.reduce((p, x) => p + x.scoa, 0);

console.log(` 合計 ${total} `);



