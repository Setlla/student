$(".tijiao").on("click", function() {
	aj(),
	uploadImage()
})
var token = localStorage.getItem("token")

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

var image = "";

function selectImage(file) {
	if(!file.files || !file.files[0]) {
		return;
	}
	var reader = new FileReader();
	reader.onload = function(evt) {
		document.querySelector(".image").src = evt.target.result;
		image = evt.target.result;
	}
	reader.readAsDataURL(file.files[0]);
}

function uploadImage() {
	var axp=JSON.stringify({"file":image,"token":token});
	$.ajax({
		type: "POST",
		url: "http://39.108.219.59:8080/setHeadImage",
		contentType: "application/JSON",
		data:axp,
		success: function() {
			
		},
	});
}










