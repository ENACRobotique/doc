# Programmer un PAMI

Pour commencer à appréhender tous ca, nous avons créer un tutoriel qui te guidera pas-à-pas pour comprendre comment on programme un PAMI.

## Télécharger le tutoriel

Les tutoriels sont disponibles via Git. Vous avez probablement déjà utilisé Git, au moins pour consulter ce document, mais je vais vous guider pour télécharger le tutoriel.

Pour cela, vous devrez procéder de la même manière que pour récupérer ce document. Commencez par cloner le dépôt PAMIS_2024 en utilisant la commande suivante :  

`git clone https://github.com/ENACRobotique/PAMIS_2024.git`  

ou avec une clée SSH :  

`git clone git@github.com:ENACRobotique/PAMIS_2024.git`

<br>
Ensuite, dans un terminal, accédez au répertoire PAMIS_2024 et basculez sur la branche tuto_pami avec la commande suivante :

`git checkout tuto_pami`

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
    video.addEventListener('pause', function() {
        video.play();
    });
</script>

Pour réussir à faire ça, le code dispose de 2 fonctions permettant respectivement d'avancer et de tourner :
"Task a mettre"

Pour comprendre comment les utiliser, je vous propose de vous servir de la fonction xTaskCreate().
Par exemple:
"exemple a mettre ici"

⭐ Avec tous ces informations, essayez maintenant de faire faire des carrés de 10 cm à votre PAMIS !

<br><br>

# Deuxième partie : évitement