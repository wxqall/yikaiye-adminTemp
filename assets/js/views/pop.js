/***
 * author:林露
 * 
 * ****/
;(function(){
	var $body = $("body");
	function popWrap(){
		//return this;
	};
	popWrap.prototype.topTip= function(object1){
		this.options = $.extend(true, {
			content:"",
			autoClose:false,
			classes:"",
		}, object1);
		$dom = $("<div>",{class:"topTip",text:this.options.content});
		$body.append($dom)
	};
	popWrap.prototype.alert = function(object1){
		var options = $.extend(true, {
			content:"取消成功",
			confirm: new Function,
            init: new Function,
            autoClose:3000
		}, object1);
		var wrap = $('<div>',{"class":"alert_t","id":"alert_t"}),obj = [];
        obj.push('<div class="content">');
        obj.push(options.content)
        obj.push('</div>');
        wrap.prepend(obj.join(''));
		$("body").append(wrap);
    	setTimeout(function(){
    		wrap.fadeOut(300,function(){
    			wrap.remove();
    			options.confirm();
    		});
    	},options.autoClose);
	};
	
	popWrap.prototype.defult = function(e){
		this.option = $.extend(true, {
			content:"2222",
			title:"pop-title",
			effect:"slideUp",
			close:"X",
			blurbox:".wrap",
			maskClose:true,
			wrap:".wrap",
			wrapClass:"",
			btn_l:"取消",
			btn_r:"确定",
			width:"",
			height:"",
			btnNum:2,
			title:true,
			showTitle:true,
			autoClose:false,
			esc: new Function,
			confirm: new Function,
			init:new Function
		}, e);
		var _this = this;
		var obj = {
			$wrap : $("<div>",{"class":"pop-box"}).addClass(""),
			$close : $("<a>",{"class":"pop-close"}).html(this.option.close),
			$mask:$("<div>",{"class":"pop-mask"}),
			$blurbox:$(this.option.wrap)
		};
		var tmp = "<div class='pop_content "+this.option.wrapClass+" animate'>\
			<div class='pop-title'></div>\
			<div class = 'pop-info-w'>\
			<div class='pop-info'></div></div>\
			<div class='btns'></div>\
		</div>",
		escBtn = $("<a>",{"class":"btn_l","href":"javascript:;","text":"取消"}).on("click",function(e){
			obj.$close.trigger("click");
		});
		confBtn = $("<a>",{"class":"btn_r","href":"javascript:;","text":"确定"}).on("click",function(e){
			obj.$close.trigger("click");
			_this.option.confirm();
		});
		var $tmp = obj.$wrap.append(tmp);
		if(this.option.btnNum == 2){
			$tmp.find(".btns").append(escBtn).append(confBtn);
		}else if(this.option.btnNum == 1){
			$tmp.find(".btns").append(confBtn.addClass("btn100"));
		};
		if(this.option.btnNum == 0 && !this.option.showTitle){
			$tmp.find(".pop-info-w").addClass("h_b100");
		};
		$tmp.find(".pop-title").html(_this.option.title).append(obj.$close);
		$tmp.find(".pop-info").html(_this.option.content);
		$tmp.append(obj.$mask);
		$body.append(obj.$wrap);
		//自定义宽高处理
		if(typeof this.option.width === "number" && typeof this.option.height === "number"){
			$(".pop_content",obj.$wrap).css({
				"width":this.option.width,
				"height":this.option.height,
				"margin-left":-(this.option.width/2)+"px",
				"margin-top":-(this.option.height/2)+"px",
			});
		};
		if(!this.option.showTitle){
			$tmp.find(".pop-title").remove();
		};
		this.option.init.apply(obj);
		var _effect;
		switch(this.option.effect){ 
			default:
				_effect = "show"
				break;
			case "fadeIn":
				_effect = "fadeIn";
				break;
			case "slideUp":
				_effect = "slideUp";
				break;
		};

		this.effect[_effect].call(obj,this);
		$(document).on("keydown",function(e){
			if(e.keyCode == 27){
				obj.$close.trigger("click");
			}
		});
		if(this.option.maskClose){
			obj.$mask.on("click",function(e){
				obj.$close.trigger("click");
			});	
		}
		if(typeof this.option.autoClose === "number"){
			setTimeout(function(){
				obj.$close.trigger("click");
			},this.option.autoClose);
		}
		return this;
	};
	popWrap.prototype.effect = {                        
		fadeIn:function(){			//jquery
			var _this = this,arg = arguments[0];
			console.log(arguments[0].option.esc)
			this.$wrap.fadeIn(300);
			this.$wrap.find(".pop_content").fadeIn();
			this.$close.on("click",function(){
				_this.$wrap.find(".pop_content").fadeOut();
				_this.$wrap.fadeOut(300,function(){
					_this.$wrap.remove();
				});
				arg.option.esc();
			})
		},
		slideUp:function(){			//jquery
			var _this = this,arg = arguments[0];
			this.$wrap.find(".pop_content").slideDown(300);
			this.$wrap.find(".pop_mask").fadeIn(300);
			this.$close.on("click",function(){
				_this.$wrap.find(".pop_content").slideUp();
				_this.$wrap.find(".pop_mask").fadeOut();
				_this.$wrap.fadeOut(300,function(){
					_this.$wrap.remove();
				});
				arg.option.esc();
			});
		},
		show:function(){			//jquery
			var _this = this,arg = arguments[0];
			this.$wrap.show();
			this.$wrap.find(".pop_content").show();
			this.$close.on("click",function(){
				_this.$wrap.remove();
				arg.option.esc();
			});
		}
	};
	
	window.popF = popWrap; 
})();

