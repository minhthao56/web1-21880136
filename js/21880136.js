const url = "https://web1-api.herokuapp.com/api/";

const Url_Authenticate = "https://web1-api.herokuapp.com/api/users";

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

async function getAuthenticate(username, password) {
  const resp = await fetch(Url_Authenticate + "/authenticate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(username, password),
  });

  const data = await resp.json();

  if (resp.status === 200) {
    return data.token;
  }

  throw new Error(data.message);
}
