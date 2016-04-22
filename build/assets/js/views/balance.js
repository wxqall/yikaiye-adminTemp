define(function(){
	function balance(){
		this.pageIndex = 111;
		this.pageSize = 20;
	};
	balance.prototype = {
		constructor:constructor,
		"pullText":function(){
			var $allFinancialBtn = $("#all-financialBtn");
			$("li",$allFinancialBtn).on("click",function(){
				var t =  $(this),
					txt = t.text();
				t.addClass("active").siblings().removeClass("active");	
				$(".txt",$allFinancialBtn).text(txt);
			});
			return this;
		}
		
	}
	console.debug(balance.constructor)
	new balance().pullText();
})