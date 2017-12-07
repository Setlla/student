var token=localStorage.getItem("token")

$.ajax({										//我的收藏
	type:"POST",
	contentType:"application/json",
	data: JSON.stringify({token}),
	url:"http://39.108.219.59:8080/getBrowseLog",
	success:function(result){
		banner(result.result)
	}
});


function banner(result){				
	var frequency=0;
	for(var i=0;i<result.length;i++){
		frequency=frequency+result[i].browselogs[0].product.length;
	}
	document.querySelector(".collection i").innerHTML=frequency;
}

$.ajax({										//我的足迹
	type:"POST",
	contentType:"application/json",
	data: JSON.stringify({token}),
	url:"http://39.108.219.59:8080/getCollectionLog",
	success:function(result){
		bann(result.result)
	}
});

function bann(result){				
	var footprint=0;
	for(var i=0;i<result.length;i++){
		footprint=footprint+result[i].product.length;
	}
	document.querySelector(".footprint i").innerHTML=footprint;
}



$.ajax({
	type:"POST",
	contentType:"application/json",
	data: JSON.stringify({token}),
	url:"http://39.108.219.59:8080/getPerson",
	success:function(result){
		localStorage.setItem("user",JSON.stringify(result.result[0]))
		bus(result.result);
	}
});


function bus(result){
	$(".nickname").html(result[0].name)
	$(".banner img").attr('src',result[0].headImage)
}

$(".banner img").on('click',function(){
	location.href="shezhi.html"
})












