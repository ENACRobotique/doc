# Programmer un PAMI

Pour commencer à appréhender tous ca, nous avons créer un tutoriel qui te guidera pas-à-pas pour comprendre comment on programme un PAMI.

## Télécharger le tutoriel

Les tutoriels sont disponibles via Git, il faut donc le télécharger avec le [lien ici](https://git-scm.com/downloads)

Une fois installéé, lancer le terminal et placer vous dans le répertoire dans lequel vous souhaitez stocker le tuto puis cloner le dépôt PAMIS_2024 en utilisant la commande suivante :  

`git clone https://github.com/ENACRobotique/PAMIS_2024.git`  

ou avec une clé SSH :  

`git clone git@github.com:ENACRobotique/PAMIS_2024.git`

<br>
Ensuite, dans un terminal, accédez au répertoire PAMIS_2024 et basculez sur la branche tuto_pami avec la commande suivante :

`git switch TUTO_PAMIS`

<br>
Suivez ensuite les étapes du tutoriel dans l'ordre indiqué. Si vous rencontrez des difficultés, n'hésitez pas à demander de l'aide, que ce soit au club ou sur le Discord. Tout va bien se passer !

# Première partie : déplacement



Dans cette première partie, l'objectif va être de faire avancer le robot.  
Par exemple, on va essayer de faire en sorte que le robot face des carrés de 10 cm de côté.  
Le résultat devrait ressembler à ça :

<p align="center">
    <video id="carre_10cm" width="240" height="auto" loop muted autoplay>
        <source src="../../images/tutopami/carre_10cm.mp4" type="video/mp4">
    </video>
</p>

<script>
    var video = document.getElementById("carre_10cm");
    video.addEventListener('click', function() {
        if(video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });
</script>

Pour réussir à faire ça, le code dispose une fonction déplacement permettant respectivement d'avancer et de tourner :
celle ci se trouve dans le fichier deplacement.c qui se en suivant le chemin suivant PAMI_2024 -> PAMI_SOFT -> src -> deplacement.c

Je vous invite donc à modifier le programme en utilisant les 3 fonctions suivante: 
-`base_roulante.translate(distance);` qui permet de faire avancer le robot avec distance en mm 
-`base_roulante.rotate(angle);` qui permet de faire tourner le robot avec angle en radian
-`sleep(durée);` qui permet d'attendre avec durée en milliseconde


⭐ Avec tous ces informations, essayez maintenant de faire faire des carrés de 200 cm à votre PAMIS !

<br><br>

# Deuxième partie : évitement

Pour cette partie, on va continuer à modifier notre fonction pour faire en sorte que le robot n'avance plus à la vue d'un obstacle.
Cela ressemblera à ca :
"video a mettre ici"

pour cela, vous aller pouvoir utiliser de nouvelles variables :
-distance_left 
-distance_middle 
-distance_right 
qui renvoie les distances perçues par nos 3 capteurs que vous voyez ci dessous :
"photo du pami a mettre"

⭐ À votre tour d'empecher votre robot de se cracher dans les murs.