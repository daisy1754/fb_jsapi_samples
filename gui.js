function displayStatusUpdate(newStatus) {
  $("#status_text").text(newStatus);
}

function appendLoginButton(clickHandler) {
  $("body")
    .append($("<button id='loginButton'>Login</button>"))
    .click(clickHandler);
}

function hideLoginButton() {
  $("#loginButton").hide();
}
