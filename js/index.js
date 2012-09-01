$(function () {
  function makeItem( name, item ) {
    return '<li><a href="' + item.url + '" title="' + name + '"><img alt="" src="' + name + '/surii-icon.png" /><div class="app-info" style="display: none;"><h2>' + name + '</h2>' + '<span>' + (item.desc || '') + '</span>' + '</div></a></span></li>';
  }

  var appsSurii = {
        "Settings": {
          url: "Settings/",
          desc: "surii.net settings"
        },
        "Tiny Cartridge": {
          url: "Tiny Cartridge/",
          desc: "3DS news"
        },
        "Phantom": {
          url: "Phantom/",
          desc: "Phantom Menace: Abridged"
        }
      },
      appsExternal = {
        "OkiwiDS": {
          url: "http://okiwids.co.cc/3DS/",
          desc: "web browsing, games, chat"
        }
      },
      appsHacks = {
        "ryanttb": {
          url: "hack/",
          desc: "3DS browser tricks"
        }
      },
      appItems = "",
      i = 0,
      appName,
      selected = null;

  for ( appName in appsSurii ) {
    appItems += makeItem( appName, appsSurii[ appName ] );
  }

  $("#appsSurii").html( appItems );

  appItems = "";
  for ( appName in appsExternal ) {
    appItems += makeItem( appName, appsExternal[ appName ] );
  }

  $("#appsExternal").html( appItems );

  appItems = "";
  for ( appName in appsHacks ) {
    appItems += makeItem( appName, appsHacks[ appName ] );
  }

  $("#appsHacks").html( appItems );

  $( "a" ).click( function( ) {
    if ( this !== selected ) {
      $( selected ).find( ".app-info" ).hide( );
      $( this ).focus( ).find( ".app-info" ).show( );
      selected = this;
      return false;
    }
  } );

  if ( !surii.friendCode ) { 
    alert( "You have not entered your\n3DS Friend Code!\nPlease open Settings.\n\nSome games & apps require\na Friend Code to save data\nor interact with other users." );
  }
});
