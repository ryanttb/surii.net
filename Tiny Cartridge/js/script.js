$(function () {
  alert( "Twitter has disabled this service, please check back later." );
  /*
  $.ajax({
    url: "http://api.twitter.com/1/statuses/user_timeline.json?screen_name=tinycartridge",
    dataType: "jsonp",
    success: function (result) {
      var items = "";
      $.each(result, function () {
        var linkPos = this.text.indexOf("http://t.co"),
            link = "javascript:void(0);";

        if (linkPos >= 0) {
          link = this.text.substr(linkPos);
          this.text = this.text.substr(0, linkPos) + " =>";
        }
        items += '<li><a href="' + link + '">' + this.text + '</a></li>';
      });
      $("ul").append(items);
    },
    error: function (xhr) {
      alert("no good: " + xhr.statusText);
    }
  });
  */
});
