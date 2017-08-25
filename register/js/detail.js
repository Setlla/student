$(document).ready(function(){
	function getParams(name) {
			 	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
	            var r = window.location.search.substr(1).match(reg);  //匹配目标参数
	            if (r != null) return unescape(r[2]); return null; //返回参数值           
			 }
	 var id=getParams('id');
	
	$.ajax({
		type:"post",
		url:"http://192.168.0.146:3900/productDetail",
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
	
	 



//<div class="head">
//			<span></span>
//			<p>详情</p>
//		</div>
//		<div class="math">
//			<img src="img/detail_03.png" />
//			<div class="dot">
//				<span></span>
//				<span></span>
//				<span></span>
//				<span></span>
//				<span></span>
//			</div>
//		</div>
//		<div class="price">
//			<p class="present">高等数学（上册）大学高等数学课程创新新教材邱维声</p>
//			<div class="rate">
//				<p>￥<span>35</span></p>
//				<i>价格 128</i>
//				<button>7成新</button>
//			</div>
//			<div class="city">
//				<p>快递 5.00元</p>
//				<p>23人看过</p>
//				<P>上海 宝山</P>
//			</div>
//		</div>
//		<div class="describe">
//			<p class="baby">宝贝描述</p>
//			<div class="depict">
//				<p>
//					高等数学（上册）大学高等数学课程创新新教材是由全国首届高等学校国家级数学名师倾力
//					打造内容精华:重基础,讲想法,理论深刻,典型例题。
//				</p>
//			</div>
//		</div>
//		<div class="bottom">
//			<div class="chen">
//				<p> 陈先生</p>
//				<span>13841896324-上海</span>
//			</div>
//			<div class="join">
//				<a href="#">加入购物车</a>
//			</div>
//			<div class="buy">
//				<a href="#">立即购买</a>
//			</div>
//		</div>