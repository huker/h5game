/**
 * Created by hu on 2015/10/16.
 */

//全局变量定义
var can1;
var can2; //canvas
var ctx1;
var ctx2; //canvas context

//加载游戏
document.body.onload=game;

//游戏主入口
function game(){
    init();
    gameloop();
}

//初始化
function init(){
    //获得canvas
    can1=document.getElementById('canvas1');//fish UI 圈圈特效 dust
    ctx1=can1.getContext('2d');
    can2=document.getElementById('canvas2');//bg 海葵 果实
    ctx2=can2.getContext('2d');
}

//游戏循环
function gameloop(){
    window.requestAnimFrame(gameloop);
    console.log("loop");
}
