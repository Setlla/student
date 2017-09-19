	$(document).ready(function(){
		//获取用户个人中心里面的各种信息，比如地址电话等
		var users=function(){
			var user=JSON.parse(localStorage.getItem("user"));
			//解决控制台这个错误--"Uncaught TypeError: Cannot read property '0' of undefined"
//			if(!user){
//				user={};
//			}
			$('.name').text(user.name);
			$('.telephone1').text(user.phone);
			$('.address').text(user.address);
		}
		users();
		
		//URL解析函数
		var getParams =	function (name) {
			//URL地址&后面的解析
		 	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
            var r = window.location.search.substr(1).match(reg);  //匹配目标参数
            if (r != null) return unescape(r[2]); return null; //返回参数值
		 }
		
		var orderId=getParams('id');
		var token=localStorage.getItem("token");
		
		
		//渲染函数
		var datas=function(data){
			for (var i=0;i<data.result.products.length;i++) {
				var productNum=JSON.parse(data.result.productNum);
				var content=
					'<ul class="recharge">'
		        	+'<li>'
		        	+'<img src="'+data.result.products[i].Image+'"/>'
		        	+'</li>'
		        	+'<li>'
		        	+'<span>'+data.result.products[i].Name+'</span>'
		        	+'</li>'
		        	+'<li>'
		        	+'<p><span>￥</span><span class="new_price">'+data.result.products[i].CurPrice+'</span></p>'
		        	+'<p><span>￥</span><span class="old_price">'+data.result.products[i].OldPrice+'</span></p>'
		        	+'<p>X<span class="num">'+productNum[i]+'</span></p>'
		        	+'</li>'
		      		+'</ul>';
		      		
		      	$('.warelist').append(content);
			}
			
			$('.price').text(data.result.totalCost);
			
		}
		
		
		
		//ajax调用渲染函数
		$.ajax({
			type:"post",
			url:"http://39.108.219.59/getOrderDetail",
			async:true,
			contentType:"application/JSON",
			data:JSON.stringify({
				token:token,
				orderId:orderId
			}),
			success:function(data,status){
				datas(data);
			}			
		});
		
		
		//箭头返回
		$(document).on("click",".header_arr",function(){
			history.go(-1);
		})
	})//ready的括号