		var s;
		if (window.XMLHttpRequest)
		  {// code for IE7+, Firefox, Chrome, Opera, Safari
		  s=new XMLHttpRequest();
		  }
		else
		  {// code for IE6, IE5
		  s=new ActiveXObject();
		}
		
		s.open("post","http://192.168.0.127:8000/menu",true);
		s.send();
		
		s.onreadystatechange=function(){	  
		  if (s.readyState==4 && s.status==200){	   
		    var result = JSON.parse(s.responseText);
		    console.log(result)
		    var x=document.querySelectorAll(".la");
		        x.innerHTML=s.responseXML;
			    for( i=0;i<x.length;i++){
			    	x[i].innerHTML=result.result[i].menuName;
			    	
			   }
		        }
		    }
		
