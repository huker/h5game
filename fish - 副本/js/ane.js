/**
 * Created by hu on 2015/10/23.
 */
var aneObj=function(){
    this.x=[];
    this.length=[];
};
aneObj.prototype.num=50;

aneObj.prototype.init=function(){
    for(i=0;i<this.num;i++){
        this.x[i]=i*16+Math.random()*20;
        this.length[i]=200+Math.random()*50;
    }
    //console.log('a');
};
aneObj.prototype.draw=function(){
    ctx2.save();//表示这中间的定义只在这两个api之间起作用
    ctx2.globalAlpha=0.6;
    ctx2.lineWidth=20;
    ctx2.lineCap='round';
    ctx2.strokeStyle='#3b154e';
    for(var i=0;i<this.num;i++){
        //beginPath,moveTo,lineTo,stroke,strokeStyle,lineWidth,lineCap,globalAlpha
        ctx2.beginPath();
        ctx2.moveTo(this.x[i],canHeight);
        ctx2.lineTo(this.x[i],canHeight-this.length[i]);
        ctx2.stroke();
    }
    ctx2.restore();
};
