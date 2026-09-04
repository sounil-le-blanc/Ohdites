-- 0002 : autoriser le dépôt public de documents / verifications (mode démo ouvert)
--
-- CONTEXTE (découvert par test réel, 2026-09-04) :
--   Le site "Oh Dites !" est en mode "dépôt ouvert" (décision du cahier des
--   charges : PAS d'auth pour l'instant). Les tables gets / dossiers /
--   affirmations / echanges acceptent les inserts publics, mais la table
--   `documents` a une RLS qui BLOQUE l'insert anonyme (erreur 42501
--   "violates row-level security"). Résultat : on ne peut pas ajouter un
--   document source depuis un dossier, ni rattacher une source à une
--   affirmation librement -> impossible de tenir la garantie "sourcé".
--
-- FIX : aligner `documents` sur les autres tables en autorisant l'insert
-- public (et la lecture) sans auth, tant que la Brique E (auth + rôles +
-- modération) n'est pas mise en place. À remplacer par une policy
-- "verificateur/citoyen connecté" le jour où on branche l'auth.
--
-- TO APPLY : Copier-coller dans le SQL Editor de la console Supabase
--            (table editor -> New query), puis Run. Idempotent.
alter table public.documents enable row level security;

drop policy if exists "documents_insert_public" on public.documents;
create policy "documents_insert_public"
  on public.documents for insert
  to anon, authenticated
  with check (true);

drop policy if exists "documents_select_public" on public.documents;
create policy "documents_select_public"
  on public.documents for select
  to anon, authenticated
  using (true);

-- Le jour où on bascule en Brique E, désactiver ces policies et les
-- remplacer par : INSERT si le rôle >= verificateur ; SELECT si published.
