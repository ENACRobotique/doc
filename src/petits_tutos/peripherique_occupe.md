# Se débarasser du "périphérique occupé" lors du branchement d'un device

Le responsable de ce bazar, c'est ModemManager, un service qui permet de contrôler les périphériques mobile 2G/3G/4G. [Plus d'infos](https://www.freedesktop.org/wiki/Software/ModemManager/).

On va faire en sorte qu'il blacklist tout les péiphériques __tty*__.

D'abord on exécute la commande `sudo systemctl status ModemManager`.  
Voilà un exemple de sortie :

```plain
● ModemManager.service - Modem Manager
   Loaded: loaded (/lib/systemd/system/ModemManager.service; enabled; vendor preset: enabled)
   Active: active (running) since Fri 2019-11-15 15:42:25 CET; 13min ago
 Main PID: 6815 (ModemManager)
    Tasks: 3 (limit: 4915)
   CGroup: /system.slice/ModemManager.service
           └─6815 /usr/sbin/ModemManager --filter-policy=strict

```

Ensuite on va éditer le fichier indiqué à la ligne _Loaded_ :

```sudo vi /lib/systemd/system/ModemManager.service```

A la section _[Service]_ du fichier, rajouter une ligne :  

```plain
[Service]
...
Environment="MM_FILTER_RULE_TTY_ACM_INTERFACE=0"
```

Enfin il faut recharger la configuration de _systemctl_ et redémarrer le ModemManager:  

```plain
sudo systemctl daemon-reload
sudo systemctl restart ModemManager
```


Source : [https://askubuntu.com/a/1119498](https://askubuntu.com/a/1119498)


