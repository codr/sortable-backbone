/*global Table, Backbone*/

Table.Models = Table.Models || {};

(function () {
    'use strict';

    Table.Models.People = Backbone.Model.extend({

        url: '',

        initialize: function() {
        },

        defaults: {
        },

        parse: function(response)  {
            return response;
        }
    });

})();
