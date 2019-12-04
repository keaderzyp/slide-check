class SlideCheck{
	constructor(options) {
	    this.initData(options);
	}
	initData(options){
		if(options){
			if(options.el){
				this.element = document.querySelector(options.el);
				if(this.element){
					this.element.style.position = 'relative';
					this.initSlideCheck();
				}else{
					throw('cannot find element by param \'el\',make sure you have created htmlElement for this container')
				}
			}else{
				throw('el in undefined')
			}
			this.show = false;
		}else{
			throw('options is undefined,please change to use an object like {el:\'#slide-container\'}')
			return;
		}
	}
	initSlideCheck(){
		let slideCheck = this.element.children[0];
		slideCheck.style.top = (-1*slideCheck.offsetHeight)+'px';
		this.SlideCheck = slideCheck;
	}
	show(){
		
	}
}
module.exports = SlideCheck;