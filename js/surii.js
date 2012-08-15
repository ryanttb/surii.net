$(function () {
  if ( navigator.userAgent.indexOf( "3DS" ) >= 0 || window.location.host === "localhost" ) {
    var body = $("body")[0];
    if (body.className.indexOf( "skinny" ) >= 0 ) {
      window.scrollTo(0, 218);
    } else if ( body.className.indexOf( "tbone" ) >= 0 ) {
      window.scrollTo(39, 218);
    }
  }
});
