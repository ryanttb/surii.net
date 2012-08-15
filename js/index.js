(function () {
  var apps = ["settings","tinycartridge"],
      appItems = "",
      i = 0;

  
  for ( ; i < apps.length; i++ ) {
    appItems += '<li><a href="' + apps[ i ] + '/"><img alt="" src="' + apps[ i ] + '/surii-icon.png" /></a></li>';
  }

  document.getElementById("appsSurii").innerHTML = appItems;
})();
