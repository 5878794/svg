/**
 * Created by bens on 16-1-15.
 */


var svg = function(opt){
	//容器
	this.body = opt.container;
	this.id = opt.id || "";
	this.viewBoxWidth = opt.viewBoxWidth;
	this.viewBoxHeight = opt.viewBoxHeight;
	this.bodyWidth = parseInt(this.body.width());
	this.bodyHeight = parseInt(this.body.height());

	//svg元素宽高
	this.width = this.bodyWidth;
	this.height = this.bodyHeight;
	//svg的viewBox定义成与svg一样大
	this.viewBox = "0 0 "+this.viewBoxWidth+" "+this.viewBoxHeight;
	this.align = "xMidYMid";    //xMinYMin  xMaxYMax xMidYMid
	//meet 自适应
	//slice 宽高比最小的边拉满等比缩放
	//none 宽高比拉满非等比缩放
	this.scaleViewBox = "meet";
	this.preserveAspectRatio = this.align+" "+this.scaleViewBox;


	this.svg = null;



	this.init();
};
svg.prototype = {
	init:function(){
		this.createBody();
	},
	createBody:function(){
		var svg = $("<svg></svg>");
		svg.attr({
			xmlns:"http://www.w3.org/2000/svg",
			width:this.width,
			height:this.height,
			viewBox:this.viewBox,
			preserveAspectRatio:this.preserveAspectRatio,
			id:this.id
		});

		this.body.html(svg.prop("outerHTML"));

		this.svg = this.body.find("svg");
	},
	createElement:function(opt){
		var tag = opt.tag,
			attr = opt.attr || {},
			val = opt.val || "";

		if(!tag){return;}

		var el= document.createElementNS('http://www.w3.org/2000/svg', tag);
		for (var k in attr){
			if(attr.hasOwnProperty(k)){
				el.setAttribute(k, attr[k]);
			}
		}
		$(el).val(val);

		return el;
	}
};

