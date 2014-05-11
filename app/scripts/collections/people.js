/*global Table, Backbone*/

Table.Collections = Table.Collections || {};

(function () {
    'use strict';

    Table.Collections.People = Backbone.Collection.extend({

        model: Table.Models.People,

        url: 'data/people.json',

        comparator: 'Name',

        parse: function (models) {
            // Add 'Age' as if it came from
            // the original data source.
            for (var i = 0 ; i < models.length; i++) {
                var age = new Date() - new Date(models[i].Birthday);
                models[i].Age = ~~(age / 1000 / 60 / 60 / 24 / 365.25);
            }
            return models;
        }

    });

})();
