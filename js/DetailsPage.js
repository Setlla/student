	$(document).ready(function(){
		var id=getParams('id');
		var token=localStorage.getItem("token");		
		//定义一个函数来获取动态数据
		var datas = function(data){
				var content=
					'<div class="ware_pic">'
		        	+'<img id="imgid1" src="'+data.result.product.Image+'" />'
	        		+'</div>'
					
					$('.ware').append(content);
					
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
		        	+'<span class="BrowseTimes">'+data.result.product.BrowseTimes+'</span><span>人看过</span>'
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
		var productDetail=function(){
			$.ajax({			
				type:"post",
				url: _url+"/productDetail",
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
					Browse();
				}
			})
		}
		productDetail();
		
		//访问次数		
		var Browse=function(){
			var bts=$('.BrowseTimes').text();
			if(bts=="" || bts=="null" || bts==null){
				bts=0;
			}
			bts=parseInt(bts)+1;
			$.ajax({			
				type:"post",
				url: _url+"/productBrowseTimes",
				async:true,
				contentType:'application/JSON',
				data:JSON.stringify({
					id:id,
					BrowseTimes:bts
				}),
				success:function(data,status){
					console.log(data.result);
				}
			})
		}
		
		
		//加入购物车
		$('.addshopcar').click(function(){
			$.ajax({
				type:"post",
				url: _url+"/addShopCar",
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
		$(document).on("click",'.header_arr',function(){
			history.go(-1);
		})
		
		//轮播效果
//		var leng=$('.ware_pic img').length;
//		var index=0;		
//		function zidong(){
//			$('.ware_pic img').eq(index).show().siblings().hide();
//			$('.dot span').eq(index).addClass('dotscolor').siblings().removeClass('dotscolor');
//			index=(index+1)%leng;
//		}
//		$('.dot span').click(function(){
//				index=$('.dot span').index(this);
//				zidong();
//		})
//		var it=setInterval(zidong,1000);
//		$('.ware_pic img').hover(function(){
//			clearInterval(it);
//		},function(){
//			it=setInterval(zidong,1000);
//		})
		
		
		//添加足迹
		var BHistory=function(){
			$.ajax({
				type:"post",
				url:_url+"/addBrowseLog",
				async:true,
				contentType:'application/JSON',
				data:JSON.stringify({
					token:token,
					productId:id
				}),
				success:function(data,status){
					console.log(data.result);
				}
			});
		}
		BHistory();
		
		
		//添加和取消收藏
		var lovedata;
		var colls=function(){
			$.ajax({			
				type:"post",
				url:_url+"/getIsCollection",
				async:true,
				contentType:'application/JSON',
				data:JSON.stringify({
					productId: id, 
					token: token
				}),
				success:function(data,status){
					lovedata=data;
					iscollction();
				}
			})
		}
		colls();
		
		//判断收藏之后爱心为红，背景为蓝
		var iscollction=function(){
			if (lovedata.isCollection==false) {
				$(".love").removeClass("loves").parent().removeClass("foot_loves");
			} else{
				$(".love").addClass("loves").parent().addClass("foot_loves");
			}
		}
		
		//收藏点击事件的渲染函数
		var collection=function(){
			if ($(".love").hasClass("loves")) {
				$(".love").removeClass("loves").parent().removeClass("foot_loves");
				//背景为蓝色，就删除收藏
				$.ajax({
					type:"post",
					url:_url+"/delCollectionLog",
					async:true,
					contentType:'application/JSON',
					data:JSON.stringify({
						productId: id, 
						token: token
					}),
					success:function(data,status){
						console.log(data);			
					}
				})
			} else{
				$(".love").addClass("loves").parent().addClass("foot_loves");
				//背景为灰色，就添加收藏
				$.ajax({
						type:"post",
						url:_url+"/addCollectionLog",
						async:true,
						contentType:'application/JSON',
						data:JSON.stringify({
							productId: id, 
							token: token
						}),
						success:function(data,status){
							console.log(data);				
					    } 
				})
			}			
		}
		//收藏点击事件
		$(document).on("click",".foot_love",function(){
			collection();
		})
		
	})//ready的括号