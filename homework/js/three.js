var f;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  f=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  f=new ActiveXObject();
}

f.open("post","http://192.168.0.127:8000/project",true);
f.send();

f.onreadystatechange=function(){	  
  if (f.readyState==4 && s.status==200){	   
    var result = JSON.parse(f.responseText);
    console.log(result)
    var xx=document.querySelectorAll(".li1");
 
        xx.innerHTML=f.responseXML;
	    for(var i=0;i<xx.length;i++){
	    xx[i].querySelector(".li1 p").innerHTML=result.result[i].subtitle;
	    xx[i].querySelector(".li1 span").innerHTML=result.result[i].title;
	    xx[i].baseURI=result.result[i].bgimg;
	   }
	   
      }
    }