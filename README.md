# Chifoumi
   
Déployé dans un storage azure en static website : [LIVE](https://demo6dc27908.z28.web.core.windows.net)   
   
   
Prérequis :   
 - NPM   
 - Angular CLI   
   
   
Après clonage :   
 - installer packages : `npm install`   
 - exécuter code : `npm start`   
 - exécuter tests unitaires : `npm run test` (Unit tests ajoutés dans `new-game.component.spec.ts` pour tester computeWinner())   
 - exécuter tests bout en bout : `npm run e2e` (e2e ajouté dans `home.e2e-spec.ts` pour tester un scenario)   
 - exécuter lint : `npm run lint`   
   
   
Globalement :   
 - un module 'Shared' avec le header et un UserService pour stocker le nom du joueur (mock)   
 - un module 'app' avec composants Home, Profile, NewGame avec de la navigation avec Angular Router   
 - responsive desktop / mobile   

