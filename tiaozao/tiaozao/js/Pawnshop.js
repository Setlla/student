
 
var datas ={productName:""};
$.ajax({
	type:"post",
	url:_url+"productList",
	contentType:"application/json",
	data:JSON.stringify({data:datas}),
	success:function(result){
		console.log(result);
//		setProduct(result.result);
	},
})
	
$(document).on("click",".content_noe",function(e){
	$(this).addClass("cur").siblings().removeClass("cur");
})


$(document).on("click",".qh p",function	()	{
	$(this).addClass("cur").siblings().removeClass("cur");  //点击当前添加标签CUR。所有兄弟元素删除标签CUR。
	$(".content").eq($(this).index()).show();		//选择点击对应的内容显示
	$(".content").eq($(this).index()).siblings(".content").hide();	//拿到当前内容块，另外内容块隐藏。
//		$(".content").toggle();
//		if (this.className=="left_click") {
//			$(".right_click").css("background","#33CCFF");
//			$(".left_click").css("background","#D6F5FF");
//			$(".content_three").hide();
//			$(".content_two").show();
//		} else{
//			$(".right_click").css("background","#D6F5FF");
//			$(".left_click").css("background","#33CCFF");
//			$(".content_three").show();
//			$(".content_two").hide();			
//		}
})

$(document).on("click",".tips li",function(){
  	 $(this).children("span").css("color","#33CCFF");
	 $(this).siblings().children("span").css("color","black");
     $(this).children("i").addClass("cur");
	 $(this).siblings().children("i").removeClass("cur");  		  	
 })


	//内容拼接。
//function setProduct(result){			
//	for(var i=0;i<result.length;i++){
//		var	textContent='<div class="content_noe" data-id="'+result[i].id+'">'
//				+'<img src='+result[i].Image+'/>'
//				+'<div class="right_one">'
//				+'<p>'+result[i].Des+'</p>'
//				+'<span>'+result[i].Carriage+'</span>'
//				+'<span>'+result[i].Destination+'</span>'
//				+'<span>'+result[i].Status+'</span>'
//				+'<span><i>￥</i>'+result[i].CurPrice+'</span>'
//				+'<span>￥'+result[i].OldPrice+'</span>'
//				+'<div class="round">'
//					+'<a></a>'
//					+'<a></a>'
//					+'<a></a>'
//				+'</div>'		
////			var node=document.createElement("div");  //创造一个元素DIV 
//////			node.setAttribute("class","textContent");  //设置一个属性textContent
////			node.innerHTML=textContent;			//选取HTML 的内容 
////////			textContent.innerHTML=node;
//			
//			
//			//判断 。111
//		if(result[i].IsBook==0){
//			$(".content_two").append(textContent);
//		}else{
//			$(".content_three").append(textContent);
//		}
//	}
//}
	
var list=new Vue({   //axios是请求后台资源的模块，成功则返回在.then函数中，失败则是在.catch函数中。
	el:".content",
	data:{
		items:[],
		obj: {}
	},
	created: function() {  //创建完之后   钩子函数     
		var that = this;
		axios.post('http://39.108.219.59:8080/productList')
		  .then(function (response) {   //// 回调函数  promise
		    console.log(response.data);
		    that.items = response.data.result;
		  })
		  .catch(function (error) {    //错误  error
		    console.log(error);
		  });
	},	
	methods: {
		click_:function(id) {
			location.href="details.html?id=" + id;
		}
	}
})











//$(document).on("click",".content_noe",function(){
////		var id = $(this).data("id");
////		location.href="/student/Dru/details.html?id="+id;	
//	location.href="details.html?id="+$(this).data("id");//跳转
//})
//
//	
//	
	
	
	
	
	
	
	
	
	
	

			//底部跳转
$(document)	.on("click",".goods",function () {
//		location.href=""
})
$(document)	.on("click",".ShoCart",function () {
	location.href="ShopCart.html"
})
$(document)	.on("click",".personal",function () {
	location.href="personal.html"
})	














































