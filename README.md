# Colorlib

Colorlib is a collection of color manipulation functions in Javascript. Colorlib was originally created for [colorblendy.com](http://colorblendy.com).

Created by Andrey Petrov, released under the MIT license.

## Contents

* hex_to_rgb(hex)
  Convert a hex string to an rgb tuple.
  Example: "FFFFFF" -> [255,255,255]

* rgb_to_hex(rgb)
  Convert an rpg tuple to a hex string.
  Example: [255,255,255] -> "FFFFFF"

* css_to_rgb(s)
  Convert a CSS color value to an rgb tuple.
  Example: "rgb(255, 255, 255)" or "#ffffff" -> [255,255,255]

* rgb_to_css(rgb)
  Convert an rgb tuple to a CSS color value.
  Example: [255,255,255] -> "rgb(255,255,255)"

* rgb_a_to_css(rgb, a)
  Convert an rgb tuple with an alpha value to a CSS color value.
  Example: [255,255,255], 0.5 -> "rgba(255,255,255,0.5)"

* rgb_to_hsv(rgb)
  Convert an rgb tuple to an hsv tuple.
  Example: [50,50,100] -> [170,127.5,100]

* hsv_to_rgb(hsv)
  Convert an hsv tuple to an rgb tuple.
  Example: [170,127.5,100] -> [50,50,100]

* invert_rgb(rgb)
  Invert an rgb value.
  Example: [255, 0, 255] -> [0, 255, 0]

* blend(filter, c1, c2)
  Given a filter name and two rgb colors, apply the filter on each channel between the two colors and return the resulting color.
  Example: 'multiply', [100,200,255], [55,125,25] -> [22,98,25]

  Supported blend filters:
  * Multiply
  * Screen
  * Overlay
  * Dodge
  * Burn
  * Negate


## TODO

* Unit tests

Contributions are welcome. Please fork or open an issue.
