$.ajax({
	type:"post",
	url:"http://39.108.219.59/getShopCar",
	async:true,
	contentType:"application/JSON",
	data:JSON.stringify({token:localStorage.getItem("token")}),
	success:function(data){
		montage(data);		
	}
});
var montage=function(data){
	for(var i=0;i<data.result.length;i++){
		var carContent='<div class="bike">'
		              +'<span class="button">'
		              +'<i class="single"></i>'
		              +'</span>'
		              +'<img src="'+ data.result[i].product.Image +'" />'
		              +'<p>'+ data.result[i].product.Name +'</p>'
		              +'<div class="post">'
		              +'<span>'+ data.result[i].product.Carriage +'</span>'
		              +'<span>'+ data.result[i].product.Destination +'</span>'
		              +'</div>'
		              +'<a>'+ data.result[i].product.Status + '</a>'
		              +'<div class="price">'
		              +'<p class="now"> ￥ <span class="money">' + data.result[i].product.CurPrice +'</span></p>'
		              +'<p class="before">价格：￥'+data.result[i].product.OldPrice +'</p>'
		              +'<p>X <span class="power">2</span></p>'
		              +'</div>'
		              +'</div>'
		         
		         $(".insert").append(carContent)
	}
}
//<div class="bike">
//			<span class="button">
//				<i></i>
//			</span>
//			<img src="img/car_03.png" />
//			<p>捷安特24速变速一体轮可折叠自行车</p>
//			<div class="post">
//				<span>包邮</span>
//				<span>上海</span>
//			</div>
//			<a>7成新</a>
//			<div class="price">
//				<p class="now"> ￥ <span>350</span></p>
//				<p class="before">价格：￥1350</p>
//				<p>X2</p>
//			</div>
//		</div>