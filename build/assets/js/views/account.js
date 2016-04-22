define(['jquery'],function(){
	require(['pop'],function(){
		$("#accountBtn").on("click",function(){
			$(this).parents(".container").siblings("#pop").fadeIn();
		});
		$(".okbtn,.clearbtn").on("click",function(){
			$(this).parents("#pop").fadeOut();
		})
	})
	
})