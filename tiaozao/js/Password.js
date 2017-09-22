  
   	$.ajax({
   	type:"post",
   	url:"http://39.108.219.59/changepwd",
   	async:true,
   	contentType:"application/json",
// 	data:JSON.stringify({localStorage.getItem(token)}),
   	success:function(){
   		
   	}
   });

	
	$(document).on("click",".send",function () {
		
		
		show();
		
		
		clearInterval(T)
	})

	var T;
	var i;
	
	function show(){
		if(i>0){
			i=i-1;
			$(this).css("background","#E9E9E9");	
			var T=setInterval(show,1000);
		}

	}
