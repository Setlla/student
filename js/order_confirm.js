		users();		
		//获取购物车的商品信
		var ware=JSON.parse(localStorage.getItem("warelist"));				
		var productId=[];
		var productNum=[];
		var xuanran=function(){
			var num1=0;
			var num2=0;
			var content1='<img src="img/icon/icon_69.png"/>'
        				+'<span>'+ware[0].product.ShopName+'</span>'
        				
        				$(".monopoly").append(content1);
			
			for (var i=0;i<ware.length;i++) {
				var content=
					'<ul class="recharge">'
		        	+'<li>'
		        	+'<img src="'+ware[i].product.Image+'"/>'
		        	+'</li>'
		        	+'<li>'
		        	+'<span>'+ware[i].product.Name+'</span>'
		        	+'<div class="serven"><a href="">7天退换</a></div>'	
		        	+'</li>'
		        	+'<li>'
		        	+'<p><span>￥</span><span class="price">'+ware[i].product.CurPrice+'</span></p>'
		        	+'<p>X<span class="num">'+ware[i].ProductNumber+'</span></p>' 
		        	+'</li>'
		        	+'</ul>'
	        	
	        	$(".warelist").append(content);
	        	num1=num1+ware[i].ProductNumber;
	        	num2=num2+(ware[i].ProductNumber*ware[i].product.CurPrice);
	        	productId.push(ware[i].product.id);
	        	productNum.push(ware[i].ProductNumber);
			}			
			$('.sum').text(num1);			
			$('.result').text(num2);
		}
		xuanran();
		//提交订单
		$(document).on("click",".foot_btn",function(){
			cofirm();
		})
		
		var cofirm=function(){
			var totalNum=$('.sum_1').text();
			var totalCost=$('.result_1').text();
			var message=$('.message').val();
			$.ajax({
				type:"post",
				url:_url+"/addOrder",
				async:true,
				contentType:"application/JSON",
				data:JSON.stringify({
					token:localStorage.getItem("token"),
					totalCost:totalCost,
					totalNum:totalNum,
					isInvoice:flag,
					message:message,
					productId:"["+productId+"]",
					productNum:"["+productNum+"]"
				}),
				success:function(data,status){
					if (data.isSuccess==true) {
						location.href="order_list.html";
					}
				}				
			})
		}
		
		//是否开具发票
		var flag=0;
		$(document).on('click','.js_btn',function(){
			if ($(this).children().hasClass('btn_1')) {
				$(this).css("background","#FFFFFF").children().removeClass('btn_1');
				flag=0;
			} else{
				$(this).css("background","#33CCFF").children().addClass('btn_1');
				flag=1;
			}
		})
		
		//箭头跳转
		$(document).on("click",".header_arr",function(){
			history.go(-1);
		})
		