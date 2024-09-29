# Carte électronique pour la base roulante


La base roulante ce n'est pas juste des moteurs et des roues. Il faut pouvoir les piloter. Pour cela il y a deux solutions possibles, soit utiliser des composants dédiés du commerce, soit faire ses propres contrôleurs. Sachant qu'au final il y aura forcément une partie à faire soi-même pour l'intégrer à l'ensemble de l'architecture.


L'étage éléctrique de votre base roulante doit comporter à minima :
+ Des drivers moteurs 
+ Des encodeurs (ou de quoi mesurer le déplacement des roues)
+ Une alimentation
+ Des étages de transformation de puissance 
+ Un microcontrôleur ( à programmer )
+ Des connectiques pour la communication (USB, UART)

Exemples : 

+ Driver moteur utilisé en 2023 : [MD10C](https://www.elektor.fr/cytron-10amp-5-30-v-dc-motor-driver)

+ Transformation de puissance : [carte d'alim 2023](https://github.com/ENACRobotique/elec/tree/master/2023/CarteAlimV2.5)

Le microcontrôleur gère donc l'asservissement et les consignes (de vitesse) moteurs. Il communique aussi ( si nécéssaire ) avec le haut niveau pour renvoyer l'état de position et récupérer les consignes (de position, ou de vitesse).

Pour 2023 on a utilisé des MD10C pilotés par une stm32 : [carte de contrôle 2023](https://github.com/ENACRobotique/elec/tree/master/2023/CartePrincipaleRobot) mais cette carte s'ocuppait de tout les composantes bas niveaux. 


Pour 2024 on a décidé de faire une carte dédiée spécifiquement à la base holonome : [Carte Base 2024](https://github.com/ENACRobotique/Carte_Base_roulante_2024). Nous détaillerons donc un peu plus sa conception.


## Quelques liens utiles sur les notions
Youtube: [The Ultimate Guide to using Motors in Robotics](https://www.youtube.com/watch?v=-PCuDnpgiew&t=442s)