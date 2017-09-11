var t;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  t=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  t=new ActiveXObject();
}

t.open("post","http://192.168.0.127:8000/shop",true);
t.send();

t.onreadystatechange=function(){	  
  if (t.readyState==4 && t.status==200){	   
    var result = JSON.parse(t.responseText);
    console.log(result)
    var x=document.querySelectorAll(".B");
        x.innerHTML=t.responseXML;	  
	    x[0].innerHTML=result.result[0].describe;
	var d=document.querySelectorAll(".C");   	
	    d.innerHTML=t.responseXML;
	    d[0].innerHTML=result.result[0].name;
	var b=document.querySelectorAll(".p2");   	
	    b.innerHTML=t.responseXML;
	    b[0].innerHTML=result.result[0].projectsDescribe;
	var b=document.querySelectorAll(".p1");   	
	    b.innerHTML=t.responseXML;
	    b[0].innerHTML=result.result[0].projectsTitle;
        }
    }