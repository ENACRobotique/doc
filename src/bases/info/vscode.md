# VS Code

### Editeur de texte :
L'éditeur à utiliser est visual studio code : [VS code](https://code.visualstudio.com/). Vous serez amenés à l'utiliser aussi en cours alors il sera judicieux de l'avoir sur votre machine personnelle.

Pour installer un ".deb" sur ubuntu par exemple, vous pouvez faire :

`sudo dpkg -i fichier.deb`  

Vous pouvez ensuite installer les extentions C/C++ et Python directement depuis VS code. Ça vous facilitera la lecture des différents codes ainsi que l'auto complétion.

![](../../images/cpp-extension.png)

### Outil de compilation pour l'embarqué:

<div style="display: flex; align-items: flex-start;">
<a href="http://ajaugust.com/platformio-notes.html" >
<img src="../../images/platformio.png" width="800px"> </a>
<div style="padding-left: 30px;">

Une extension de VS code qui permet de compiler vers les microcontrôleurs est
[platformio](https://platformio.org/install/ide?install=vscode).

Vous apprendrez à l'utiliser directement au club lorsque vous aborderez le C++.
</div>
</div>

[What is Platformio ?](http://ajaugust.com/platformio-notes.html) 

Il est nécessaire d'installer venv pour que platformIO fonctionne : `sudo apt install python3-venv`.

Pour linux il faut également rajouter des règles [`udev`](https://en.wikipedia.org/wiki/Udev). 

Installer d'abord curl: `sudo apt install curl`

Ensuite vous pouvez taper la commande automagique : 

```bash
curl -fsSL https://raw.githubusercontent.com/platformio/platformio-core/develop/platformio/assets/system/99-platformio-udev.rules | sudo tee /etc/udev/rules.d/99-platformio-udev.rules
```
Ou le faire manuellement en le téléchargeant directement depuis le manuel : [udev rules for Platformio](https://docs.platformio.org/en/latest/core/installation/udev-rules.html)

Ensuite redémmarez `udev`:

```bash
sudo service udev restart
```
ou 
```bash
sudo udevadm control --reload-rules
sudo udevadm trigger
```


## Résolution de problèmes avec VS-Code

Lorsque vous téléversez du code il est possible que vous rencontriez cette erreur : 

```bash
Error: libusb_open() failed with LIBUSB_ERROR_ACCESS
Error: open failed
in procedure 'program'
** OpenOCD init failed **
shutdown command invoked

*** [upload] Error 1
=========================== [FAILED] Took 2.36 seconds ===========================

 *  The terminal process "platformio 'run', '--target', 'upload', '--upload-port', '/dev/ttyACM0'" terminated with exit code: 1. 
 *  Terminal will be reused by tasks, press any key to close it. 
```

Cela peut être dû à plusieurs choses. 
- Première explication : 

Vous avez un problème d'alimentation. Essayez un autre câble ou une autre prise usb. 

- Deuxième explication :

Regardez le message d'erreur : `Error: libusb_open() failed with LIBUSB_ERROR_ACCESS`. Souvent sous linux l'accès aux USB est restreint. Il faut donc ajouter des accès pour pouvoir téleverser du code. Le plus problable est que vous n'avez pas ajouté les permissions `udev` comme précisé plus haut.

- Troisième explication (Approximative): 

Un programme est déjà en cour sur le microcontroleur que vous utilisez et le bloque dans une boucle infinie. Cela l'empêche donc de récupérer le programme que l'on veut téléverser. Maintenez le bouton reset, cliquez sur upload et relacher le reset au bout d'une seconde ou deux. Ça ne marchera pas forcément.
