	$(document).ready(function(){
		//input获取焦点文字左对齐
		$(document).on("focus","input",function(){
			$(this).removeAttr("readonly").css("text-align","left");
		})
		//input获取焦点文字右对齐
		$(document).on("blur","input",function(){
			$(this).attr("readonly","readonly").css("text-align","right");
		})
		
		
		//公用token
		var token=localStorage.getItem("token");
		//修改本地图片为动态图片		
		$(document).on("change",".file_img",function(){
			var datas=new FormData();
			datas.append("token",token);
			datas.append("file",$(".file_img")[0].files[0]);
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
		//渲染函数
		var xuanran=function(){
			$.ajax({
				type:"post",
				url:"http://39.108.219.59/getPerson",
				async:true,
				contentType:"application/JSON",
				data:JSON.stringify({
						token:token
					}),
				success:function(data){
					modify(data);
					console.log(data+"测试数据");
				}
			})
		}
		xuanran();
		
		
		//修改函数
		var  modify=function(data){
			$('.name').val(data.result[0].name);
			$('.sex option:selected').text(data.result[0].gender);
			$('.address').val(data.result[0].address);
			$('.intercalate_head').attr('src',data.headImage);
		}					
	
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
			location.href="personal_center.html";
		})
	})//ready括号