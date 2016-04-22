define(function(){
	require(["jquery"],function(){
		//申诉客户
		$(".ss-btn").on("click",function(){
			$(this).parents(".container").siblings(".ssorder").fadeIn();
		});
		//关闭pop
		$(".escBtn,.escClose,.grabsingBtn").on("click",function(){
			$(this).parents("#pop").fadeOut();
		})
		
		//取消订单
		$(".qx-btn").on("click",function(){
			$(this).parents(".container").siblings(".qxorder").fadeIn();
		});
		
		//抢单成功
		$(".fullbtn").on("click",function(){
			$(this).parents(".container").siblings("#pop").fadeIn();
		})
		function order(){}
		order.prototype = {
			constructor:constructor,
			"pullText":function(){
				var $pull = $(".ss-pull");
				var $sspull = $(".ss-pull-con");
				$(".ss-pull>li.txt").on("click",function(){
					var $this = $(this);
					$this.next("ul").fadeIn();
				});
				
				$(".ss-pull-con>li").on("click",function(){
					var $this = $(this);
					var txt = $this.text();
					$this.parent().siblings(".txt").find("span").text(txt);
					$this.parent().fadeOut();
					
				})
			}
		}
		new order().pullText();
		
	});
});