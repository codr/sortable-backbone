/*global Table, Backbone, JST*/

Table.Views = Table.Views || {};

(function () {
    'use strict';

    Table.Views.Table = Backbone.View.extend({

        template: JST['app/scripts/templates/table.ejs'],

        events: {
          'click th a': 'sortByColumn'
        },

        initialize: function () {
            this.listenTo(this.collection, 'sync', this.render);
            this.listenTo(this.collection, 'sort', this.render);
        },

        render: function () {
            this.$el.html(this.template({items: this.collection.toJSON()}));
        },

        sortByColumn: function(e) {
            e.preventDefault();
            var currentSort = this.collection.comparator;
            var desiredSort = $(e.target).data().sort;

            if (desiredSort !== currentSort) {
                this.collection.comparator = desiredSort;
            } else {
                this.collection.comparator = function (first, second) {
                  if (first.get(desiredSort) > second.get(desiredSort))
                      return -1;
                  if (first.get(desiredSort) < second.get(desiredSort))
                      return 1;
                  return 0;
                }
            }
            this.collection.sort();
        }

    });

})();
