/*global Table, $*/


window.Table = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        var people = new Table.Collections.People();
        var table = new Table.Views.Table({collection: people, el: $('.container')});
        people.fetch();
    }
};

$(document).ready(function () {
    'use strict';
    Table.init();
});
