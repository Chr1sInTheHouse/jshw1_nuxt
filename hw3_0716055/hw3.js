'use strict';
document.write('<h1>Great Magic!!!</h1>');
document.write('<div>');

// Print the tables.
// 邏輯：
// 每張表格顯示1~63之中，二進制第i位為1的數字（(num>>i)%2==1），
// 並每8個數字換行（由element控制）

for(let i=0; i<6; i++){

    document.write('<table class="table" id="table' + (i+1) + '">');
    document.write('<tr><td colspan="8">第 ' + (i+1) + ' 張卡片'+'<input class="check" id="check' + (i+1) + '" type="checkbox">');
    document.write('</td>');
    document.write('</tr>');

    let element = 0;

    for(let num=1; num<64; num++){

        if((num>>i)%2==1){
            
            if(element==0){
                document.write('<tr>');
            }

            document.write('<td>');
            document.write(String(num));
            document.write('</td>');

            element++;

            if(element==8){
                document.write('</tr>');
                element = 0;
            }
        }
    }
    document.write('</table>');

}
// 由play()控制的button.
document.write('<button id="go" onclick="play()">PLAY!</button>');
document.write('</div>');

// Play button function.
async function play(){

    let ele = document.getElementsByClassName("check");
    let ans = 0;

    for(let i=0; i<6; i++){
        ans += ele[i].checked*(1<<i);
    }

    if(ans>0){
        //Animation after press the button.
        await animate();
        console.log(ans);

        //Show the result by alert.
        alert("Your number is " + ans + "!");
    }else{
        //Show if no checkbox checked.
        alert("You check nothing!");
    }
    for(let i=0; i<6; i++){
        ele[i].checked = false;
    }
}

// sleep function: 控制間隔
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// 表格依序背景變紅，持續ms毫秒
async function redOneRound(ms){
    let tables = document.getElementsByClassName("table");

    for(let i=0; i<6; i++){
        tables[i].style.backgroundColor="red";
        await sleep(ms);

        tables[i].style.backgroundColor="white";
        await sleep(1);
    }
}

// 打勾的表格變紅，持續ms毫秒
async function redCheck(ms){
    let tables = document.getElementsByClassName("table");
    let box = document.getElementsByClassName("check");

    for(let i=0; i<6; i++){
        if(box[i].checked == true){
            tables[i].style.backgroundColor="red";
        }
    }
    await sleep(ms);
    
    for(let i=0; i<6; i++){
        tables[i].style.backgroundColor="white";
    }
    await sleep(ms/2);
}

// 由上面兩個function 組成完整動畫
async function animate(){
    await redOneRound(100);
    await redOneRound(100);
    await redOneRound(100);
    await redOneRound(200);
    await redCheck(500);
    await redCheck(500);
    await redCheck(500);
}

