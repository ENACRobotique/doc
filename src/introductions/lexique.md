# Lexique

On regroupe ici du vocabulaire fortement utilisé et qui se maitrise uniquement par la pratique. Donc pas besoin d'essayer de tout retenir le premier jour. Ce n'est pas exhaustif, ces notions sont les parties émergées de l'iceberg de complexité de leur domaines. Dans notre cadre d'application il est rarement nécéssaire d'aller en profondeur. Donc pour des complets débutants il est fortement recommandé d'être humble et d'acceptez de ne pas tout comprendre du premier coup :). 
Vous pouvez utiliser Wikipédia ou internet pour plus d'explication.

## Coupe

- **L'expérience** : chaque année, on doit réaliser un objet à poser automatique que le robot doit déclencher. (Par exemple un phare en 2021, une vitrine d'exposition en 2022, un panier en 2023... ).

## Architecture
- **Haut Niveau** : Désigne généralement les fonctions de l'ordinateur de bord ( souvent une Raspberry pi ). Incluant la prise de décision, le traitement des données, la commande. On peut le voir comme l'intelligence du robot.

- **Bas Niveau** : Désigne les fonctions associées aux microcontrolleurs (souvent des STM32). Incluant la gestion des actionneurs, des capteurs, de l'asservissement. On peut le voir comme le système nerveux du robot.

- **Base roulante** : Ce qui permet au robot de "rouler" : les roues, le moteur, le chassis, les capteurs de "positionnement", l'électronique et le code qui va avec.


## Microcontrôleurs

- **GPIO** : General Purpose Input Output. Désigne des **broches** sur un microcontrôleur ou un microprocesseur que l'on peut configurer pour recevoir ou envoyer des signaux numériques. Ces broches permettent de connecter et de contrôler des composants externes comme des LEDs ou des capteurs. Elles sont couramment utilisées dans des projets électroniques pour interfacer des appareils avec des systèmes comme le Raspberry Pi ou Arduino.

- **ADC** : Analog to Digital Converter. C'est un dispositif qui convertit un **signal analogique**, comme une tension variable, en un **signal numérique** que les ordinateurs et microcontrôleurs peuvent comprendre.

- **UART** : (Universal Asynchronous Receiver-Transmitter) est un dispositif qui permet de communiquer entre deux appareils électroniques via une transmission série asynchrone. Il convertit les données entre les formats parallèle et série, permettant **d'envoyer et de recevoir des données bit par bit sur une seule ligne de communication**. C'est couramment utilisé pour la communication entre microcontrôleurs et périphériques comme les modules Bluetooth ou GPS.

- **I2C** :(Inter-Integrated Circuit) est un protocole de communication série qui permet à plusieurs périphériques électroniques de communiquer entre eux via seulement deux fils : un pour l'horloge (SCL) et un pour les données (SDA). Il est souvent utilisé pour connecter des capteurs, des mémoires, et d'autres composants à un microcontrôleur, en permettant à plusieurs appareils de partager le même bus de communication.

- **Timers** : Les timers sont des composants intégrés dans les microcontrôleurs qui permettent de mesurer des intervalles de temps ou de générer des événements à des moments précis. Ils peuvent être utilisés pour créer des délais, mesurer la durée d'un événement, ou déclencher des actions périodiques, comme faire clignoter une LED ou générer un signal PWM. **On peut les voir comme des compteurs qui comptent les nombres de cycle d'horloge du processeur et déclenche des évènements à partir d'une certaine valeur.**

- **Baud** :  Le baud est une unité de mesure représentant le nombre de changements d'état ou de symboles par seconde sur une ligne de transmission. Un symbole peut représenter plus d'un bit si des techniques comme la modulation de phase ou d'amplitude sont utilisées. **Dans notre cas le baud désigne systématiquement le nombre de bits par secondes.**

- **Bits par seconde (bps)** : Dans les communications simples, comme celles utilisant le protocole UART (Universal Asynchronous Receiver/Transmitter) dans des microcontrôleurs ou des ordinateurs, chaque symbole correspond généralement à un bit de données. Ainsi, si le baudrate est de 9600, cela signifie que 9600 bits de données sont transmis par seconde.
