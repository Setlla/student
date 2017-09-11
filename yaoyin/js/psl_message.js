	$(document).ready(function(){
		//input获取焦点文字左对齐
		$(document).on("focus","input",function(){
			$(this).removeAttr("readonly").css("text-align","left");
		})
		//input获取焦点文字右对齐
		$(document).on("blur","input",function(){
			$(this).attr("readonly","readonly").css("text-align","right");
		})
		
		//本地预览图片函数
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
		
		
		//公用token
		var token=localStorage.getItem("token");
		var user=JSON.parse(localStorage.getItem("user"));
		//调用个人中心页面的存储用户信息
		var users=function(){
			$('.address').val(user.address);
			$('.name').val(user.name);
			$('.sex option:selected').text(user.gender);
			$('.intercalate_head').attr('src',user.headImage);
		}
		users();

		//修改本地图片为动态图片		
		$(document).on("change",".file_img",function(){
			var datas=new FormData();
			datas.append("token",token);
			datas.append("file",$(".file_img")[0].files[0]);
			var img=getObjectURL($(".file_img")[0].files[0]);
			$('.intercalate_head').attr('src',img);
			$.ajax({
				type:"post",
				url:"http://39.108.219.59/setHeadImage",
				async:true,
				data:datas,
				contentType:false,
				processData:false,
				success:function(data){
					if(data.isSuccess==true){
						$('.intercalate_head').attr('src',data.headImage);
					}
					
				}
			})
		})
	
		//修改昵称地址性别		
		$(document).on("click",".reg",function(){
			var name=$('.name').val();
			var sex=$('.sex option:selected').val();
			var address=$('.address').val();
			$.ajax({
				type:"post",
				url:"http://39.108.219.59/setPerson",
				async:true,
				contentType:"application/JSON",
				data:JSON.stringify({
					token:token,
					name:name,
					gender:sex,
					address:address,
				}),
				success:function(data){
					if(data.isSuccess==true){
						location.href="personal_center.html";
					}
				}
			})
		})			
		
		//箭头跳转回个人中心
		$(document).on("click",".header_arr",function(){
			history.go(-1);
		})
	})//ready括号