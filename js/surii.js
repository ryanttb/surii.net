$(function () {
  var $body = $("body");
  if ($body.hasClass("skinny") || $body.hasClass("skinnyscroll")) {
    window.scrollTo(0, 218);
  } else if ($body.hasClass("tbone") || $body.hasClass("tbonescroll")) {
    window.scrollTo(39, 218);
  }
});
