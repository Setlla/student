	$(document).ready(function(){
		var getParams =	function (name) {
		 	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
            var r = window.location.search.substr(1).match(reg);  //匹配目标参数
            if (r != null) return unescape(r[2]); return null; //返回参数值
		 }
		
		var id=getParams('id');
		
		$.ajax({
			
			type:"post",
			url:"http://192.168.0.146:3900/productDetail",
			async:true,
			contentType:'application/JSON',
			data:JSON.stringify({
				id:id
			}),
			success:function(data,status){
				console.log(data.result.product.Name);
				var content=
				'<img class="ware_pic" src="'+data.result.product.Image+'" />';
				
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
		});
		
		$('.header_arr').click(function(){
			location.href="/login/hockshop.html";
		})
	})