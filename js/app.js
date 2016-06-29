app = new Vue({
  el: '#app',
  data: {
	  name: '',
	  surname:'',
	  age:'',
	  sex:'',
	  type: ['male','female']
  },
  methods:{
	  addToTable: function(){
		  table.add(this.name,this.surname,this.age,this.sex);
		  this.clear();
	  },
	  clear: function(){
		  this.name = '';
		  this.surname = '';
		  this.age = '';
		  this.sex = '';
	  }
  }
})