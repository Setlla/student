var setData = function() {
	var user = JSON.parse(localStorage.getItem("user"));
	document.querySelector('.tupian-c').src = user[0].headImage;
	document.querySelector('.shuru-b').value = user[0].name;
	document.querySelector('.shuru-c').value = user[0].gender;
	document.querySelector('.shuru-d').value = user[0].address;
}
setData();

document.querySelector('.tijiao').addEventListener("click", function() {
	var xxh = new XMLHttpRequest();
	xxh.open("POST", "http://39.108.219.59:8080/setPerson ")
	xxh.setRequestHeader("content-type", "application/json")
	xxh.send(JSON.stringify({
		token: localStorage.getItem('token'),
		name: document.querySelector('.shuru-b').value,
		gender: document.querySelector('.shuru-c').value,
		address: document.querySelector('.shuru-d').value
	}))
	xxh.onreadystatechange = function() {
		if(xxh.status == 200 && xxh.readyState == 4) {
			console.log(xxh.responseText)
			location.href="gerenzhongxin.html"
		}
	}
})

function anQut() {
	
}

document.querySelector(".tupian-c").addEventListener("click",function(){
	document.querySelector(".wenjian").style.cssText="width:1.2rem;height:0.2rem";
})
	
document.querySelector('.wenjian').addEventListener('change',function() {
	var data = new FormData();  //  上传文件   form 表单
	var file = document.querySelector('.wenjian').files[0];
	data.append("token",localStorage.getItem('token'));
	data.append("file",file);
	
	var xxh = new XMLHttpRequest();
	xxh.open("POST", "http://39.108.219.59:8080/setHeadImage")
	xxh.send(data);
	xxh.onreadystatechange = function() {
		if(xxh.status == 200 && xxh.readyState == 4) {
			var result = JSON.parse(xxh.responseText);
			if(result.isSuccess) {
				document.querySelector('.tupian-c').src = result.headImage;
			}
		}
	}
})
	
	









