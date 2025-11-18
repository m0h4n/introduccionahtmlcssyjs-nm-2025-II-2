
      const c = document.getElementById("myCanvas");
      const ctx = c.getContext("2d");
      ctx.fillStyle = "red";
      ctx.fillRect(c.width / 2, 20, 150, 100);

      //Turn transparency on
      ctx.globalAlpha = 0.2;
      ctx.fillStyle = "yellow";
      ctx.fillRect(c.width / 2 + 30, 50, 150, 100);
      ctx.fillStyle = "green";
      ctx.fillRect(c.width / 2 + 60, 80, 150, 100);

