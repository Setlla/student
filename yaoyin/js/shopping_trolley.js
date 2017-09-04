	$(document).ready(function(){
		//全选按钮
		$(document).on("click",".select_radio",function() {
	        if ($(this).hasClass("radio_1")) {
	        	$(this).removeClass('radio_1');
	        	$(this).children().removeClass('radio_icon_1');
	        	$(".list_icon_radio").removeClass('radio_icon_1');
	        	$(".list_radio").removeClass('radio_1');
	        	$('.result').text(0);
	        	$('.price').text(0);
	        }else {
	        	$(this).addClass('radio_1');
	        	$(this).children().addClass('radio_icon_1');
	        	$(".list_icon_radio").addClass('radio_icon_1');
	        	$(".list_radio").addClass('radio_1');
	        	num();
	        }
		})
		
		//单选按钮
		$(document).on("click",".list_radio",function() {			
	    	for (var i=0;i<$('.list_icon_radio').length;i++) {
	    		$(this).children().eq(i).toggleClass('radio_icon_1');
    			$(this).eq(i).toggleClass('radio_1');
	    	}   	
	    	//内圆长度等于外圆长度，全选按钮亮
		    if ($('.list_icon_radio.radio_icon_1').length==$('.list_radio').length) {
	    		$('.select_icon_radio').addClass('radio_icon_1');
	    		$(".select_radio").addClass('radio_1');
	    	} 
	    	else{
	    		$('.select_icon_radio').removeClass('radio_icon_1');
	    		$(".select_radio").removeClass('radio_1');
	    	}
	    	num();  	
		})
		//计算商品数量和价格函数		
		var num=function(){
			var s=0;
			var s1=0;
			//商品选中数量
			var new_number=$('.list_icon_radio.radio_icon_1').parents(".ware").find(".new_number");
			//商品选中价格
			var new_price=$('.list_icon_radio.radio_icon_1').parents(".ware").find(".new_price");
			for (var i=0;i<$('.list_icon_radio.radio_icon_1').length;i++) {	
        		s=s+parseInt(new_number.eq(i).text());
        		s1=s1+parseInt(new_number.eq(i).text()*new_price.eq(i).text());
        		$('.result').text(s);
        		$('.price').text(s1);
        	}
		}
		
		//渲染函数	
		var datas=function(data){
			for (var i=0;i<data.result.length;i++) {
				var content=
					'<li class="ware">'
					+'<span class="list_radio">'
		        	+'<span class="list_icon_radio"></span>'
		        	+'</span>'			
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
					+'</li>'
					
					$('.list').append(content);
			}
			
		}
			
		//购物车页面渲染
		var token=localStorage.getItem("token");
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
		});		
		
		
		
		//当铺页面跳转
		$('.hockshop').click(function(){
			location.href="hockshop.html";
		})
		
		//用户页面跳转
		$('.personal_message').click(function(){
			location.href="personal_center.html";
		})
	})//ready的括号