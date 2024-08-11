# Présentation


Les microcontrôleurs  sont de petits ordinateurs intégrés dans une puce. Ils incluent un processeur, de la mémoire, et des périphériques d’entrées sorties.

Il y en a dans quasiment tous les appareils électriques, du grille-pain à la voiture.
Sur la carte tuto, il y en a deux : un STM32F4, qui est au centre de la Nucleo (la carte blanche), et un ATtiny1616, à droite de la Nucleo, sous le rond de LEDs.
Il y en a même un autre sur la Nucleo, en bas à gauche de la prise USB, qui va servir à programmer le STM32F4.

Ils exécutent un seul programme, qui démarre dès la mise sous tension.
La tuto board est un outils d'apprentissage crée par et pour le club. Vous pouve consulter le projet sur Github: [Git de la tuto board](https://github.com/Fabien-B/tutosBoardRoboticClub/)

![](../images/tuto_board.jpg)

## Les périphériques
Les périphériques sont des circuits électroniques dédiés à certaines tâches, et sont connectés au CPU (processeur) pour interagir avec le programme.

Quelques périphériques ([Lexique](../introductions/lexique.md)): 
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

[VSCode](../bases/info/vscode.md)


Pour commencer, créez un nouveu projet PlatformIO (icone d'alien dans le menu à gauche). Choisissez la carte correspondante à celle que vous utilisez (Nucleo F401RE par exemple), et avec le framework Arduino.
![](../images/platformio_project.png)

Dans un projet arduino, il y a toujours deux fonctions qui sont créées par defaut: setup et loop.
La fonction setup sera exécutée une seule fois au démarrage du programme, et la fonction loop sera appelée en boucle. Voici ce que vous devriez voir :

<img src="../images/vs_code_project.png">

Vous pouvez effacer les deux `myFunction` qui ne seront pas utiles.

Note:
En réalité, la fonction main du programme est codée comme ceci:

```
int main(){
    setup();
    for(;;) {
        loop();
    }
}
```

Le `for(;;)` étant juste une autre manière d’écrire `while(true)` en se la pétant et en économisant 4 caractères.




## Les bases
Led
On va commencer par le “hello world” de la programmation embarquée : faire clignoter une led !

Regardez le [schéma](../datasheets/tuto_board_schematics.pdf) de la carte tuto : on va faire clignoter la LED2 (qui est dans le cadre “Basics” ), qui est connectée à la broche PC8 du microcontrôleur ( le bloc au centre ).

#### Configuration

La broche doit d’abord être configurée en sortie. Cela permettra ensuite de la mettre à l’état logique haut ou bas, ce qui se traduira par une tension entre GND et la broche de 3.3V ou 0V.
La fonction pour configurer une broche en entrée ou sortie s’appelle pinMode: `void pinMode(int pin, int mode);`
Elle prend en premier argument la broche à configurer, en en deuxième argument le mode. Les deux modes principaux sont INPUT et OUTPUT. Il en existe d'autres que nous verront plus tard.

On va donc configurer la broche comme ceci, dans la fonction setup:
```cpp
void setup() {
  pinMode(PC8, OUTPUT);
}
```

#### Commander l’état

On va ensuite changer l’état de la broche grâce à la fonction digitalWrite: `void digitalWrite(int pin, int val);`
Elle prend en premier argument la broche, et en deuxième l’état à écrire : HIGH ou LOW.
On va aussi utiliser la fonction `delay` qui met le programme en pause durant un certain temps (en millisecondes).

On écrira donc dans la fonction loop:

```cpp
void loop() {
  digitalWrite(PC8, HIGH);	// set PC8 to HIGH
  delay(500);			// wait 0.5 seconds
  digitalWrite(PC8, LOW);	// set PC8 to LOW
  delay(500);			// wait 0.5 seconds.
}
```
Compiler (Build), puis flasher (Upload) le microcontrôleur grâce à ces deux boutons :


<div style="display: flex; justify-content: center; gap: 100px;">
  <img src="../images/pio_build.png" style="width: auto; height: 80px;">
  <img src="../images/pio_upload.png" style="width: auto; height: 80px;">
</div>


Un terminal devrait s'ouvrir, il faut attendre. La première fois cela peut être plus long car VS code peut vouloir installer des outils suplémentaire. Vous devriez voir le message suivant :

```==== [SUCCESS] Took 14.34 seconds ====```

La LED2 doit donc maintenant clignoter.

> Note : Il est possible que vous aillez une erreur de televersement à ce moment, surtout si c'est la première fois. Consulter la section [VS Code & Platformio](../bases/info/vscode.md) peut vous aider.


Changez le programme pour la faire clignoter plus vite, ou de manière asymétrique: des flash bref séparés par un temps assez long.

#### Améliorer son code

On se réfère toujours à la broche par son nom: `PC8`. Ce n’est pas très explicite. On va donc faire ce qui s'appelle un `define`.
Ajoutez cette ligne au dessus de la fonction setup : `#define LED2 PC8`

C’est une directive de préprocesseur, qui sera appliquée avant la compilation et qui va remplacer toutes les occurrences de `LED2` trouvées dans le code par `PC8`.
Cela nous permet donc d’écrire un code plus explicite. Vous pouvez donc écrire `LED2` à la place de `PC8` dans tous les appels de fonctions.

Vous pourrez remarquer au passage que HIGH et LOW ne sont que des `define` pour 1 et 0.

> Note:
En C, une expression booléenne est vraie tant qu’elle est différente de 0.
Vous pouvez remplacer HIGH et LOW par un entier dans la fonction `digitalWrite`, ça marchera toujours.

#### Une autre led

Tout en gardant votre code, faites clignoter la LED1  (PB1) au même rythme.
Qu'observez-vous ?
La LED1 est dans l’état opposé à la LED2. Observez le [schéma](../datasheets/tuto_board_schematics.pdf) électronique pour comprendre pourquoi.



Faites les clignoter de la même manière.

> Note:
On peut régulièrement trouver les deux manières de brancher une led.
La LED2 est branchée d’une manière plus “logique”, mais il est parfois conseillé de brancher les leds comme la LED1. Les circuits intégrés reçoivent (sink) plus facilement du courant qu’ils n’en fournissent (source).


