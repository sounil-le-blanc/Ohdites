# 📋 Cahier des charges — Oh Dites ! (PDF d'Anne-Laure)
> Document de travail — carte de conformité au PDF de référence.
> ⚠️ MIS À JOUR le 2026-09-04 après une longue session d'implémentation : l'état réel est en grandes cases cochées. Ce n'est pas un plan idéal, c'est le fait accompli vérifié en live.

## Vision (PDF)
- Audits citoyens factuels, 0 % parti pris, croisés et sourcés ✅ porté par le modèle (docs + affirmations + statuts + discussion).
- Navigation par bulles en 4 pages : Accueil → Domaine → Dossier → Document ✅ (en pratique : index → audits?domaine → dossier.html?d → document.html?id ; + page rapport).
- Structure en GRAPHE (une info = plusieurs bulles) ✅ embryonnaire mais réelle (secteurs / sujets / entités liées aux documents).
- Cœur : affirmations à STATUTS, jamais simple vrai/faux ✅ (7 statuts, discussion confirm/contest, statut dérivé).

## État du site (réel, vérifié 2026-09-04)
- ✅ Accueil 9 bulles (dont bulle Vivant réparée → ?domaine=vivant).
- ✅ Domaines avec « faits & chiffres clés » (PDF p.2) + secteurs/sous-bulles + sujets transversaux.
- ✅ Dossier : résumé, docs sourcés, affirmations, questions ouvertes, lien rapport.
- ✅ Document : fiche + rigueur (source, date consultation, empreinte) + affirmations par statut + entités citées (pdf p.7/9).
- ✅ Rapport d'audit imprimable : toutes docs + affirmations + chronologie (p.3).
- ✅ Affirmations avec source liée / obligatoire (flux nettoyé : plus d'orpheline volontaire) et page par statut.
- ✅ GÉT : création, fiche (responsable/secrétaire désignables), fiche-projet, comptes-rendus.
- ✅ Rejoindre / proposer un sujet / soutenir (formule Brique F).
- ✅ Chartes/valeurs (statique).

## Feuille de route (re-lecture à l'aune de ce qui est fait)
### Brique A — données/graphe
- [x] domaines, secteurs, sujets, dossiers, documents
- [x] entites + document_entites (ajoutées, UI « entités citées »)
- [ ] « une affirm. → plusieurs docs » éventuelle table de liaison affirmation_documents (à check).
### Brique B — affirmations
- [x] table affirmations (source/auteur/confirm/contest) ; statuts dérivés
- [x] page affirmations par statut (+ par domaine/filtre)
### Brique C — pages navigation
- [x] Domaine (chiffres clés + sous-bulles) ; Dossier ; Document ; + Rapport
- [x] questions ouvertes d'un dossier
### Brique D — GÉT
- [x] fiche GÉT + dossier de travail + rôles + fiche-projet + CR
- [ ] « lancer une fiche GÉT » (workflow fait via création GÉT + dossier) — à formaliser en un vrai bouton/parcours « lancer ».
### Brique E — auth / rôles / RLS
- [ ] NON fait (décision 22-08 : pas d'auth fictive). Dépôt public assumé pour tester. RLS sur documents durcie post-migration.
### Brique F — rejoindre
- [x] proposer un sujet / rejoindre / soutenir (table messages)

## Prochaines pistes (liste libre, non planifiée)
- Formaliser un vrai « workflow GÉT » (fiche-projet → CR → synthèse) en bouton dédié.
- Modérer (Brique E) ; publier/dépublier.
- Donner plus de matière à d'autres domaines que le mix électrique/nutrition.
- Vérifier la boucle « une affirmation = plusieurs documents » (association vs document_entites).

## Note de méthode
- Chaque brique livrée cette session a été : poussée (git main) → déployée Vercel → vérifiée en live (browser) → souvent nettoyée des traces de test.
- Certaines cases listées « à check » = pas encore rigoureusement testées de bout en bout.

> Serveur de mission : Anne-Laure. Si une case cochée ici n'est pas conforme à TA vision, signale-le : on ajuste.
