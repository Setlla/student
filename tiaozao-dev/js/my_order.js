$(document).ready(function(){
	
	//箭头返回
	$(document).on("click",".header_arr",function(){
		history.go(-1);
	})
	
	//渲染
	var xuanran=function(data){
			for (var i=0;i<data.result.length;i++) {
				var content='<div class="monopoly">'
							+'<img src="img/icon/icon_69.png"/>'
							+'<span>'+data.result[0].products[0].ShopName+'</span>'
							+'</div>'
					
					$(".order_content").append(content);
					
				for (var j=0;j<data.result[i].products.length;j++) {
					var productNum=JSON.parse(data.result[i].productNum);
					var content1=
						'<ul class="recharge">'
			        	+'<li>'
			        	+'<img src="'+data.result[i].products[j].Image+'"/>'
			        	+'</li>'
			        	+'<li>'
			        	+'<span>'+data.result[i].products[j].Name+'</span>'
			        	+'</li>'
			        	+'<li>'
			        	+'<p><span>￥</span><span class="new_price">'+data.result[i].products[j].CurPrice+'</span></p>'
			        	+'<p><span>￥</span><span class="old_price">'+data.result[i].products[j].OldPrice+'</span></p>'
			        	+'<p>X<span class="num">'+productNum[j]+'</span></p>'
			        	+'</li>'
			      		+'</ul>';
			      		
			      	$('.order_content').append(content1);
				}
				var content2='<div class="allprice">'
							+'<span>共</span><span>'+data.result[i].totalNum+'</span><span>件商品</span>'
			        		+'<span>合计：￥</span><span>'+data.result[i].totalCost+'</span>'
	        				+'</div>'
						$('.order_content').append(content2);
			}	
	}
	//渲染函数
	var datas;
	var myorder=function(){
		$.ajax({
			type:"post",
			url:_url+"/getOrder",
			async:true,
			contentType:"application/JSON",
			data:JSON.stringify({
				token:localStorage.getItem("token")
			}),
			success:function(data,status){
				xuanran(data);
				datas=data;
				nones();
			}
		});
	}
	myorder();
	
	//隐藏和显示
	var nones=function(){
		if(datas.result.length>0){
			$(".no_order").css("display","none");
		}else{
			$(".no_order").css("display","block");
		}
	}
	
	
	//待付款点击事件
	$(document).on("click",".order_header li",function(){
		for(var i=0;i<$(".order_header li").length;i++){
			$(this).eq(i).addClass('ordernumber').siblings().removeClass('ordernumber');
		}
	})
	
	//个人中心点击哪个待XX跳转过来对应哪个待XX功能
	var wait=function(){
		var id=getParams("id");
		for(var i=0;i<$(".order_header li").length;i++){
			if (id==i) {
				$(".order_header li").eq(i).addClass('ordernumber').siblings().removeClass('ordernumber');
			}
		}
	}
	wait();
})