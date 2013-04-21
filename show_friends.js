function fetchAndDisplayFriends(numOfDisplay) {
  FB.api('/me/friends', 
      {fields: ['id', 'name', 'email', 'picture']}, 
      function(response) {
        if (!response || response.error) {
        // TODO: error handling
        return;
      }
      var friends = response.data;
      for (var i = 0; i < friends.length && i < numOfDisplay; i++) {
        if (i == 0) console.log(friends[0]);
        var friend = friends[i];
        appendFriendDom(
            friend.id, 
            friend.name,
            friend.picture.data.url);
      }
    });
}
