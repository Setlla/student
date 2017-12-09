var token = localStorage.getItem("token");

$.ajax({ //我的足迹
	type: "POST",
	contentType: "application/json",
	data: JSON.stringify({
		token
	}),
	url: "http://39.108.219.59:8080/getBrowseLog",
	success: function(result) {
		bann(result.result)
	}
});

function date(time) {
	var times = new Date(time);
	var month = times.getUTCMonth() + 1;
	var appi = times.getUTCDate();
	return month + '月' + appi + '日';
}

function bann(result) {
	var content = "";
	for(var i = 0; i < result.length; i++) {
		content = content + "<div class='content'>" +
			"<p class='time'>" + date(result[i].product[0].createdAt) + "</p>" +
			"<div class='computer'>" +
			"<a href='#' class='left'>" +
			"<img src=" + result[i].product[0].Image + "/>" +
			"</a>" +
			"<div class='right'>" +
			"<a href='#' class='title'>" +
			"<h2>" + result[i].product[0].Name + "</h2>" +
			"</a>" +
			"<div class='xiangshi'>" +
			"<p>" +
			"<i>￥</i>" +
			"<span>" + result[i].product[0].CurPrice + "</span>" +
			"</p>" +
			"<a herf='#' class='glyphicon'>" +
			"<img src='images/gouwuche.png'/>" +
			"</a>" +
			"<a herf='#' class='lock'>看相似</a>" +
			"</div>" +
			"</div>" +
			"</div>"
	}
	$(".neirong").html(content)
}

$(".empty").click(function() {
	empty();
})

function empty() {
	$.ajax({
		type: "post",
		contentType: "application/json",
		data: JSON.stringify({
			token
		}),
		url: "http://39.108.219.59:8080/delBrowseLog",
		success: function() {
		}
	});
}