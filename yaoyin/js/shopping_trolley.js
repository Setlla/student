	$(document).ready(function(){
		var token=localStorage.getItem("token");
		//全选按钮
		$(document).on("click",".select_radio",function() {
	        if ($(this).hasClass("radio_1")) {
	        	$(this).removeClass('radio_1').children().removeClass('radio_icon_1');
	        	$(".list_radio").removeClass('radio_1').children().removeClass('radio_icon_1');				
	        }else {
	        	$(this).addClass('radio_1').children().addClass('radio_icon_1');
	        	$(".list_radio").addClass('radio_1').children().addClass('radio_icon_1');
	        }
	        num();
		})
		
		//单选按钮
		$(document).on("click",".list_radio",function() {			
	    	for (var i=0;i<$('.list_icon_radio').length;i++) {
	    		$(this).children().eq(i).toggleClass('radio_icon_1');
    			$(this).eq(i).toggleClass('radio_1');
	    	}   	
	    	//内圆长度等于外圆长度，全选按钮亮
		    if ($('.list_icon_radio.radio_icon_1').length==$('.list_radio').length) {
	    		$(".select_radio").addClass('radio_1').children().addClass('radio_icon_1');
	    	} 
	    	else{
	    		$(".select_radio").removeClass('radio_1').children().removeClass('radio_icon_1');
	    	}
	    	num();  	
		})
		//计算商品数量和价格函数		
		var num=function(){
			var s=0;
			var s1=0;
			var list=$('.list_icon_radio.radio_icon_1');
			//商品选中数量
			var new_number=list.parents(".ware").find(".new_number");
			//商品选中价格
			var new_price=list.parents(".ware").find(".new_price");
			for (var i=0;i<list.length;i++) {	
        		s=s+parseInt(new_number.eq(i).text());
        		s1=s1+parseInt(new_number.eq(i).text()*new_price.eq(i).text());
        	}
			    $('.result').text(s);
        		$('.price').text(s1);
		}
		
		//渲染函数	
		var datas=function(data){
			for (var i=0;i<data.result.length;i++) {
				var content=
					'<div class="ware" data-id="'+data.result[i].id+'">'
					+'<div class="ware_radio">'
					+'<span class="list_radio">'
		        	+'<span class="list_icon_radio"></span>'
		        	+'</span>'
		        	+'</div>'
					+'<div class="ware_pic">'
				    +'<img src="'+data.result[i].product.Image+'" />'
				    +'</div>'
				    +'<div class="ware_explain">'
				    +'<p>'+data.result[i].product.Name+'</p>'
				    +'<p>'
				    +'<span>'+data.result[i].product.Carriage+'</span>'
				    +'<span>'+data.result[i].product.Destination+'</span>'
				    +'</p>'
				    +'<a href="#">'+data.result[i].product.Status+'</a>'
				    +'<p>'				   
				   	+'<span>￥</span><span class="new_price">'+data.result[i].product.CurPrice+'</span>'
					+'<span>价格：￥</span><span>'+data.result[i].product.OldPrice+'</span>'
					+'<span>X<span class="new_number">'+data.result[i].ProductNumber+'</span></span>'
				    +'</p>'
				    +'</div>'
				    +'<ul class="show">'
			    	+'<li class="ware_delete">'
			    	+'<div class="modify">'
			    	+'<span class="jian">-</span>'
			    	+'<span class="amount">'+data.result[i].ProductNumber+'</span>'
			    	+'<span class="jia">+</span>'
			    	+'</div>'
			    	+'<div class="delete">'
			    	+'<button class="btn_del">删除</button>'
			    	+'</div>'
			    	+'</li>'
			    	+'</ul>'
					+'</li>'
					
					$('.list').append(content);
			}
			
		}
			
		//购物车页面渲染
		var gouwu=function(){
			$.ajax({
				type:"post",
				url:"http://39.108.219.59/getShopCar ",
				async:true,
				contentType:'application/JSON',
				data:JSON.stringify({
					token:token
				}),
				success:function(data,status){
					datas(data);//调用渲染函数
				}
			})	
		}
		gouwu();
		
		//编辑全部
		$(document).on("click",".head_left",function(){
			$(this).css("display","none").siblings('.head_left1').css("display","block");
			$('.ware_explain').css("display","none");
			$('.show').css("display","block");
		})
		
		//完成按钮
		$(document).on("click",".head_left1",function(){		
			var products =[];
			for (var i=0;i<$(".ware").length;i++) {
				var t1={};
				t1.id=$(".ware").eq(i).data('id'),
				t1.ProductNumber=$(".ware").eq(i).find('.amount').text();
				products.push(t1);
			}
//			"products":[{"id":"29","ProductNumber":"4"},{"id":"28","ProductNumber":"4"}]

			$.ajax({
				type:"post",
				url:"http://39.108.219.59/updateShopCar",
				async:true,
				contentType:'application/JSON',
				data:JSON.stringify({
					token:token,
					products:products
				}),
				success:function(data,status){
					if(data.isSuccess==true){
						location.reload();
					}
				}
			})
			
		})
		
		//加商品数量
		$(document).on("click",".jia",function(){
			var t=$(this).parents(".ware").find('.amount');
			$(this).parents(".ware").find('.amount').text(parseInt(t.text())+1);
		})
		//减商品数量
		$(document).on("click",".jian",function(){
			var t=$(this).parents(".ware").find('.amount');
			if (parseInt(t.text())>1) {			
				$(this).parents(".ware").find('.amount').text(parseInt(t.text())-1);
			} else{
				alert('商品数量不能小于1件！');
			}

		})
		
		
		//删除数据渲染
		$(document).on("click",".btn_del",function(){
			var id =$(this).parents(".ware").data('id');
			$.ajax({
				type:"post",
				url:"http://39.108.219.59/delShopCar",
				async:true,
				contentType:'application/JSON',
				data:JSON.stringify({
					token:token,
					id:id
				}),
				success:function(data,status){
					if(data.isSuccess==true){
						$(this).parents(".ware").remove();
						location.href="shopping_trolley.html";
					}					
				}
			})
		})

	
		//当铺页面跳转
		$('.hockshop').click(function(){
			location.href="hockshop.html";
		})
		
		//用户页面跳转
		$('.personal_message').click(function(){
			location.href="personal_center.html";
		})
	})//ready的括号