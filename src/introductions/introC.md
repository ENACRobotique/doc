# Introduction au C au club robot

Selon votre niveau, il faut tout d'abord à apprendre à utiliser **le C en général (I)**, et lorsque c'est bon, vous pourrez passer au **C en embarqué (II)**
[Lien direct vers le tuto de la Carte tuto](https://docs.google.com/document/d/1-jxdJCb0QWJrYiXEooCPBYri_L7LV24AF4ST5_-yBRs/edit)
La partie I est réalisable de chez vous, la II peut être plus embêtante.
## Installation

Il va falloir installer plusieurs choses :

### Outils de compilation (I):

Le C est un language compilé. Sous Linux vous utiliserez **g++** pour compiler votre code. Vous utiliserez également **GDB** pour déboguer. Ces outils ne sont pas installés par défaut sur Ubuntu, vous devez donc les installer. Heureusement, c'est facile.

Nous allons donc installer un ensemble de paquet très utile pour le développement et la compilation sur linux, il contient g++, GDB ainsi que make que vous serez ammené à utiliser plus tard. 

Exécutez la commande suivante à partir de la fenêtre du terminal pour mettre à jour les listes de packages Ubuntu. Une distribution Linux obsolète peut parfois interférer avec les tentatives d'installation de nouveaux packages.

`sudo apt update`

Installez ensuite le paquet `build-essential` avec cette commande :

`sudo apt install build-essential`

Vous pouvez ensuite vérifier la version de gcc avec : `gcc -v`

<!-- Lien mort [Zeste de Savoir](https://zestedesavoir.com/tutoriels/755/le-langage-c-1/1042_les-bases-du-langage-c/4621_rencontre-avec-le-c/) -->



### Editeur de texte :
L'éditeur à utiliser est [visual studio code](../outils_communs/vscode.md)


## I - Introduction au C en général

Suivre le tutoriel de [Zeste de savoir](https://zestedesavoir.com/tutoriels/755/le-langage-c-1/1042_les-bases-du-langage-c/). Il contient les notions de bases et des TP pour les appliquer. Il est en **Français**.

Le tutoriel en entier devrait prendre une dizaine d'heures, n'hésitez pas à survoler certains détails et ne vous embétez pas à retenir, vous pouvez toujours retrouver le tutoriel si vous avez oublié quelque chose :p (On est pas en examen !). Vous n'êtes pas contraint de maîtriser ce cours avant d'arriver au club. Et bien évidement **demandez de l'aide si besoin** !

Par exemple, focalisez vous sur les types assez simple (int, float, char), les opérateurs mathématiques basiques, les conditions et les fonctions.

Avec la pratique vous finirez par vous souvenir de ce qui est le plus utilisé dans votre quotidiens. Il n'est pas nécéssaire de faire les section III , IV et V du cours, vous apprendrez le reste au club par la pratique.



## II - Le C++ pour l'embarqué

Le C c'est bien mais c'est mieux dans le robot ! Les microcontrolleurs sont proggramé en C/C++. Vous apprendrez les notions d'embarqué au club. En attendant vous pourrez aussi lire le manuel du débutant arduino disponible au club. Il explique le fonctionnement et quelques notions de bases. Couplé à vos connaissance du C++ ce sera donc un jeu d'enfant ! 

<!-- Pour l'instant non porté sur le site :
    [Carte tuto](https://docs.google.com/document/d/1-jxdJCb0QWJrYiXEooCPBYri_L7LV24AF4ST5_-yBRs/edit)
    [github associé à la carte tuto](https://github.com/Fabien-B/tutosBoardRoboticClub/) -->

## III - Problématiques robots embarqué

Ultérieurement, vous pouvez voir les problématique liée à l'Asservissement sur le site de [PM robotix](https://www.pm-robotix.eu/2022/02/02/asservissement-et-pilotage-de-robot-autonome/).

(TODO)