$(document).on("click",".things a",function(e){
	console.log(this)
	$(this).addClass("cur").siblings().removeClass("cur");
	if(e.target.className == "thing cur"){
		$(".max").show();
		$(".books").hide();
	}else{
		$(".max").hide();
		$(".books").show();
	 }
		
})

var shop=new Vue({
	el:'.foot',
	methods:{
		shop:function(){
			location.href="collect.html"
		}
	}
})
//var data = {productName:""};
//$.ajax({
//	type:"post",
//	url:_url+"productList",
//	async:true,
//	contentType:"application/json",
//	data:JSON.stringify({token:localStorage.getItem("token")}),
//	success:function(data){
//		setdata(data);
//	}
//});

//var setdata=function(data){
//	   for(var n=0;n<data.result.length;n++){
//		   var strings='<div class="bicycle" data-id='+data.result[n].id+'>' 
//						  +'<div class="img">'
//						  +'<img src="'+data.result[n].Image+'"/>'
//						  +'</div>'
//						  +'<div class="shanghai min">'
//						  +'<div class="free">'
//						  +'<p class="Name">'+data.result[n].Name+'</p>'
//						  +'<span>'+data.result[n].Carriage+'</span>'
//						  +'<span>'+data.result[n].Destination+'</span>'
//						  +'<a href="#">'+data.result[n].Status+'</a>'
//						  +'</div>'
//						  +'<div class="price prices">'
//						  +'<span>￥'+data.result[n].CurPrice+'</span>'
//						  +'<span>￥'+data.result[n].OldPrice+'<span>'
//						  +'<div class="round">'
//						  +'<p></p>'
//						  +'<p></p>'
//						  +'<p></p>'
//						  +'</div>'
//					 	  +'</div>'
//					      +'</div>'
//		
//		if(data.result[n].IsBook=="0"){
//			$(".max").append(strings);
//		}else{
//			$(".books").append(strings);
//	   }
//	}
//}


//方法1     axios是请求后台资源的模块，成功则返回在.then函数中，失败则是在.catch函数中。
//axios.post(_url+"productList")
//	.then(function (response) {
//  console.log(response);
//  if(response.data){
//		    new Vue({
//				el:'.max',
//				data:{
//					items:response.data.result
//				},
//				methods:{
//					onbicycle:function(id){
//					location.href = "details.html?id="+id;
//					}
//				}
//	    	})
// }
//})
//.catch(function (error) {
//  console.log(error);
//});
   
    
	


 
////方法2    then:回调函数     catch：
var max=new Vue({
		el:".max",
		data:{
			items:[],
			obj: {}
		},
		created: function() {//钩子函数
			var that = this;
			axios.post(_url+"productList")
			  .then(function (response) {
			    console.log(response.data);
			    that.items = response.data.result;
			  })
			  .catch(function (error) {//捕获  catch
			    console.log(error);
			  });
		},
		methods:{
			onbicycle:function(id){
				location.href = "details.html?id="+id;
			}
		}
})	



//$(document).on("click",".bicycle",function(e){
// 	console.log(this);
//	var id=$(this).data("id");
//	location.href = "details.html?id="+id;      
//})

$(document).on("click",".shopcar",function(){
	location.href="shopcar.html";
})
$(document).on("click",".menCenter",function(){
	location.href="menCenter.html";
})


//var xhr =new XMLHttpRequest;
//var things = document.querySelector(".max");
//var book = document.querySelector(".books");
//var all = document.querySelector(".things");
//	all.addEventListener("click",function(e){
//		if(e.target.className == "thing"){
//			all.children[0].style.background = "rgba(225,225,225,0.8)";
//			all.children[1].style.background = "#33ccff";
//			things.style.display = "block";
//			book.style.display = "none";
//		}else{
//			all.children[1].style.background = "rgba(225,225,225,0.8)";
//			all.children[0].style.background = "#33ccff";
//			things.style.display = "none";
//			book.style.display = "block";
//		 }
//	})
//	


//if(window.XMLHttpRequest){
//	xhr=new XMLHttpRequest();
//}
//else{
//		xhr=new ActiveXObject();
//}
//
//xhr.open('post','http://192.168.0.146:3900/productList');
//xhr.setRequestHeader("Content-Type","application/json");
//xhr.send(JSON.stringify());
//xhr.onreadystatechange=function(){
//	if(xhr.readyState==4 && xhr.status==200){
//		m=JSON.parse(xhr.responseText);
//		
//		
//		for(var n=0;n<m.result.length;n++){
//			var strings='<div class="bicycle">'
//							  +'<div class="img">'
//							  +'<img src='+m.result[n].Image+'/>'
//							  +'</div>'
//							  +'<div class="shanghai min">'
//							  +'<div class="free">'
//							  +'<p>'+m.result[n].Name+'</p>'
//							  +'<span>'+m.result[n].Carriage+'</span>'
//							  +'<span>'+m.result[n].Destination+'</span>'
//							  +'<a href="#">'+m.result[n].Status+'</a>'
//							  +'</div>'
//							  +'<div class="price prices">'
//							  +'<span>'+m.result[n].CurPrice+'</span>'
//							  +'<span>'+m.result[n].OldPrice+'<span>'
//							  +'<div class="round">'
//							  +'<p></p>'
//							  +'<p></p>'
//							  +'<p></p>'
//							  +'</div>'
//						 	  +'</div>'
//						      +'</div>'
//			var bling=document.createElement('div');
//			bling.innerHTML=strings;
//			if(m.result[n].IsBook=="0"){
//				things.appendChild(bling);
//			}else{
//				book.appendChild(bling);
//			}
//		}
//	}
//}