var url = "https://web1-api.herokuapp.com/api/";

async function fetchDataAndBindingView(req, templateId, viewId) {
  var view = document.getElementById(viewId);

  var resp = await fetch(`${url}${req}`);
  var data = await resp.json();

  var source = document.getElementById(templateId).innerHTML;
  var template = Handlebars.compile(source);
  var context = { data };
  view.innerHTML = template(context);
}
