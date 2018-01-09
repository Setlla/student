var token = localStorage.getItem("token");

var user = JSON.parse(localStorage.getItem("user"));

var products = JSON.parse(localStorage.getItem("product"));

var productNum = [];

var productId = [];

var isInvoice = 0;//是否开发票

var money = 0;

var num = 0;

coment = "";

var body = new Vue({
	el: ".body",
	data: {
		user: user,
		items: products,
		isa:true,
		mage:""
	},
	computed: {
		// 计算属性的 getter
		num: function() {
			// `this` 指向 vm 实例
			for(var i = 0; i < products.products.length; i++) {
				num = num + products.products[i].ProductNumber;
				productId.push(products.products[i].ProductId);
				productNum.push(products.products[i].ProductNumber)
			}
			return num;
		},  
		money: function() {
			// `this` 指向 vm 实例
			var data = this.items.products;
			for(var i = 0; i < data.length; i++) {
				money = money + parseFloat(data[i].product.CurPrice) * data[i].ProductNumber;
			}
			return Number(money).toFixed(2)
		}

	},
	methods: {
		location: function() {
			location.href = "shezhi.html"
		},
		toggle:function(){
			this.isa= !this.isa;
			if(this.isa){
				isInvoice = 0
			}else{
				isInvoice = 1
			}
		},
		refer: function() {
			var that=this;
			axios({
				method: 'post',
				url: 'http://39.108.219.59:8080/addOrder',
				data: {
					"token": token,
					"totalCost": money,
					"totalNum": num,
					"isInvoice": isInvoice,
					"message": that.mage,
					"productId": JSON.stringify(productId),
					"productNum": JSON.stringify(productNum),
					"state": 1
				},
			}).then(function(response) {
					
			})
		}
	}
})

//
//var isInvoice = 0;
//
////是否需要开具发票
//$(".anniu").click(function() {
//	if(this.className == "anniu") {
//		this.className = "button";
//		isInvoice = 1;
//	} else {
//		this.className = "anniu";
//		isInvoice = 0;
//	}
//})
//var productNum = [];
//var productId = [];
//var num = 0; //几件商品
//var money = 0; //总价格
//numbe();
//function numbe() {
//	var a = 0;
//	for(var i = 0; i < product.products.length; i++) {
//		num = num + product.products[i].ProductNumber;
//		money = money + product.products[i].ProductNumber * product.products[i].product.CurPrice;
//		productId.push(product.products[i].ProductId);
//		productNum.push(product.products[i].ProductNumber);
//	}
//}
//
//商品合计
//CommodityAggregate();
//
//function CommodityAggregate() {
//	$(".subtotal a").html("共" + num + "件商品")
//	$(".bottom p b").html("共" + num + "件,合计：")
//	$(".money span").html(money)
//	$(".bottom p span").html(money)
//}

//addOrder  参数  token（用户信息）    totalCost（总价格）    totalNum（总数量）    isInvoice（是否需要发票）   message（留言）  productId（产品id数组的字符串，如[1,2,3]）     productNum（产品数量数组的字符串，如[1,2,3]）    state（状态默认值为1）

//提交订单
//$(".submit").click(function() {
//	submit();
//})
//
//function submit() {
//	message = $(".words").val(); //留言
//	var pn = JSON.stringify({
//		"token": token,
//		"totalCost": money,
//		"totalNum": num,
//		"isInvoice": isInvoice,
//		"message": message,
//		"productId": JSON.stringify(productId),
//		"productNum": JSON.stringify(productNum),
//		"state": 1
//	});
//	$.ajax({
//		type: "post",
//		url: http + "addOrder",
//		contentType: "application/json",
//		data: pn,
//		success: function(data) {
//			if(data.isSuccess) {
//
//			}
//		}
//	});
//}