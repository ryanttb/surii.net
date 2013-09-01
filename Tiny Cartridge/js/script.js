$(function () {
  var tcoRegex = /http:\/\/t.co.*?( |$)/; //this.text.match(/http:\/\/t.co.*? /)[0]
  $.ajax({
    url: "tiny_timeline.php",
    dataType: "json",
    success: function (result) {
      var items = "";
      $.each(result, function () {
        var linkSearch = this.text.match( tcoRegex ),
            link = "javascript:void(0);";

        if (linkSearch && linkSearch.length > 0) {
          link = linkSearch[ 0 ];
          if ( link[ link.length - 1 ] == ' ' ) {
            link.length = link.length - 1;
          }
          this.text = this.text.replace( link, '' ) + ' =>'; //.substr(0, linkPos) + " =>";
        }
        items += '<li><a href="' + link + '">' + this.text + '</a></li>';
      });
      $("ul").append(items);
    },
    error: function (xhr) {
      alert("no good: " + xhr.statusText);
    }
  });
});
