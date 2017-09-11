function getObjectURL(file) {
var url = null ;
	if (window.createObjectURL!=undefined) { // basic
		url = window.createObjectURL(file) ;
	} else if (window.URL!=undefined) { // mozilla(firefox)
		url = window.URL.createObjectURL(file) ;
	} else if (window.webkitURL!=undefined) { // webkit or chrome
		url = window.webkitURL.createObjectURL(file) ;
	}
	return url ;
}

$(document).on("change",".imgInput",function(){
	var data=new FormData();
	console.log(localStorage.getItem("token"));
	data.append("token",localStorage.getItem("token"));
	data.append("file",$(".imgInput")[0].files[0]);
	var imgurl=getObjectURL($(".imgInput")[0].files[0]);
	$(".imgInput").attr("src",imgurl);
	$.ajax({
		type:"post",
		url:"http://39.108.219.59/setHeadImage",
		async:true,
		contentType:false,
		processData:false,
		data:data,
		success:function(data){
			if(data.isSuccess==true){
				$(".headImg").attr("src",data.headImage);
			}
		}
	});
})

$.ajax({
	type:"post",
	url:"http://39.108.219.59/getPerson",
	async:true,
	contentType:"application/json",
	data:JSON.stringify({
		token:localStorage.getItem("token"),
		}),
	success:function(data){
		if(data.isSuccess==true){
			$(".headImg").val(data.result[0].headImage);
			$(".name").val(data.result[0].name);
			if(data.result[0].gender=="女"){
			   $('.woman').attr("selected","selected");   
			}else{
				$('.man').attr("selected","selected");
			}
			$(".address").val(data.result[0].address);	
		}
	}
});


$(document).on("focus",".name",function(){
	$(".name").css("text-align","left");
	$(".address").css("text-align","left");
})

$(document).on("blur",".name",function(){
	$(".name").css("text-align","right");
	$(".address").css("text-align","right");
})

$(document).on("click",".foot",function(){
	var name=$(".name").val();
	var gender=$(".gender option:selected").html();
	var address=$(".address").val();	
	$.ajax({
		type:"post",
		url:"http://39.108.219.59/setPerson",
		async:true,
		contentType:"application/json",
		data:JSON.stringify({
			token:localStorage.getItem("token"),
			name:name,
			gender:gender,
			address:address
			}),
		success:function(data){
			if(data.isSuccess==true){
				location.href="menCenter.html";
			}
		}
	});
})
$(document).on("click",".backs",function(){
	history.go(-1);
})













