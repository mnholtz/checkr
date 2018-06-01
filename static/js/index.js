console.log('help');

var category = new Vue({
  el: '#category',
  delimiters: ['${', '}'],
  data: {
    message: 'category name'
  }
});

Vue.config.delimiters = ['${', '}'];