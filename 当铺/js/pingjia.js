
var token = localStorage.getItem("token");

var order = JSON.parse(localStorage.getItem("products"));

Vue.component("star", {
	props: ['flag','type'],
	template: "<div><ul class='star'>" +
		"<li :class='classarr[0]' @click='change(1)'></li>" +
		"<li :class='classarr[1]' @click='change(2)'></li>" +
		"<li :class='classarr[2]' @click='change(3)'></li>" +
		"<li :class='classarr[3]' @click='change(4)'></li>" +
		"<li :class='classarr[4]' @click='change(5)'></li>" +
		"</ul>" +
		"<i v-show='flag'>{{score}}</i></div>",
	data: function() {
		return {
			classarr: ['ash', 'ash', 'ash', 'ash', 'ash'],
			score: '',
		}
	},
	methods: {
		change: function(num) {
			for(var i = 0; i < 5; i++) {
				Vue.set(this.classarr, i, 'ash');
			}
			for(var i = 0; i < num; i++) {
				Vue.set(this.classarr, i, 'red');
			}
			var arr = ['差', '一般', '好', '很好', '非常好'];
			this.score = arr[num - 1];
			this.getScore(this.score);
			
			
			
		},
		getScore: function(score) {
			var flag = parseInt(this.type);
			Vue.set(comtent.score, flag, score);
			
//			switch(flag) {
//				case 'A':
//					comtent.serviceScore = score;
//					break;
//				case 'D': 
//					comtent.describeScore = score;
//					break;
//				case 'L':
//					comtent.loglisticsScore = score;
//					break;
//				default:
//					break;
//				
//			}
		}
	}
})

var comtent = new Vue({
	el: ".body",
	data: {
		order: order,
		val:'',
		score: [0,0,0] //  describeScore loglisticsScore  serviceScore
//		describeScore: 0,
//		loglisticsScore: 0,
//		serviceScore: 0
	},
	methods: {
		Release: function() {
			var that = this;
			var content = that.val;
			var describe = 0;
			axios({
				method: 'post',
				url: 'http://39.108.219.59:8080/addComment',
				data: {
					"token": token,
					"orderId": order.order.id ,		//订单id
					"content": content,				//评价内容
					"describeScore": this.score[0],				//描述相符
					"loglisticsScore": this.score[1],				//物流服务
					"serviceScore": this.score[2]			//服务态度
				},
			}).then(function(response) {

			})
		}
	}
})