////var app = new Vue({
////el: '#app',
////data: {
////  message: 'Hello Vue!'
////}
////})
////
////var app2 = new Vue({
////el: '#app-2',
////data: {
////  message: '页面加载于 ' + new Date().toLocaleString()
////}
////})
////
////var app3 = new Vue({
////el: '#app-3',
////data: {
////  seen: true
////}
////})
////
////
////
//////var app4 = new Vue({
//////el: '#app-4',
//////data: {
//////  todos: [
//////    { text: '学习 JavaScript' },
//////    { text: '学习 Vue' },
//////    { text: '整个牛项目' },
//////    { text: 'laozi很帅' }
//////  ]
//////}
//////})
////
////
////
////var app5 = new Vue({
////el: '#app-5',
////data: {
////  message: 'Hello Vue.js!'
////},
////methods: {
////  reverseMessage: function () {
////    this.message = this.message.split('').reverse().join('')
////  }
////}
////})
////
////var app6 = new Vue({
////el: '#app-6',
////data: {
////  message: 'Hello Vue!'
////}
////})
////
////var app10=new Vue({
////	el:'#app-10',
////	data:{
////		message: 'Hello ss!'
////	},
////	computed:{
////		_message:function(){
////			return this.message+Date();
////		}
////		
////	}	
////})
////
////
////var app11=new Vue({
////	el:'#app-4',
////	data:{
////		todos:[
////			{text:'猪纸虎'},
////			{text:'是我爸爸'}
////			]		
////	}	
////})
////
////
//////var txkt=new Vue({
//////	el:'box',
//////	data:{
//////		arr:['apple','banana','orange'],
//////		json:{a:'aaa',b:'bbbb',c:'cccc'}
//////	}
//////})
//
//
//
////
////var app5 = new Vue({
////el: '#app-5',
////data: {
////  message: '我是一条变色龙!',
////  fontColor:"black"
////},
////methods: {
////  reverseMessage: function () {
////  	this.fontColor=="black"?this.fontColor="red":this.fontColor="black";
////  	if (this.fontColor=="black") {
////  		this.fontColor="red";
////  	} else{
////  		this.fontColor="black";
////  	}      
////  }
////}
////})
//
//
////var app6=new Vue({
////	el:'#app-6',
////	data:{
////		items:[
////			{Name:"赵日天",age:12},
////			{Name:"黄日天",age:18},
////			{Name:"李日天",age:22},
////			{Name:"日天",age:30}			
////			]		
////	},
////	computed:{
////		Name:function(){
////			return this.items.filter(function(item){    //filter : 筛选
////				return item.Name.charAt(1)=="日" && item.age>=18    //charAt：选择字符串内容的第几项
////			})
////		}
////	}
////	methods:{
////		Name:function(items){
////			return items.filter(function (item){
////				return item.Name.charAt(1)=="日" && item.age>=10    //charAt：选择字符串内容的第几项
////			})
////		}	
////	}
//	
////})
//
////
////var app16=new Vue({
////el: '#example-5',
////	data:{
////		selected:"",
////		items:[
////			{Name:"赵日天",age:12},
////			{Name:"黄日天",age:18},
////			{Name:"李日天",age:22},
////			{Name:"日天",age:30}			
////			]		
////	},
////	computed:{
////		_items:function(){
////			var selected = this.selected;
////			if (selected) {
////				return this.items.filter(function(item){
////				return item.Name.charAt(1)==selected && item.age>=18  
////				})//charAt：选择字符串内容的第几项
////			} else{
////				return this.items
////			}
////		}
////	}
////		
////})
//
// 注册

//Vue.component('my-component', {
//	props:['myMessage'],
//template: '<div>{{ myMessage }}{{myErnai}}</div>',
//data:{
//}
//})
//// 创建根实例
//new Vue({
//el: '#example',
//data:{
//	item:''
//}
//})
//
//Vue.component('child',{
//	props:['products'],
//	template:'<div><div v-for="product in products">'
//			+'<p>{{product.id}}</p><p>{{product.cd}}</p>'
//			+'</div></div>'
//})
//
//Vue.component('father',{
//	props:['items'],
//	template:'<div><div v-for="item in items">'
//	+'<p>{{item.name}}</p><p>{{item.age}}</p>'
//	+'<child :products="item.products"></child>'
//	+'</div></div>'
//})
//new Vue({
//	el:'#BM_X6',
//	data:{
//		items:[
//			{
//				name:"小王",
//				age:18,
//				products:[
//				{
//				id:110,
//				cd:"天上人間",	
//				}
//				]
//			},
//			{
//				name:"老王",
//				age:28,
//				products:[
//				{
//				id:115,
//				cd:"地上人間",	
//				}
//				]
//			},
//			{
//				name:"隔壁老王",
//				age:38,
//				products:[
//				{
//				id:120,
//				cd:"麻辣隔壁",	
//				}
//				]
//			}
//		]
//	}
//})

Vue.component('child',{
	props:['products'],
	template:'<div><div v-for="product in products">'
			+'<p>{{product.id}}</p><p>{{product.cd}}</p>'
			+'</div></div>'
})
Vue.component('father',{
	props:['items'],
	template:'<div><div v-for="item in items">'
			+'<p>{{item.name}}</p><p>{{item.age}}</p>'
			+'<child :products="item.products"></child>'
			+'</div></div>'
})
new Vue({
	el:'#BM_X6',
	data:{
		items:[
		{
			name:"小妞",
			age:21,
			products:[
			{
				id:001,
				cd:'一起飛'
			}			
			]	
		},
		{
			name:"小妹",
			age:19,
			products:[
			{
				id:002,
				cd:'一起飛起來'
			}			
			]	
		},
		{
			name:"美眉",
			age:18,
			products:[
			{
				id:003,
				cd:'一起跳'
			}			
			]	
		}
		]
	}
})

