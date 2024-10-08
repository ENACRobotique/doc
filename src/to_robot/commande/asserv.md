# Asservissement

Le principe de l'asservissement est de permettre à un moteur d'atteindre un objectif donné par "l'utilisateur" (par exemple, atteindre telle position ou tenir telle vitesse, avec un certain degré de précision et de "rapidité" )

## La théorie 
La bible sur les **principes généraux** : [PM-robotix](https://www.pm-robotix.eu/2022/02/02/asservissement-et-pilotage-de-robot-autonome/)

[RCVA](http://www.rcva.fr/wp-content/uploads/2016/12/devoir_de_vacances.pdf)

## L'implémentation

Pour réaliser un asserv en vitesse, il faut :
1. Fournir des consignes vitesses au robot, par exemple en envoyant du PWM grâce aux drivers moteurs types MD10C/D13S ([Exemple du code de 2022](https://github.com/ENACRobotique/2022_Robot_A/blob/main/src/motor.cpp#L82))
2. Lire les données des [encodeurs rotatifs](https://www.generationrobots.com/blog/wp-content/uploads/2014/01/Encodeur-FR.png), pour connaître la vitesse des moteurs [Exemple en 2022, lecture software](https://github.com/ENACRobotique/2022_Robot_A/blob/main/src/odom.cpp). ([plus d'info sur les encodeurs](https://www.generationrobots.com/blog/fr/encodeurs-robotique-mobile/))
3. Prévoir une "interface" avec l'ordinateur (en serial par exemple), c'est-à-dire pouvoir envoyer sur le port serial les coefficients du PID et recevoir les données de l'encodeur, pour pouvoir tracer des graphes/enrengistrer les données sur l'ordinateur 
4. Régler l'asservissement grâce à des courbes, en envoyant des consignes depuis le PC et en voyant le résultat
5. Méthode de réglage :  [une idée de méthode de l'UTC](https://assos.utc.fr/utcoupe/wiki/doku.php?id=informatique:asservissement)

## Pour aller plus loin pour améliorer l'asserv 
Pour l'instant, on s'arretait là, mais il peut être intéressant de tester un asserv en position directement (qui envoie des consignes vers le système qui asservit en vitesse), ou d'implémenter les solutions vues en dessous.

**TODO** Différence lecture hardware/software des encodeurs

Réglage plus fin du **PID** :
[PM-robotix](https://www.pm-robotix.eu/2022/01/19/ameliorer-vos-regulateurs-pid/)

[improving PID - ni.com](https://www.ni.com/fr-fr/innovations/white-papers/08/improving-pid-controller-performance.html)

Réglage plus fin du coeff des roues :
[RCVA](
https://github.com/VRAC-team/la-maxi-liste-ressources-eurobot/blob/master/odometrie/RCVA-Conseils_theoriques_pour_Eurobot.pdf)