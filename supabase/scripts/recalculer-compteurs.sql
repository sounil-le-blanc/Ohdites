-- Recalcule les colonnes confirmations/contestations/statut de CHAQUE affirmation
-- depuis ses cartes réelles (échanges type confirm/contest sans parent_id).
-- À exécuter si les chiffres de la page de tri divergent des cartes.
update public.affirmations a
set
  confirmations = (select count(*) from public.echanges e where e.affirmation_id=a.id and e.type='confirm' and e.parent_id is null),
  contestations  = (select count(*) from public.echanges e where e.affirmation_id=a.id and e.type='contest' and e.parent_id is null),
  statut = case
     when (select count(*) from public.echanges e where e.affirmation_id=a.id and e.type='contest' and e.parent_id is null) > 0 then 'contestee'
     when (select count(*) from public.echanges e where e.affirmation_id=a.id and e.type='confirm' and e.parent_id is null) >= 2 then 'confirmee'
     when (select count(*) from public.echanges e where e.affirmation_id=a.id and e.type='confirm' and e.parent_id is null) >= 1 then 'a_verifier'
     else 'proposee' end;
