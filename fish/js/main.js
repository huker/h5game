/**
 * Created by hu on 2015/10/16.
 */

//全局变量定义
var can1,can2; //canvas
var ctx1,ctx2; //canvas context
var lastTime,deltaTime;//loop的time
var canWidth,canHeight;//获取canvas的宽高
var ane;//海葵
var fruit;//果实
var bgPic=new Image();//背景图
//加载游戏
document.body.onload=game;

//游戏主入口
function game(){
    init();
    lastTime= Date.now();
    deltaTime=0;
    gameloop();
}

//初始化
function init(){
    //获得canvas
    can1=document.getElementById('canvas1');//fish UI 圈圈特效 dust
    ctx1=can1.getContext('2d');
    can2=document.getElementById('canvas2');//bg 海葵 果实
    ctx2=can2.getContext('2d');

    bgPic.src='./src/background.jpg';
    canWidth=can1.width;
    canHeight=can1.height;

    ane=new aneObj();
    ane.init();
}


//游戏循环
function gameloop(){
    window.requestAnimFrame(gameloop);
    var now=Date.now();
    deltaTime=now-lastTime;
    lastTime=now;
    //console.log(deltaTime);
    drawBackground();
    ane.draw();
}
