var data = "";

getData();

//function getData() {
//	var xhr = new XMLHttpRequest();
//	xhr.open("POST", "http://39.108.219.59:8080/productList");
//	xhr.setRequestHeader("content-type", "application/json")
//	xhr.send(JSON.stringify(data));
//	xhr.onreadystatechange = function() {
//		if(xhr.status == 200 && xhr.readyState == 4) {
//			bann(JSON.parse(xhr.response).result);
//		}
//	}
//}

function getData() {
	$.ajax({
		type: "post",//- 向指定的资源提交要处理的数据
		url: "http://39.108.219.59:8080/productList",
		contentType: "application/json",
		data: JSON.stringify({
			"productName": data
		}),
		success: function(result) {
			bann(result.result)
		}
	});
}

function bann(result) {
	var xxh = "";
	for(var i = 0; i < result.length; i++) {
		xxh = xxh +
			"<div class='tupian-a' data-isbook=" + result[i].IsBook + ">" +
			"<a class='time-a' href=xiangqing.html?id=" + result[i].id + ">" +
			"<img src=" + result[i].Image + ">" +
			"</a>" +
			"<div class='time-b'>" +
			"<p class='first-a'>" + result[i].Name + "</p>" +
			"<p class='first-b'>" +
			"<i class='back-a'>" + result[i].Carriage + "</i>" +
			"<i class='back-b'>" + result[i].Destination + "</i>" +
			"</p>" +
			"<p class='first-c'>挂起</p>" +
			"<div class='first-d'>" +
			"<span class='secont-b'>￥</span>" +
			"<span class='secont-c'>" + result[i].BrowseTimes + "</span>" +
			"<span class='secont-d'>￥" + result[i].CurPrice + "</span>" +
			"<span class='secont-f'>...</span>" +
			"</div>" +
			"</div>" +
			"</div>"

	}
	document.querySelector(".goods").innerHTML = xxh;
	hebing()
}
document.querySelector(".wupin").addEventListener("click", function() {
	this.style.cssText = "background:#d6f5ff;color:#33ccff";
	document.querySelector(".shuji").style.cssText = "background:#33ccff;color:#d6f5ff";
	var computer = document.querySelectorAll(".tupian-a");
	for(var i = 0; i < computer.length; i++) {
		if(computer[i].dataset.isbook == 1) { //.dataset.isbook表示取data-isbook的值
			computer[i].style.display = "none";
		} else {
			computer[i].style.display = "flex";
		}
	}
})

document.querySelector(".shuji").addEventListener("click", function() {
	this.style.cssText = "background:#d6f5ff;color:#33ccff";
	document.querySelector(".wupin").style.cssText = "background:#33ccff;color:#d6f5ff";
	var computer = document.querySelectorAll(".tupian-a");
	for(var i = 0; i < computer.length; i++) {
		if(computer[i].dataset.isbook == 1) { //.dataset.isbook表示取data-isbook的值
			computer[i].style.display = "flex";
		} else {
			computer[i].style.display = "none";
		}
	}
})

function hebing() {
	var computer = document.querySelectorAll(".tupian-a");
	for(var i = 0; i < computer.length; i++) {
		if(computer[i].dataset.isbook == 1) { //.dataset.isbook表示取data-isbook的值
			computer[i].style.display = "flex";
		} else {
			computer[i].style.display = "none";
		}
	}
}

//事件委托 

//失去焦点

/*document.querySelector('.shuru-a').addEventListener("click", function() {
	this.style.cssText = "position:fixed;top:0;border-radius: 0rem;width: 100%";
	document.querySelector(".zuihou").style.display = "block";

})

document.querySelector('.shuru-a').addEventListener('blur', function() {
	data = {
		productName: document.querySelector('.shuru-a').value
	};
	getData();
	this.style.cssText = "Position:!important";
	document.querySelector(".zuihou").style.display = "none";

})*/

$(".shuru-a").click(function() {
	$(".shuru-a").addClass('selected');
	$(".zuihou").css("display", "block")
})

$(".shuru-a").blur(function() {
	data = $('.shuru-a').val();
	$(".shuru-a").removeClass('selected');
	$(".zuihou").css("display","none")
	getData();
})












