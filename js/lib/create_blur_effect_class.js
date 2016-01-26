/**
 * Created by bens on 16-1-26.
 */




(function(){

	var blurEffect = function(opt){
		var __id__ = "svg_blur_"+new Date().getTime()+"_"+parseInt(Math.random()*100),
			div,
			a,
			className = opt.className || "",
			blurNumber = opt.blurNumber || 10;

		var createDiv = function(){
			div = $("<div></div>");
			div.css({
				width:0,height:0
			});
			$("body").append(div);
		};

		var createSVG = function(){
			a = new svg({
				container:div,
				isHide:true,
				id:""
			});

			var defs = a.createElement({
				tag:"defs"
			});

			var filter = a.createElement({
				tag:"filter",
				attr:{
					id:__id__
				}
			});

			var feGaussianBlur = a.createElement({
				tag:"feGaussianBlur",
				attr:{
					in:"SourceGraphic",
					result:"blur",
					stdDeviation:blurNumber
				}
			});


			$(defs).append(filter);
			$(filter).append(feGaussianBlur);
			a.svg.append(defs);
		};

		var createClass = function(){
			var style = $("<style></style>");
			var text = "."+className+"{-webkit-filter:url('#"+__id__+"');filter:url('#"+__id__+"');-webkit-backface-visibility:hidden;backface-visibility:hidden;}";
			style.text(text);
			$("head").append(style);
		};

		createDiv();
		createSVG();
		createClass();
	};

	return svg.createBlurEffectClass = blurEffect;

})();