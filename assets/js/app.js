require.config({
	baseUrl:"/yikaiyefuwu/assets/js/",
	paths:{
		"jquery":"libs/jquery-1.11.3",
		"echarts":"libs/echarts.min"
	}
});
function pageInt(){}
pageInt.prototype = {
	//首页
	"home":function(){
		require(["views/index"],function(){});	
	},
	//订单管理 -- 账户中心
	"frozenaccount":function(){		
		require(["views/account"],function(){});
	},
	//财务管理
	"balance":function(){
		require(["views/balance"],function(){});
	},
	//订单
	"order":function(){
		require(["views/order"],function(){});
	}
}
require(["jquery","common"],function(){
	;(function(w,j){
		var page = j("body").data("page");
		if(page != undefined){
			new pageInt()[page]();
		}
	})(window,jQuery)
})
