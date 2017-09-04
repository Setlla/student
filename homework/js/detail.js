$(document).ready(function(){
	function getParams(name) {
			 	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
	            var r = window.location.search.substr(1).match(reg);  //匹配目标参数
	            if (r != null) return unescape(r[2]); return null; //返回参数值           
			 }
	 var id=getParams('id');
	 	 
	 $(".join a").click(function(){
		$.ajax({
		type:"post",
		url:"http://39.108.219.59/addShopCar",
		async:true,
		contentType:"application/JSON",
		data:JSON.stringify({
			"id": id,
			token:localStorage.getItem("token"),
		}),
		success:function(data){
			if(data.isSuccess == true){
				location.href="shop car.html"
			}else{
				console.log(data)
			}
		}
       })
})
	
	$.ajax({
		type:"post",
		url:"http://39.108.219.59/productDetail",
		async:true,
		contentType:"application/JSON",
		data:JSON.stringify({"id": id}),
		success:function(data,status){
			
			
//	    for(var i=0;i<data.result.lenght;i++){
	  	 var bokContent=
	  	               '<img src="'+ data.result.product.Image +'" />';
	  	     $('.math').append(bokContent);
	  	var bokContent1= 
	  	               
	  	               '<p class="present">'+ data.result.product.Des +'</p>'
	  	               +'<div class="rate">'
	  	               +'<p>￥<span>'+ data.result.product.CurPrice +'</span></p>'
	  	               +'<i>'+ data.result.product.OldPrice +'</i>'
	  	               +'<button>'+ data.result.product.Status +'</button>'
		  	           +'<div class="city">'  
					   +'<p>'+ data.result.product.Carriage +'</p>'			
					   +'<P>'+ data.result.product.Destination +'</P>'		
					   +'</div>'	               
	  	    $('.price').append(bokContent1);	  	              
		}
		
	});
})



	 



