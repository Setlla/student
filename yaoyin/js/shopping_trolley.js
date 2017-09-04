	$(document).ready(function(){
		var length=$('.list_icon_radio').length;
		var index=0;
		//全选按钮
		('.select_radio').click(function(){
	        if ($(this).hasClass("radio_1")) {
	        	$(this).removeClass('radio_1');
	        	$(this).children().removeClass('radio_icon_1');
	        	$(".list_icon_radio").removeClass('radio_icon_1');
	        	$(".list_radio").removeClass('radio_1');
	        	$('.result').text(0);
	        }else {
	        	$(this).addClass('radio_1');
	        	$(this).children().addClass('radio_icon_1');
	        	$(".list_icon_radio").addClass('radio_icon_1');
	        	$(".list_radio").addClass('radio_1');
	        	$('.result').text($('.list_icon_radio.radio_icon_1').length);
	        }
		})
		//单选按钮
		$('.list_radio').click(function(){
			//点击单个按钮的inline-block和none切换
	    	for (var i=0;i<length;i++) {
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
	    	//结算价格
	    	$('.result').text($('.list_icon_radio.radio_icon_1').length);
//	    	$('.price').text($('.new_price').text()*$('.new_number').text());
	   })

		
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
				    +'<span>￥</span>'+'<span>'+data.result[i].product.CurPrice+'</span>'
					+'<span>价格：￥</span>'+'<span>'+data.result[i].product.OldPrice+'</span>'
					+'<span>'+data.result[i].ProductNumber+'</span>'
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
		
	})//ready的括号