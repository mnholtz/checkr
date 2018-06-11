window.onload = async function() {
	var json = await get_categories();
	var categories = JSON.parse(json).categories;
	for(i = 0; i < categories.length; i++) {
		category = categories[i];
		app.categories.push({ name: category.name, id: category.id, unit: category.unit, selected: false });
	}
}

var app = new Vue({
  el: '#vue_object',
  delimiters: ['${', '}'],
  data: {
	  categories: []
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

function get_categories() {
	return new Promise(function(resolve, reject) {
	    var request = new XMLHttpRequest();
	    request.open("GET", get_categories_url);
	    request.onreadystatechange = function() {
		    if(request.readyState == 4 && request.status == 200) {
			    resolve(this.response);
		    }
	    }
	    request.send();
	});
}

function add_entry(category_id, form) {
	var form_data = new FormData(form);
	form_data.append('category_id', category_id);
	return new Promise(function(resolve, reject) {
	    var request = new XMLHttpRequest();
	    request.open("POST", add_entry_url);
	    request.onreadystatechange = function() {
		    if(request.readyState == 4 && request.status == 200) {
			    resolve(this.response);
		    }
	    }
	    request.send(form_data);
	});
}

function delete_category(category_id) {
	var form_data = new FormData(form);
	form_data.append('category_id', category_id);
	return new Promise(function(resolve, reject) {
	    var request = new XMLHttpRequest();
	    request.open("POST", delete_category_url);
	    request.onreadystatechange = function() {
		    if(request.readyState == 4 && request.status == 200) {
			    resolve(this.response);
		    }
	    }
	    request.send(form_data);
	});
}