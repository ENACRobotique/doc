# Présentation

Les microcontrôleurs  sont de petits ordinateurs intégrés dans une puce. Ils incluent un processeur, de la mémoire, et des périphériques d’entrées sorties.

Il y en a dans quasiment tous les appareils électriques, du grille-pain à la voiture.
Sur la carte tuto, il y en a deux : un STM32F4, qui est au centre de la Nucleo (la carte blanche), et un ATtiny1616, à droite de la Nucleo, sous le rond de LEDs.
Il y en a même un autre sur la Nucleo, en bas à gauche de la prise USB, qui va servir à programmer le STM32F4.

Ils exécutent un seul programme, qui démarre dès la mise sous tension.

![](../images/tuto_board.jpg)

## Les périphériques
Les périphériques sont des circuits électroniques dédiés à certaines tâches, et sont connectés au CPU (processeur) pour interagir avec le programme.

Quelques périphériques : 
+ GPIO : general purpose input output. permet de commander des broches en sorties, ou de lire des broches en entrées
+ ADC : analog to digital converter. Permet de de lire une tension analogique.
+ UART : protocole de communication simple
+ I2C : protocole de communication un peu plus complexe
+ Timers : des compteurs qui permettent de faire plein de trucs utiles avec le temps, comme par exemple du PWM (on verra ce que c’est plus tard)

Ces périphériques sont connectés à certaines broches du microcontrôleur. On devra donc choisir quelles broches utiliser suivant ce que l’on veut faire.

## Arduino
Pour citer wikipédia :
> Arduino est la marque d'une plateforme de prototypage open-source qui permet aux utilisateurs de créer des objets électroniques interactifs à partir de cartes électroniques matériellement libres sur lesquelles se trouve un microcontrôleur.

Dans notre cas, on va surtout utiliser les librairies arduino, qui vont nous permettre de programmer très simplement le microcontrôleur. 

Note:
Attention cependant : cette librairie nous cache beaucoup de complexité, on peut donc être surpris par un comportement “bizarre” lorsqu'on utilise beaucoup de fonctions sur beaucoup de broches simultanément.
Exemple vécu l’année dernière : les moteurs qui font un bruit chelou quand on essaie d’utiliser des servos.

## Préparons nous
Pour ces tutos, on va utiliser VSCode avec l’extension PlatformIO, qui va nous permettre d’installer très facilement tout ce qui est nécessaire pour programmer le microcontrôleur.

[VSCode](../outils_communs/vscode.md)


Pour commencer, créez un nouveu projet PlatformIO, avec la carte correspondante à celle que vous utilisez (Nucleo F401RE par exemple), et avec le framework Arduino.

Dans un projet arduino, il y a toujours deux fonctions qui sont créées par default: setup et loop.
La fonction setup sera exécutée une seule fois au démarrage du programme, et la fonction loop sera appelée en boucle.

Note:
En réalité, la fonction main du programme est codée comme ceci:

`int main() {
    setup();
    for(;;) {
        loop();
    }
}`
le for(;;) étant juste une autre manière d’écrire while(true) en se la pétant et en économisant 4 caractères.

