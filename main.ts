function turnLeft () {
    kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor1, kitronik_klip_motor.MotorDirection.Reverse, 100)
    kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor2, kitronik_klip_motor.MotorDirection.Forward, 100)
}
input.onButtonPressed(Button.A, function () {
    driveForward()
    basic.pause(travelDistance)
    turnRight()
    basic.pause(turnTime)
    driveForward()
    basic.pause(travelDistance)
    turnLeft()
    basic.pause(turnTime)
    driveForward()
    basic.pause(travelDistance)
    basic.pause(travelDistance)
    turnLeft()
    basic.pause(turnTime)
    driveForward()
    basic.pause(travelDistance)
    turnRight()
    basic.pause(turnTime)
    driveForward()
    basic.pause(travelDistance)
    Stop()
})
function turnRight () {
    kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor1, kitronik_klip_motor.MotorDirection.Forward, 100)
    kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor2, kitronik_klip_motor.MotorDirection.Reverse, 100)
}
function driveForward () {
    kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor1, kitronik_klip_motor.MotorDirection.Forward, 100)
    kitronik_klip_motor.motorOn(kitronik_klip_motor.Motors.Motor2, kitronik_klip_motor.MotorDirection.Forward, 100)
}
function Stop () {
    kitronik_klip_motor.motorOff(kitronik_klip_motor.Motors.Motor1)
    kitronik_klip_motor.motorOff(kitronik_klip_motor.Motors.Motor2)
}
let turnTime = 0
let travelDistance = 0
travelDistance = 1500
turnTime = 500
