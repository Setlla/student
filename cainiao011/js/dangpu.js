////通过ajax渲染页面内容
//$.ajax({
//	type:"post",
//	url:preUrl+"/productList",
//	contentType:"application/json",
//	//data:JSON.stringify({token:localStorage.getItem("token")}),
//	success:function(result){
//	setProduct(result.result);	//第一个result是总端口名称可以是data，上面的function(data)即可	
//}
//});	
//		    
////切换商品和书籍
//$(document).on("click touchstart",".book span",function(){
//	$(this).addClass("cur").siblings().removeClass("cur");
//	$(".product").eq($(this).index()).show();
//	$(".product").eq($(this).index()).siblings(".product").hide();	
//})
////设置列表渲染内容循环li的列表
//function setProduct(result){
//	for(var i=0;i<result.length;i++){
//		var lis='<li data-id="'+result[i].id+'">'
//				+'<div>'+'<img src="'+result[i].Image+'" alt="">'+'</div>'
//				+'<div class="proCont">'
//				+'<span>'+result[i].Name+'</span>'
//				+'<span>'+result[i].Carriage+'<i>'+result[i].Destination+'</i>'+'</span>'
//				+'<span>'+result[i].Status+'</span>'
//				+'<span>￥'+result[i].CurPrice+'<strong>￥'+result[i].OldPrice+'</strong>'
//				+'<div class="round">'
//				+'<a href=""></a>'
//				+'<a href=""></a>'
//				+'<a href=""></a>'
//				+'</div>'
//				+'</span>'
//				+'</div>'	
//				+'</li>';
//	//如果后面的ISbook是0的话就显示第一个产品的列表
//	if(result[i].IsBook==0){
//		$(".product ul").eq(0).append(lis);
//	}
//	else{
//		$(".product ul").eq(1).append(lis);
//		}	
//	}	
//}
//	
////点击当前产品立标跳转想对应的详情页
//$(document).on("click",".product li",function(){
//	location.href="xiangqing.html?id="+$(this).data("id");
//})

  
var dangpu = new Vue({
	el:".product",
	data:{
		items:[]
	},
	created:function(){
		var that = this;
		axios.post(preUrl+"/productList")
		  .then(function (response) {
		    console.log(response);
		    that.items=response.data.result;
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
	},
	methods:{ tudor:function(id)
			{
				location.href="xiangqing.html?id="+id;
			}}
})
