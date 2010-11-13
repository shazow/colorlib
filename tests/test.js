test("rgb <-> hsv", function() {
    var rgb_hsv = [
        [[0, 0, 0], [0, 0, 0]],
        [[0, 0, 255], [255*4/6, 255, 255]],
        [[0, 255, 0], [255*2/6, 255, 255]],
        [[0, 255, 255], [255*3/6, 255, 255]],
        [[255, 0, 0], [0, 255, 255]],
        [[255, 0, 255], [255*5/6, 255, 255]],
        [[255, 255, 0], [255*1/6, 255, 255]],
        [[255, 255, 255], [0, 0, 255]],
        [[100, 100, 100], [0, 0, 100]],
    ];
    for(var i=0, stop=rgb_hsv.length; i<stop; i++) {
        var current = rgb_hsv[i];
        var rgb = current[0], hsv = current[1];

        deepEqual(rgb_to_hsv(rgb), hsv);
        deepEqual(hsv_to_rgb(hsv), rgb);
    }
});
