console.log("はろー－！");
//足し算
console.log(1+1);
console.log("1+1");

//変数を作成
var f_name = "ひとりっこ";
let l_name = "hitorikko"; 
const m_name = "長男";

//変数を呼び出し
console.log("私は"+f_name+"です");

//再代入
l_name = "一人";
console.log(l_name);

//変数に式を代入
var intro = "私は"+f_name+"です";
console.log(intro);

//特殊な書き方
var count = 1;
// 再代入
count = count+1;
console.log(count);
// count = count+1と同じ
count+=1;
// +1,-1の時だけ
count++
count--
// 前置
++count
--count
console.log(count);

//プラス１をしたあとにconsoleに表示
//countAの中身を表示
var countA = 1;
// console.log(++countA);
// console.log(countA);
//consoleに表示したあとにプラス１をする
console.log(countA++);
console.log(countA);

var prefect = "京都、香川、千葉、北海道";
var pref = prefect.split("、");
console.log(pref);

//配列
var prof = ["ひとり","寿司","香川","ビール"];
//配列の呼び出し
console.log("私の名前は"+prof[0]+"です");
console.log("私は"+prof[1]+"と"+prof[3]+"が好きです");
console.log("私の出身は"+prof[2]+"です");

prof[1] = "焼肉";
console.log(prof[1]);
console.log("私は"+prof[1]+"と"+prof[3]+"が好きです");

var region ={
    kagawa:"うどん",
    chiba:"ディズニー",
    tokyo:"スカイツリー"
};
console.log(region.chiba);
console.log(region["kagawa"]);



// var nun = {
//     f_food:"チキン南蛮",
//     f_sports:"バスケ",
//     f_music:"サザン",
//     f_star:"東海オンエア"
// }

var prof ={
    nun:{
        f_food:"チキン南蛮",
        f_sports:"バスケ",
        f_music:"サザン",
        f_star:"東海オンエア"
    },

    meme:{
        f_food:"焼肉",
        f_sports:"バレーボール",
        f_music:"B'z",
        f_star:"ジョニーデップ"
    },

    yopi:{
        f_food:"餃子",
        f_sports:"バドミントン",
        f_music:"パンク",
        f_star:"アルフィー"
    }
}


console.log("ぬんの好きな食べ物は"+prof.nun.f_food+"です。");
console.log("ぬんの好きな食べ物は"+prof["nun"]["f_food"][2],[3],[4]+"です。");


// var prof ={
//     nun:["チキン南蛮","バスケ","サザン","東海オンエア"],
//     meme:["焼肉","バレーボール","B'z","ジョニーデップ"],
//     yopi:{
//         f_food:"餃子",
//         f_sports:"バドミントン",
//         f_music:"パンク",
//         f_star:"アルフィー"
//     }
//     }
// for (let index = 0; index < 101; index++) {
//     console.log(index);
    
// }


var prof =[
    {name:"ぬん",data:["チキン南蛮","バスケ","サザン","東海オンエア"]},
    {name:"めめ",data:["焼肉","バレーボール","B'z","ジョニーデップ"]},
    {name:"よぴ",data:["餃子","バドミントン","パンク","アルフィー"]}
]

for (let index = 0; index < prof.length; index++) {
    var test = prof[index];
    console.log(test["name"]+"さんの");
    console.log("好きなたべものは"+test["data"][0]);
    console.log(test["data"][1]);
    console.log(test["data"][2]);
    console.log(test["data"][3]);
}

// 条件分岐

var license = 2;

if (license == 0) {
    console.log("免許をとってね");
}else if(license == 1){
    console.log("おめでとう");
}else{
    console.log("有効な免許を表示してください");
}

// ジャンケン
// VSCODEで手を入力→勝ち負け引き分け

// fizz buzz
// 0~100
// 3の倍数はfizz 5の倍数はbuzz ３と５両方の倍数はfizzbuzz


for (let index = 0; index <= 100; index++) {
if (index % 15 === 0) {
    console.log("fizzbuzz");
} else if(index % 5 === 0) {
    console.log("buzz");
} else if(index % 3 === 0) {
    console.log("fizz");
} else {
    console.log(index);
}
}



// var jan = {"goo":"グー","cyoki":"チョキ","paa":"パー"};
        
// for (let index = 0; index < 3; index++) {
//     var test = jan(index);
    
//     console.log(jan[index]);
    
// }


// let m_h = "パー";
// console.log("かち");

// 相手と自分が勝負する
// 勝ち負けあいこを決める
// 自分が出した手と
var my_hand = "グー";
// 相手が出した手を
var com_hand = "チョキ";
// 判定する
// 決めたルールに当てはめる

//グーとチョキがあります
//パーはグーに勝ち
//チョキはパーに勝ちます
//グーはチョキに勝ちます
if(my_hand=="グー"){
    if (com_hand=="チョキ") {
        console.log("勝ち");
    }else if(com_hand=="グー"){
        console.log("アイコ");
    }else if(com_hand=="パー"){
        console.log("負け");
    }else{
        console.log("正しい値を入れてね");
    }
}

// if (my_hand=="グー"&&com_myhand=="チョキ") {
//     console.log("勝ち");
// }
// if (may_hand==com_hand) {
//     console.log("引き分け");
    
// }




// var text_node = document.getElementById("text");
// console.log(text_node);
// text_node.textContent="おはよう！"
// text_node = "<h1>こんばんは</h1>";

var btn_node =document.getElementById("text_change_btn");
// console.log(btn_node);
// btnに機能を追加
btn_node.addEventListener("click",changeText)

// changeTextの機能を設定
function changeText(){
    var text_node = document.getElementById("text"); 
    // console.log(text_node);
    text_node.textContent="おはよう！"
}
$(function(){
    $("#text_jq_btn").on("click",function(){
        $("#jq_node").text("熱っ！！");
    });
});
// mousemove mouseover mouseup mousout
// text-toggle() css("何を","どうする")


//関数
function test(x,y){
    var z = x+y;
       
    ;
    return z;
}

//関数の実行
console.log(test(1,2))