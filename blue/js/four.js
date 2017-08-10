		var ff;
		if (window.XMLHttpRequest)
		  {// code for IE7+, Firefox, Chrome, Opera, Safari
		  ff=new XMLHttpRequest();
		  }
		else
		  {// code for IE6, IE5
		  ff=new ActiveXObject();
		}
		
		ff.open("post","http://192.168.0.127:8000/people",true);
		ff.send();
		
		ff.onreadystatechange=function(){	  
		  if (ff.readyState==4 && s.status==200){	   
		    var result = JSON.parse(ff.responseText);
		    console.log(result)
		    var pp=document.querySelectorAll(".say");
		        pp.innerHTML=s.responseXML;
			    for( var i=0;i<pp.length;i++){
			    pp[i].querySelector(".what").innerHTML=result.result[i].title;
			    pp[i].querySelector(".katty").innerHTML=result.result[i].name;
			    pp[i].querySelector(".txt").innerHTML=result.result[i].describe;
			    pp[i].baseURI=result.result[i].bgimg;
			   } 
		        }
		    }
		
