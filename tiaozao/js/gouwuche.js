	//购物车AJAX数据	
	$.ajax({
		type:"post",
		url:"http://39.108.219.59/getShopCar",
		async:true,
		contentType:"application/json",
		data:JSON.stringify({token: localStorage.getItem("token"),}),
		success:function(result){
			setproduct(result.result);
//			setEdit(result.result);
		}
	});

	//物品 个件点击事件
	$(document).on("click",".content_one .round ",function() {
		if($(this).hasClass("cur")){			
			$(this).removeClass("cur");
			$(".information_small .round").removeClass("cur");			
		}else{
			$(this).addClass("cur");
		}	
		if ($(".content .round").length==$(".content .cur").length) {
			$(".information_small .round").addClass("cur");
		}
//		else{
//			$(".information_small .round").removeClass("cur");
//		}
		setsum();
	})
	
	
	// 底部全选点击事件
	$(document).on("click",".information_small .round",function(){
		
		if($(this).hasClass("cur")){
			$(this).removeClass("cur");
			$(".content_one .round").removeClass("cur");
		}else{
			$(this).addClass("cur");
			$(".content_one .round").addClass("cur");
		}
		setsum();

	})
	
		// 底部 
//	  $(document).on("click",".tips li",function(){
//	  	 $(this).children("span").css("color","#33CCFF");
//		 $(this).siblings().children("span").css("color","black");
//	     $(this).children("i").addClass("cur");
//		 $(this).siblings().children("i").removeClass("cur");  		  	
//	  })	
	  //结算 和 件数
	function setsum(){
		var num=0;
	 	var sum=0;
	 	var content=$(".content_one .cur");
	 	for (var i=0;i<content.length;i++) {
	 		 var newPrice=parseInt(content.eq(i).parent().find(".newPrice").html());
	 		 var number=parseInt(content.eq(i).parent().find(".number").html());
	 		 sum=sum+newPrice*number;
	 		 num=num+number;
	 	}
	 	$(".sum").html("￥"+sum);
	 	$(".buy").html("结算("+num+")");
	}
	

	// 购物的数据渲染
	function  setproduct(result) {
		for (var i=0;i<result.length;i++) {		
		var cont='<div class="content_one"><div class="round">'
//				+'<a class="blue_round" href="#" style="display: none;"></a>'
				+'</div>'			
				+'<img src='+result[i].product.Image+'>'
				+'<div class="right">'
				+'<p>'+result[i].product.Name+'</p>'
				+'<span>'+result[i].product.Carriage+'</span>'
				+'<span>'+result[i].product.Destination+'</span>'
				+'<span class="nine">9成新</span>'
				+'<strong>￥<em class="newPrice">'+result[i].product.CurPrice+'</em></strong>'
				+'<i class="OldPrice">价格：￥'+result[i].product.OldPrice+'</i>'
				+'<a>X<i class="number">'+result[i].ProductNumber+'</i></a>'					
				+'</div></div>'		
				
		var tt='<div class="content_four" data-id = '+result[i].id+'>'
				+'<div class="round">'		
				+'<a href="#" style="display: none"></a>'
				+'</div>'		
				+'<img src='+result[i].product.Image+' style="width: 1.7rem; height: 2rem;"/>'
				+'<ul class="list">'
				+'<li class="reduce">-</li>'
				+'<li class="num">'+result[i].ProductNumber+'</li>'
				+'<li class="Plus">+</li>'
				+'</ul>'
				+'<span><a class="delete">删除</a></span>'
				+'</div>'	
		$(".content").append(cont);
		$(".content_three").append(tt);	
		}
	}
	//完成。编辑全部的切换
	$(document).on("click",".qh_a",function() {
		$(this).hide().siblings().show();
		$(".content").hide();
		$(".content_three").show();
	})
//		if ($(".qh_a").css("display")=="none") {
//			$(".qh_a").show().siblings().hide();
//			$(".content").show();
//			$(".content_three").hide();
//		}else {
//			$(".qh_a").hide().siblings().show();
//			$(".content").hide();
//			$(".content_three").show();
//		}
	
	// 完成AJAX数据
	$(document).on("click",".qh_b",function() {
		var products = [];
		for (var i=0;i<$(".content_four").length;i++) {
			var id = $(".content_four").eq(i).data("id");
			var ProductNumber=parseInt($(".content_four").eq(i).find(".num").html());
			var product = {
				id:id,
				ProductNumber: ProductNumber
			};
			products.push(product);				
		}		
		$.ajax({
			type:"post",
			url:"http://39.108.219.59/updateShopCar ",
			async:true,
			contentType:"application/JSON",
			data:JSON.stringify({
				products:products,
				token: localStorage.getItem("token"),				
			}),
			success:function(data) {
				if(data.isSuccess==true){
					location.reload();
				}
			}
		});
	})
	
	
	
	//	删除AJAX数据
	$(document).on("click",".delete",function() {	
		var id = $(this).parents(".content_four").data("id");
		$.ajax({
			type:"post",
			url:"http://39.108.219.59/delShopCar ",
			async:true,
			contentType:"application/JSON",
			data:JSON.stringify({
				id:id,
				token: localStorage.getItem("token"),					
			}),
			success:function(data){
				if(data.isSuccess==true){
					location.href="gouwuche.html";
					alert("亲爱的已经删除")
				}
			}
		})
	})
	//+ 的点击事件
	$(document).on("click",".Plus",function() {
		var sm=parseInt($(this).parents(".list").find(".num").html())+1 ;
		$(this).parents(".list").find(".num").html(sm);
	})
	//- 的点击事件
	$(document).on("click",".reduce",function() {
		var sl=0;
		var rm=parseInt($(this).parents(".list").find(".num").html());
		if (rm>0) {
			sl=rm-1;
			$(this).parents(".list").find(".num").html(sl);
		} else{
			alert("亲。已经没有物品啦~")
		}
	})			

				//底部跳转
	$(document)	.on("click",".goods",function () {
//		location.href=""
	})
	$(document)	.on("click",".Pawnshop",function () {
		location.href="Pawnshop.html"
	})
	$(document)	.on("click",".personal",function () {
		location.href="geren.html"
	})	