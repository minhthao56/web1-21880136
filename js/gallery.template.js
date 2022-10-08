(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['category-image-template.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <div class=\"col col-lg-3\">\r\n            <img\r\n              src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"thumbpath") || (depth0 != null ? lookupProperty(depth0,"thumbpath") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thumbpath","hash":{},"data":data,"loc":{"start":{"line":5,"column":19},"end":{"line":5,"column":32}}}) : helper)))
    + "\"\r\n              alt=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":6,"column":19},"end":{"line":6,"column":27}}}) : helper)))
    + "\"\r\n              class=\"img-thumbnail mb-3\"\r\n            />\r\n          </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"row\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":8},"end":{"line":10,"column":17}}})) != null ? stack1 : "")
    + "      </div>";
},"useData":true});
templates['nav-category-template.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <li class=\"nav-item\">\r\n      <a\r\n        class=\"nav-link p-0 pe-4\"\r\n        href=\"#\"\r\n        onclick='fetchDataAndBindingView(\r\n                `gallery/categories/"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":22,"column":36},"end":{"line":22,"column":42}}}) : helper)))
    + "`,\r\n                \"category-image-template\",\r\n                \"images-category\"\r\n              ); disableLink(this)'\r\n      >"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":26,"column":7},"end":{"line":26,"column":15}}}) : helper)))
    + "</a>\r\n    </li>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<h1>Gallery</h1>\r\n<p class=\"text-black-50\">Filter by category:</p>\r\n\r\n<ul class=\"nav justify-content-start\">\r\n  <li class=\"nav-item\">\r\n    <a\r\n      class=\"nav-link p-0 pe-4 disabled\"\r\n      href=\"#\"\r\n      onclick='fetchDataAndBindingView(\r\n              \"gallery\",\r\n              \"category-image-template\",\r\n              \"images-category\"\r\n            ); disableLink(this);'\r\n    >Show all</a>\r\n  </li>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":2},"end":{"line":28,"column":11}}})) != null ? stack1 : "")
    + "</ul>";
},"useData":true});
})();