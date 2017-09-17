	$(document).ready(function(){
		var token=localStorage.getItem("token");
		
		//页面渲染调用函数
		var collections=function(data){
			for(var i=0;i<data.result.length;i++){
				var content=
					'<li class="warelist">'
	    	    	+'<div class="list_explain">'
	    	    	+'<img src="'+data.result[i].product[0].Image+'" />'
					+'<p>'+data.result[i].product[0].Name+'</p>'
					+'<p>￥<span class="price">'+data.result[i].product[0].CurPrice+'</span>.00</p>'
					+'<p>'
					+'<span class="gift">'+data.result[i].product[0].Status+'</span>'
					+'<span>补差链接</span>'
					+'<span>键盘膜</span>'
					+'<span class="arr"></span>'
					+'</p>'
					+'</div>'
					+'<div class="list_depreciate">'
					+'<span class="dep_1">看相似</span>'
					+'<span class="dep_1">降价通知</span>'
					+'<span class="img_title"></span>'
					+'</div>'
					+'</li>';
					
					$('.ware').append(content);
			}

		}
		
		//页面数据渲染
		$.ajax({			
			type:"post",
			url:"http://39.108.219.59/getCollectionLog",
			async:true,
			contentType:'application/JSON',
			data:JSON.stringify({
				token:token
			}),
			success:function(data,status){
				collections(data);//插入动态数据				
			}
		})

		
		//箭头返回上个历史页面
		$(document).on("click",".head_p",function(){
			history.go(-1);
		})
		//点击购物车图标跳转购物页面
		$(document).on("click",".img_title",function(){
			location.href="shopcar.html";
		})
		
	})//ready括号