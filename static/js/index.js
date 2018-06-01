var vue_object = new Vue({
  el: '#vue_object',
  delimiters: ['${', '}'],
  data: {
	  categories: [
		  { name: 'Temperature' },
		  { name: 'Nutrition' },
		  { name: 'Calories' }
	  ]
  },
  methods: {
      add_category: async function(name) {
	      new_category = await add_category(name);
	      name = JSON.parse(new_category)['new_category'];
	      this.categories.push({ name: name });
    }
  }
})

function add_category(name) {
	return new Promise(function(resolve, reject) {
		var form_data = new FormData();
	    form_data.append('name', name);
	    var request = new XMLHttpRequest();
	    request.open("POST", add_category_url);
	    request.onreadystatechange = function() {
		    if(request.readyState == 4 && request.status == 200) {
			    resolve(this.response);
		    }
	    }
	    request.send(form_data);
	});
}