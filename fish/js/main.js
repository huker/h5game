/**
 * Created by hu on 2015/10/16.
 */

//ȫ�ֱ�������
var can1;
var can2; //canvas
var ctx1;
var ctx2; //canvas context

//������Ϸ
document.body.onload=game;

//��Ϸ�����
function game(){
    init();
    gameloop();
}

//��ʼ��
function init(){
    //���canvas
    can1=document.getElementById('canvas1');//fish UI ȦȦ��Ч dust
    ctx1=can1.getContext('2d');
    can2=document.getElementById('canvas2');//bg ���� ��ʵ
    ctx2=can2.getContext('2d');
}

//��Ϸѭ��
function gameloop(){
    window.requestAnimFrame(gameloop);
    console.log("loop");
}
