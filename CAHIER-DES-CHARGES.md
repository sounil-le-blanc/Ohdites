# 📋 Cahier des charges — Oh Dites ! (PDF d'Anne-Laure)
> Document de travail — carte de conformité au PDF de référence (présentation du site).
> Serveur de mission : nous construisons pour Anne-Laure, fidèle à sa vision.

## Rappel de la vision (PDF)
- Audits citoyens factuels, 0% parti pris, croisés et sourcés.
- Navigation par bulles en 4 pages : Accueil → Domaine → Dossier → Document.
- Structure en GRAPHE (une info = plusieurs bulles).
- Le cœur : affirmations documentées avec STATUTS (jamais juste vrai/faux).

## État du site actuel
- ✅ Accueil avec 9 bulles de domaines cliquables
- ✅ Chartes/valeurs, esprit
- ✅ Formulaire "proposer une source" (branche Supabase table `sources`)
- 🔴 Manque : Dossier, Document, Secteurs/Sujets, Entités, GÉT, Affirmations+statuts, Rôles

## Feuille de route (briques, ordre logique)
### Brique A — Fondation données (schéma graphe)
- [ ] Tables : domaines, secteurs, sujets, dossiers, documents, entites, documents_entites
### Brique B — Le cœur (AFFIRMATIONS)
- [ ] Table affirmations (source, auteur, statut, confirmations/contestations)
- [ ] Statuts : proposee / a_verifier / confirmee / contestee / nuancee / refutee / impossible
- [ ] Page qui affiche les affirmations par statut (au moins par domaine)
### Brique C — Pages de navigation
- [ ] Page Domaine (sous-bulles secteurs/sujets)
- [ ] Page Dossier (résumé, chronologie, documents, affirmations, questions)
- [ ] Page Document (fiche + affirmations par statut)
### Brique D — GÉT
- [ ] Table GET + Fiche GET (responsable, secrétaire, CR)
- [ ] Bouton "lancer une fiche GÉT" réel (au lieu du simple message)
### Brique E — Rôles & modération
- [ ] Auth (affichage rôles visiteur/inscrit/vérif/éditeur) + RLS
### Brique F — Rejoindre
- [ ] Formulaire "proposer un sujet" / adhérer / soutenir

## Principe de travail
- Brique par brique, la plus précise possible (ni sous-, ni sur-construite).
- Vérifier chaque insert/lecture réellement (pas seulement écrire du code).
- Consigner les avancées. Corriger ses erreurs sans dramatiser.
- Se caler STRICTEMENT sur le PDF (le serveur de mission, c'est Anne-Laure).
