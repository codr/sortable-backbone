window.Table={Models:{},Collections:{},Views:{},Routers:{},init:function(){"use strict";{var a=new Table.Collections.People;new Table.Views.Table({collection:a,el:$(".container")})}a.fetch()}},$(document).ready(function(){"use strict";Table.init()}),this.JST=this.JST||{},this.JST["app/scripts/templates/table.ejs"]=function(obj){obj||(obj={});{var __t,__p="";_.escape,Array.prototype.join}with(obj)__p+='<table class="table">\n  <tr>\n    <th><a href="" data-sort="Name">Name</a></th>\n    <th><a href="" data-sort="City">City</a></th>\n    <th><a href="" data-sort="Province">Province</a></th>\n    <th><a href="" data-sort="Country">Country</a></th>\n    <th><a href="" data-sort="Birthday">Birthday</a></th>\n    <th><a href="" data-sort="Age">Age</a></th>\n  </tr>\n  ',_.each(items,function(a){__p+="\n    <tr>\n      <td>"+(null==(__t=a.Name)?"":__t)+"</td>\n      <td>"+(null==(__t=a.City)?"":__t)+"</td>\n      <td>"+(null==(__t=a.Province)?"":__t)+"</td>\n      <td>"+(null==(__t=a.Country)?"":__t)+"</td>\n      <td>"+(null==(__t=new Date(a.Birthday).toDateString())?"":__t)+"</td>\n      <td>"+(null==(__t=a.Age)?"":__t)+"</td>\n    </tr>\n  "}),__p+="\n</table>\n";return __p},Table.Models=Table.Models||{},function(){"use strict";Table.Models.People=Backbone.Model.extend({url:"",initialize:function(){},defaults:{},parse:function(a){return a}})}(),Table.Views=Table.Views||{},function(){"use strict";Table.Views.Table=Backbone.View.extend({template:JST["app/scripts/templates/table.ejs"],events:{"click th a":"sortByColumn"},initialize:function(){this.listenTo(this.collection,"sync",this.render),this.listenTo(this.collection,"sort",this.render)},render:function(){this.$el.html(this.template({items:this.collection.toJSON()}))},sortByColumn:function(a){a.preventDefault();var b=this.collection.comparator,c=$(a.target).data().sort;this.collection.comparator=c!==b?c:function(a,b){return a.get(c)>b.get(c)?-1:a.get(c)<b.get(c)?1:0},this.collection.sort()}})}(),Table.Collections=Table.Collections||{},function(){"use strict";Table.Collections.People=Backbone.Collection.extend({model:Table.Models.People,url:"data/people.json",comparator:"Name",parse:function(a){for(var b=0;b<a.length;b++){var c=new Date-new Date(a[b].Birthday);a[b].Age=~~(c/1e3/60/60/24/365.25)}return a}})}();