/**
 * Created by hu on 2015/9/29.
 */

//ȫ�ֱ���
var timer=null;
var state=0;    // 0��ʼ�� 1���� 2��ͣ 3ʧ�ܽ���
var speed=2;    //�˶��ٶ�
var menu=$('menuid');
//��ʼ��
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
//start game����
function start(){
    timer=setInterval(move,30);
    menu.style.display='none';
}

//ʧ��
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

//�ж�
function judge(ev){
    var oEvt=ev||event;
    if(state==3){
        alert("you loser,don't click!");
        return;  //��߼�return��

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
    if(speed+nowTop>0){ //-8 -3 2.������һ����̫�� ��Ȼ������0
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

//����
function jiasu(){
    speed+=2;
}

//ɾ�����һ��
function drow(){
    var con=$('container');
    if(con.childNodes.length==6){
        con.removeChild(con.lastChild);
    }

}

// �Ʒ�
function score(){
    var sc=$('score');
    //alert('aaa');
    var nowscore=parseInt(sc.innerHTML)+1;
    sc.innerHTML=nowscore;
    if(nowscore%10==0){
        jiasu();
    }
}

//getStyle�����ķ�װ
function getStyle(obj,attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }else{
        return getComputedStyle(obj,false)[attr];
    }
}

//����div.row
function creat_row(){
    var oRow=creat_div('row');
    //oRow.style.backgroundImage="url('img/p"+bg_tab+".jpg')";
    var classes=creat_one();   //�Ѵ�������ڿ����������
    var con=$('container');
    for(var i=0;i<4;i++){
        var bg_tab=parseInt(Math.random()*(2-5)+5);   //����ͼƬ����л�
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

//����һ���� �������һ����Ԫ��cell black��
function creat_one(){
    var arr=['cell','cell','cell','cell'];
    var i=Math.floor(Math.random()*4);  //math.floor ����������ȡ��
    arr[i]='cell black';
    return arr;
}

//id��ȡ����
function $(id){
    return document.getElementById(id);
}

init();
gmmenu();