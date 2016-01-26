/**
 * Created by bens on 16-1-25.
 */



var menu_arrow_test = function(div_id){
	svg.menu_arrow({
		//id:"",					//@param:str    	svg容器的id
		container:$("#"+div_id)		//@param:jqobj  	要插入的容器dom
	})
};


var create_stick_effect_class_test = function(div_id){
	//demo
	var dom = $("#"+div_id),
		dom1 = $("<div></div>"),
		dom2 = $("<div></div>"),
		css = {
			width:"30px",height:"30px",background:"red","border-radius":"30px"
		},
		class_name = "create_stick_effect_class_test";

	svg.createStickEffectClass({
		className:class_name,
		stickNumber:7
	});
	dom1.addClass(class_name).css(css);
	dom2.addClass(class_name).css(css).css({width:"20px",height:"20px",position:"Relative",top:"5px"});
	dom1.append(dom2);
	dom.append(dom1);
	var animate = new JsAnimate({
		start:0,                  //@param:number   初始位置
		end:1,                    //@param:number   结束位置
		time:2000,                 //@param:number   动画执行时间  ms
		type:"Linear",             //@param:str      tween动画类别,默认：Linear 详见函数内tween函数
		class:"easeInOut",           //@param:str      tween动画方式,默认：easeIn 详见函数内tween函数
		stepFn:function(val){     //@param:fn       每步执行函数,返回当前属性值
			var v1 = 55 *val;

			dom2.css({
				transform:"translateX("+v1+"px)"
			})

		},
		endFn:function(){         //@param:fn       动画结束执行

		},
		alternate:true,          //@param:boolean  动画结束时是否反向运行，默认：false
		infinite:true            //@param:boolean  动画是否循环执行，默认：false
		//设置该参数endFn将失效
	});
	animate.play();
};



var create_blur_effect_class_test = function(div_id){
	var dom = $("<div></div>"),
		body = $("#"+div_id);

	dom.css({
		width:"30px",height:"30px",background:"red","border-radius":"30px"
	});
	body.append(dom);
	svg.createBlurEffectClass({
		className:div_id,
		blurNumber:10
	});
	dom.addClass(div_id);

};