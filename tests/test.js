function approx(actual, expected, message) {
    var diff = 0;
    for(var i=0, stop=actual.length; i<stop; i++) {
        diff = Math.abs(1 - actual[i]/expected[i]);
        if(diff > 0.1) {
            deepEqual(actual, expected, message);
            return;
        }
    }
    ok(true, message);
}

module('HSV conversion');

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

        approx(rgb_to_hsv(rgb), hsv, 'rgb_to_hsv([' + rgb + ']) -> [' + hsv + ']');
        approx(hsv_to_rgb(hsv), rgb, 'hsv_to_rgb([' + hsv + ']) -> [' + rgb + ']');
    }
});

module('HSL conversion');

test("rgb <-> hsl", function() {
    var rgb_hsl = [
        [[0, 0, 0], [0, 0, 0]],
        [[0, 0, 255], [255*4/6, 255, 255/2]],
        [[0, 255, 0], [255*2/6, 255, 255/2]],
        [[0, 255, 255], [255*3/6, 255, 255/2]],
        [[255, 0, 0], [0, 255, 255/2]],
        [[255, 0, 255], [255*5/6, 255, 255/2]],
        [[255, 255, 0], [255*1/6, 255, 255/2]],
        [[255, 255, 255], [0, 0, 255]],
        [[100, 100, 100], [0, 0, 100]],
    ];

    for(var i=0, stop=rgb_hsl.length; i<stop; i++) {
        var current = rgb_hsl[i];
        var rgb = current[0], hsl = current[1];

        approx(rgb_to_hsl(rgb), hsl, 'rgb_to_hsl([' + rgb + ']) -> [' + hsl + ']');
        approx(hsl_to_rgb(hsl), rgb, 'hsl_to_rgb([' + hsl + ']) -> [' + rgb + ']');
    }
})
