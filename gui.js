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

function appendSearchBox(searchHandler) {
  var searchWrapper = $("<div>").text("Type friends name:");
  var searchBox = $("<input>")
     .attr("id", "friend-search-text")
     .keydown(function() {
       var keyword = $("#friend-search-text").val();
       searchHandler(keyword);
     });
  searchWrapper.append(searchBox);
  $("body").append(searchWrapper);
}

function showSearchResult(result, clickHandler) {
  var searchResultWrapper = $("#search-result-wrapper");
  if (searchResultWrapper.length == 0) {
    searchResultWrapper = $("<div>").attr("id", "search-result-wrapper");
    $("body").append(searchResultWrapper);
  } else {
    searchResultWrapper.empty();
  }
  for (var i = 0; i < result.length; i++) {
    var element = $("<div>").text(result[i].name);
    element.click(
        (function(id) {
          return function() {clickHandler(id);}
        })(result[i].id));
    searchResultWrapper.append(element);
  }
}
