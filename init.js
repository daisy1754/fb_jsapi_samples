/**
 * If user has already logged in and connected to our app, execute callback.
 * Otherwise, ask user to do so first, and then execute callback. 
 **/
function handleAfterAuthorized(onAuthSuccessed) {
  FB.getLoginStatus(function(response) {
    if (response.status === 'connected') {
      onAuthSuccessed.call();
    } else {
      // User is one of the following:
      // 1) logged in to Facebook, but not allow our app
      // 2) not logged in to Facebook, so that we cannot know if our app is allowed.
      
      appendLoginButton(openLoginDialog.bind(null, onAuthSuccessed));
      displayStatusUpdate("please log in");
    }
  });  
}

function openLoginDialog(onAuthSuccessed) {
  FB.login(function(response) {
      if (response.authResponse) {
        onAuthSuccessed();
	hideLoginButton();
      } else { 
        displayStatusUpdate("Auth is canceled");
      }
    }
  );
}

/**
 * Load SDK Asynchronously, window.fbAsyncInit is called after SDK is loaded.
 **/
function loadFbSdk() {
  (function(d){
    var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement('script'); js.id = id; js.async = true;
    js.src = "//connect.facebook.net/en_US/all.js";
    ref.parentNode.insertBefore(js, ref);
  }(document));
}

/**
 * Must be called in window.fbAsyncInit.
 **/
function fbinit() {
  FB.init({
    appId      : '389187307862090',
    channelUrl : '//daisy-lab.sakura.ne.jp/fb_jsapi_test/channel.html',
    status     : true,
    cookie     : true,
    xfbml      : true
  });
}
