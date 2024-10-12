# Base holonome


Considérons une roue, les calculs seront identiques pour les autres roues.

## Rotation

Commençons par le plus simple : la rotation du robot sur lui-même. Le robot doit simplement faire tourner ses roues à la même vitesse.

Les roues sont placées à égale distance \\(R\\) du centre du robot, leurs axes passant par le centre du robot.

Si le robot tourne sur lui-même à une vitesse angulaire \\(ꞷ\\), la vitesse d'une roue sera donc \\(Vtr = R.ꞷ\\).

![](holonome_vitesse_angulaire.png "Rotation")


## Translation

La roue est placée à un angle \\(β\\) par rapport au repère du robot. Cet angle est fixé par la construction du robot.

Supposons que le robot se déplace en translation pure à une vitesse \\(V\\) qui forme un angle \\(α\\) avec le repère du robot.

La vitesse tangentielle de la roue sera donc de \\(Vtr = V.sin(α-β)\\).

La roue étant en translation libre sur l'axe radial, la vitesse radiale peut être ignorée.

![](holonome_vitesse.png "Translation")



## Composition des vitesses, et décomposition selon les axes du robot

Par la composition des vitesses, la vitesse tangentielle totale d'une roue est : \\(Vtr = V.sin(α-β) + R.ꞷ\\)

On connait l'identité trigonométrique : \\(sin(α-β) = sin(α).cos(β) - cos(α).sin(β)\\)

On peut donc écrire

\\[Vtr = V.sin(α).cos(β) - V.cos(α).sin(β) + R.ꞷ\\]

Si on décompose la vitesse \\(V\\) du robot selon ses axes, on a :

- \\(Vx = V.cos(α)\\)
- \\(Vy = V.sin(α)\\)

On en déduit donc :

\\[Vtr = Vy.cos(β) - Vx.sin(β) + R.ꞷ\\]

## Forme matricielle

Pour 3 roues placées respectivement aux angles \\(β1\\), \\(β2\\) et \\(β3\\), on aura alors :

\\[ \begin{pmatrix}v1\\\\v2\\\\v3\end{pmatrix}=\begin{pmatrix}-sin(β1) & cos(β1) & R\\\\-sin(β2) & cos(β2) & R\\\\-sin(β3) & cos(β3) & R\end{pmatrix}\times\begin{pmatrix}Vx\\\\Vy\\\\ꞷ\end{pmatrix} \\]



# Cinématique inverse

On a calculé les commandes à donner aux moteurs pour avoir le déplacement désiré. On voudrait maintenant déduire les déplacements du robot des déplacements de chaque moteur.

On avait : \\(m=D.V\\)

La matrice pseudo-inverse de Moore-Penrose \\(D^+\\) permet de résoudre ce problème. On a alors : \\(V=D^+.m\\)

Elle peut être calculée avec numpy avec la fonction `numpy.linalg.pinv`.

