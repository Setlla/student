// 注册
//Vue.component('orders', {
//	props: ['order'],
//	template: "<div><h1 class='shop'>" +
//		"长沙菜鸟基地店" +
//		"<i></i>" +
//		"<span>交易成功</span>" +
//		"</h1>" +
//		"<products :product='product' :product-num='JSON.parse(order.productNum)[index]' v-for='(product,index) in order.products'></products>"+
//		"<p class='total'>" +
//		"共{{order.totalNum}} 件商品， 合计：￥ {{order.totalCost}} (含运费￥0.00)" +
//		"</p>" +
//		"<p class='assess'>" +
//		"<span class='evaluate'>评价</span>" +
//		"<i class='delete'>删除订单</i>" +
//		"</p></div>"
//
//})
//
//Vue.component('products', {
//	props: ['product','productNum'],
//	template: "<div class='content'>" +
//		"<img :src='product.Image' />" +
//		"<p class='title'>" +
//		"<b>{{product.Name}}</b>" +
//		"</p>" +
//		"<p class='money'>" +
//		"<span>{{product.CurPrice}}</span>" +
//		"<del>{{product.OldPrice}}</del>" +
//		"<i>X {{productNum}}</i>" +
//		"</p>"+
//		"</div>"
//})

Vue.component('product', {
	props: ['products', 'productNum'],
	template: 
	"<div><div class='content' v-for='(product,index) in products'>" +
		"<img :src='product.Image' />" +
		"<p class='title'>" +
		"<b>{{product.Name}}</b>" + 
		"</p>" +
		"<p class='money'>" +
		"<span>{{product.CurPrice}}</span>" +
		"<del>{{product.OldPrice}}</del>" +
		"<i>X {{productNum[index]}}</i>" +
		"</p>" +
		"</div></div>" 
})

var watchExampleVM = new Vue({
	el: '.body',
	data: {
		search: "",
		orders: []
	},
	beforeCreate: function() {
		var that = this;
		axios({
			method: 'post',
			url: 'http://39.108.219.59:8080/getOrder',
			data: {
				productName: this.search,
				token: localStorage.getItem('token')
			},
		}).then(function(response) {
			for(var i = 0; i < response.data.result.length; i++) {
				that.orders.push(response.data.result[i]);
			}
			localStorage.setItem('allProducts', JSON.stringify(response.data.result));
		});
	},
	watch: {
		search: function() {
			this.getSearch()
		}
	},
	methods: {
		getSearch: function() {
			this.orders.splice(0);
			var products = JSON.parse(localStorage.getItem('allProducts'));
			for(var i = 0; i < products.length; i++) {
				if(products[i].Name.indexOf(this.search) >= 0) {
					this.orders.push(products[i])
				}
			}
		},
		evaluate :function(order){
			localStorage.setItem("products",JSON.stringify({order}));
			location.href='pingjia.html'
		}
	}
})