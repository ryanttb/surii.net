$(function () {
  var appsSurii = [ "Settings", "Tiny Cartridge" ],
      appsExternal = {
        "OkiwiDS": "http://okiwids.co.cc/3DS/"
      },
      appItems = "",
      i = 0,
      appEx;

  for ( ; i < appsSurii.length; i++ ) {
    appItems += '<li><a href="' + appsSurii[ i ] + '/" title="' + appsSurii[ i ] + '"><img alt="" src="' + appsSurii[ i ] + '/surii-icon.png" /></a></li>';
  }

  $("#appsSurii").html( appItems );

  appItems = "";
  for ( appEx in appsExternal ) {
    appItems += '<li><a href="' + appsExternal[ appEx ] + '" title="' + appEx + '"><img alt="" src="' + appEx + '/surii-icon.png" /></a></li>';
  }

  $("#appsExternal").html( appItems );

  if ( !surii.friendCode ) { 
    alert( "You have not entered your\n3DS Friend Code!\nPlease open Settings.\n\nSome games & apps require\na Friend Code to save data\nor interact with other users." );
  }
});
