const url = "https://web1-api.herokuapp.com/api/";

const Url_Authenticate = "https://web1-api.herokuapp.com/users";

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
    body: JSON.stringify({ username, password }),
  });

  const data = await resp.json();

  if (resp.status === 200) {
    return data.token;
  }

  throw new Error(data.message);
}

async function login(e) {
  console.log({ e });
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  try {
    const token = await getAuthenticate(username, password);
    localStorage.setItem("token", token);
    document.getElementsByClassName("btn-close")[0].click();
    await checkLogin();
  } catch (error) {
    document.getElementById("errorMessageLogin").innerText = error;
  }
}

async function checkLogin() {
  const isLogin = await verifyToken();
  controlDisplay(isLogin);
}

async function verifyToken() {
  const token = localStorage.getItem("token");

  if (!token) {
    return false;
  }

  const resp = await fetch(Url_Authenticate + "/verify", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + token,
    },
  });

  if (resp.status === 200) {
    return true;
  }
  return false;
}

function controlDisplay(isLogin = true) {
  const linkLogin = document.getElementsByClassName("linkLogin");
  const linkLogout = document.getElementsByClassName("linkLogout");

  let displayLogin = "block";
  let displayLogout = "none";

  if (isLogin) {
    displayLogout = "block";
    displayLogin = "none";
  }

  for (let i = 0; i < linkLogin.length; i++) {
    linkLogin[i].style.display = displayLogin;
    linkLogout[i].style.display = displayLogout;
  }
}

function logout() {
  localStorage.clear();
  controlDisplay(false);
}
