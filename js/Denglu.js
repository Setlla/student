
function bann(phone,password){

	var xxh=new XMLHttpRequest()
xxh.open("POST", "http://39.108.219.59:8080/login ")
xxh.setRequestHeader("content-type", "application/json")
xxh.send(JSON.stringify({ phone: phone, password: password })) //参数 id   值 1  参数 phone   password
xxh.onreadystatechange = function() {
	if(xxh.status == 200 && xxh.readyState == 4) {
		console.log(JSON.parse(xxh.response));
		if(JSON.parse(xxh.response).islogin) {
			location.href="dangpu.html"
		}else {
			alert("账号或密码错误");
		}
	}
}
}
	


document.querySelector('.write-c').addEventListener('click',function() {
	var phone = document.querySelector('.shuru-a').value;
	var password= document.querySelector('.shuru-b').value;
	bann(phone,password);
})








