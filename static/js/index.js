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
	  categories: [],
	  entries: [],
  },
  methods: {
      add_category: async function(name) {
	      new_category = await add_category(name);
	      name = JSON.parse(new_category)['new_category'];
	      this.categories.push({ name: name });
    	},
    	delete_category: delete_category
    
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
	var form_data = new FormData();
	form_data.append('category_id', category_id);
    var request = new XMLHttpRequest();
    request.open("POST", delete_category_url);
    request.onreadystatechange = function() {
	    if(request.readyState == 4 && request.status == 200) {
		    var success = this.response;
		    console.log(success);
		    var i = app.categories.findIndex(category => category.id == category_id);
		    app.categories.splice(i, 1);
	    }
    }
    request.send(form_data);
}

function get_entries(category_id) {
	var form_data = new FormData();
	form_data.append('category_id', category_id);
    var request = new XMLHttpRequest();
    request.open("POST", get_entries_url);
    request.onreadystatechange = function() {
	    if(request.readyState == 4 && request.status == 200) {
		    console.log(this.response);
		    app.entries = get_heatmap_data(JSON.parse(this.response));
		    cal.update(app.entries);
	    }
    }
    request.send(form_data);
}

function get_heatmap_data(entries_json) {
	var heatmap_data = {};
	for(i = 0; i < entries_json.entries.length; i++) {
		var entry = entries_json.entries[i];
		var epoch_time = new Date(entry.entry_date).getTime().toString()/1000;
		heatmap_data[epoch_time] = entry.entry_value;
	}
	return heatmap_data;
}