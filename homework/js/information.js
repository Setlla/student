$(document).on("click",".head span",function(){
	history.go(-1);
})


$(document).on("change",".file",function(){
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

  	var datas = new FormData;
	  datas.append("token",localStorage.getItem("token"));
	  datas.append("file",$(".file")[0].files[0]);
	var imgurl = getObjectURL($(".file")[0].files[0]);
	    $(".headpic img").attr("src",imgurl);
	    
	$.ajax({
		type:"post",
		url:"http://39.108.219.59/setHeadImage",
		async:true,
		data:datas,
		contentType: false,
		processData: false,  	    
	    success:function(data){
	    	if(data.isSuccess == true){
	    		$(".headpic img").attr("src",data.headImage);	    		
	    	}
	    }		    
	});			   
})


 var user = JSON.parse(localStorage.getItem("user"));
		$(".name").val(user.name);
        $(".address").val(user.address);
        $("option:selected").html(user.gender);
        $(".headpic img").attr("src",user.headImage);

$(document).on("click","button",function(){
	var name = $(".name").val();
	var address = $(".address").val();
	var gender = $("option：selected").val();   
	var img = $(".headpic img").html();
	    $.ajax({
	    	type:"post",
	    	url:"http://39.108.219.59/setPerson",
	    	async:true,
	    	contentType:"application/JSON",
	    	data:JSON.stringify({token:localStorage.getItem("token"),
	    	                     name:name,
	    	                     address:address,
	    	                     gender:gender,
	    	                     img:img,
	    	}),
		    success:function(data){
		    	if(data.isSuccess == true){		    		
		    		location.href = "personal.html";
		    	}
		    }
	    });
})