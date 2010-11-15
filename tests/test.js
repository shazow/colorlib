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

module('HSL conversion');

test("rgb <-> hsv", function() {
    var rgb_hsv = [
        [[0, 0, 0], [0, 0, 0]],
        [[0, 0, 255], [4/6, 1, 1]],
        [[0, 255, 0], [2/6, 1, 1]],
        [[0, 255, 255], [3/6, 1, 1]],
        [[255, 0, 0], [0, 1, 1]],
        [[255, 0, 255], [5/6, 1, 1]],
        [[255, 255, 0], [1/6, 1, 1]],
        [[255, 255, 255], [0, 0, 1]],
        [[255/2, 255/2, 255/2], [0, 0, 1/2]],
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
        [[0, 0, 255], [4/6, 1, 1/2]],
        [[0, 255, 0], [2/6, 1, 1/2]],
        [[0, 255, 255], [3/6, 1, 1/2]],
        [[255, 0, 0], [0, 1, 1/2]],
        [[255, 0, 255], [5/6, 1, 1/2]],
        [[255, 255, 0], [1/6, 1, 1/2]],
        [[255, 255, 255], [0, 0, 1]],
        [[255/2, 255/2, 255/2], [0, 0, 1/2]],
    ];

    for(var i=0, stop=rgb_hsl.length; i<stop; i++) {
        var current = rgb_hsl[i];
        var rgb = current[0], hsl = current[1];

        approx(rgb_to_hsl(rgb), hsl, 'rgb_to_hsl([' + rgb + ']) -> [' + hsl + ']');
        approx(hsl_to_rgb(hsl), rgb, 'hsl_to_rgb([' + hsl + ']) -> [' + rgb + ']');
    }
})

module('Blend Modes');

function run_blend_tests(data, mode) {
    for(var i=0, stop=data.length; i<stop; i++) {
        var current = data[i];
        var c1 = current[0], c2 = current[1], r = current[2];

        deepEqual(blend(mode, c1, c2), r, 'blend("' + mode + '", [' + c1 + '], [' + c2 + '] -> [' + r + ']');
    }
}

test("multiply", function() {
    var c1_c2_r = [
        [[50,100,150],[100,100,100],[20,39,59]],
        [[100,100,100],[50,100,150],[20,39,59]],
        [[123,234,12],[90,40,180],[43,37,8]],
        [[90,40,180],[123,234,12],[43,37,8]],
    ];
    run_blend_tests(c1_c2_r, 'multiply');
});

test("screen", function() {
    var c1_c2_r = [
        [[50,100,150],[100,100,100],[131,162,192]],
        [[100,100,100],[50,100,150],[131,162,192]],
        [[123,234,12],[90,40,180],[170,238,184]],
        [[90,40,180],[123,234,12],[170,238,184]],
    ];
    run_blend_tests(c1_c2_r, 'screen');
});

test("overlay", function() {
    var c1_c2_r = [
        [[50,100,150],[100,100,100],[39,78,127]],
        [[100,100,100],[50,100,150],[39,78,118]],
        [[123,234,12],[90,40,180],[87,220,17]],
        [[90,40,180],[123,234,12],[87,73,112]],
    ];
    run_blend_tests(c1_c2_r, 'overlay');
});

test("dodge", function() {

});

test("burn", function() {

});

test("negate", function() {

});
