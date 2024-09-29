# Raspberry Pi

La Raspberry Pi est un petit ordinateur monocarte que l'on va embarquer dans certains de nos robots.

## Graver l'image

Pour commencer, il faut télécharger [une version récente de Raspbian]((https://www.raspberrypi.org/downloads/raspbian/)), la distribution officielle pour la Raspberry Pi. Sachant qu'on va l'utiliser sans jamains brancher d'écran, il vaut mieux prendre la version Lite, bien plus légère.

Il va falloir graver cette image sur une carte SD. Pour cela, utilisez [Etcher](https://www.balena.io/etcher/), qui est très simple d'utilisation et marche très bien.

Une fois l'image gravée, ne vous précipitez pas. Nous allons modifier quelques fichiers de la carte SD afin de faciliter la configuration.

## Pré-configuration

__WiFi__ : On va faire en sorte que la raspi se connecte directement au réseau WiFi du club.

Éditez le fichier `<carte SD Raspi>/etc/wpa_supplicant/wpa_supplicant.conf` (les droits d'admin seront sans doute nécessaires), et ajoutez le texte suivant (en remplaçant _lemotdepasse_ par le mot de passe, bien entendu) :

```plain-text
network={
    ssid="robot"
    psk="lemotdepasse"
}
```

__SSH__ : Pour activer le SSH sans brancher un écran et un clavier, créer un fichier `ssh` dans la partition _boot_ (celle formatée en FAT). Les identifiants par défauts sont :

utilisateur: pi  
hostname: raspberrypi  
password : raspberry

Il est mainteant temps de démarrer la Raspberry Pi !

## Configuration, la suite

On va donc démarrer la Raspberry Pi en l'alimentant soit par l'USB (solution la plus simple), soit par les broches GND et 5V (seulement si vous savez ce que vous faites !).
Elle devrait automatiquement se connecter au réseau WiFi. Vous pouvez tenter un `ping raspberrypi`, ou chercher son adresse sur l'interface du routeur.  
Quand vous avez trouver, s'y connecter en SSH : `ssh pi@raspberrypi`, ou `ssh pi@192.168.XXX.xxx`.

`sudo raspi-config` : changer le hostname, rebooter. (autre choses ?)

__UART__ : On va certainement utiliser l'UART de la raspi. Sur la Raspberry Pi 3 (et peut être aussi sur d'autres modèles), il faut modifier la configuration pour pouvoir l'utiliser ([source](https://www.framboise314.fr/le-port-serie-du-raspberry-pi-3-pas-simple/)).

Ajoutez cette ligne au ficher `/boot/config.txt` : `dtoverlay=pi3-disable-bt`.

Dans le fichier `/boot/cmdline.txt`, supprimez `console=serial0,115200`.

Quand la raspberrypi sera démarrée, vous prendrez soin de vérifier que `serial0 -> ttyAMA0` et `serial1 -> ttyS0` en faisant un `ls -l /dev/serial*`.

Il est peut-être nécessaire d'aller activer l'UART dans `sudo raspi-config`. À vérifier.

Pour vérifier si ça marche : connectez RX et TX ensemble par un câble de breadboard, ouvez minicom `minicom -D /dev/ttyAMA0`, et tapez des trucs. Si les caractères s'affichent c'est que ça marche. Si vous débranchez le fil ça ne devrait pas marcher. Pour quitter minicom : `CTRL+A, q, ENTER`

__Quelques packets à installer__ :

- `git` : gestion de version,
- `python3-pip` : gestionnaire de modules python3,
- `minicom` : moniteur port série,
- `vim` : coloration syntaxique et clavier pour humain, pour l'éditeur de texte _vi_. Pour [sortir](http://www.commitstrip.com/fr/2017/05/29/trapped/) : échap, puis `:q`, ou `:q!` si ça veut pas.

`sudo apt install git python3-pip minicom vim`

Quelques modules python que l'on va souvent utiliser :
- `pyserial` : pour uiliser un port série,
- `ivy-python` : pour communiquer avec [Ivy](http://www.eei.cena.fr/products/ivy/),
- `bitstring` : pour convertir des nombres en bytes et inversement.


