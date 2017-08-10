	var ff;
	var xhrtt=new XMLHttpRequest();
	var lis=document.querySelectorAll(".projects_ul li img")
	var ps=document.querySelectorAll(".projects_transition");
	var xmlhttp;
				if (window.XMLHttpRequest){
					// code for IE7+, Firefox, Chrome, Opera, Safari
	 			 	xmlhttp=new XMLHttpRequest();
	  			}
				else{
					// code for IE6, IE5
	  				xmlhttp=new ActiveXObject();
	 			 }
	xhrtt.open(
		"POST",
		"http://192.168.0.127:8000/project"
	)
	xhrtt.send();
	xhrtt.onreadystatechange=function(){
		if(xhrtt.readyState==4&&xhrtt.status==200){
			ff=JSON.parse(xhrtt.responseText);
			for(var i=0;i<ps.length;i++){			
				ps[i].querySelector("p:nth-of-type(1)").innerText=ff.result[i].title;			
				ps[i].querySelector("p:nth-of-type(2)").innerHTML=ff.result[i].subtitle;
				lis[i].src=ff.result[i].bgimg;
			}
		}
	}
	