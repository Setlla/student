var anEng = function() {
	var xxh1 = new XMLHttpRequest();
	xxh1.open("POST", "http://39.108.219.59:8080/getBrowseLog ")
	xxh1.setRequestHeader("content-type", "application/json")
	xxh1.send(JSON.stringify({
		token: localStorage.getItem("token")
	}))
	xxh1.onreadystatechange = function() {
		if(xxh1.status == 200 && xxh1.readyState == 4) {
			bann(JSON.parse(xxh1.response).result);
		}
	}
}
anEng()

function bann(result) {
	var chang = 0;
	for(var i = 0; i < result.length; i++) {
		chang = chang + result[i].browselogs.length;
	}
	document.querySelector(".write-e").innerHTML = chang;
}

var anKve = function() {
	var xxh2 = new XMLHttpRequest();
	xxh2.open("POST", "http://39.108.219.59:8080/getCollectionLog  ")
	xxh2.setRequestHeader("content-type", "application/json")
	xxh2.send(JSON.stringify({
		token: localStorage.getItem("token")
	}))
	xxh2.onreadystatechange = function() {
		if(xxh2.status == 200 && xxh2.readyState == 4) {
			document.querySelector('.write-c').innerHTML = JSON.parse(xxh2.response).result.length;
		}
	}
}

anKve()

var nhKer = function() {
	var xxh3 = new XMLHttpRequest();
	xxh3.open("POST", "http://39.108.219.59:8080/getPerson   ")
	xxh3.setRequestHeader("content-type", "application/json")
	xxh3.send(JSON.stringify({
		token: localStorage.getItem("token")
	}))
	xxh3.onreadystatechange = function() {
		if(xxh3.status == 200 && xxh3.readyState == 4) {
			var data = JSON.stringify(JSON.parse(xxh3.response).result);
			var tate = JSON.parse(xxh3.response).result;
			localStorage.setItem("user", data);
			document.querySelector('.tupian-b').src = tate[0].headImage;
			document.querySelector('.write-b').innerHTML = tate[0].name;
		}
	}
}
nhKer()

document.querySelector(".tupian-b").addEventListener("click", function() {
	location.href = "gerenxinxi.html"
})