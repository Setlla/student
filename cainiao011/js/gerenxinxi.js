$.ajax({
		type:"post",
		url:preUrl+"/getPerson",
		async:true,
		data:JSON.stringify({token:localStorage.getItem("token")}),
		contentType:"application/json",
		success:function(result){
			setAdd(result.result);
			localStorage.setItem("user",JSON.stringify(result.result[0]));
		}
	})


$(document).on("change","#file",function(e){
	var form=new FormData();
	form.append("file",document.querySelector("[type='file']").files[0]);
	form.append("token",localStorage.getItem("token"));
	$.ajax({
		type:"post",
		url:preUrl+"/setHeadImage",
		async:true,
		data:form,
		processData:false,
		contentType:false,
		success:function(result){
			setImg(result);		
		}
	})
})

function setImg(result){
	var img='<img src="'+result.headImage+'" alt="" />';
	$(".img").append(img);
}
$(document).on("click touchstart",".bc",function(e){
$.ajax({
		type:"post",
		url:preUrl+"/setPerson",
		async:true,
		data:JSON.stringify({
			token:localStorage.getItem("token"),
			name:$(".name input").val(),
			gender:$(".gender input").val(),
			address:$(".address input").val()
		}),
		contentType:"application/json",
		success:function(data){
			alert("保存成功")
			location.href="gerenzhongxin.html";
		}
	})
})


function setAdd(result){
	var img='<img src="'+result[0].headImage+'" alt="" />';
	$(".img").append(img);
	$(".name").val(result[0].name);
	$(".gender").val(result[0].gender);
	$(".address").val(result[0].address);
}












