var token=localStorage.getItem("token");

var product = JSON.parse(localStorage.getItem("product"));
console.log(product);

coment = "";
neirong();

function neirong() {
	for(var i = 0; i < product.products.length; i++) {
		coment = coment + "<div class='goods'>" +
			"<p class='shop'>" + product.products[i].product.ShopName + "</p>" +
			"<div class='details'>" +
			"<img src=" + product.products[i].product.Image + "/>" +
			"<p class='left'>" +
			"<b>" + product.products[i].product.Name + "</b>" +
			"<span>七天退换</span>" +
			"</p>" +
			"<p class='right'>" +
			"<span>" + "￥" + product.products[i].product.CurPrice + "</span>" +
			"<i>" + "X" + product.products[i].ProductNumber + "</i>" +
			"</p>" +
			"</div>" +
			"</div>"
	}
}

$(".neirong").html(coment);

var isInvoice=0;
//点击按钮
$(".anniu").click(function() {
	if(this.className == "anniu") {
		this.className = "button";
		isInvoice=1;
	} else {
		this.className = "anniu";
		isInvoice=0;
	}
})
var productNum=[];
var productId=[];
var num = 0;				//几件商品
var money = 0;				//总价格
numbe();
function numbe() {
	var a=0;
	for(var i=0;i<product.products.length;i++) {
		num=num+product.products[i].ProductNumber;
		money=money+product.products[i].ProductNumber*product.products[i].product.CurPrice;
		productId.push(product.products[i].ProductId);
		productNum.push(product.products[i].ProductNumber);
	}
}

$(".subtotal a").html("共"+num+"件商品")
$(".bottom p b").html("共"+num+"件,合计：")
$(".money span").html(money)
$(".bottom p span").html(money)



//addOrder  参数  token（用户信息）    totalCost（总价格）    totalNum（总数量）    isInvoice（是否需要发票）   message（留言）  productId（产品id数组的字符串，如[1,2,3]）     productNum（产品数量数组的字符串，如[1,2,3]）    state（状态默认值为1）

$(".submit").click(function(){
	submit();
})

function submit(){
	message=$(".words").val();       //留言
	var pn=JSON.stringify({
	"token":token,"totalCost":money,"totalNum":num,"isInvoice":isInvoice,"message":message,
	"productId":JSON.stringify(productId),"productNum":JSON.stringify(productNum),"state":1});
	$.ajax({
		type:"post",
		url:"http://39.108.219.59:8080/addOrder",
		contentType:"application/json",
		data:pn,
		success:function(data){
			if(data.isSuccess){
				
			}
		}
	});
}

