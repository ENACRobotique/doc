# Introduction d'un robot

## Comment réaliser un robot ?

Tout d'abord, il faut décider de quoi faire -> Il faut rédiger une sorte de cahier des charges.

Ensuite, il faut réunir la liste du matériel nécessaire, lesquels sont à commander par exemple.

Enfin, il faut établir la gestion du projet, c'est à dire savoir qui fait quoi et à quel moment pour ne pénaliser personne dans son travail, c'est à dire décider d'un **calendrier** de formation, de deadlines,...
Des exemples de timeline pour l'année sont sur le guide du nouvel arrivant, [ici](https://drive.google.com/drive/u/1/folders/0B3TOHzAm3I1Sfk96R0xRZGctR3BGa242aGExelpXU2VCcnJmbjg1OVlMRVNyV0xJeTM5SVU?resourcekey=0-rhd8NIuvxKy_Zvdg25Wu4w).

Ainsi, en ordre d'idée, il faudrait idéalement que le robot roule déjà dès fin décembre, et qu'il est capable de marquer des points en février.
Par exemple celui-ci : ![](../images/timeline_projet.png "Exemple de timeline pour le robot sur une année")

### Le cahier des charges

Pour que tout le monde soit d'accord, il est impératif d'avoir un cahier des charges. Il peut être assez court (quelques pages avec photos), mais il doit contenir l'essentiel, c'est à dire identifier à partir du réglement des "fonctions" à réaliser (se déplacer, récupérer X objet, afficher le score,...) afin que tous les membres aient la même idée des objectifs à atteindre. 
Pour chaque fonction, il faut des critères avec une valeur de performance à atteindre. Il peut bien évidemment être modifié au cours de l'année.

#### Exemple : 
| Fonction   |      Critère      |  Niveau |
|----------|:-------------:|------:|
|Se déplacer | Vitesse max | 0.8 m/s |
|| précision |  +- 2 cm |
|| Accélération min |  0.3 m.s² |
|| Vitesse angulaire max | 1 rad/s|

### Les specs du robots
L'idée est de recenser toutes les **piéces que composera le robot** (même ceux imprimés en 3D), et d'indiquer l'état d'avancement (en cours de design/de commande, en cours de test,...). Pour ceux qui sont à commander, c'est le moment de voir le prix pour avoir une idée du budget du robot.
Ensuite, on peut faire l'inventaire de ce qui est nécessaire pour la **carte électronique**.
Enfin, on peut définir comment fonctionnera le code dans les grandes lignes (quel "language" de communication entre la carte électronique et les ordis, quels fonctionalités sont impératives, lesquelles sont facultatives,...").

[Un exemple de "cahier de specs" (2022)](https://docs.google.com/document/d/1sOBxRK2LiSuNzQPDihp1MDDo0q5jfXRSP5_wCl4TWog/edit?usp=sharing) 
## De quoi est constitué un robot ?

[Pour des tutos plus approfondis, cliquez ici (VRAC)](https://github.com/VRAC-team/la-maxi-liste-ressources-eurobot#223-moteurs)

### Base roulante

La base roulante est tout ce qui permet au robot de "rouler" sur la table. Cela inclut les moteurs, les roues, les capteurs pour se localiser, l'électronique pour le déplacement et la localisation *(à l'ENAC généralement c'est regroupé avec tout le reste)*, et les batteries. 
C'est la partie essentielle du robot, à réaliser en premier. Sans base roulante fiable, on ne peut rien faire.

#### Les robots différentiels 

Le principe de ces robots est d'avoir 2 roues (généralement centrés sur le robot), avec généralement des patins à l'avant et à l'arrière pour que le robot ne bascule pas. On envoie des consignes de vitesse individuelles à chaque moteur ce qui permet de tourner sur soit même, d'avancer, ou de faire des trajectoires courbées : 

![](../images/differential_robot_principle.png)

#### Les robots omnidirectionnels :
Ceux-ci ont la faculté de se déplacer dans **toutes les directions** grâce à la forme spéciale des roues. 
Un exemple de gif pour un avec 4 roues : 
![](../images/holonome_gif.gif)

On peut également en retrouver à 3 roues, généralement pour faire des robots triangulaires. Le seul désavantage des 3 roues est qu'il n'est pas capable de passer par dessus un obstacle, contrairement à celui à 4 roues qui pourrait.
Pour tourner sur lui même, il suffit de faire tourner les 3 roues dans un sens, et pour se déplacer dans une des trois directions, il suffit de faire avancer 2 roues adjacentes (la troisième roue roule "latéralement" => Pas de frottement )
Le désavantage des robots omnidirectionnels est qu'il est plus compliqué de se repérer dans l'espace avec ceux-là *(à voir partie localisation)*.
![](../images/omni_robot_three_wheel.png "exemple de robot omnidirectionnel à 3 roues")

#### La motorisation

Des moteurs électriques, assez basique, ~12-18V, 10W grand maximum. Vérifier le couple avec le rayon des roues, le reste au pifomètre.
[Des outils pour calculer éventuellement le dimensionnement & les caractéristiques du moteur](https://github.com/VRAC-team/la-maxi-liste-ressources-eurobot#223-moteurs)

#### Les roues

On retrouve principalement :
+ Des roues en caoutchouc  (classique)
+ Des roues déjà faites plus exotiques (par exemple des roues de rollers) -> Peuvent endommager la table + Faire les roues soit même en polyuréthane, avec l'intérieur de la roue en impression 3D. L'avantage est que l'on peut dimensionner la roue comme on a besoin, ça accroche mieux que la caoutchouc à la table, et ça ne fait (quasiment) pas de dégats sur la table en cas de dérapage. Parcontre il faut le mouler. **Exemple de roues en 2022 sur le dropbox** 
["Tutoriel pour réaliser les roues"](https://www.youtube.com/watch?v=U-_xxI6qvlg)
### Base mécanique

#### Forme du robot 

On retrouve principalement 4 formes possibles :
- Carrées/Rectangulaire
    + **++** Pratique pour se coller à un "mur" 
    + **--** Peu optimal pour l'utilisation du périmètre
    + **--** Peut facilement rentrer en collision avec quelque chose en tournant sur lui même (difficile de tourner sur lui même près d'un mur)
    ![](../images/square_robot.png "robot carré")
- Cylindrique
    + **++** Pour le périmètre
    + **--** Peu optimal par rapport à ce qu'on utilise : les actionneurs, les piéces mécaniques, etc... sont généralement rectangulaire
    ![](../images/rct_toulon.png "robot RCT toulon")
-   Hexagonal (is Bestagon)
    + **+** Pour le périmètre
    + **+** Bon compris entre cylindre et rectangulaire pour le placement des objets à l'intérieur
-   Triangulaire
    + **++** pour les robots holonomes à 3 roues

#### Techniques de construction

+ Profilés 20*20, M5, Ecrou en T
+ Makerbeam
+ Planches (en bois)
+ Verre acrylique


### Capteurs

#### Localisation


### Actionneurs


### Microcontrolleur


### Carte electronique

### Ordinateur

### Les batteries

On utilise cette année des batteries de perceuse (Makita, 18V), sinon des Lipo/Life de hobby king de 12/14V sont très bien.
En terme de consommation électrique, en ordre de grandeur onaà 2/3 A en pic pour les moteurs, et 1/2 A pour le reste.


