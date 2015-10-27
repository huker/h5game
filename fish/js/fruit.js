/**
 * Created by hu on 2015/10/23.
 */
var fruitObj= function () {
    this.alive=[];
    this.orange=new Image();
    this.blue=new Image();
};

fruitObj.prototype.num=30;
fruitObj.prototype.init= function () {
    for(var i=0;i<this.num;i++){
        this.alive[i]=false;
    }
    this.orange.src=".../src/fruit.png";
    this.blue.src=".../src/blue.png";
};
fruitObj.prototype.draw=function(){

};