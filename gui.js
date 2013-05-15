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
function appendFriendDom(friend, clickHandler) {
  var id = friend.id;
  var name = friend.name;
  var profile_pic_url = friend.picture.data.url;

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
  td.click(clickHandler.bind(null, id));
  tr.append(td);
  table.attr("data-num-of-displayed-friends", numOfDisplayedFriends + 1);
}

function clearFriendsDoms() {
  $("#friends_table").empty();
}

function appendSearchBox(searchHandler) {
  var searchWrapper = $("<div>").text("Type friends name:");
  var searchBox = $("<input>")
     .attr("id", "friend-search-text")
     .keydown(function() {
       var keyword = $("#friend-search-text").val();
       searchHandler(keyword);
     });
  searchWrapper.append(searchBox);
  $("#search_box_wrapper").append(searchWrapper);
}

function showSearchResult(result, clickHandler) {
  clearFriendsDoms();
  for (var i = 0; i < result.length; i++) {
    appendFriendDom(result[i], clickHandler);
  }
}
