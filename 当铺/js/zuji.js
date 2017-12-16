

$.ajax({ //我的足迹
	type: "POST",
	contentType: "application/json",
	data: JSON.stringify({
		token: token,
	}),
	url: http + "getBrowseLog",
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
	var content = '';
	for(var i = 0; i < result.length; i++) {
		content = content + "<div class='content'>" +
			"<p class='time'>" + date(result[i].dateTime) + "</p>" ;
		for(var j = 0; j < result[i].browselogs.length; j++) {
			content = content + 
			"<div><div class='computer'>" +
			"<a href='#' class='left'>" +
			"<img src=" + result[i].browselogs[j].product[0].Image + "/>" +
			"</a>" +
			"<div class='right'>" +
			"<a href='#' class='title'>" +
			"<h2>" + result[i].browselogs[j].product[0].Name + "</h2>" +
			"</a>" +
			"<div class='xiangshi'>" +
			"<p>" +
			"<i>￥</i>" +
			"<span>" + result[i].browselogs[j].product[0].CurPrice + "</span>" +
			"</p>" +
			"<a herf='#' class='glyphicon'>" +
			"<img src='images/gouwuche.png'/>" +
			"</a>" +
			"<a herf='#' class='lock'>看相似</a>" +
			"</div>" +
			"</div></div>";
		}
		content = content + "</div>";
	}
	$(".neirong").html(content)
}

$(".empty").click(function() {
	empty();
	
})

function empty() {
	$.ajax({
		type: "post",
		url: http+"delBrowseLog",
		contentType: "application/json",
		data: JSON.stringify({
			token: token
		}),
		success: function(succ) {
			if(succ.isSuccess){
				location.reload();
			}
		}
	});
}