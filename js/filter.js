app = new Vue({
  el: '#filter',
  data: {
	  filter: ''
  },
  methods:{
	  filterBy: function(){
		  table.add(this.name,this.surname,this.age,this.sex);
		  this.clear();
	  }
  }
})