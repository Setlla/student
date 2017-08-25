	//物品书籍切换
	$('.classify a').click(function(){
		$(this).addClass('article').siblings().removeClass('article');
		if($(this).text()=="书籍"){
			$('.list').css('display','none').siblings().css('display','block');
		}else{
			$('.list').css('display','block').siblings().css('display','none');
		}
	})
	
	$.post('http://192.168.0.146:3900/productList',function(s,status){
		//商品列表
		for (var i=0;i<s.result.length;i++) {
			var textCT=
				'<div class="ware" data-id="'+s.result[i].id+'">'
	       	    +'<div class="ware_pic">'
	        	+'<img src="'+s.result[i].Image+'" />'
	        	+'</div>'
	        	+'<div class="ware_explain">'
	        	+'<p>'+s.result[i].Name+'</p>'
	        	+'<p>'
	        	+'<span>'+s.result[i].Carriage+'</span>'
	        	+'<span>'+s.result[i].Destination+'</span>'
	        	+'</p>'
	        	+'<a href="#">'+s.result[i].Status+'</a>'
	        	+'<p>'
	        	+'<span>￥</span><span>'+s.result[i].CurPrice+'</span>'
	    		+'<span>价格：￥</span><span>'+s.result[i].OldPrice+'</span>'
	    		+'<span>●●●</span>'
	        	+'</p>'
	        	+'</div>'
	        	+'</div>';
	    	
	        //动态插入，判断是否为书籍
	        if (s.result[i].IsBook==0) {
	        	$('.list').append(textCT);
	        } else{
	        	$('.list1').append(textCT);
	        }
		}
		//点击物品按钮
		$('.alllist div div').click(function(){
			var id=$(this).data('id');
	        location.href="http://192.168.0.130:8020/login/DetailsPage.html?id=" + id;
	   })
	})

