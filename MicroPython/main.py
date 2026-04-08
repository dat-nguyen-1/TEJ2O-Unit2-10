"""
Created by: Dat Nguyen
Created on: Apr 2026
This module turns Neopixels on according to light level.
"""

from microbit import *
from neopixel import NeoPixel

# define color constants
RED = (255, 0, 0)

# initialize neopixel strip
NEOPIXEL_STRIP = NeoPixel(pin16, 4)
NEOPIXEL_STRIP.clear()
NEOPIXEL_STRIP.show()

# initialize display
display.clear()
display.show(Image.HAPPY)

# main loop
while True:
    # handle button A press
    if button_a.was_pressed():
        # clear neopixels
        NEOPIXEL_STRIP.clear()

        # get light level
        light_level = display.read_light_level()

        # turn on neopixels according to light level
        if light_level > 52:
            NEOPIXEL_STRIP[0] = RED

        if light_level > 104:
            NEOPIXEL_STRIP[1] = RED

        if light_level > 156:
            NEOPIXEL_STRIP[2] = RED

        if light_level > 208:
            NEOPIXEL_STRIP[3] = RED

        # show Neopixels
        NEOPIXEL_STRIP.show()

        # display light level
        display.scroll(str(light_level))

        # reset display
        display.show(Image.HAPPY)
                
