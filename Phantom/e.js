// the game engine
function e(document, compressedGame, undefined) {
  var uncompressedGame = compressedGame,

  currentEvents,
  currentGood = 0,

  bg = new Image(),
  context = document.getElementById("c").getContext("2d"),
  contextData,
  bgContext = document.getElementById("C").getContext("2d"),
  bgData;

  bg.onload = function () {
    bgContext.drawImage(bg, 0, 0);
    bgData = bgContext.getImageData(0, 0, bg.width, bg.height).data;

    setScene(0); // 13, 25, 40, 44, 47, 66
  };
  bg.src = uncompressedGame.g;

  $("#links a").live("click", function (e) {
    var link = "e" + $(this).data("link");
    if (currentGood) {
      link += "_" + currentGood;
    }

    if (currentEvents["e"] != undefined) {
      link = "e";
    }

    $("#goods li").removeClass("selectedGood");
    currentGood = 0;

    if (currentEvents[link] != undefined) {
      setScene(currentEvents[link]);
    }
  });

  function setGoods(goods) {
    $("#goods li").remove();
    $.each(goods, function () {
      $('<li data-good="' + this + '"><a href="#">' + uncompressedGame.s[this] + '</a></li>').click(function (e) {
        $("#goods li").removeClass("selectedGood");
        currentGood = $(this).addClass("selectedGood").attr("data-good");
      }).appendTo($("#goods ul"));
    });
  }

  function drawImage(src, dst) {
    contextData = context.getImageData(0, 0, 256, 256);
    for (var y = 0; y < src.Y; y++) {
      for (var x = 0; x < src.X; x++) {
        var y0 = src.y + y;
        var x0 = src.x + x;
        var pixelIndex = y0 * bg.width + x0;
        var arrayIndex = pixelIndex * 4;
        if (bgData[arrayIndex + 3] > 0) {
          for (var mx = 0; mx < dst.X; mx++) {
            for (var my = 0; my < dst.Y; my++) {
              var dstPixelIndex = (dst.y + (y * dst.Y) + my) * 256 + (dst.x + (x * dst.X) + mx);
              var dstArrayIndex = dstPixelIndex * 4;
              contextData.data[dstArrayIndex] = bgData[arrayIndex];
              contextData.data[dstArrayIndex + 1] = bgData[arrayIndex + 1];
              contextData.data[dstArrayIndex + 2] = bgData[arrayIndex + 2];
              contextData.data[dstArrayIndex + 3] = bgData[arrayIndex + 3];
            }
          }
        }
      }
    }
    context.putImageData(contextData, 0, 0);
  }

  function setScene(sceneIndex) {
    currentGood = 0;
    var scene = uncompressedGame.c[sceneIndex];
    if (scene.t) {
      $("h1").text(uncompressedGame.s[scene.t]);
    }
    var text = "", i = 1;
    while (scene["s" + i] != undefined) {
      text += "<p><b>" + uncompressedGame.s[scene["s" + i]] + "</b> " + uncompressedGame.s[scene["t" + i]] + "</p>";
      i++;
    }
    $("#text").html(text);
    if (scene.b != undefined) {
      drawImage({ x: 32 * scene.b, y: 0, X: 32, Y: 32 }, { x: 0, y: 0, X: 8, Y: 8 });
      //context.drawImage(bg, 32 * scene.b, 0, 32, 32, 0, 0, 256, 256);
    }

    if (scene.l) {
      $("#links a").remove();
      $.each(scene.l, function () {
        var link = uncompressedGame.l[this];
        $('<a href="#" title="' + uncompressedGame.s[link.t] + '"/>').data("link", this).css({ left: link.x - 2, top: link.y - 2, width: link.X, height: link.Y }).appendTo("#links");
        if (link.p != undefined) {
          var prop = uncompressedGame.p[link.p];
          drawImage(uncompressedGame.p[link.p], { x: link.x, y: link.y, X: link.X / prop.X, Y: link.Y / prop.Y });
          //context.drawImage(bg, prop.x, prop.y, prop.X, prop.Y, link.x, link.y, link.X, link.Y);
        }
      });
    }

    if (scene.g != undefined) {
      setGoods(scene.g);
    }

    if (scene.e != undefined) {
      currentEvents = uncompressedGame.e[scene.e];
    }
  }
}
