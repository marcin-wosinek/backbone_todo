(function ($) {
  $(function () {
    'use strict';

    var app = {};

    // Our basic **Todo** model has `pid`, `uid`, and `text` attributes.
    app.Todo = Backbone.Model.extend({
      // Default attributes for the todo
      defaults: {
        pid: '',
      uid: 0,
      text: ''
      }
    });

    console.log('test-2');
  });
})(jQuery);
