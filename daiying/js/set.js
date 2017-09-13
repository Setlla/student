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

function common(){
	var user = JSON.parse(localStorage.getItem("user"));
	$(".headImg").attr("src",user.headImage);
	$(".name").val(user.name);
	if(user.gender=="女"){
	   $('.woman').attr("selected","selected");   
	}else{
		$('.man').attr("selected","selected");
	}
	$(".address").val(user.address);
}

common();

$(document).on("focus","input",function(){
	$(this).css("text-align","left");
})
$(document).on("blur","input",function(){
	$(this).css("text-align","right");
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













