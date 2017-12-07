var token = localStorage.getItem("token")
var user = JSON.parse(localStorage.getItem("user"));
$(".name").val(user.name)
$(".image").attr('src',user.headImage)



$(".tijiao").on("click", function() {
	aj();
})

function aj() {
	var name = $(".name").val();
	var gender = $(".sex").val();
	var address = $(".address").val();
	var pn = JSON.stringify({
		"token": token,
		"name": name,
		"gender": gender,
		"address": address,
	});
	$.ajax({
		type: "post",
		url: "http://39.108.219.59:8080/setPerson",
		contentType: "application/JSON",
		data: pn,
		success: function(result) {
			alert(result.des)
		}
	});
}

function uploadImage() {
	var formData = new FormData();
	var img = $('.upload')[0].files[0];
	formData.append("file", img);
	formData.append("token", token);
	$.ajax({
		type: "POST",
		url: "http://39.108.219.59:8080/setHeadImage",
		contentType: false,
		processData:false,
		data:formData,
		success: function(suces) {
			$(".image").attr('src',suces.headImage)
		},
	});
}

$(document).on('change','.upload',function() {
	uploadImage();
})







