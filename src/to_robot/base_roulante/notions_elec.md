# Notions pour la conception de circuit éléc


## Les capacités de découplage

Un condensateur de découplage est un condensateur destiné à réduire le couplage entre un signal et une alimentation. Le condensateur relie le canal d'alimentation à la masse pour abaisser son impédance dans la bande passante du signal.

On n'a pas besoin d'une grande précision sur la valeur du composant. Celle-ci dépend de l'intensité qui traverse le canal et de la fréquence du signal. 

Sans ce découplage, les pointes de courant demandées provoquent des **chutes de tension** très brèves, qui gênent le fonctionnement sain des composants.

L'énergie emmagasinée localement dans les condensateurs de découplage suffit à compenser les chutes.

Généralement, ce type de condensateur n'est pas seul. Ils sont au moins deux, voire trois.

- un chimique pour des pointes à faible fréquence. (exemple 10 µF)
- un "film" pour des fréquences moyennes. (exemple 0,1 µF)
- un céramique pour les hautes fréquences. (exemple 100 pF)

Les valeurs ne sont pas critiques. La qualité doit être bonne, et surtout, les connexions **hyper courtes**. 

Quelques liens expliquant plus en profondeur:

- [Electronique 71](https://www.multipower.fr/-ressources/blog-2/condensateurs-de-decouplage/)
- [Multipower](http://electronique71.com/theories-condensateur-de-decouplage/)