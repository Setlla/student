
var user = JSON.parse(localStorage.getItem("user"));
$(".name").val(user.name)
$(".image").attr('src',user.headImage)
$(".address").val(user.address)


$(".tijiao").on("click", function() {
	aj();
})


//点击提交
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
		url: http+"setPerson",
		contentType: "application/JSON",
		data: pn,
		success: function(result) {
			if(!result.isSuccess){
				alert("信息修改失败")
			}else{
				alert(result.des);
			location.href="gerenzhongxin.html";
			}	
		}
	});
}

//头像提交
function uploadImage() {
	var formData = new FormData();
	var img = $('.upload')[0].files[0];
	formData.append("file", img);
	formData.append("token", token);
	$.ajax({
		type: "POST",
		url: http+"setHeadImage",
		contentType: false,
		processData:false,
		data:formData,
		success: function(suces) {
			if(!suces.isSuccess){
				return false;
				alert("信息头像失败")
			}else{
				$(".image").attr('src',suces.headImage)
				alert(suces.des);
			}
		},
	});
}

$(document).on('change','.upload',function() {
	uploadImage();
})







