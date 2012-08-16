$(function () {
  var apps = ["settings","tinycartridge"],
      appItems = "",
      i = 0;

  for ( ; i < apps.length; i++ ) {
    appItems += '<li><a href="' + apps[ i ] + '/"><img alt="" src="' + apps[ i ] + '/surii-icon.png" /></a></li>';
  }

  $("#appsSurii").html( appItems );

  if ( !surii.friendCode ) {
    alert( "You have not entered your\n3DS Friend Code!\nPlease open Settings.\n\nSome games & apps require\na Friend Code to save data\nor interact with other users." );
  }
});
