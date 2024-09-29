# Microcontrôleurs

On attaque une des briques les plus complexes de notre aventure. Par complexe j'entends copmpléxité technologique. Les microcontrôleurs sont des mini calculateurs programmables qui permettent de commander de l'électronique, des capteurs, des actionneurs. On les retrouve partout dans notre quotidien. Je vous conseille de commencer par regarder ces deux vidéos:
+ [What is a microcontroller?](https://www.youtube.com/watch?v=EeRXSKfaYjA)
+ [What is a microcontroller and how microcontroller works](https://www.youtube.com/watch?v=JwCTkm43CxQ)

Vous connaissez peut-être les cartes [Arduino](https://www.arduino.cc/)? Ce sont des microcontrôleurs très simplifiés qui permettent d'apprendre beaucoup plus facilement à les utiliser. Ils sont très begginner friendly avec une grande communauté qui répondra à toutes vos questions.

Au club on utilise surtout des STM32, des ESP32 ou des TEENSY. Mais nous avons encore d'autres candidats comme l'attiny...

En ce qui concerne l'utilisation des microcontrôleurs on ne peut comprendre qu'en apprenant, apprendre qu'en essayant. Ainsi nous vous conseillons surtout d'essayer sois avec des kits arduino, soit directement avec la [Carte tuto](../tutoboard/tutoboard.md) conçue à cet effet par le club.

### Comment choisir un bon &micro;C ?

Vous avez d'abord besoin de savoir ce que vous voulez brancher. Cela va définir les fonctions et le nombre de connexions avec le &micro;C. Si vous voulez utiliser du PWM et de l'UART. Si vous avez besoin d'alimenter en 5V et en 3.3V en même temps.

La deuxième étape est de savoir quelles fonctions peuvent marcher en même temps. Il peut arriver par exemple de ne pas pouvoir utiliser les fonctions SPI et UART en même temps. Par exemple sur la [Nucleo L432KC](../../datasheets/NUCLEO_petit-um1956-stm32-nucleo32-boards-mb1180-stmicroelectronics.pdf) on ne peut pas utiliser l'I2C et tout les ADC en même temps.

Autre critère, le Wifi et le bluetooths sont déjà intégrés sur les ESP32 mais pas sur les STM32. Cela veut dire que si vous voulez utiliser le wifi sur une stm il faudra un module externe, et donc utiliser des pins. Alors que l'ESP le fait déjà nativement et a des bibliothèques dédiés à cet effet.

La taille de la carte aussi joue un rôle. Certes elles ne sont généralement pas très grandes mais vous pouvez très vite voir qu'entre une L432KC et une F401RE (celle de la carte tuto) l'encombrement peut être handicapant sur un robot de petite taille.


#### Et si aucune carte n'est vraiment adapté à mes besoin ? 

Dans ce cas on passe à l'étape supérieure : fabriquer notre propre &micro;C ! Lisez donc la prochaine section :)