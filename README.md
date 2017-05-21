Bourses Google Api
===================

----------


Installation
-------------

### Forever sur NPM
Afin d'installer forever sur npm, lancer la commande suivante
```
$ npm install forever -g
```

### Configurer 

#### Téléchargement du certificat p12
Sur le lien suivant :
https://console.developers.google.com/apis/

Se connecter avec son compte utilisateur


Créer une clé de compte et service au format .p12 et téléchargez le fichier.


#### Convertion du fichier en .pem
lancer la commande suivante dans le répertoire ou est le fichier .p12
```
$ openssl pkcs12 -in *.p12 -out google-services-private-key.pem -nodes -clcerts
```

Un fichier .pem est alors généré.

#### Dépot du fichier
Il faut ensuite déplacer ce fichier dans le répertoire /var/www/html/bourses/google-api/key

#### Modifications
Modifier le fichier server.js et adapter les variables
 - clientId : au format XXXXXXX@XXXXX-XXXX.iam.gserviceaccount.com
 - email : idem
 - key : chemin complet de l'enplacement du fichier .pem ex : /var/www/html/bourses/google-api/key/google-services-private-key.pem
 - ids : en mettant l'id de la vue google analytics

#### Test 

Lancer tout simplement la commande suivante dans le répertoire ou est le projet importé :
```
node server.js
```

Il ne devrait y avoir aucun plantage.

### Lancement
Après avoir importé le projet google-api lancer la commande suivante afin de démarrer l'API:
```
$ cd /var/www/html/bourses/google-api
$ forever start server.js
```
