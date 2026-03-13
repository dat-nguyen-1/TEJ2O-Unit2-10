/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Dat Nguyen
 * Created on: Mar 2026
 * This program turns Neopixels on according to light level.
*/

// Define Neopixel colours as constants
const BLACK: NeoPixelColors = NeoPixelColors.Black
const RED: NeoPixelColors = NeoPixelColors.Red

// Initialize Neopixel strip
const NEOPIXEL_STRIP: neopixel.Strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
NEOPIXEL_STRIP.clear()
NEOPIXEL_STRIP.show()

// Initialize variables
let lightValue: number = 0

input.onButtonPressed(Button.A, function() {
    // Set all Neopixels to BLACK
    NEOPIXEL_STRIP.clear()

    // Get light level
    lightValue = input.lightLevel()

    // Turn on neopixels according to light level
    if (lightValue > 52) {
        NEOPIXEL_STRIP.setPixelColor(0, RED)
    }
    if (lightValue > 104) {
        NEOPIXEL_STRIP.setPixelColor(1, RED)
    }
    if (lightValue > 156) {
        NEOPIXEL_STRIP.setPixelColor(2, RED)
    }
    if (lightValue > 208) {
        NEOPIXEL_STRIP.setPixelColor(3, RED)
    }

    // Send data to Neopixels
    NEOPIXEL_STRIP.show()
})


