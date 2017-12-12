function shousuo() {
	var xhh = new XMLHttpRequest();
	xhh.open("POST", "http://39.108.219.59:8080/getCollectionLog");
	xhh.setRequestHeader("content-type", "application/json");
	var token = localStorage.getItem("token");
	xhh.send(JSON.stringify({
		"token": token
	}));
	xhh.onreadystatechange = function() {
		if(xhh.status == 200 && xhh.readyState == 4) {
			shabi(JSON.parse(xhh.response).result)
		}
	}
}

function shabi(result) {
	var xxh = "";
	for(var i = 0; i < result.length; i++) {
		xxh = xxh + "<div class='computer'>" +
			"<a href=xiangqing.html?id=" + result[i].product[0].id + " class='left' >" +
			"<img src=" + result[i].product[0].Image + "/>" +
			"</a>" +
			"<div class='right'>" +
			"<a href=xiangqing.html?id=" + result[i].product[0].id + " class='title'>" +
			"<h2>" + result[i].product[0].Name + "</h2>" +
			"</a>" +
			"<p>" +
			"<i>￥</i>" + 
			"<span>5000</span>" +
			"</p>" +
			"<div class='lianjie'>" +
			"<i>赠品</i>" +
			"<a href='#'>补差链接</a>" +
			"<span>键盘膜</span>" +
			"<b></b>" +
			"</div>" +
			"<div class='xiangshi'>" +
			"<a herf='#' class='glyphicon'>" +
			"<img src='images/gouwuche.png'/>" +
			"</a>" +
			"<a herf='#' class='tongzhi'>降价通知</a>" +
			"<a herf='#' class='lock'>看相似</a>" +
			"</div>" +
			"</div>" +
			"</div>"
	}
	document.querySelector(".shoucang").innerHTML = xxh;
}

shousuo();

document.querySelector(".nav").addEventListener("click",function(e){
	for(var i=0;i<document.querySelectorAll(".nav ul li").length;i++){
		document.querySelectorAll(".nav ul li")[i].style.color="#1e1e20"
	}
	e.target.style.color="red";
})




























