input.onLogoEvent(TouchButtonEvent.Touched, function () {
    Informatiktheater.startbit_setPixelRGBArgs(StartbitLights.All, StartbitRGBColors.Blue)
    basic.pause(200)
    dfplayermini.press(dfplayermini.playType.Stop)
    Informatiktheater.startbit_clearLight()
})
input.onButtonPressed(Button.A, function () {
    dfplayermini.press(dfplayermini.playType.PlayPrevious)
    Informatiktheater.startbit_setPixelRGBArgs(StartbitLights.Light1, StartbitRGBColors.Green)
    basic.pause(200)
    Informatiktheater.startbit_clearLight()
})
input.onButtonPressed(Button.AB, function () {
    matrix.showText("hallo", 0, neopixel.colors(NeoPixelColors.Red))
})
input.onButtonPressed(Button.B, function () {
    dfplayermini.press(dfplayermini.playType.PlayNext)
    Informatiktheater.startbit_setPixelRGBArgs(StartbitLights.Light2, StartbitRGBColors.Red)
    basic.pause(200)
    Informatiktheater.startbit_clearLight()
})
Informatiktheater.trittmatte_pressed(Informatiktheater.startbit_trittmattePort.port2, function () {
    dfplayermini.press(dfplayermini.playType.Play)
})
let matrix: neopixel.Matrix = null
dfplayermini.connect(SerialPin.P1, SerialPin.P2)
dfplayermini.playFile(46, dfplayermini.isRepeat.No)
Informatiktheater.startbit_setPixelRGBArgs(StartbitLights.Light1, StartbitRGBColors.Blue)
dfplayermini.setVolume(28)
matrix = neopixel.create_matrix(HiwonderPins.P16, matrixSizes.medium_32x8, PowerSource.Intern)
