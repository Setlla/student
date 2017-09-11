	
			//浏览图的函数
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
	
			//图片的浏览　　　和　切换图片
	$(document).on("change",".ggg",function() {
		var form= new FormData();
		form.append("token", localStorage.getItem("token"));
		form.append("file",$(".ggg")[0].files[0]);	
		
		var imgurl=getObjectURL($(".ggg")[0].files[0]);
		$(".ggg").attr("src",imgurl);
		
		$.ajax({
			type:"post",
			url:"http://39.108.219.59/setHeadImage",
			async:true,
			data: form,
			contentType:false,
			processData: false,
			success:function(data){
				
				if(data.isSuccess==true){
					$(".lis_one img").attr("src",data.headImage)
				}				
			}
		});			
	})
	
		//点击complete　完成修改
	$(document).on("click",".complete",function() {
		var name=$(".name").val();
		var gender=$(".gender option:selected").html();
		var address=$(".address").val();
		$.ajax({
			type:"post",
			url:"http://39.108.219.59/setPerson",
			async:true,
			contentType:"application/json",
			data:JSON.stringify({
				token: localStorage.getItem("token"),
				name:name,
				gender:gender,
				address:address,
				}),
			success:function(data){
				if(data.isSuccess==true){
					location.href="geren.html"
				}
			}
		});
	})
	
		//对焦
//	$(document).on("focus",".name",function() {
//		$(".name").css("text-align","left");
//		$(".address").css("text-align","left");
//	})
//	$(document).on("blur",".name",function () {
//		$(".name").css("text-align","right");
//		$(".address").css("text-align","right");
//	})
//	
//	
	
	$.ajax({				
		type:"post",
		url:"http://39.108.219.59/getPerson",
		async:true,
		contentType:"application/json",
		data:JSON.stringify({
			"token": localStorage.getItem("token"),			
		}),
		success:function(data){
			if(data.isSuccess==true){
				$(".lis_one img").attr("src",data.result[0].headImage);
				$(".name").val(data.result[0].name);
				if($(data.result[0].gender)=="女"){
					$(".woman").attr("selected","selected");
				}else{
					$(".man").attr("selected","selected");
				}
				$(".address").val(data.result[0].address);
			}
		}
	});
	
	
		//点击返回上一个页面
	$(document).on("click",".fanhui",function() {
		history.go(-1);
	})
	
	
	
	