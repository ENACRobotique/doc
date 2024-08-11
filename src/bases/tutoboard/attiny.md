# Attiny protocol

> Cette section à été rédigée en anglais et ne sera volontairement pas traduite. En tant que roboticiens vous aurez à lire des datasheet en anglais uniquement. Ce n'est vraiment pas évident au début, alors ça vous servira d'entrainement ; )

The Attiny1616 featured in the tuto board controls 9 leds, and has 2 inputs : a potentiometer and a phototransistor, acting as light sensor.

The protocol documented here allows you to interact with the Attiny.

Packets sent by the nucleo to the Attiny will be called Tx packets. Those sent by the Attiny to the nucleo will be called Rx packets.

Message format
All messages have the same format :

| STX | LEN | PAYLOAD[...] | CHK |
|:---:|:---:|:------------:|:---:|


**STX**
Start of the packet. STX=0xFF.

**LEN**
Byte size of the PAYLOAD and CHK field.

**PAYLOAD**
See Tx packets and Rx Packets.

**CHK**
Checksum for the packet.
CHK = ~(LEN + PAYLOAD[0] + … + PAYLOAD[N])


## Tx packets

Payload of Tx packets is made of a 1 byte instruction optionally followed by parameters.

| STX | LEN | INSTRUCTION | PARAM 1 | ... | PARAM N | CHK |
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|

The instructions are:

**PING**

+ Value: 0x01
+ Parameters: None
+ Description: Ping the Attiny.
+ Answer: PONG message.

**READ**

+ Value: 0x02
+ Parameters: Address (1byte), count (1byte)
+ Description: Request the values of the \<count\> registers, starting at \<address\>. Answer: REG message.

**WRITE**
+ Value: 0x03
+ Parameters: address, value1, value2, …
+ Description: Write the \<values\> at registers starting at \<address\>. The register address is auto-incremented.
+ Answer: None



## Rx packets
Payload of Rx packets is made of a 1 byte identifier optionally followed by data.

**PONG**
+ Value: 0x11
+ Data: no data

**REG**
+ Value: 0x12
+ Data: values

**CONTINUOUS**
+ Value: 0x13
+ Data: 2 bytes defined as follow:

| data_id[1:0] | **RESERVED** | data[9:8] | data[7:0] |
|:-:|:-:|:-:|:-:|

Where `data_id` identify the nature of the data:
0x0: potentiometer value
0x1: light value
0x2: leds status

The data itself spans over 10 bits for potentiometer and light values, and 9 bits for leds status.


## Registers description
| Name    | Address | Rights |
|:-------:|:-------:|:------:|
| POT_L   | 0X00    | R      |
| POT_H   | 0X01    | R      |
| LIGHT_L | 0X02    | R      |
| LIGHT_H | 0X03    | R      |
| LEDS_L  | 0X04    | RW     |
| LEDS_H  | 0X05    | RW     |
| MODE    | 0X06    | RW     |



**POT**

Description: 10 bits potentiometer value.

<div style="display: flex; align-items: flex-start; gap: 20px;">
POT_H 

| RESERVED | POT[9:8] |
|:-:|:-:|

</div>
<div style="display: flex; align-items: flex-start; gap: 20px;">
POT_L 

| POT[7:0] |
|:-:|

</div>

**LIGHT**

Description: 10 bits light value.

<div style="display: flex; align-items: flex-start; gap: 20px;">
LIGHT_H

|RESERVED |LIGHT[9:8]|
|:-:|:-:|

</div>

<div style="display: flex; align-items: flex-start; gap: 20px;">
LIGHT_L

|LIGHT[7:0]|
|:-:|

</div>


**LEDS**

Description: State of the leds. 0 is OFF, 1 is ON.

<div style="display: flex; align-items: flex-start; gap: 20px;">
LEDS_H

| RESERVED | LEDS[8] |
|:-:|:-:|
</div>

<div style="display: flex; align-items: flex-start; gap: 20px;">
LEDS_L

| LEDS[7:0] |
|:-:|

</div>

LEDS default value: 0


**MODE** 

Description: 

+ POTC: if set, the Attiny will send CONTINUOUS potentiometer data.
+ LIGHTC: if set, the Attiny will send CONTINUOUS light data.
+ LEDSC: if set, the Attiny will send CONTINUOUS leds data.
+ CFREQ: frequency at which CONTINUOUS messages will be sent.

| POTC | LIGHTC | LEDSC | CFREQ[1:0] | LEDSMODE[2:0] |
|:-:|:-:|:-:|:-:|:-:|
| | | | 0x0: 50ms (20Hz) | 0x0: MANUAL
| | | | 0x1: Pot value | 0x1: 100ms (10Hz)
| | | | 0x2: Light value | 0x2: 200ms (5Hz)
| | | | 0x3: Pot speed | 0x3: 500ms (2Hz)
| | | | | 0x4: Light speed

Default values:
+ POTC: 0
+ LIGHTC: 0
+ LEDSC: 0
+ CFREQ: 0X01
+ LEDSMODE: 0x1 (Pot value)

