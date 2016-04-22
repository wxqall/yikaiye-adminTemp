define(["jquery"],function(){
	//文档高度小于窗口高度时footer靠底部
	var base = {
		"win":function(){
			var $footer = $(".footer");
			var W_h = $(window).height();
			var D_h = $("body").height();
			var Footer_h = $footer.height();
						

			if(D_h <= W_h){
				$footer.css({"position":"fixed","left":0,"bottom":0});
			}else{
				$footer.css({"position":"relative"});
				
			}
		},
		"noticePull":function(){
			$(".h-notice").on("mouseover",function(){
				$(this).find(".noticePull").stop().show();
			});
			$(".h-notice").on("mouseleave",function(){
				$(this).find(".noticePull").stop().hide();
			});
		},
		"tabs":function(){
			$("#tabs ul").on("click","li",function(){
				var index = $(this).index();
				$(this).addClass("active").siblings().removeClass("active");
				$(this).parents("#tabs").siblings(".rechargecon").find("div.content").eq(index).fadeIn().siblings().hide();
			});
		}
	}
	base["win"]();
	base["noticePull"]();
	base["tabs"]();
	
	//header下拉
	
})