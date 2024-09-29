# Installer Un Dual Boot Linux

Développer sous windows peut parfois être un peu compliqué, et comme d'une manière générale **linux c'est mieux**, on va apprendre comment l'installer sur ton ordi.

On va installer un dual boot, c'est à dire que Windows et Linux vont cohabiter sur ton disque dur, et il faudra choisir au démarrage lequel tu voudras lancer. Tu aura donc les performances maximales, mais ne pourra pas etre sur les deux système simultanément.

Il y a de fortes chances que vous appreniez à le faire en cours d'archimat de l'ENAC lors de TP. Vous pourrez donc vous faire la main avant si vous avez peur de tuer votre ordinateur...

## Préliminaires sous windows

Comme Windows n'aime pas partager, il faudra d'abord faire quelques réglages sous Windows pour permettre l'installation de Linux à côté de celui-ci. Il est aussi plus sage de sauvegarder toutes tes données importantes sur un support hors de ton PC (clé USB, disuqe dur, ...). Je n'ai jamais eu aucune perte de données, _mais_ *comme* on joue avec les partitions de son disque dur, on n'est jamais à l'abri d'une erreur ou d'une panne de courant au mauvais moment.

* **Désactiver la mise en veille prolongée :** par défaut, Windows ne s'éteint pas quand on le lui dit mais rentre en veille prolongée, et ça empèche de démarrer sous un autre OS.
  - ouvrir un terminal avec les droits administrateur (clic droit sur le logo windows, shell)
  - entrer la commande ` powercfg.exe /hibernate off `
* **Reconfigurer le disque en AHCI si besoin :** Sur certains PC récents, les disques utilisent un mode qui n'est pas encore supporté par Linux.
  - Rédémarre ton PC et entre dans les réglages du BIOS (en martelant au démarrage une touche dépendant du PC, en général F2 ou F10). Cherche la mention d'un **SATA mode**, et vérifie qu'il est réglé sur **AHCI**.
    - S'il est bien sur ce mode, passe directement au partitionnement de ton disque.
    - S'il est réglé sur **RAID** ou un autre truc bizarre (comme _RPS with optane_), ne le change **pas**, rédémarre ton ordinateur (sur Windows) et suis [ce tuto](http://triplescomputers.com/blog/uncategorized/solution-switch-windows-10-from-raidide-to-ahci-operation/) ou [celui-ci](https://www.seeyar.fr/activer-mode-ahci-apres-linstallation-de-windows10-mode-ide/) pour reconfigurer le disque en AHCI.
    - S'il est sur autre chose, renseigne toi !
* **Partitionner le disque dur :** afin d'éviter tout problème de partionnement à cause de la fragmentation Windows, il vaut mieux utiliser directement les outils de Windows :
  - appuyer sur `Windows + R`
  - saisir `diskmgmt.msc`
  - clic droit sur le volume à partitionner (_Disque 0_ par exemple) et sélectionner `Réduire le volume`. Si tu as plusieurs disques, par exemple un SSD et un HDD, il vaut mieux utiliser le SSD si tu peux pour des raisons de performances, mais ça marchera aussi très bien sur le HDD !
  - choisir la taille de la partition désirée (Ubuntu demande 15Go minimum et recommande 25Go ; si tu as de la place tu peux libérer un espace de 60Go ou plus !)

Ton disque dur a maintenant un espace inutilisé, il est temps de l'utiliser !

## Installer Linux

Il existe beaucoup de distributions Linux, et nous allons ici voir comment installer Ubuntu, qui reste simple et adapté à nos besoins. Tu auras besoin d'une clé USB (attention, la clé sera formatée).

### Préparez une clé bootable

- Télécharge l'ISO de la dernière LTS : [https://ubuntu.com/download/desktop](https://ubuntu.com/download/desktop)
- Flash l'ISO ainsi téléchargé sur ta clé. Si tu ne sais pas faire, je te conseille d'utiliser [Etcher](https://www.balena.io/etcher/) qui permet de faire ça en 4 clics :
  - "Select Image" t'invite à choisir l'ISO que tu as déjà téléchargé.
  - "Select Drive" te demande de choisir le disque à flasher. Sois bien sûr de choisir la clé USB, et pas autre chose !
  - "Flash!" lance l'opération et raconte ce qu'il fait à ta clé au fur et à mesure.
- Une fois la clé flashée, redémarre ton ordinateur et entre das les réglagles du BIOS.
  - Désactive le `UEFI Secure Boot` qui t'empècherait de démarrer sur ta clé.
  - Désactive le `Fast Start-Up` si cette option existe.
  - _Optionnel_ : Change l'odre de priorité pour booter sur la clé USB avant le disque dur.
  - Sauvegarde les modifications et quitte le BIOS. Ton ordi va redémarrer.
- Si tu as changé l'ordre de priorité du boot, l'ordinateur devrait redémarrer sur Linux. Sinon, démarre manuellement sur la clé en pressant la touche appropriée (souvent F12 ou F2).
- Sélectionne "try Ubuntu"

Ubuntu devrait alors démarrer, et tu peux le tester. Passons maintenant à l'installation !

### Installation d'Ubuntu

On va d'abord créer les partions nécessaires à Ubuntu. Il est possible de faire tout ça directement depuis l'installeur, mais je préfère le faire avant, l'interface étant plus claire !

- démarre le programme `gparted`
- sélectionne le disque où tu as libéré de l'espace pour Linux
- _Optionnel mais recommandé :_ Crée un partition de type `swap` d'une taille égale à la taille de ta RAM.
- Crée une partition de type `ext4`. Si tu as réservé plus de 40Go pour linux, fais la d'environ 25 ou 30 Go, et crée une autre partition `ext4` sur la place restante. Cela permettra de changer facilement de version d'Ubuntu sans perdre de réglages ni de données.
- Applique les modifications (ça peut prendre du temps), et quitte gparted.

Tout est prêt, allons-y !

- démarre l'installeur (il doit être sur le bureau).
- Lorsqu'on te demande où installer le système Linux, choisis _Autre chose_ (ou _Something else_).
- Sélectionne la partion _swap_ que tu as crées et configure la en `type: swap` (ça devrait être déjà fait)
- Sélectionne la première (ou seule) partition _ext4_ que tu as créée, et configure la en `type: ext4` et `mount point: /` en la formatant.
- Si tu as créée une deuxième partition _ext4_, configure la en `type: ext4` et `mount point: /home`.
- Laisse l'emplacement du démarrage à sa valeur par défaut, qui devrait être le disque ou tu as Windows.
- Continue avec la suite de l'installation, qui devrait être assez simple, et prendre un certain temps (~20 min). Tu peux utiliser ton ordinateur pendant ce temps.
- Quand l'installation sera terminée, Ubuntu te proposera de rédémarrer sur ton nouveau système. Accepte, et retire la clé de l'ordinateur lorsque l'ordinateur est éteint.

Au démarrage du PC, tu devrais maintenant atterrir sur une interface te permettant de choisir entre Ubuntu ou Windows. Teste les deux options pour vérifier que tout marche bien.


Passe au chapitre suivant pour installer les outils courants du club.



