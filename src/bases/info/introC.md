# La programmation embarqué 

Lorsque vous voulez programmer ( en python par exmple) vous utiliser votre ordinateur et vous y écrivez votre programme. Néanmoins vous avez bien vu que votre ordinateur est peut être un peu encombrant pour un petit robot et puis vous n'avez pas besoin de pouvoir lui brancher un clavier et un écran en permanence. Aussi peut être vous vous voyez mal brancher tout vos composant électroniques directement à votre ordinateur. C'est la qu'intervient la programmation embarqué!


En embarquée vous avez besoin de relier un programme aux circuits électroniques de votre robot afin de pouvoir l'automatiser. C'est là qu'interviennent les circuit éléctoniques programmables, les **microcontrolleurs**. Ils sont généralement programmé en utilisant le language C++ ( dérivé du language C) que vous aprrendrez à utiliser au club. 

À préciser que pour ceux qui ont déjà programmé en C et qui n'ont jamais fait d'embarqué qu'il faudra quand même suivre les tutoriels section I.


## Installation


Il va falloir installer plusieurs choses sur vos ordinateurs :

### Outils de compilation :

Le C est un language compilé. Sous Linux vous utiliserez **g++** pour compiler votre code. Vous utiliserez également **GDB** pour déboguer. Ces outils ne sont pas installés par défaut sur Ubuntu, vous devez donc les installer. Heureusement, c'est facile.

Nous allons donc installer un ensemble de paquet très utile pour le développement et la compilation sur linux, il contient g++, GDB ainsi que make que vous serez ammené à utiliser plus tard. 

Exécutez la commande suivante à partir de la fenêtre du terminal pour mettre à jour les listes de packages Ubuntu. Une distribution Linux obsolète peut parfois interférer avec les tentatives d'installation de nouveaux packages.

`sudo apt update`

Installez ensuite le paquet `build-essential` avec cette commande :

`sudo apt install build-essential`

Vous pouvez ensuite vérifier la version de gcc avec : `gcc -v`

<!-- Lien mort [Zeste de Savoir](https://zestedesavoir.com/tutoriels/755/le-langage-c-1/1042_les-bases-du-langage-c/4621_rencontre-avec-le-c/) -->


## I - Le C++ pour l'embarqué

Vous aurez un cour pratique sur la [Carte tuto](https://docs.google.com/document/d/1-jxdJCb0QWJrYiXEooCPBYri_L7LV24AF4ST5_-yBRs/edit) faite par le club pour découvrir le monde merveilleux de l'embarqué.

Il est recommandé ensuite de suivre les tutoriels de [Zeste de savoir](https://zestedesavoir.com/tutoriels/686/arduino-premiers-pas-en-informatique-embarquee/) qui vous permetra de vous plonger au coeur du sujet avec des **mises en pratique** et traitant toutes les notions utilisé en embarqué. Dans ce tutoriels c'est une carte arduino qui est utilisé. Nous en avons au club. Néanmoins pour nos robot nous utilisons des cartes ST(celle de la carte tuto!) qui se programment de la même façon, vous pourrez donc vous entrainer directement dessu. 


## II - Le C plus généralement

Si vous avez dejà fait du C seule la section précédente vous intéresse.

Le C++ est un dérivé du language C. Pour approfondir votre maîtrise il vous faudra suivre cet autre tutoriel de [Zeste de savoir](https://zestedesavoir.com/tutoriels/755/le-langage-c-1/1042_les-bases-du-langage-c/). Il contient des notions de bases que vous aurez normalement déjà vu et d'autres plus avancées qu'il vous faudra bien connaître également (principalement la notion de **pointeur**).


##
Les tutoriels sont en français et devraient prendre une dizaine d'heures, n'hésitez pas à survoler certains détails et ne vous embêtez pas à retenir, vous pouvez toujours retrouver le tutoriel si vous avez oublié quelque chose :p (On est pas en examen !). Vous n'êtes pas contraint de maîtriser ces cours avant d'arriver au club. Cependant il faudra y consacrer du temps comme pour tout apprentissage. Et bien évidement **demandez de l'aide si besoin** !

Par exemple, focalisez vous sur les types assez simple (int, float, char), les opérateurs mathématiques basiques, les conditions et les fonctions.

Avec la pratique vous finirez par vous souvenir de ce qui est le plus utilisé dans votre quotidiens. 





<!-- Pour l'instant non porté sur le site :
    [Carte tuto](https://docs.google.com/document/d/1-jxdJCb0QWJrYiXEooCPBYri_L7LV24AF4ST5_-yBRs/edit)
    [github associé à la carte tuto](https://github.com/Fabien-B/tutosBoardRoboticClub/) -->

## III - Problématiques robots embarqué

Ultérieurement, vous pouvez voir les problématique liée à l'Asservissement sur le site de [PM robotix](https://www.pm-robotix.eu/2022/02/02/asservissement-et-pilotage-de-robot-autonome/).

(TODO)