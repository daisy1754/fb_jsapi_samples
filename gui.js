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

NUM_OF_COLUMN = 5;
function appendFriendDom(id, name, profile_pic_url) {
  var table = $("#friends_table");
  var numOfDisplayedFriends 
      = parseInt(table.attr("data-num-of-displayed-friends"));
  var rowId = parseInt(Math.floor(numOfDisplayedFriends / 5));
  if (numOfDisplayedFriends % NUM_OF_COLUMN == 0) {
    var tr = $("<tr id='row" + rowId + "'>");
    table.append(tr);
  } else {
    var tr = $("tr#row" + rowId);
  }
  var td = $("<td>")
      .append("<img src='" + profile_pic_url + "'>")
      .append("<div>id: " + id + "</div>")
      .append("<div>name: " + name + "</div>");
  tr.append(td);
  table.attr("data-num-of-displayed-friends", numOfDisplayedFriends + 1);
}
