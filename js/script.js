$(function () {
  var apps = ["settings","tinycartridge"],
      appItems = "";

  $.each(apps, function () {
    appItems += '<li><a href="' + this + '/"><img alt="" src="' + this + '/surii-icon.png" /></a></li>';
  });

  $(".apps ul").html(appItems);
});
