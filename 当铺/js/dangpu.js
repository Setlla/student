function exp(result) { //函数申明
	var commen = "";
	for(var i = 0; i < result.length; i++) {
		commen = commen + "<div class='computer' data-isbook=" + result[i].IsBook + ">" +
			"<a href=xiangqing.html?id=" + result[i].id + " class='left'>" +
			"<img src=" + result[i].Image + "/>" +
			"</a>" +
			"<div class='right'>" +
			"<a href=xiangqing.html?id=" + result[i].id + " class='title'>" +
			"<h2>" + result[i].Name + "</h2>" +
			"</a>" +
			"<p class='baoyou'>" +
			"<i>" + result[i].Carriage + "</i>" +
			"<span>" + result[i].Destination + "</span>" +
			"</p>" +
			"<a href='#' class='guaqi'>挂起</a>" +
			"<p class='money'>" +
			"<span>￥" + result[i].CurPrice + "</span>" +
			"<del>￥" + result[i].OldPrice + "</del>" +
			"</p>" +
			"</div>" +
			"</div>"
	}

	document.querySelector(".commen").innerHTML = commen;
}

//物品和书籍切换
document.querySelector("#lan").addEventListener("click", function(e) {
	changeTitle(e);
	changeContent(e);
})

function changeTitle(e) { //只写头部按钮背景颜色的切换,事件委托，子类触发响应，能冒泡到父类
	document.querySelector(".wupin").style.cssText = "background: #33ccff;color: #d6f5ff;"
	document.querySelector(".shuji").style.cssText = "background: #33ccff;color: #d6f5ff;"
	e.target.style.cssText = "background: #d6f5ff;color: #33ccff;";
}

function changeContent(e) { //改变内容
	if(e.target.className == "wupin") {
		isBook(0);
	} else { //书籍
		isBook(1);
	}
}

function isBook(flag) { //是否显示书籍
	var computer = document.querySelectorAll(".computer");
	for(var i = 0; i < computer.length; i++) {
		if(computer[i].dataset.isbook == flag) {
			computer[i].style.display = "flex";
		} else {
			computer[i].style.display = "none";
		}
	}
}

var input = document.querySelector(".sousuo input");
var beijing = document.querySelector(".beijing");
input.addEventListener("click", function() {
	this.style.cssText = "position:fixed;top:0;width:100%;border:0;border-radius:0";
	beijing.style.display = "block";
})

input.addEventListener("blur", function() {
	this.style.cssText = "position:none;width:90%;border:0;border-radius: 0.25rem;border: 0.01rem solid #808080;";
	beijing.style.display = "none"
	var comen = this.value;
	var pn = JSON.stringify({
		productName: comen
	});
	nner(pn);
})

//function nner(pn){
//	var xhr = new XMLHttpRequest();
//	xhr.open("POST", "http://39.108.219.59:8080/productList");
//	xhr.setRequestHeader("content-type","application/json");//发型请求头，向接口传递json
//	xhr.send(pn);
//	xhr.onreadystatechange = function() {
//		if(xhr.status == 200 && xhr.readyState == 4) {
//			exp(JSON.parse(xhr.response).result);
//			}
//		}
//	}
nner();

//function nner(pn) {
//	$.ajax({
//		type: 'POST',
//		url: "http://39.108.219.59:8080/productList",
//		contentType: "application/JSON",
//		data: pn,
//		success: function(result) {
//			exp(result.result);
//		}
//	})
//}

function nner(pn) {
	var xhr = new XMLHttpRequest();
	xhr.open("POST", "http://39.108.219.59:8080/productList")
	xhr.setRequestHeader("content-type", "application/json")
	xhr.send(pn);
	xhr.onreadystatechange = function() {
		if(xhr.status == 200 && xhr.readyState == 4) {
			exp(JSON.parse(xhr.response).result);
		}
	}
}