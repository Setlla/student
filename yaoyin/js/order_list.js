	$(document).ready(function(){
		//渲染函数
		var datas=function(data){
			
			for (var i=0;i<data.result.length;i++) {
				for (var j=0;j<data.result[i].products.length;j++) {
					var productNum=JSON.parse(data.result[i].productNum);
					var content=
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
			        	+'<li>'
			        	+'<span>共</span><span>'+productNum[j]+'</span><span>件商品</span>'
			        	+'<span>合计：￥</span><span>'+data.result[i].totalCost+'</span>'
			        	+'<span>(含运费 ￥0.00)</span>'
			        	+'</li>'
			        	+'<li>'
				        +'<button class="del_btn"><span>删除订单</span></button>'
				        +'<button class="judge_btn"><span>评价</span></button>   '
			        	+'</li>'
			      		+'</ul>';
			      		
			      	$('.warelist').append(content);
				}

			}
			
		}
		//ajax调用渲染函数
		$.ajax({
			type:"post",
			url:"http://39.108.219.59/getOrder",
			async:true,
			contentType:"application/JSON",
			data:JSON.stringify({
				token:localStorage.getItem("token")
			}),
			success:function(data,status){
				datas(data);
			}			
		});
		
		
		//箭头返回
		$(document).on("click",".header_arr",function(){
			history.go(-1);
		})
	})//ready
	