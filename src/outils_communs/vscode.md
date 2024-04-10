# VS Code

### Editeur de texte (I et II):
L'éditeur à utiliser est visual studio code.
[VS code](https://code.visualstudio.com/). Vous serez amené à l'utiliser aussi en cour alors il sera judicieux de l'avoir sur votre machine personnelle.

Pour installer un ".deb" sur ubuntu par exemple, vous pouvez faire :

`sudo dpkg -i fichier.deb`  

Vous pouvez ensuite installer les extentions C/C++ et Python directement depuis VS code. Ça vous facilitera la lecture des différents codes ainsi que l'auto complétion.

![](../images/cpp-extension.png)

### Outil de compilation pour l'embarqué (II):
Une extension de VS code qui permet de compiler vers les microcontrolleurs
[platformio](https://platformio.org/install/ide?install=vscode).

Il est nécessaire d'installer venv pour que platformIO fonctionne : `sudo apt install python3-venv`.

Il faut aussi installer [les règles udev](https://docs.platformio.org/en/stable/core/installation/udev-rules.html) pour que la connection aux cartes se passe bien.

Installer d'abord curl: `sudo apt install curl`

Puis lancer la commande suivante:

`curl -fsSL https://raw.githubusercontent.com/platformio/platformio-core/develop/platformio/assets/system/99-platformio-udev.rules | sudo tee /etc/udev/rules.d/99-platformio-udev.rules`

Vous apprendrez à l'utiliser directement au club lorsque vous aborderez le C++.

[What is Platformio ?](http://ajaugust.com/platformio-notes.html) 

![](../images/platformio.png)
