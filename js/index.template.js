(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['detail-template.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <div class=\"container\" id=\"content-detail\">\r\n    <h1 class=\"text-black-10\">"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":4,"column":30},"end":{"line":4,"column":38}}}) : helper)))
    + "</h1>\r\n    <p>"
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":5,"column":7},"end":{"line":5,"column":24}}}) : helper))) != null ? stack1 : "")
    + "</p>\r\n  </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"container-fluid mb-3\" id=\"small-banner\"></div>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":7,"column":9}}})) != null ? stack1 : "");
},"useData":true});
templates['news-template.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"col col-lg-4 col-md-6 col-sm-12 py-2\">\r\n      <div class=\"float-start me-4\">\r\n        <div class=\"date text-white rounded-4 text-center\">\r\n          "
    + alias4(((helper = (helper = lookupProperty(helpers,"date") || (depth0 != null ? lookupProperty(depth0,"date") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data,"loc":{"start":{"line":7,"column":10},"end":{"line":7,"column":18}}}) : helper)))
    + "\r\n        </div>\r\n        <a href=\"?req=news/"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":9,"column":27},"end":{"line":9,"column":33}}}) : helper)))
    + "\" class=\"readmore btn btn-link p-0\">Read more</a>\r\n      </div>\r\n      <div>\r\n        <h3>"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":12,"column":12},"end":{"line":12,"column":20}}}) : helper)))
    + "</h3>\r\n        <p class=\"text-black-50\">\r\n          "
    + alias4(((helper = (helper = lookupProperty(helpers,"summary") || (depth0 != null ? lookupProperty(depth0,"summary") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"summary","hash":{},"data":data,"loc":{"start":{"line":14,"column":10},"end":{"line":14,"column":21}}}) : helper)))
    + "\r\n        </p>\r\n      </div>\r\n    </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<h1 class=\"text-black-50 py-4\">News</h1>\r\n<div class=\"row\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":2},"end":{"line":18,"column":11}}})) != null ? stack1 : "")
    + "</div>";
},"useData":true});
templates['product-template.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"col col-lg-3 col-md-6 col-sm-12\">\r\n      <img\r\n        src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"imagepath") || (depth0 != null ? lookupProperty(depth0,"imagepath") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imagepath","hash":{},"data":data,"loc":{"start":{"line":5,"column":13},"end":{"line":5,"column":26}}}) : helper)))
    + "\"\r\n        alt=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":6,"column":13},"end":{"line":6,"column":21}}}) : helper)))
    + "\"\r\n        onmouseenter=\"setActiveImage(this,`"
    + alias4(((helper = (helper = lookupProperty(helpers,"imagepath") || (depth0 != null ? lookupProperty(depth0,"imagepath") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imagepath","hash":{},"data":data,"loc":{"start":{"line":7,"column":43},"end":{"line":7,"column":56}}}) : helper)))
    + "`, true)\"\r\n        onmouseleave=\"setActiveImage(this,`"
    + alias4(((helper = (helper = lookupProperty(helpers,"imagepath") || (depth0 != null ? lookupProperty(depth0,"imagepath") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imagepath","hash":{},"data":data,"loc":{"start":{"line":8,"column":43},"end":{"line":8,"column":56}}}) : helper)))
    + "`,  false)\"\r\n      />\r\n      <h3>"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":10,"column":10},"end":{"line":10,"column":18}}}) : helper)))
    + "</h3>\r\n      <p>\r\n        "
    + alias4(((helper = (helper = lookupProperty(helpers,"summary") || (depth0 != null ? lookupProperty(depth0,"summary") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"summary","hash":{},"data":data,"loc":{"start":{"line":12,"column":8},"end":{"line":12,"column":19}}}) : helper)))
    + "\r\n      </p>\r\n      <a href=\"?req=products/"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":14,"column":29},"end":{"line":14,"column":35}}}) : helper)))
    + "\" class=\"readmore btn btn-link pt-0\">Read\r\n        more</a>\r\n    </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"row text-center py-5\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":2},"end":{"line":17,"column":11}}})) != null ? stack1 : "")
    + "</div>";
},"useData":true});
})();