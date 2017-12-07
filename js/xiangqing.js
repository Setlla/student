var id = JSON.stringify({
	"id": getQuerystring("id")
});

$.ajax({
	url: "http://39.108.219.59:8080/productDetail",
	type: "post",
	data: id,
	contentType: "application/json",
	success: function(data) {
		render(data.result);
	}
});

function getQuerystring(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if(r != null) return unescape(r[2]);
	return null;
}

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
		"<span>" + result.product.Destination + "</span>"+
	"</p>" +
	"</div>";

	document.querySelector(".info").innerHTML = info;

	document.querySelector(".miaoshu p").innerHTML = result.product.Des;

}











