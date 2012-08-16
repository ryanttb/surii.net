(function ( window, undefined ) {
  function _createCookie( appName, value ) {
    // create a cookie that will last for a while
    document.cookie = "surii-" + appName + "=" + JSON.stringify( value ) + "; expires=Fri, 1 Jan 2100 00:00:00 UTC; path=/";
  }

  function _readCookie( appName ) {
    // read a cookie
    var nameEQ = "surii-" + appName + "=",
        ca = document.cookie.split(';'),
        i = 0;

    for ( i = 0; i < ca.length; i++ ) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return JSON.parse( c.substring(nameEQ.length, c.length) );
    }
    return null;
  }

  // a local copy of our main object
  var surii = {
    friendCode: "", //< current player's friend code

    nickName: "", //< current player's nick name

    load: function( ) {
      // get the save file for the current app
    },

    save: function( value ) {
      // replace the save file for the current app
    },

    _saveSettings: function( ) {
      // save user settings to storage
      // can only be called by the settings app
      _createCookie( "settings", {
        friendCode: this.friendCode,
        nickName: this.nickName
      } );
    }
  };

  // expose surii to the global object
  window.surii = surii;

  // read settings from storage
  var settings = _readCookie( "settings" );
  if ( settings ) {
    $.extend( surii, settings );
  }

  // handle predefined surii.net buttons
  $( "body" ).on( "click", ".surii-close", function( ) {
    window.history.back( );
  } );

  // slide things into place if needed
  if ( navigator.userAgent.indexOf( "3DS" ) >= 0 || window.location.host === "localhost" ) {
    var body = $("body")[0];
    if (body.className.indexOf( "skinny" ) >= 0 ) {
      window.scrollTo(0, 218);
    } else if ( body.className.indexOf( "tbone" ) >= 0 ) {
      window.scrollTo(39, 218);
    }
  }
})( window );
