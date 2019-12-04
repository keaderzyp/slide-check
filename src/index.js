const SlideCheck = require('./SlideCheck.js');
let sc = new SlideCheck({el:'#container'});
let btn = document.querySelector('.btn');
btn.onclick = function(){
	console.log(sc.show)
}
let c = document.querySelector('#c');
let ctx = c.getContext('2d');
ctx.beginPath();
ctx.moveTo(10,50);
ctx.lineTo(30,50);
ctx.arc(55,50,13,Math.PI,Math.PI*2,false);
ctx.lineTo(100,50);
ctx.lineTo(100,80);
ctx.arc(100,105,13,Math.PI*1.5,Math.PI*2.5,false);
ctx.lineTo(100,150);
ctx.stroke();
console.log(sc)