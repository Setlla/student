	//数据渲染
	var vm=new Vue({
		el:".ware",
		data:{
			liList:[],			
		},
		created:function(){
			var that=this;
			axios.post(_url+'/getBrowseLog',{
				token:localStorage.getItem("token")
			})
			.then(function(response){
				console.log(response.data);
				that.liList=response.data.result;
			})
			.catch(function(error){
				console.log(error);
			})
		}
		
	})
	
	//箭头返回上个历史页面
	var vm=new Vue({
		el:'header',
		methods:{
			header_arr:function(){
				history.go(-1);
			}				
		}
	})