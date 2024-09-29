# Le SSH 

Au club le robot possède un ordinateur de bord (une raspberry pi). Dès qu'on veut intéragir avec on ne va pas brancher un clavier et un écran dessus à chaque fois. Surtout que lors des tests le robot bouge. 
Pour communiquer entre plusieurs machines depuis le terminal on utilise la connection ssh. Elle permet d'intéragir depuis le terminal de la machine utilisée directement dans le terminal de la machine de destination.

Voici les commandes les plus utilisées au club : 

Pour avoir un accès distant à la console d'un autre ordinateur :  
`ssh <utilisateur>@<nom_machine>`  

On peut également ajouter l'option -X pour accéder aux applications graphiques :  
`ssh -X <utilisateur>@<nom_machine>`  

Pour copier un fichier :  
`scp <fichier> <utilisateur>@<nom_machine>:<DestinationDirectory>`


Sources : 
- [Doc Ubuntu](https://doc.ubuntu-fr.org/ssh) (recommandé)
- [Wikipédia](https://fr.wikipedia.org/wiki/Secure_Shell)
- [Forum ](https://www.cloudflare.com/fr-fr/learning/access-management/what-is-ssh/)