# Petits Tutos

Il y aura dans cette section des petits tutos sur des sujet divers et variés, qui ne méritent pas un chapitre entier.

## Ressources en ligne

### En général
De nombreuses ressources en ligne existent déjà, parmi lesquelles on peut noter :
+ [**WIki Eurobot**](https://www.eurobot.org/wiki/fr/home) wiki officiel pour la coupe de france de robotique, encore assez peu complet
+ [**VRAC, Une compilation de tutoriels**](https://github.com/VRAC-team/la-maxi-liste-ressources-eurobot) par "section" (moteurs, odométrie, ...) ciblant les spécificités de la coupe de france
+ [**Game Manual, ANGLAIS**,](https://gm0.org/en/latest/index.html) un gros "wiki" pour la compétition de robots FIRST (USA), assez similaire à la coupe de France mais en plus bourrin
    + En particulier, les sections :
    + [Design Skills](https://gm0.org/en/latest/docs/design-skills/index.html) pour la mécanique
    + [Hardware components, Tips and trick](https://gm0.org/en/latest/docs/hardware-components/tips-and-tricks.html) pour la mécanique
    + Common Mechanisms, pour de l'inspiration
    + Pour les roues folles/codeuses holonomes, [Dead Wheels](https://gm0.org/en/latest/docs/common-mechanisms/dead-wheels.html)
    + Electronics and components pour certaines choses
    + [Programming Concept](https://gm0.org/en/latest/docs/software/concepts/index.html) pour la partie code (le reste est relativement spécifique au Java donc pas trop utilisable)

### Pour le code
+ [Road Runner](https://learnroadrunner.com/), une librairie de code en Java pour **programmer des robots holonomes**, qui peut servir d'inspiration
+ Des tutoriels sur l'**asserv** sont disponibles dans le [REX Asserv](../rex/asserv.md)
+ Des conseils sur les déplacements et autres des [pm-robotix](https://www.pm-robotix.eu/category/alaune/)

## Sommaire de la section

Commençons par apprendre comment [mettre en oeuvre une raspberry pi !](raspberry_pi.md)

Problème lors du branchement d'une carte pendant quelques secondes : `/dev/tty_xxx: Périphérique ou ressource occupé`. [Résolvez le problème !](peripherique_occupe.md)
| Tutoriel                                                          | Méca | Elec | Info - C | Info - Python |
| [Les différents microcontrôleurs](../petits_tutos/microcontrollers.md)  |      | X    |   X     |           |
| [Le simulateur et les IHM (2022-2023)](../petits_tutos/simulator.md)  |      |    |   X     |    X     |

