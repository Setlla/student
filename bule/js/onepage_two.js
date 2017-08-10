	var	xhrs=new XMLHttpRequest();
	var bb;
	var zz=document.querySelector(".head_font");
	var oo=document.querySelector(".projects_title");	
	var span1=document.querySelector(".span1")
	var bjt=document.querySelector(".head");
	var xmlhttp;
				if (window.XMLHttpRequest){
					// code for IE7+, Firefox, Chrome, Opera, Safari
	 			 	xmlhttp=new XMLHttpRequest();
	  			}
				else{
					// code for IE6, IE5
	  				xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	 			 }
	xhrs.open(
		"POST",
		"http://192.168.0.127:8000/shop"
	)
	xhrs.send();
	xhrs.onreadystatechange=function(){
		if(xhrs.readyState==4&&xhrs.status==200){
			bb=JSON.parse(xhrs.responseText);
					zz.children[0].innerText=bb.result[0].name;
					zz.children[1].innerText=bb.result[0].describe;
					oo.children[0].innerText=bb.result[0].projectsTitle;
					oo.children[2].innerText=bb.result[0].projectsDescribe;
					bjt.style.background="url('"+bb.result[0].img+"')";
		}
	}
	
	












