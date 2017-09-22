		users();		
		//获取购物车的商品信息
		var productNum =[];
		var productId=[];
		var ware=JSON.parse(localStorage.getItem("warelist"));
		var warelists=function(){
			var s=0;
			var s1=0;
			for (var i=0;i<ware.length;i++) {
				var content='<ul class="recharge">'
			        +'<li>'
			        +'<img src="'+ware[i].product.Image+'"/>'
			        +'</li>'
			        +'<li>'
			        +'<span>'+ware[i].product.Name+'</span>'
			        +'<div class="serven"><a href="#">7天退换</a></div>'
			        +'</li>'
			        +'<li>'
			        +'<p><span>￥</span><span class="price">'+ware[i].product.CurPrice+'</span></p>'
			        +'<p>X<span class="num">'+ware[i].ProductNumber+'</span></p>' 
			        +'</li>'
			        +'</ul>'
			        
			    $('.warelist').append(content);
			    
			    s=s+parseInt(ware[i].ProductNumber);//数量
			    s1=s1+parseInt(ware[i].product.CurPrice*ware[i].ProductNumber);//价格
			    productNum.push(ware[i].ProductNumber);
			    productId.push(ware[i].product.id);
			}
			$('.sum').text(s);
			$('.result').text(s1);
		}
		warelists();
		
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
		
		//提交订单函数
		var confirm=function(){
			var totalCost=$('.result_1').text();
			var totalNum=$('.sum_1').text();
			var message=$('.message').val();		
			$.ajax({
				type:"post",
				url:"http://39.108.219.59/addOrder",
				async:true,
				contentType:"application/JSON",
				data:JSON.stringify({
					token:localStorage.getItem("token"),
					totalCost:totalCost,
					totalNum:totalNum,
					message:message,
					isInvoice:flag,
					productId:"["+productId+"]",
					productNum:"["+productNum+"]"
				}),
				success:function(data,status){
					console.log(data+"获取数据测试");
					if(data.isSuccess==true){
						location.href="order_list.html";
					}
				}
			});
		}
		
		//提交订单事件
		$(document).on("click",".foot_btn",function(){
			confirm();
		})
		
		
		//箭头跳转
		$(document).on("click",".header_arr",function(){
			history.go(-1);
		})
		