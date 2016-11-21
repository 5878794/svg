/**
 * Created by bens on 16-1-25.
 */



var menu_arrow_test = function(div_id){
	svg.menu_arrow({
		//id:"",					//@param:str    	svg容器的id
		container:$("#"+div_id)		//@param:jqobj  	要插入的容器dom
	})
};


var menu_close_test = function(div_id){
	svg.menu_close({
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


var graph_test = function(){

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



var create_gray_effect_class_test = function(div_id){
	var dom = $("<div></div>"),
		body = $("#"+div_id);

	dom.css({
		width:"30px",height:"30px",background:"red","border-radius":"30px"
	});
	body.append(dom);
	svg.createGrayEffectClass({
		className:div_id,
		grayNumber:0.5
	});
	dom.addClass(div_id);

};



var ios_app_install_effect_test = function(div_id){
	var a = new svg.ios_app_install_effect({
		body:$("#"+div_id)           //需要放入的容器  @param:jqobj
	});
	a.progress(30);              //显示进度 @param:number 1-100
};


var loading_test = function(div_id){
	b = new svg.loading({
		dom:$("#"+div_id),
		r1:25,
		r2:20,
		startDeg:90,
		bgColor:"#f00"
	});
	b.progress(60);
};


var fivesGraphics_test = function(div_id){
	new svg.fivesGraphics({
		body:$("#"+div_id),                      //要放置的容器  jqobj
		value:[60,70,80,50,40],               //5个项目的得分,百分比
		unit:"分",                            //图形中间总分数的单位
		title:"标题",                     //图形中间的标题(第2行)
		fontSize:"",                      //通用字体大小，传入带单位
		totalFontSize:"12px",                 //得分字体大小
		bgColor:"#ccc",                       //背景颜色
		bgLineColor:"#fff",                   //背景线颜色
		color:"rgba(0,0,0,0.5)",              //数据填充色
		totalFontColor:""                 //中间部分统计颜色
	})
};


var speedometer_test = function(div_id){
	var a = new svg.speedometer({
		body:$("#"+div_id),                  //要插入的dom
		startDeg:30,                    //开始角度（缺口在底部）
		endDeg:330,                     //结束角度
		jgDeg:10,                        //间隔的角度
		lineColor:"#000",               //线条颜色
		selectLineColor:"#f00",         //有数据显示的颜色
		lineLength:7                   //线条的长度
	});
	a.coloring(30);
};



var circularGraph_test = function(div_id){
	new svg.circularGraph({
		body:$("#"+div_id),                    //要插入的dom元素   jqobj
		value:[70,20,30],                   //数据
		color:["#e9a","#f00","#a3a"],       //颜色
		lineWidth:10                        //圆环边框大小
	});
};



var histogram_test = function(div_id){
	bb = new svg.histogram({
		body:$("#"+div_id),      //@param:jqobj   容器
		maxYNumber:"",        //@param:number  y轴显示最大值  默认数据中的最大值
		minYNumber:"",        //@param:number  y轴显示最小值  默认0
		showYTextNumber:2,   //@param:number  y轴显示几个刻度
		showXTextNumber:"",   //@param:number  x轴显示几个刻度
		YUnit:"",             //@param:string  y轴单位
		fontColor:"",         //@param:string  字体颜色
		graphColor:"",        //@param:string  图形颜色
		lineWidth:"",         //@param:number  柱状图线条的宽度
		fontSize:9,          //@param:number  x，y轴文字大小
		xAxisHeight:5,       //@param:number  x轴文本高度
		yAxisWidth:5,        //@param:number  y轴文本宽度
		value:[               //@param:array   要显示的数据
			{"10-1":"11"},            //数据格式  key为x轴显示的文字，value为值
			{"10-2":"22"},
			{"10-3":"33"}
		]
	});
};