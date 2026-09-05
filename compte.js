// compte.js — identité & rôles partagés (Oh Dites !)
// Expose getCompte/setCompte/estRole/rpc et, si présent, remplit #compte-badge.
(function(){
  const API='https://trchckgeemvqlgbcrntz.supabase.co';
  const KEY='sb_publishable_fAefpcpQfoolCPlQwBzxlg_0M9-jfRV';
  const LS='ohdites_session';
  function getCompte(){ try{ return JSON.parse(localStorage.getItem(LS))||null }catch(e){ return null } }
  function setCompte(c){ localStorage.setItem(LS, JSON.stringify(c)); }
  function clearCompte(){ localStorage.removeItem(LS); }
  function estRole(r){ const c=getCompte(); if(!c) return false; if(Array.isArray(r)) return r.includes(c.role); return c.role===r; }
  async function rpc(fn,body){
    const r=await fetch(API+'/rest/v1/rpc/'+fn,{method:'POST',headers:{'apikey':KEY,'Authorization':'Bearer '+KEY,'Content-Type':'application/json'},body:JSON.stringify(body)});
    return r.json();
  }
  function labelRole(r){ return (r||'citoyen')==='moderateur'?'Modérateur': (r==='citoyen'?'Citoyen':r||'Visiteur'); }
  function peindreBadge(){
    const el=document.getElementById('compte-badge');
    if(!el) return;
    const c=getCompte();
    if(c && c.role==='moderateur'){ el.className='inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 border border-amber-300'; el.innerHTML='🛡️ '+esc(c.pseudo)+' · Modérateur'; }
    else if(c){ el.className='inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300'; el.innerHTML='✍️ '+esc(c.pseudo)+' · Citoyen'; }
    else { el.className='inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full bg-stone-100 text-stone-500 border border-stone-200'; el.innerHTML='👀 Visiteur · <a class="underline hover:text-emerald-700" href="connexion.html">se connecter</a>'; }
  }
  window.addEventListener('DOMContentLoaded', ()=>{ peindreBadge(); setTimeout(peindreBadge,400); });
  window.ohditesGetCompte=getCompte; window.ohditesSetCompte=setCompte; window.ohditesClearCompte=clearCompte;
  window.ohditesEstRole=estRole; window.ohditesRoleLabel=labelRole;
  window.addEventListener('storage', peindreBadge);
  function esc(t){ const d=document.createElement('div'); d.textContent=(t==null?'':String(t)); return d.innerHTML; }
})();
