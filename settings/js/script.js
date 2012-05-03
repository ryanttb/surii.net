$(function () {
  var pigmiis = null;

//  $(".friend-code button").button({
//    icons: {
//      primary: "ui-icon-search"
//    },
//    text: false
//  }).click(function () {
//    $("#pnlSearch").dialog({
//      resizable: false,
//      title: "Search",
//      position: [6, 220]
//    });
//  });

  $(".pigmiis a").live("click", function () {
    var pigmii = $(this).data("pigmii");
    $("input[name='pigmii']").val(pigmii.value.uri);
  });

  $.ajax({
    url: "http://ttb.iriscouch.com/surii/_design/pigmii/_view/pigmii",
    dataType: "jsonp",
    success: function (result) {
      pigmiis = result.rows;

      var pigmiiItems = new jQuery(),
          pigmiiItem;

      $.each(pigmiis, function () {
        pigmiiItem = $('<li><a href="javascript:void(0);" style="background: url(' + this.value.uri + ');" title="' + this.key + '"/></a></li>');
        pigmiiItem.children().data("pigmii", this);
        pigmiiItems = pigmiiItems.add(pigmiiItem);
      });

      $(".loading-pigmii").remove();
      $(".pigmiis").append(pigmiiItems);
    },
    error: function (xhr) {
      alert("We were unable to retrieve Pigmiis, please try refreshing the page in a minute");
    }
  });
});