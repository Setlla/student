	$(document).ready(function(){
		var id=getParams('id');
		var token=localStorage.getItem("token");		
		//定义一个函数来获取动态数据
		var datas = function(data){
				var content=
					'<div class="ware_pic">'
		        	+'<img id="imgid1" src="'+data.result.product.Image+'" />'
		        	+'<img class="ware_pic_none" src="img/author.jpg" />'
	        		+'<img class="ware_pic_none" src="img/ware/ware_24.png" />'
	        		+'<img class="ware_pic_none" src="img/author.jpg" />'
	        		+'<img class="ware_pic_none" src="img/ware/ware_24.png" />'
	        		+'</div>'
					
//					$('.ware').append(content);
					
				var content1=
					'<div class="details_name">'
		        	+'<span>'+data.result.product.Name+'</span>'
		        	+'</div>'
		        	+'<div class="details_price">'
		        	+'<span>￥</span><span>'+data.result.product.CurPrice+'</span>'
		        	+'<span>价格</span><span>'+data.result.product.OldPrice+'</span>'
		        	+'<span>'+data.result.product.Status+'</span>'
		        	+'</div>'
		        	+'<div class="details_adress">'
		        	+'<span>'+data.result.product.Carriage+'</span>'
		        	+'<span>5.00</span><span>元</span>'
		        	+'<span>23</span><span>人看过</span>'
		        	+'<span>'
			        +'<span>'+data.result.product.Destination+'</span><span>宝山</span>'
		        	+'</span>'
		        	+'</div>';
		        	
		        	$('.details').append(content1);
		        	
		        var content2=
			        '<div class="baby_introduce">'
	        		+'<span>'+data.result.product.Des+'</span>'
	        		+'</div>';
					
					$('.baby').append(content2);
		}
		//详情数据渲染
		var data_result;
		$.ajax({			
			type:"post",
			url:"http://39.108.219.59/productDetail",
			async:true,
			contentType:'application/JSON',
			data:JSON.stringify({
				id:id,
				token:token
			}),
			success:function(data,status){
				console.log(data.result.product.Name);
				datas(data);//插入动态数据
				data_result=data.result;
			}
		})		
		//加入购物车
		$('.addshopcar').click(function(){
			$.ajax({
				type:"post",
				url:"http://39.108.219.59/addShopCar",
				async:true,
				contentType:'application/JSON',
				data:JSON.stringify({
					id:id,
					token:token
				}),
				success:function(data,status){
					if (data.isSuccess==true) {
						location.href="shopping_trolley.html";
					} else{
						alert('添加失败');
					}
				}
			});
		})

		//立即购买
		$(document).on("click",".purchase button",function(){
			var warelist=[];
			warelist.push(data_result);
			localStorage.setItem("warelist",JSON.stringify(warelist));
			location.href="order_confirm.html";	
		})

		//箭头返回当铺页面
		$('.header_arr').click(function(){
			history.go(-1);
		})
		
		//轮播效果
		var leng=$('.ware_pic img').length;
		var index=0;		
		function zidong(){
			$('.ware_pic img').eq(index).show().siblings().hide();
			$('.dot span').eq(index).addClass('dotscolor').siblings().removeClass('dotscolor');
			index=(index+1)%leng;
		}
//		$(document).on("click",".dot span",function(){
		$('.dot span').click(function(){
				index=$('.dot span').index(this);
				zidong();
		})
		var it=setInterval(zidong,1000);
//		$(document).on("hover",".ware_pic img",function(){
		$('.ware_pic img').hover(function(){
			clearInterval(it);
		},function(){
			it=setInterval(zidong,1000);
		})

//		$('.ware_pic img').mousemove(function(){
//			clearInterval(it);
//		})
//		$('.ware_pic img').mouseout(function(){
//			it=setInterval(zidong,1000);
//		})
//		$('.dot span').click(function(){				
//			$(this).addClass('dotscolor').siblings().removeClass('dotscolor');
//			var index=$('.dot span').index(this);
//			$('.ware_pic img').eq(index).show().siblings().hide();
//		})
	})//ready的括号