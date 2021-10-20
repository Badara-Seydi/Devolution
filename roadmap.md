# Plan de création d'une API Rest

## Préparation du projet

Une étude préliminaire est nécessaire afin de bien comprendre la demande.

- Analyse de la demande
- Création des Users Stories

## Étapes
 <!-- étape obligé pour foreign key ,cardinalité etc.... (mocodo ou whimsical) -->
1. MCD (Modèle Conceptuel de données);
   

2. Mise en place de l'arborescence du dossier devant acueillir notre API (M_C, car il n'y a pas de vues)
    - app
      - routers
      - dataMappers/models (Accesseur de données)
      - controllers
      - validations (module de vérification des données entrantes)
      - services (modules métiers, ajouter de valeurs, de la transformation)
    - migrations (sqitch)
    - data (jsons, script import sql…)
    - docs (brief, mcd, users stories…)
3. MPD (Modèle Physique de Données)
   1. Création de la BDD
   <!-- les outils sont configurés pour créer rapidement les databases, mettre createdb nom dans le terminal -->
  
   2. sqitch pour avoir un historique des migrations  
        1. sqitch init (initialisation) <!-- sqitch init nom --engine pg --target db:pg:nomdelabase --top-dir ./migrations -->
        2. sqitch add (création de la 1ère étape) <!--sqitch add initialization -n "Création de la base nom"-->
        3. Création de la 1ère migration, permettant de créer la structure de la BDD 
        4. sqitch deploy 
        5. sqitch verify
4. Initialisation du gestionnaire de modules (npm/yarn)   <!-- npm init -y>
5. Installation des modules nécessaires  <!--npm i express pg dotenv>
6. Soit le projet a été créé sur github soit on initialise (git init)
7. Ajout du fichier .gitignore (node_module/, .env, sqitch.conf) <!--DATABASE_URL=postgresql://postgres@localhost:5432/pronos>
8. Ajout du fichier .env et .env.example, sqitch.example.conf
9.  Seeding (ajouter des données réelles ou de test) 
   1. création d'un script d'import 
      - Si les données proviennent d'un autre BDD relationnel et que l'on a les script SQL, on se contente des les exécuter.
      - Si les données proviennent d'un JSON, on créer un script JS qui va lire ces données et les importées au fur et à mesure dans les tables correspondantes
      - Si on a pas de données
        - On créer un script SQL avec des données bidons
        - On utilise un module de mock (faker.js)
   2. Exécution du script d'import
10. Point d'entrée de l'application (serveur web) index.js <!--require tout les modules installés , configurer le PORT , vérifier le tout sur un app.listen(port, _ => {console.log(`http://localhost:${port}`)});


11. Création des dataMappers/models <!--les fichiers du dataMapper doivent require le CLient ou le Pool qui donne la connection a la BDD>
12. Services (s'il y en a)
13. Controllers
14. Routers
15. Validations
16. Les test des routes (si on utilise REST Client dans VSC) <!-- pour créer un fichier REST Client il faut mettre .http a la fin >
