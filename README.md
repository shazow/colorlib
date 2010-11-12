# Colorlib

Colorlib is a collection of color manipulation functions in Javascript. Colorlib was originally created for [colorblendy.com](http://colorblendy.com).

Created by Andrey Petrov, released under the MIT license.

## Contents

### hex_to_rgb(hex)
    hex_to_rgb("FFFFFF")
    -> [255,255,255]
Convert a hex string to an rgb tuple.

### rgb_to_hex(rgb)
    rgb_to_hex([255,255,255])
    -> "FFFFFF"
Convert an rpg tuple to a hex string.

### css_to_rgb(s)
    css_to_rgb("rgb(255, 255, 255)" or "#ffffff")
    -> [255,255,255]
Convert a CSS color value to an rgb tuple.

### rgb_to_css(rgb)
    rgb_to_css([255,255,255])
    -> "rgb(255,255,255)"
Convert an rgb tuple to a CSS color value.

### rgb_a_to_css(rgb, a)
    rgb_a_to_css([255,255,255], 0.5)
    -> "rgba(255,255,255,0.5)"
Convert an rgb tuple with an alpha value to a CSS color value.

### rgb_to_hsv(rgb)
    rgb_to_hsv([50,50,100])
    -> [170,127.5,100]
Convert an rgb tuple to an hsv tuple.

### hsv_to_rgb(hsv)
    hsv_to_rgb([170,127.5,100])
    -> [50,50,100]
Convert an hsv tuple to an rgb tuple.

### invert_rgb(rgb)
    invert_rgb([255, 0, 255])
    -> [0, 255, 0]
Invert an rgb value.

### blend(filter, c1, c2)
    blend('multiply', [100,200,255], [55,125,25])
    -> [22,98,25]
Given a filter name and two rgb colors, apply the filter on each channel between the two colors and return the resulting color.

Supported blend filters:
* Multiply
* Screen
* Overlay
* Dodge
* Burn
* Negate

Blend filters allow you to perform color transformations similar to how you would apply a blend mode on a layer in Photoshop. More on blend modes at (Wikipedia:Blend_modes)[http://en.wikipedia.org/wiki/Blend_modes].

## TODO

* Unit tests

Contributions are welcome. Please fork or open an issue.
