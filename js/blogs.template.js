(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['blog-list-template.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <div class=\"mb-4 clearfix\">\r\n    <h3>"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":4,"column":8},"end":{"line":4,"column":16}}}) : helper)))
    + "</h3>\r\n    <p class=\"mb-2 text-black-50\">by\r\n      "
    + alias4(((helper = (helper = lookupProperty(helpers,"author") || (depth0 != null ? lookupProperty(depth0,"author") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author","hash":{},"data":data,"loc":{"start":{"line":6,"column":6},"end":{"line":6,"column":16}}}) : helper)))
    + "\r\n      in\r\n      <a\r\n        href=\"#\"\r\n        onclick='fetchDataAndBindingView(\r\n              \"blogs/categories/"
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"category") : depth0)) != null ? lookupProperty(stack1,"id") : stack1), depth0))
    + "?page=1\",\r\n              \"blog-list-template\",\r\n              \"blogs-list\",\r\n              true\r\n            )'\r\n      >Blog."
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"category") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "</a>\r\n      on\r\n      "
    + alias4((lookupProperty(helpers,"formatDate")||(depth0 && lookupProperty(depth0,"formatDate"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"date") : depth0),{"name":"formatDate","hash":{},"data":data,"loc":{"start":{"line":18,"column":6},"end":{"line":18,"column":25}}}))
    + "\r\n      Hits:\r\n      <a href=\"?req=blogs/"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":20,"column":26},"end":{"line":20,"column":32}}}) : helper)))
    + "\">Comment ("
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"comments") : depth0)) != null ? lookupProperty(stack1,"length") : stack1), depth0))
    + ")</a>\r\n    </p>\r\n    <div class=\"clearfix\">\r\n      <img\r\n        src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"thumbpath") || (depth0 != null ? lookupProperty(depth0,"thumbpath") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thumbpath","hash":{},"data":data,"loc":{"start":{"line":24,"column":13},"end":{"line":24,"column":26}}}) : helper)))
    + "\"\r\n        alt=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"thumbpath") || (depth0 != null ? lookupProperty(depth0,"thumbpath") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thumbpath","hash":{},"data":data,"loc":{"start":{"line":25,"column":13},"end":{"line":25,"column":26}}}) : helper)))
    + "\"\r\n        class=\"float-start img-thumbnail rounded-4 me-3\"\r\n      />\r\n      <p class=\"text-black-50\">\r\n        "
    + alias4(((helper = (helper = lookupProperty(helpers,"summary") || (depth0 != null ? lookupProperty(depth0,"summary") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"summary","hash":{},"data":data,"loc":{"start":{"line":29,"column":8},"end":{"line":29,"column":19}}}) : helper)))
    + "\r\n      </p>\r\n      <a href=\"?req=blogs/"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":31,"column":26},"end":{"line":31,"column":32}}}) : helper)))
    + "\" class=\"readmore btn btn-link p-0 m-0\">Read\r\n        more</a>\r\n    </div>\r\n  </div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <nav aria-label=\"Page navigation\">\r\n    <ul class=\"pagination\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"pages") : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":40,"column":6},"end":{"line":67,"column":15}}})) != null ? stack1 : "")
    + "    </ul>\r\n  </nav>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"isCurrent") : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":41,"column":8},"end":{"line":54,"column":15}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"unless").call(alias1,(depth0 != null ? lookupProperty(depth0,"isCurrent") : depth0),{"name":"unless","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":55,"column":8},"end":{"line":66,"column":19}}})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <li class=\"page-item disabled\" aria-current=\"page\">\r\n            <a\r\n              class=\"page-link\"\r\n              href=\"#\"\r\n              onclick='fetchDataAndBindingView(\r\n                    \"blogs?page="
    + alias4(((helper = (helper = lookupProperty(helpers,"page") || (depth0 != null ? lookupProperty(depth0,"page") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"page","hash":{},"data":data,"loc":{"start":{"line":47,"column":32},"end":{"line":47,"column":40}}}) : helper)))
    + "\",\r\n                    \"blog-list-template\",\r\n                    \"blogs-list\",\r\n                    true\r\n                  );'\r\n            >"
    + alias4(((helper = (helper = lookupProperty(helpers,"page") || (depth0 != null ? lookupProperty(depth0,"page") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"page","hash":{},"data":data,"loc":{"start":{"line":52,"column":13},"end":{"line":52,"column":21}}}) : helper)))
    + "</a>\r\n          </li>\r\n";
},"7":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <li class=\"page-item\"><a\r\n              class=\"page-link\"\r\n              href=\"#\"\r\n              onclick='fetchDataAndBindingView(\r\n                       \"blogs?page="
    + alias4(((helper = (helper = lookupProperty(helpers,"page") || (depth0 != null ? lookupProperty(depth0,"page") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"page","hash":{},"data":data,"loc":{"start":{"line":60,"column":35},"end":{"line":60,"column":43}}}) : helper)))
    + "\",\r\n                      \"blog-list-template\",\r\n                      \"blogs-list\",\r\n                      true\r\n                    );'\r\n            >"
    + alias4(((helper = (helper = lookupProperty(helpers,"page") || (depth0 != null ? lookupProperty(depth0,"page") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"page","hash":{},"data":data,"loc":{"start":{"line":65,"column":13},"end":{"line":65,"column":21}}}) : helper)))
    + "</a></li>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<h1 class=\"mb-4\">Blogs</h1>\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":35,"column":9}}})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = (lookupProperty(helpers,"pagination")||(depth0 && lookupProperty(depth0,"pagination"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"currentPage") : depth0),(depth0 != null ? lookupProperty(depth0,"pageCount") : depth0),{"name":"pagination","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":37,"column":0},"end":{"line":70,"column":15}}})) != null ? stack1 : "");
},"useData":true});
templates['blogs-categories-template.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <li class=\"mb-2\">\r\n      <img src=\"./images/marker1.png\" alt=\"\" class=\"me-2\" />\r\n      <a\r\n        href=\"#\"\r\n        class=\"text-decoration-none text-black-50\"\r\n        onclick='fetchDataAndBindingView(\r\n              \"blogs/categories/"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":10,"column":32},"end":{"line":10,"column":38}}}) : helper)))
    + "?page=1\",\r\n              \"blog-list-template\",\r\n              \"blogs-list\",\r\n              true\r\n            )'\r\n      >\r\n        "
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":16,"column":8},"end":{"line":16,"column":16}}}) : helper)))
    + "\r\n      </a>\r\n    </li>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<h1 class=\"mb-4\">Categories</h1>\r\n<ul class=\"m-0 p-0\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":3,"column":2},"end":{"line":19,"column":11}}})) != null ? stack1 : "")
    + "</ul>";
},"useData":true});
templates['blogs-detail-template.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <div class=\"mb-4 clearfix\">\r\n    <h3>"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":3,"column":8},"end":{"line":3,"column":16}}}) : helper)))
    + "</h3>\r\n    <p class=\"mb-2 text-black-50\">by\r\n      "
    + alias4(((helper = (helper = lookupProperty(helpers,"author") || (depth0 != null ? lookupProperty(depth0,"author") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author","hash":{},"data":data,"loc":{"start":{"line":5,"column":6},"end":{"line":5,"column":16}}}) : helper)))
    + "\r\n      in\r\n      <a href=\"#\">Blog."
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"category") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "</a>\r\n      on\r\n      "
    + alias4((lookupProperty(helpers,"formatDate")||(depth0 && lookupProperty(depth0,"formatDate"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"date") : depth0),{"name":"formatDate","hash":{},"data":data,"loc":{"start":{"line":9,"column":6},"end":{"line":9,"column":25}}}))
    + "\r\n      Hits:\r\n      <a href=\"#\">Comment ("
    + alias4(alias5(((stack1 = (depth0 != null ? lookupProperty(depth0,"comments") : depth0)) != null ? lookupProperty(stack1,"length") : stack1), depth0))
    + ")</a>\r\n    </p>\r\n    <div class=\"clearfix\">\r\n      <img\r\n        src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"thumbpath") || (depth0 != null ? lookupProperty(depth0,"thumbpath") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thumbpath","hash":{},"data":data,"loc":{"start":{"line":15,"column":13},"end":{"line":15,"column":26}}}) : helper)))
    + "\"\r\n        alt=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"thumbpath") || (depth0 != null ? lookupProperty(depth0,"thumbpath") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thumbpath","hash":{},"data":data,"loc":{"start":{"line":16,"column":13},"end":{"line":16,"column":26}}}) : helper)))
    + "\"\r\n        class=\"float-start img-thumbnail rounded-4 me-3\"\r\n      />\r\n      <div class=\"text-black-50\">\r\n        "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":20,"column":8},"end":{"line":20,"column":25}}}) : helper))) != null ? stack1 : "")
    + "\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <h3>Leave your comments</h3>\r\n  <h3>Post comment as a guest</h3>\r\n  <form class=\"mb-3 row\" onsubmit=\"addComment(event)\" id=\"form-add-comment\">\r\n    <input type=\"hidden\" value=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":27,"column":32},"end":{"line":27,"column":38}}}) : helper)))
    + "\" id=\"blogId\" />\r\n    <div class=\"col\">\r\n      <label\r\n        for=\"name\"\r\n        class=\"col-sm-2 col-form-label text-black-50\"\r\n      >Name(Required)</label>\r\n      <div class=\"col-sm-10\">\r\n        <input\r\n          type=\"text\"\r\n          class=\"form-control\"\r\n          id=\"name\"\r\n          name=\"name\"\r\n          required\r\n        />\r\n      </div>\r\n    </div>\r\n    <div class=\"col mb-4\">\r\n      <label\r\n        for=\"email\"\r\n        class=\"col-sm-2 col-form-label text-black-50\"\r\n      >Email</label>\r\n      <div class=\"col-sm-10\">\r\n        <input\r\n          type=\"email\"\r\n          class=\"form-control\"\r\n          id=\"email\"\r\n          pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\"\r\n          required\r\n          name=\"email\"\r\n        />\r\n      </div>\r\n    </div>\r\n    <div class=\"mb-4\">\r\n      <textarea\r\n        class=\"form-control\"\r\n        id=\"comment\"\r\n        style=\"height: 100px\"\r\n        placeholder=\"Enter your message\"\r\n        required\r\n        name=\"comment\"\r\n      ></textarea>\r\n    </div>\r\n    <div class=\"d-flex justify-content-between align-items-center mb-4\">\r\n      <div class=\"form-check\">\r\n        <input\r\n          class=\"form-check-input\"\r\n          type=\"checkbox\"\r\n          id=\"argee\"\r\n          required\r\n          name=\"agree\"\r\n        />\r\n        <label class=\"form-check-label text-black-50\" for=\"argee\">\r\n          Agree to term and conditions\r\n        </label>\r\n      </div>\r\n      <button type=\"submit\" class=\"btn btn-link p-0 m-0\">Submit Comment</button>\r\n    </div>\r\n    <div class=\"text-danger text-center\" id=\"message-error\"></div>\r\n    <div\r\n      class=\"text-uppercase bg-black bg-opacity-75 text-white-50 py-1\"\r\n      id=\"idComment\"\r\n    >comments</div>\r\n  </form>\r\n  <div id=\"idComment\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"comments") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":91,"column":4},"end":{"line":101,"column":13}}})) != null ? stack1 : "")
    + "  </div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <p class=\"text-black-50\">\r\n        "
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":93,"column":8},"end":{"line":93,"column":16}}}) : helper)))
    + "\r\n        -\r\n        "
    + alias4((lookupProperty(helpers,"formatDate")||(depth0 && lookupProperty(depth0,"formatDate"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"date") : depth0),{"name":"formatDate","hash":{},"data":data,"loc":{"start":{"line":95,"column":8},"end":{"line":95,"column":27}}}))
    + "\r\n      </p>\r\n      <p class=\"text-black-50\">\r\n        "
    + alias4(((helper = (helper = lookupProperty(helpers,"summary") || (depth0 != null ? lookupProperty(depth0,"summary") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"summary","hash":{},"data":data,"loc":{"start":{"line":98,"column":8},"end":{"line":98,"column":19}}}) : helper)))
    + "\r\n      </p>\r\n      <hr />\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"data") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":103,"column":9}}})) != null ? stack1 : "");
},"useData":true});
})();