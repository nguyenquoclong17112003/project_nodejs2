function register(e) {
  event.preventDefault();
  const username = document.getElementById("input-one").value;
  const email = document.getElementById("input-two").value;
  const password = document.getElementById("input-there").value;

  var user = {
    username: username,
    email: email,
    password: password,
  };

  var json = JSON.stringify(user);
  localStorage.setItem(username, json);
  alert("Đăng Ký Thành Công");
}

function login(e) {
  event.preventDefault();

  const username = document.getElementById("first-input").value;
  const password = document.getElementById("second-input").value;

  var user = localStorage.getItem(username);
  var data = JSON.parse(user);

  if (username == data.username && password == data.password) {
    alert("Bạn đã đăng nhập thành công");
    localStorage.getItem(username);
    window.location.href = "";
  } else {
    alert("Bạn đã đăng nhập thất bại");
  }
}
