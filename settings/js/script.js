$(function () {
  function isValidFriendCode( friendCode ) {
    return (/[0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]/).test( friendCode );
  }

  $("#friendCode").val( surii.friendCode ).blur( function( ) {
    if ( isValidFriendCode( $( this ).val( ) ) ) {
      surii.friendCode = $( this ).val( );
      surii._saveSettings( );
    } else {
      alert( "Please enter a valid\nFriend Code" );
      $( this ).focus( );
    }
  } );

  $("#nickName").val( surii.nickName ).blur( function( ) {
    surii.nickName = $( this ).val( );
    surii._saveSettings( );
  } );

  $(window).bind("unload", function() {
    if ( isValidFriendCode( $( "#friendCode" ).val( ) ) ) {
      surii.friendCode = $( "#friendCode" ).val( );
    }

    surii.nickName = $( "#nickName" ).val( );

    surii._saveSettings( );
  });
});
