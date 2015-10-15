/**
 * Created by hu on 2015/9/29.
 */

//全局变量
var timer=null;
var state=0;    // 0初始化 1进行 2暂停 3失败结束
var speed=2;    //运动速度
var menu=$('menuid');
//初始化
function init(){
    for(var i=0;i<4;i++){
        creat_row();
    }
    $('wapper').onclick= function (ev) {
        judge(ev);
    };
}
function gmmenu(){
    menu.style.display='block';
    $('startgm').onclick= function(){
        start();
    }
}
//start game启动
function start(){
    timer=setInterval(move,30);
    menu.style.display='none';
}

//失败
function fail(){
    //var oOver=$('over');
    state=3;
    clearInterval(timer);
    alert('game over');
    //oOver.style.display='block';
    //var res=$('restart');
    //res.onclick=function(){
    //    oOver.style.display='none';
    //    init();
    //    start();
    //}
}

//判断
function judge(ev){
    var oEvt=ev||event;
    if(state==3){
        alert("you loser,don't click!");
        return;  //这边加return？

    }
    //oEvt.target.className='cell';
    if(oEvt.target.className.indexOf('black')==-1){
        fail();
    }else{
        oEvt.target.className='cell';
        oEvt.target.parentNode.pass=1;
        score();
    }
}

// move
function move(){
    var con=$('container');
    var nowTop=parseInt(getStyle(con,'top'));
    if(speed+nowTop>0){ //-8 -3 2.不能让一步走太多 不然到不了0
        nowTop=0;
    }else{
        nowTop+=speed;
    }
    con.style.top=nowTop+'px';
    if(nowTop==0){
        creat_row();
        drow();
        con.style.top='-100px';
    } else if(nowTop==(-100+speed)){
        var rows=con.childNodes;
        if((rows.length==5)&&(rows[rows.length-1].pass!==1)){
            fail();
        }
    }
}

//加速
function jiasu(){
    speed+=2;
}

//删除最后一行
function drow(){
    var con=$('container');
    if(con.childNodes.length==6){
        con.removeChild(con.lastChild);
    }

}

// 计分
function score(){
    var sc=$('score');
    //alert('aaa');
    var nowscore=parseInt(sc.innerHTML)+1;
    sc.innerHTML=nowscore;
    if(nowscore%10==0){
        jiasu();
    }
}

//getStyle函数的封装
function getStyle(obj,attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }else{
        return getComputedStyle(obj,false)[attr];
    }
}

//创建div.row
function creat_row(){
    var oRow=creat_div('row');
    //oRow.style.backgroundImage="url('img/p"+bg_tab+".jpg')";
    var classes=creat_one();   //把创建随机黑块的数组存进来
    var con=$('container');
    for(var i=0;i<4;i++){
        var bg_tab=parseInt(Math.random()*(2-5)+5);   //狗锐图片随机切换
        oRow.style.backgroundImage="url('img/p"+bg_tab+".jpg')";
        oRow.appendChild(creat_div(classes[i]));
    }
    if(con.firstChild==null){
        con.appendChild(oRow);
    }else{
        con.insertBefore(oRow,con.firstChild);
    }
}

function creat_div(className){
    var oDiv=document.createElement('div');
    oDiv.className=className;
    return oDiv;
}

//返回一数组 随机其中一个单元‘cell black’
function creat_one(){
    var arr=['cell','cell','cell','cell'];
    var i=Math.floor(Math.random()*4);  //math.floor 浮点数向下取整
    arr[i]='cell black';
    return arr;
}

//id获取对象
function $(id){
    return document.getElementById(id);
}

init();
gmmenu();