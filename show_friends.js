if (typeof sample !== "object") {
  sample = {};
}
sample.friends = [];

function fetchAndDisplayFriends(numOfDisplay) {
  FB.api('/me/friends', 
      {fields: ['id', 'name', 'email', 'picture']}, 
      function(response) {
        if (!response || response.error) {
        // TODO: error handling
        return;
      }
      sample.friends = response.data;
      for (var i = 0; i < sample.friends.length && i < numOfDisplay; i++) {
        appendFriendDom(sample.friends[i]);
      }
      appendSearchBox(searchFriends);
    });
}

function searchFriends(keyword) {
  var searchResult = [];
  for (var i = 0; i < sample.friends.length; i++) {
    if (startWith(sample.friends[i].name, keyword)) {
      searchResult.push(sample.friends[i]);
    }
  }
  showSearchResult(searchResult, sendMessageToId);
}

function startWith(text, subText) {
  return text.indexOf(subText) == 0;
}

function sendMessageToId(destinationId) {
  FB.ui({
       app_id:'389187307862090',
       method: 'send',
       name: "Hachiko!",
       link: 'hachiko-schedule.appspot.com',
       to:destinationId,
       description:'This is hachiko'
  });
}
