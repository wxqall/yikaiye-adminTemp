	define(["jquery","echarts"],function(j,echarts){
		$(".nextBtn").on("click",function(){
			$(this).parents(".phonepop").hide();
			$(this).parents(".phonepop").next(".phonepop").fadeIn();
		});
		$(".okBtn,.popclose").on("click",function(){
			$(this).parents("#pop").fadeOut();
		});
		var $dataDetail = $("#data-detail");
		$(".tabs li",$dataDetail).on("click",function(){
			var i = $(this);
			i.addClass("active").siblings().removeClass("active");
			$(".detaillistWrap",$dataDetail).animate({"margin-left":-i.index()*100+"%"},500);
		});
		//echarts
		// 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));
        // 指定图表的配置项和数据
        var option = {
			    title : {
			    		orient: 'vertical',
			        left: 'left',
			        text: '',
			        "font-size":"12px",
			        subtext: '单位：单',
			        x:'center'
			    },
			    tooltip : {
			        trigger: 'item',
			        formatter: "{a} <br/>{b} : {c} ({d}%)"
			    },
			    legend: {
			        orient: 'vertical',
			        left: 'left',
//			        data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
			    },
			    series : [
			        {
			            name: '访问来源',
			            type: 'pie',
			            radius : '75%',
			            center: ['47%', '50%'],
			            data:[
			                {value:335, name:'代表处注册'},
			                {value:310, name:'财务代理'},
			                {value:234, name:'商标注册'},
			                {value:135, name:'人事社保'},
			                {value:1548, name:'搜索引擎'}
			            ],
			            itemStyle: {
			                emphasis: {
			                    shadowBlur: 10,
			                    shadowOffsetX: 0,
			                    shadowColor: 'rgba(0, 0, 0, 0.5)'
			                }
			            }
			        }
			    ]
			};

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
	})
