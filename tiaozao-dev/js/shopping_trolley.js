	$(document).ready(function(){
		var token=localStorage.getItem("token");
		//全选按钮
		$(document).on("click",".select_radio",function() {
	        if ($(this).hasClass("radio_1")) {
	        	$(this).removeClass('radio_1');
	        	$(".list_radio").removeClass('radio_1');
	        	$(".btn_del1").removeClass("btn_del2");
	        }else {
	        	$(this).addClass('radio_1');
	        	$(".list_radio").addClass('radio_1');
	        	$(".btn_del1").addClass("btn_del2");
	        }
	        num();
	        judge();
		})
		
		//单选按钮
		$(document).on("click",".list_radio",function() {
			//判断单选按钮是否选中
			if ($(this).hasClass("radio_1")) {
				$(this).removeClass('radio_1');
			} 
			else{
				$(this).addClass('radio_1');
			}			
	    	//内圆长度等于外圆长度，全选按钮亮
		    if ($('.list_radio.radio_1').length==$('.list_radio').length) {
	    		$(".select_radio").addClass('radio_1');
	    	} 
	    	else{
	    		$(".select_radio").removeClass('radio_1');
	    	}
	    	num();
	    	judge();
		})
		
		//此函数用来判断结算按钮变暗还是变亮
		var judge=function(){
			//判断单选按钮选中状态个数大于0，就移除disabled
			if ($('.list_radio.radio_1').length>0) {
				$('.foot_fruit button').addClass('foot_button').removeAttr("disabled");
			}else{
				$('.foot_fruit button').removeClass('foot_button').attr("disabled","disabled");
			}
		}
		
		//计算商品数量和价格函数		
		var num=function(){
			var s=0;
			var s1=0;
			var list=$('.list_radio.radio_1');
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
					'<ul class="ware" data-dpid="'+data.result[i].product.id+'" data-id="'+data.result[i].id+'">'
					+'<li class="ware_radio">'
					+'<span class="list_radio"></span>'
					+'</li>'
					+'<li class="ware_pic">'
					+'<img src="'+data.result[i].product.Image+'" />'
					+'</li>'
					+'<li class="ware_explain">'
					+'<p>'+data.result[i].product.Name+'</p>'
				    +'<p>'
				    +'<span>'+data.result[i].product.Carriage+'</span>'
				    +'<span>'+data.result[i].product.Destination+'</span>'
				    +'</p>'
				    +'<a href="">'+data.result[i].product.Status+'</a>'
				    +'<p>'				   
				   	+'<span>￥</span><span class="new_price">'+data.result[i].product.CurPrice+'</span>'
					+'<span>价格：￥</span><span>'+data.result[i].product.OldPrice+'</span>'
					+'<span>X<span class="new_number">'+data.result[i].ProductNumber+'</span></span>'
				    +'</p>'
					+'</li>'
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

					$('.list').append(content);
			}
			
		}
		//把确认订单的信息存到data_result里面
		var data_result;	
		//购物车页面渲染
		var gouwu=function(){
			$.ajax({
				type:"post",
				url:_url+"/getShopCar",
				async:true,
				contentType:'application/JSON',
				data:JSON.stringify({
					token:token
				}),
				success:function(data,status){
					datas(data);//调用渲染函数		
					data_result=data.result;
				}
			})	
		}
		gouwu();
		
		//点击购物车商品查询详情订单
		$(document).on("click",".ware_explain",function(){
			var id=$(this).parents(".ware").data('dpid');
	        location.href="DetailsPage.html?id=" + id;
		})
		
		
		
		
		//编辑全部
		$(document).on("click",".head_left",function(){
			$(this).css("display","none").siblings('.head_left1').css("display","block");
			$('.ware_explain').css("display","none");
			$('.show').css("display","block");
			$(".foot_count").css("display","none");
			$(".foot_fruit").css("display","none");
			$(".alldelete").css("display","block");
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
			$.ajax({
				type:"post",
				url:_url+"/updateShopCar",
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
			var that=this;
			$.ajax({
				type:"post",
				url:_url+"/delShopCar",
				async:true,
				contentType:'application/JSON',
				data:JSON.stringify({
					token:localStorage.getItem("token"),
					id:id
				}),
				success:function(data,status){
					if(data.isSuccess==true){
						$(that).parents(".ware").remove();
					}					
				}
			})
		})
		
		//结算跳转			
		$(document).on("click",".foot_fruit button",function(){	
			//选中的放到新数组里
			var warelist=[];			
			for (var i=0;i<$('.list_radio.radio_1').length;i++) {
				var j=$('.list_radio.radio_1').eq(i).parents('.ware').index();
				warelist.push(data_result[j]);								
			}
			localStorage.setItem("warelist",JSON.stringify(warelist));
			location.href="order_confirm.html";	
		})
		
	})//ready的括号