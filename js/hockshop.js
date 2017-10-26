	var vm=new Vue({
		el:"#body",
		data:{
			wlists:[],
			isArticle1:true,
			isArticle2:false,
		},
		created:function(){
			//VUE的页面渲染数据
			var that=this;
			axios.post(_url+"/productList")
			.then(function(response){
				console.log(response.data);
				that.wlists=response.data.result;
			})
			.catch(function(error){
				console.log(error);
			})
		},
		computed:{
			warelist:function(){
				return this.wlists.filter(function(value){
	   				return value.IsBook==0;
	   			})
			},
			warelists:function(){
				return this.wlists.filter(function(value){
	   				return value.IsBook==1;
	   			})
			}
		},
		methods:{
			//点击商品跳转到详情页面
			wls:function(id){				
	        	location.href="DetailsPage.html?id=" + id;
			},
			//物品书籍切换
			article:function(){
				this.isArticle1=true;
				this.isArticle2=false;
			},
			books:function(){
				this.isArticle1=false;
				this.isArticle2=true;
			}
		}
	})	
