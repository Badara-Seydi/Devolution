# Git FLow

## Pull request process

1. Créez une branche depuis la branche `main` pour chaque nouvelle fonctionnalité ou correction de bug que vous souhaitez mettre en place.

```bash
# Je supprime les branch locales (sur mon ordinateur) qui n'existe plus sur le repo distant (sur Github)
$ git fetch --prune

# Je change de branch pour `main`
$ git checkout main

# Je met à jour les changements de `main` si il y'en a
$ git pull --ff-only

# Je crée ma nouvelle branch
$ git checkout -b my_new_branch
```

2. Écrivez votre code et vos tests et faites vos commits sur votre branch my_new_branch.

3. Avant de pousser vers le dépôt distant, assurez-vous que votre branche est à jour avec la dernière version `main` :
```bash
$ git checkout main # Pour changer de branch et revenir de `my_new_branch` à `main`
$ git pull --ff-only # Mettre à jour les changements de `main`
$ git checkout my_new_branch
$ git rebase main # Met à jour `my_new_branch` par rapport à `main`
# Vous pourriez avoir à résoudre des conflits ici
```

4. Poussez votre branche vers le dépôt distant.
```bash
$ git push origin my_new_branch
```

5. Sur GitHub, créez une nouvelle `pull request` pour merge `my_new_branch` dans `main`.

6. Une fois l'approbation donnée, l'*auteur* de la demande de pull doit la fusionner dans la branche `main` en utilisant le mode **Merge pull request**.

## Conflits process


1. Ouvrir dans vscode le ou les fichiers en conflits sur votre ordinateur en local
2. Editez le fichier (enleve ce que t'aime ou pas) ======> head
3. sauvegardez
4. git add le/chemin/du/fichier
5. reprendre le process de rebase
```bash
$ git rebase --continue # Continue le process de mise à jour étape 3
```

## Pull requests on Github
Faire la manipulation directement dans le menu Github.