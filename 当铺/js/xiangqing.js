var id = JSON.stringify({
	"id": getQuerystring("id")
});
var prod = 0;

var token = localStorage.getItem("token");

var products=[];

 
$(".buy p").click(function(){
	var product=JSON.stringify({products})
	localStorage.setItem("product",product);
	location.href = "dingdan.html";
})


//向后台传送当前url的id和ProductId
$.ajax({
	url: "http://39.108.219.59:8080/productDetail",
	type: "post",
	data: id,
	contentType: "application/json",
	success: function(data) {
		render(data.result); //显示内容
		prod = data.result.ProductId;
		pro(data.result.ProductId); //添加浏览记录
		panduan(data.result.ProductId); //判断是否已收藏
		products=[data.result];
	}
});

$(".shopping").click(function(){
	shop();
})

function shop(){
	$.ajax({
		type:"post",
		url:"http://39.108.219.59:8080/addShopCar",
		contentType: "application/json",
		data:JSON.stringify({token:token,id: getQuerystring('id')}),
		success:function(and){
			if(and.isSuccess){
				location.href="gouwuche.html"
			}
		}
	});
}

//获取当前url的id
function getQuerystring(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if(r != null) return unescape(r[2]);
	return null;
}

//显示这个id的内容
function render(result) {

	document.querySelector(".banner img").src = result.product.Image; //渲染dom

	var info = "<div class='info'>" +
		"<h1></h1>" +
		"<h2>" + result.product.Name + "</h2>" +
		"<p class='jiage'>" +
		"<em>￥</em>" +
		"<b>" + result.product.CurPrice + "</b>" +
		"<del>价格" + result.product.OldPrice + "</del>" +
		"<i>" + result.product.Status + "</i>" +
		"</p>" +
		"<p class='shangjia'>" +
		"<a>快递费</a>" +
		"<b>5.00元</b>" +
		"<i>23人看过</i>" +
		"<span>" + result.product.Destination + "</span>" +
		"</p>" +
		"</div>";

	document.querySelector(".info").innerHTML = info;

	document.querySelector(".miaoshu p").innerHTML = result.product.Des;

}

//添加浏览记录
function pro(productId) {
	$.ajax({
		type: "post",
		url: "http://39.108.219.59:8080/addBrowseLog",
		contentType: "application/json",
		data: JSON.stringify({
			token: token,
			productId: productId
		}),
		success: function() {

		}
	});
}

//判断是否已收藏
function panduan(productId) {
	$.ajax({
		type: "post",
		url: "http://39.108.219.59:8080/getIsCollection",
		contentType: "application/json",
		data: JSON.stringify({
			token: token,
			productId: productId
		}),
		success: function(Collection) {
			if(Collection.isCollection) {
				$(".collection").css("background-color", "#33ccff");
				$(".collection *").css("background-color", "red");
			} else {
				$(".collection").css("background-color", "#999999");
				$(".collection *").css("background-color", "#FFFFFF");
			}
			localStorage.setItem("lection",Collection.isCollection);
		}
	})
}


$(".collection").click(function(){
	var judge=localStorage.getItem("lection");
			if(judge=="true") {
				$(".collection").css("background-color", "#999999");
				$(".collection *").css("background-color", "#FFFFFF");
				localStorage.setItem("lection",false);
				delet();
			} else {
				$(".collection").css("background-color", "#33ccff");
				$(".collection *").css("background-color", "red");
				localStorage.setItem("lection",true);
				collection();
			}
		
	})

//添加收藏
function collection(){
	$.ajax({
		type:"post",
		url:"http://39.108.219.59:8080/addCollectionLog",
		contentType: "application/json",
		data: JSON.stringify({
			token: token,
			productId: prod
		}),
		success:function(){
			
		}
	});
}

//删除收藏
function delet(){
	$.ajax({
		type:"post",
		url:"http://39.108.219.59:8080/delCollectionLog",
		contentType: "application/json",
		data: JSON.stringify({
			token: token,
			productId: prod
		}),
		success:function(){
			
		}
	});
}

//1  添加浏览记录   addBrowseLog   参数  token  productId
//2  判断是否收藏   getIsCollection   参数  token  productId
//3  添加收藏   addCollectionLog    参数  token  productId
//4  删除收藏   delCollectionLog     参数   token  productId