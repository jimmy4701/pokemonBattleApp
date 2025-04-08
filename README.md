# Spécification Fonctionnelle de l'Application de Recherche et de Bataille entre Pokémons

## Introduction
Cette application est développée dans le cadre d'un cours de l'école MyDigitalSchool. Elle permet aux utilisateurs de rechercher, collectionner et combattre des pokémons.

## 1. Système de Recherche

### Fonctionnalités
- **Recherche par Nom** : Interface permettant de rechercher un pokémon spécifique par son nom.
- **Recherche par Type** : Interface permettant de rechercher des pokémons en fonction de leur type.
- **Liste des Types de Pokémons** : Interface pour afficher tous les types de pokémons disponibles.
- **Liste Complète des Pokémons** : Interface pour lister tous les pokémons disponibles dans l'application.

## 2. Système de Gain de Pokémon

### Initialisation
- À la première utilisation de l'application, l'utilisateur reçoit :
  - 10 unités de monnaie de type A
  - 5 unités de monnaie de type B

### Fonctionnalités
- **Obtention de Pokémons via des Coffres** : Interface permettant de récupérer des pokémons en ouvrant des coffres.
- **Stockage des Pokémons** : Interface pour visualiser la liste complète des pokémons possédés par l'utilisateur.
  - Pas de limite de stockage global (possibilité de stocker 10,000 pokémons ou plus).
  - Limite de stockage par type de pokémon : maximum de 10 pokémons du même type.
  - Possibilité de renommer les pokémons possédés.

### Monnaie et Coffres
- **Types de Monnaie** : A, B, et C.
  - La monnaie A permet d'ouvrir des coffres de type A (communs).
  - La monnaie B permet d'ouvrir des coffres de type B (rares).
  - La monnaie C permet d'ouvrir des coffres de type C (légendaires).

## 3. Système de Combat

### Fonctionnalités
- **À venir** : Les détails du système de combat seront ajoutés dans une version future de l'application.


### Règles / Algo pour les raretés de coffre

Définition de rareté dans le cadre de l'API : 
- COMMON = Pokemon sans pré-volution et avec évolutions = commun, attrapé plus souvent
- UNCOMMON = Pokémon avec pré-volution et évolutions = plus rare
- RARE = Pokémon avec que des pré-volutions sans évolution = beaucoup plus rare
- EPIC = Pokémon sans prévolution et sans évolutions = extrêmement rare
- LEGENDARY = Pokémons dans une liste définies dans l'appli
