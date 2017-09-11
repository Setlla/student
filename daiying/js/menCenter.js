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

$(document).on("change",".topinput",function(){
	var data=new FormData();
	console.log(localStorage.getItem("token"));
	data.append("token",localStorage.getItem("token"));
	data.append("file",$(".topinput")[0].files[0]);
	var imgurl=getObjectURL($(".topinput")[0].files[0]);
	$(".topinput").attr("src",imgurl);
	$.ajax({
		type:"post",
		url:"http://39.108.219.59/setHeadImage",
		async:true,
		contentType:false,
		processData:false,
		data:data,
		success:function(data){
			if(data.isSuccess==true){
				$(".topimg").attr("src",data.headImage);
			}
		}
	});
})





$(document).on("click",".shop",function(){
	location.href="details.html";
})
$(document).on("click",".shopcar",function(){
	location.href="shopcar.html";
})
$(document).on("click",".hockshop",function(){
	location.href="hockshop.html";
})
$(document).on("click",".menCenter",function(){
	location.href="menCenter.html";
})