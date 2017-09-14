var product0;
$.ajax({
	type:"post",
	url:"http://39.108.219.59/getShopCar",
	async:true,
	contentType:"application/JSON",
	data:JSON.stringify({token:localStorage.getItem("token")}),
	success:function(data){
		montage(data);
		product0 = data.result;
	}
});

$(document).on("click",".settle",function(){
var product1=[];
var content=$(".button.blue");
	for(var i=0;i<content.length;i++){
		var j = content.eq(i).parent(".bike").index();
		    product1.push(product0[j])
		
	}
	localStorage.setItem("product2",JSON.stringify(product1));
	location.href = "FirmOrder.html";
})
var montage=function(data){
	for(var i=0;i<data.result.length;i++){
		var carContent='<div class="bike" data-id='+ data.result[i].product.id +'>'
		              +'<span class="button">'
//		              +'<i class="single"></i>'
		              +'</span>'
		              +'<img src="'+ data.result[i].product.Image +'" />'
		              +'<div class="present">'
		              +'<p>'+ data.result[i].product.Name +'</p>'
		              +'<div class="post">'
		              +'<span>'+ data.result[i].product.Carriage +'</span>'
		              +'<span>'+ data.result[i].product.Destination +'</span>'
		              +'</div>'
		              +'<a>'+ data.result[i].product.Status + '</a>'
		              +'<div class="price">'
		              +'<p class="now"> ￥ <span class="money">' + data.result[i].product.CurPrice +'</span></p>'
		              +'<p class="before">价格：￥'+data.result[i].product.OldPrice +'</p>'
		              +'<p>X <span class="power">'+data.result[i].ProductNumber+'</span></p>'
		              +'</div>'
		              +'</div>'
		              +'<div class="editor" data-id='+ data.result[i].id +'>'		              		              
		              +'<div class="number">'
		              +'<span class="minus">-</span>'
		              +'<span class="amount">'+ data.result[i].ProductNumber +'</span>'
		              +'<span class="add">+</span>'
		              +'</div>'
		              +'<button class="delete">删除</button>'
		              +'</div>'
		              +'</div>'		         
		         $(".insert").append(carContent)
	}
}
$(document).on("click",".change p",function(){
   $(this).hide().siblings().show();  
	if($(".switch").css("display")=="block"){		
		$(".present").show();
		$(".editor").hide();
	}else{
		$(".present").hide();
		$(".editor").show();
	}	
})

	
$(document).on("click",".delete",function(e){
		var id =$(this).parents(".editor").data("id");
			$.ajax({
			type:"post",
			url:"http://39.108.219.59/delShopCar",
			async:true,
			contentType:"application/JSON",
			data:JSON.stringify({token:localStorage.getItem("token"),id:id}),
			success:function(data){
				if(data.isSuccess == true){
					location.href="ShopCar.html";
					alert("删除成功！！！")
				}
			}
		});
})

$(document).on("click",".add",function(){	   
	var add=parseInt($(this).parent(".number").find(".amount").html())+1;
	    $(this).parent(".number").find(".amount").html(add);	   
})
$(document).on("click",".minus",function(){
	var minus=parseInt($(this).parent(".number").find(".amount").html())-1;
	if(minus>0){
		$(this).parent(".number").find(".amount").html(minus);	
	}
})

$(document).on("click",".finish",function(){
   var products=[];
       for(var i=0;i<$(".editor").length;i++){
   	    var id = $(".editor").eq(i).data("id");
   	    var ProductNumber = $(".editor").eq(i).find(".amount").html();
   	    var product = {
   	    	id : id,
   	    	ProductNumber : ProductNumber
   	    }
   	    products.push(product)
   }
	
	$.ajax({
		type:"post",
		url:"http://39.108.219.59/updateShopCar",
		async:true,
		contentType:"application/JSON",
		data:JSON.stringify({token:localStorage.getItem("token"),products:products}),
		success:function(data){
			if(data.isSuccess == true){
				location.reload()
			}
		}
	});
})
	
$(document).on("click",".present",function(){
		var id=$(this).parent(".bike").data("id")
		location.href="detail.html?id="+id;           
	})





 