	$(document).ready(function(){
		//获取用户个人中心里面的各种信息，比如地址电话等
		var users=function(){
			var user=JSON.parse(localStorage.getItem("user"));
			$('.name').text(user.name);
			$('.telephone').text(user.phone);
			$('.address').text(user.address);
		}
		users();
		
		//获取购物车的商品信息
		var ware=JSON.parse(localStorage.getItem("ware1"));
		var warelist=function(){
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
			    
			    s=s+parseInt($('.warelist').find('.num').eq(i).text());//数量
			    s1=s1+parseInt($('.warelist').find('.price').eq(i).text()*$('.warelist').find('.num').eq(i).text());//价格
			    
			}
			$('.sum').text(s);
			$('.result').text(s1);
		}
		warelist();
		
		//是否开具发票
		$(document).on('click','.js_btn',function(){
			if ($(this).children().hasClass('btn_1')) {
				$(this).css("background","#FFFFFF").children().removeClass('btn_1');
			} else{
				$(this).css("background","#33CCFF").children().addClass('btn_1');
			}
		})
		
		//箭头跳转
		$(document).on("click",".header_arr",function(){
			history.go(-1);
		})
		
	})//ready的括号