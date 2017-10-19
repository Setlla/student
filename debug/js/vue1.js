var app = new Vue({
  el: '#app',
  data: {
    message: '螺母!'
  }
})
// v-bind将这个元素节点的 title 属性和 Vue 实例的 message 属性保持一致”。
var app2 = new Vue({
  el: '#app-2',
  data: {
    message: '新消息 ' + new Date().toLocaleString()
  }
})
// v-if 条件
var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})
//v-for 指令可以绑定数组的数据来渲染一个项目列表：
var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: '学习 JavaScript' },
      { text: '学习 Vue' },
      { text: '整个牛项目' },
      { text: '新项目' }
    ]
  }
})
//为了让用户和你的应用进行互动，我们可以用 v-on 指令绑定一个事件监听器，通过它调用我们 Vue 实例中定义的方法：
var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})
//v-model 它能轻松实现表单输入和应用状态之间的双向绑定。
var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
})

var aa = new Vue({
	el:'#has',
	data:{
		colors:false
	},
	methods:{
		he : function(){
			if(this.colors == false){
				this.colors = true
			}else{
				this.colors = false
			}
		}
	}
})

var list = new Vue({
	el:'#people',
	data:{
		items:[
		 {name:'李白',age:'20'},
		 {name:'王甫',age:'15'},
		 {name:'李清照',age:'17'},
		 {name:'王勃',age:'22'}
		]
	}
})