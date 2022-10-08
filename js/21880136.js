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
  localStorage.clear();
  return false;
}

function controlDisplay(isLogin = true) {
  const linkLogin = document.getElementsByClassName("linkLogin");
  const linkLogout = document.getElementsByClassName("linkLogout");

  let displayLogin = "flex";
  let displayLogout = "none";

  if (isLogin) {
    displayLogout = "flex";
    displayLogin = "none";
  }

  for (let i = 0; i < linkLogin.length; i++) {
    linkLogin[i].style.display = displayLogin;
    linkLogout[i].style.display = displayLogout;
  }
  const formAddComment = document.getElementById("form-add-comment");
  if (formAddComment) {
    formAddComment.style.display = displayLogout;
  }
}

function logout() {
  localStorage.clear();
  controlDisplay(false);
}

async function addComment(e) {
  e.preventDefault();

  const dataReq = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    comment: document.getElementById("comment").value,
    blogId: parseInt(document.getElementById("blogId").value),
    agree: document.getElementById("agree").checked,
  };

  const token = localStorage.getItem("token");

  try {
    const resp = await fetch(Url_Authenticate + "/comment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(dataReq),
    });

    if (resp.status === 200) {
      await fetchDataAndBindingView(
        "blogs/" + dataReq.blogId,
        "blogs-detail-template",
        "blogs-list"
      );
    } else {
      const r = await resp.json();
      document.getElementById("message-error").innerHTML = r.message;
    }
  } catch (error) {
    document.getElementById("message-error").innerHTML = error;
  }
}
