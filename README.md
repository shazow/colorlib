# Colorlib

Colorlib is a collection of color manipulation functions in Javascript.

Released under the MIT license.

## Contents

### hex_to_rgb(hex)

Convert a hex string to an rgb tuple.

    hex_to_rgb("FFFFFF")
    -> [255,255,255]

### rgb_to_hex(rgb)

Convert an rpg tuple to a hex string.

    rgb_to_hex([255,255,255])
    -> "FFFFFF"

### css_to_rgb(s)

Convert a CSS color value to an rgb tuple.

    css_to_rgb("rgb(255, 255, 255)" or "#ffffff")
    -> [255,255,255]

### rgb_to_css(rgb)

Convert an rgb tuple to a CSS color value.

    rgb_to_css([255,255,255])
    -> "rgb(255,255,255)"

### rgb_a_to_css(rgb, a)

Convert an rgb tuple with an alpha value to a CSS color value.

    rgb_a_to_css([255,255,255], 0.5)
    -> "rgba(255,255,255,0.5)"

### rgb_to_hsv(rgb)

Convert an rgb tuple to an hsv tuple.

    rgb_to_hsv([50,50,100])
    -> [170,127.5,100]

### hsv_to_rgb(hsv)

Convert an hsv tuple to an rgb tuple.

    hsv_to_rgb([170,127.5,100])
    -> [50,50,100]

### invert_rgb(rgb)

Invert an rgb value.

    invert_rgb([255, 0, 255])
    -> [0, 255, 0]

### blend(filter, c1, c2)

Given a filter name and two rgb colors, apply the filter on each channel between the two colors and return the resulting color.

    blend('multiply', [100,200,255], [55,125,25])
    -> [22,98,25]

Supported blend filters:

* Multiply
* Screen
* Overlay
* Dodge
* Burn
* Negate

Blend filters allow you to perform color transformations similar to how you would apply a blend mode on a layer in Photoshop. More on blend modes at [Wikipedia:Blend_modes](http://en.wikipedia.org/wiki/Blend_modes).


## Demo

[colorblendy.com](http://colorblendy.com) is powered by colorlib.js


## TODO

* Unit tests

Contributions are welcome. Please fork or open an issue.
