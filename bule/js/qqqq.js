var xhr=XMLHttpRequest;
xhr.open("POST","http://",true);
xhr.send();
xhr.onreadystatechange=function(){
	if(xhr.readyState==4&&xhr.status==200){
		var f=JSON.parse(xhr.responseText);
	}
	
}
 var xhr=XMLHttpRequest;
 xhr.open("POST","http//",true);
 xhr.send();
 xhr.onreadystatechange=function(){
 	if(xhr.readyState==4&&xhr.status==200){
 		var f=JSON.parse(xhr.responseText);
 	}
 }
