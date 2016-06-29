Vue.filter('filterSex', function (value) {
  // return processed value
	console.log('ddd');
})

table = new Vue({
  el: '#table',
  data: {
	  filter_name:'',
	  filter_surname:'',
	  filter_age:'',
	  filter_sex:'',
	  type: ['male','female','all'],
	  theads: [
	   { text:'name' },
	   { text:'surname' },
	   { text:'age' },
	   { text:'sex' }
	  ],
	  tbodys: [
	   { name:'John' , surname:'JohnAgt', age:30, sex:'male' },
	   { name:'Alex' , surname:'12Table', age:19, sex:'male' },
	   { name:'Catty' , surname:'Sweety', age:18, sex:'female' },
	   { name:'Johnson' , surname:'13Teek', age:21, sex:'male' }
	  ],
	  tbodysTemp:[],
	  sortBy: '',
	  orderIs: 1,
	  sortOrders: [1,1,1,1]
  },
  methods:{
	  iconChange: function(_this){
		  _this.toElement.style.cursor = "pointer";
	  },
	  add: function(name,surname,age,sex){
		  this.tbodys.push({name:name , surname:surname , age:age , sex:sex });
	  },
	  clear: function(){
		  this.tbodys = [];
	  },
	  removeTodo: function (index) {
	        this.tbodys.splice(index, 1)
	  },
	  sort: function(by,idx){
		this.sortBy = by;
		this.order();
		this.sortOrders[idx] = this.sortOrders[idx] * -1;
		console.log('this.sortOrders[idx] '+this.sortOrders[idx]);
	  },
	  order: function(){
		  this.orderIs = this.orderIs * -1;
	  },
	  filterSex:function(sex){

		  if( this.tbodysTemp.length == 0 ){
			  this.tbodysTemp = this.tbodys;
		  } 
		  
		  this.tbodys = this.tbodysTemp;
		  if( sex !='all' ){
			  var _this = this;
			  this.tbodys = this.tbodys.filter(function(e){
				  return e.sex == sex ;
			  });  
		  }
	  }
  }
});


