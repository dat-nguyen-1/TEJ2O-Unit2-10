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
let neopixelStrip: neopixel.Strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.clear()
neopixelStrip.show()

// Initialize variables
let lightValue: number = 5

input.onButtonPressed(Button.A, function() {
    // Set all Neopixels to BLACK
    neopixelStrip.clear()

    // Get light level
    lightValue = input.lightLevel()
    basic.clearScreen()
    basic.showString(lightValue.toString())

    // Turn on neopixels according to light level
    if (lightValue > 52) {
        neopixelStrip.setPixelColor(0, RED)
    }
    if (lightValue > 104) {
        neopixelStrip.setPixelColor(1, RED)
    }
    if (lightValue > 156) {
        neopixelStrip.setPixelColor(2, RED)
    }
    if (lightValue > 208) {
        neopixelStrip.setPixelColor(3, RED)
    }

    // Send data to Neopixels
    neopixelStrip.show()
})


