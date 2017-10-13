	//物品书籍切换
	$('.classify a').click(function(){
		$(this).addClass('article').siblings().removeClass('article');
		if($(this).text()=="书籍"){
			$('.list').css('display','none').siblings().css('display','block');
		}else{
			$('.list').css('display','block').siblings().css('display','none');
		}
	})
	
	var list=new Vue({
		el:".list",
		data:{
			warelist:[
				{
					Image:'./img/ware/ware_24.png',
					Name:'捷安特24速变速一体轮可折as捷安特24速变速一体轮可折捷安特24',
					CurPrice:123,
					OldPrice:231
				},
				{
					Image:'./img/ware/ware_28.png',
					Name:'捷安特24速变速一体轮可折as捷安特24速变速一体轮可折捷安特24',
					CurPrice:123,
					OldPrice:231
				},
				{
					Image:'./img/ware/ware_27.png',
					Name:'捷安特24速变速一体轮可折as捷安特24速变速一体轮可折捷安特24',
					CurPrice:123,
					OldPrice:231
				}
			]
		}
	})
	
//	$.post("http://39.108.219.59:8080/productList",function(s,status){
//		//商品列表
//		for (var i=0;i<s.result.length;i++) {
//			var textCT=	    	
//	    		'<ul class="ware" data-id="'+s.result[i].id+'">'
//				+'<li class="ware_pic">'
//				+'<img src="'+s.result[i].Image+'" />'
//				+'</li>'
//				+'<li class="ware_explain">'
//				+'<p>'+s.result[i].Name+'</p>'
//		    	+'<p>'
//		    	+'<span>包邮</span>'
//		    	+'<span>上海</span>'
//		    	+'</p>'
//		    	+'<a href="">7成新</a>'
//		    	+'<p>'
//		        +'<span>￥</span><span>'+s.result[i].CurPrice+'</span>'
//		    	+'<span>价格：￥</span><span>'+s.result[i].OldPrice+'</span>'
//		    	+'</p>'
//				+'</li>'
//				+'</ul>';
//
//	        //动态插入，判断是否为书籍
//	        if (s.result[i].IsBook==0) {
//	        	$('.list').append(textCT);
//	        } else{
//	        	$('.list1').append(textCT);
//	        }
//		}
//		//点击物品按钮
//		$('.alllist div ul').click(function(){
//			var id=$(this).data('id');
//	        location.href="DetailsPage.html?id=" + id;
//	   })
//		
//	})

