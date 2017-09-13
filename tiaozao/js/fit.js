	
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
	$(document).on("change",".browse",function() {
		var form= new FormData();
		form.append("token", localStorage.getItem("token"));
		form.append("file",$(".browse")[0].files[0]);	
		
		var imgurl=getObjectURL($(".browse")[0].files[0]);
		$(".browse").attr("src",imgurl);
		
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
	$(document).on("focus","input",function() {
		$(this).css("text-align","left");

	})
	$(document).on("blur","input",function () {
		$(this).css("text-align","right");

	})
	
	
		function mation(){
			var user=JSON.parse(localStorage.getItem("user"));		
			$(".lis_one img").attr("src",user.headImage);
			$(".name").val(user.name);
			if($(user.gender)=="女"){
				$(".woman").attr("selected","selected");
			}else{
				$(".man").attr("selected","selected");
			}
				$(".address").val(user.address);			
		}
		mation();	

			
	

	
	
		//点击返回上一个页面
	$(document).on("click",".fanhui",function() {
		history.go(-1);
	})
	
	
	
	