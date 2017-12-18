var balance = [];

//结算接口
function balan() {
	$(document).on('click', '.balance', function() {
		if(!$(".content>p").hasClass("landian")) {
			return false;
		} else {
			var length = $('.landian').length;
			var products = [];
			for(var i = 0; i < length; i++) {
				var num = $('.landian').eq(i).parent('.content').index();
				products.push(balance[num]);
			}
			var product = JSON.stringify({
				products
			})
			localStorage.setItem("product", product)
			location.href = "dingdan.html";
		}
	})
}

//获取数据
$.ajax({
	type: "post",
	url: http+"getShopCar",
	contentType: "application/json",
	data: JSON.stringify({
		token: token
	}),
	success: function(data) {
		if(data.result.length==0){
			$(".footprint").css("display","block")
		}else{
			$(".footprint").css("display","none")
			commen(data.result);
		balance = data.result;
		}
	}
});

//页面渲染
var content = "";

function commen(result) {
	for(var i = 0; i < result.length; i++) {
		content = content + "<div class='content'>" +
			"<p class='dian'></p>" +
			"<a href=xiangqing.html?id=" + result[i].product.id + ">" +
			"<img src=" + result[i].product.Image + "/>" +
			"<div class='message'>" +
			"<h1>" + result[i].product.Name + "</h1>" +
			"<p class='baoyou'>" +
			"<i>" + result[i].product.Carriage + "</i>" +
			"<span" + result[i].product.Destination + "</span>" +
			"</p>" +
			"<span class='degree'>" + result[i].product.Status + "</span>" +
			"<p class='money'>" +
			"<i>￥</i>" +
			"<b>" + result[i].product.CurPrice + "</b>" +
			"<span>原价：￥" + result[i].product.OldPrice + "</span>" +
			"<em>" + result[i].ProductNumber + "</em>" +
			"<strong>X</strong>" +
			"</p>" +
			"</a>" +
			"</div>" +
			"<div class='delet'>" +
			"<p>" +
			"<a class='minus' onclick='minus(this)'>-</a>" +
			"<a class='amount'>"+ result[i].ProductNumber +"</a>" +
			"<a class='plus' onclick='plus(this)'>+</a>" +
			"<a class='delete' onclick='deleted(this," + result[i].id + ")'>删除</a>" +
			"</p>" +
			"</div>" +
			"</div>" +
			"</div>"
	}
	$(".neirong").html(content);
	if($(".degree").html() == "8成新" || "9成新") {
		$(".degree").css("background-color", "#ff6666")
	}
	editor();
	xunazhong();
	quanxuan();
}

//选中框
function xunazhong() {
	$(".dian").click(function(e) {
		if(e.target.className == "dian") {
			e.target.className = "landian";
		} else {
			e.target.className = "dian";
			$(".all").attr("class", "quanxuan")
		}
		$(".balance").html("结算(" + $('.landian').length + ")")
		total();
		judge();
		bakground();
	})
}

//全选
function quanxuan() {
	$(".quanxuan").click(function() {
		if(this.className == "quanxuan") {
			this.className = "all";
			$(".dian").attr("class", "landian")
		} else {
			this.className = "quanxuan";
			$(".landian").attr("class", "dian")
		}
		$(".balance").html("结算(" + $('.landian').length + ")")
		total();
		bakground();
		judge();
	})
}

//是否全选判断
function judge() {
	if(!$(".content>p").hasClass("dian")) {
		$(".quanxuan").attr("class", "all");
		$(".quanbushanchu").attr("class", "alldelete")
	} else {
		$(".alldelete").attr("class", "quanbushanchu")
	}
}

//编辑
function editor() {
	$(".top span").click(function() {
		if(this.innerHTML == "编辑全部") {
			this.innerHTML = "完成";
			$(".message").css("display", "none");
			$(".delet").css("display", "block");
			conversion();
		} else {
			this.innerHTML = "编辑全部";
			$(".message").css("display", "block");
			$(".delet").css("display", "none")
			all();
			complete();
		}
	})
}

//点击完成
function complete(){
			var length = $('.content').length;
			var products = [];
			for(var i = 0; i < length; i++) {
				var num = $('.content').eq(i).index();
				var id=balance[num].id;
				var ProductNumber=parseInt($('.content').eq(i).find('.amount').html());
				var obj={id:id,ProductNumber:ProductNumber};
				products.push(obj);
			}
			$.ajax({
				type:"post",
				url:http+"updateShopCar",
				contentType:"application/json",
				data:JSON.stringify({
					token:token,
					products:products
				}),
				success:function(iss){
					if(iss.isSuccess){
						alert(iss.result);
						location.reload();						
					}
				}
			});
}


function bakground() {
	if(!$(".content>p").hasClass("landian")) {
		$(".balance").css("background", "#c3c3c3");
	} else {
		$(".balance").css("background", "#ee8219");
		balan();
	}
}

//合计价钱
function total() {
	var money = 0;
	$(".landian").each(function(index, item) {
		var s = parseInt($(item).siblings(".message").find('.money b').text())
		var a = parseInt($(item).siblings(".message").find('.money em').text())
		money = money + s * a;
	});
	$(".left b em").html("￥" + money);
	//	for (var i=0;i<$('.landian').length;i++) {
	//		var s = parseInt($('.landian').eq(i).siblings(".message").find('.money b').text())
	//		money=money+s;
	//	}
}

//数量加1
function plus(that) {
	var amount = $(that).siblings(".amount").html();
	$(that).siblings(".amount").html(parseInt(amount) + 1);
}

//数量减1
function minus(min) {
	var amount = $(min).siblings(".amount").html();
	if(amount < 2) {
		alert("数量不能小于1");
		return false;
	}
	$(min).siblings(".amount").html(parseInt(amount) - 1);
}

//底部跳转
function conversion() {
	$(".bottom").css("display", "none");
	$(".jiesuan").css("bottom", "0")
	$(".left b").css("display", "none")
	$(".balance").css("display", "none")
	$(".quanbushanchu").css("display", "block")
}

function all() {
	$(".bottom").css("display", "block");
	$(".jiesuan").css("bottom", "1rem")
	$(".left b").css("display", "block")
	$(".balance").css("display", "block")
	$(".quanbushanchu").css("display", "none")
}

//发送删除请求
function deleted(that, id) {
	$.ajax({
		type: "post",
		url: http+"delShopCar",
		contentType: "application/json",
		data: JSON.stringify({
			"token": token,
			"id": id
		}),
		success: function(data) {
			if(data.isSuccess) {
				$(that).parents(".content").css("display", "none");
			}
		}
	});

}

//全部删除请求
$(document).on("click", ".alldelete", function() {
	alldelete();
})

function alldelete() {
	$.ajax({
		type: "post",
		url: http+"delAllShopCar",
		contentType: "application/json",
		data: JSON.stringify({
			"token": token
		}),
		success: function(all) {
			if(all.isSuccess){
				location.reload();
			}
		}
	});
}