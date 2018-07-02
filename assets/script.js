$( document ).ready(function() {
    // Get window width and height
    window_w = $( window ).width();
    window_h = $( window ).height();

    // Set tilesize
    tilesize = 120;
    logo_grid_index = 1;

    // Get number of tile in each direction and excess small tile sizes
    num_tiles_w = Math.floor(window_w/tilesize);
    num_tiles_h = Math.floor(window_h/tilesize);
    last_tile_w = window_w - (num_tiles_w * tilesize);
    last_tile_h = window_h - (num_tiles_h * tilesize);

    // Place logo tile
    //$( ".tilegrid" ).append( "<div class='logo-tile'></div>" );


    // Place random tiles for the rest of the page
    for (i = 0; i <= num_tiles_h; i++) {
      for (j = 0; j <= num_tiles_w; j++) {
        // Set default tilesize
        h = tilesize;
        w = tilesize;

        // Set special sizes
        if (j == num_tiles_w) { w = last_tile_w; }
        if (i == num_tiles_h) { h = last_tile_h; }

        // Special case for logo tile
        if (j == logo_grid_index && i == logo_grid_index) {
          $( ".tilegrid" ).append( "<div class='logo-tile'></div>" );
          $( ".logo-tile" ).css({"height": h, "width": w, "background-size": h + "px " + w + "px"});
          continue;
        }

        // Assign random hex string lower than #0f0f0f and add to tilegrid
        bg_color = '#' + Math.floor(Math.random()*32).toString(16).padStart(2, '0').repeat(3);
        $( ".tilegrid" ).append( "<div class='tile' style='background-color:" + bg_color + ";height:" + h +"px;width:" + w + "px;'></div>" );
      }
    }


    // Place random tiles for the rest of the page
    /*
    for (i = 0; i < 100; i++) {
      // Assign random hex string lower than #303030
      var bg_color = '#' + Math.floor(Math.random()*48).toString(16).padStart(2, '0').repeat(3);
      $( ".tilegrid" ).append( "<div class='tile' style='background-color:" + bg_color + ";'></div>" );
    }
    */

});
