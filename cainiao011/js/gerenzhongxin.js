$.ajax({
	type:"post",
	url:preUrl+"/getPerson",
	async:true,
	data:JSON.stringify({token:localStorage.getItem("token")}),
	contentType:"application/json",
	success:function(result){
		setImg(result.result);
		setName(result.result);
		localStorage.setItem("user",JSON.stringify(result.result[0]));
	}
})

function setImg(result){
	$(".banner img").attr("src",result[0].headImage);
}

function setName(result){
	$(".name").html(result[0].name);
}

$(document).on("click touchstart",".zx",function(e){
		alert("您确定注销吗？")
		localStorage.removeItem("token");
		location.href="index.html";
		if(localStorage.removeItem("token")){
			location.href="index.html";
		}
})

var ul=document.querySelector(".classify ul");
  	$(document).on("click touchstart","classify",function(e){
  	$(e.target).closest("li").find("a").css("color","#33CCFF");
	$(e.target).closest("li").siblings().find("a").css("color","black");
	$(e.target).closest("li").find("i").addClass("cur");
	$(e.target).closest("li").siblings().find("i").removeClass("cur");
}) 

$(document).on("click touchstart",".banner img",function(e){
	location.href="gerenxinxi.html";
})

$(document).on("click",".serve li",function(){
	var id=$(this).index();
	location.href="wodedingdan.html?id="+id;
})
