var url = "https://web1-api.herokuapp.com/api/";

async function fetchDataAndBindingView(
  req,
  templateId,
  viewId,
  paginationData
) {
  var view = document.getElementById(viewId);

  var resp = await fetch(`${url}${req}`);
  var data = await resp.json();
  var source = document.getElementById(templateId).innerHTML;
  var template = Handlebars.compile(source);
  var context = paginationData ? data : { data };
  if (paginationData) {
    const array = req.split("?");
    const pageString = array[1].split("=");
    const currentPage = parseInt(pageString[1]);
    context.currentPage = currentPage;
  }
  view.innerHTML = template(context);
}
