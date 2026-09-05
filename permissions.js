// permissions.js — applique le masquage selon le rôle (Oh Dites !)
// Eléments HTML à contrôler : ajoutez data-perm="citoyen" (visible qd citoyen+)
// ou data-perm="moderateur" (visible qd modérateur). Sinon masqué.
(function(){
  function role(){
    // ?voir= permet de prévisualiser un rôle (démo stable)
    try{ const v=new URLSearchParams(location.search).get('voir'); if(v==='citoyen'||v==='moderateur'||v==='visiteur') return v; }catch(e){}
    try{ const c=(window.ohditesGetCompte&&window.ohditesGetCompte())||null; return c?c.role:null; }catch(e){ return null; }
  }
  function appliquer(){
    const r=role();
    const citoyenOk=(r==='citoyen'||r==='moderateur');
    const modOK=(r==='moderateur');
    document.querySelectorAll('[data-perm]').forEach(el=>{
      const need=el.getAttribute('data-perm');
      let autorise = need==='moderateur'? modOK : (need==='citoyen'? citoyenOk : false);
      el.style.display = autorise ? '' : 'none';
    });
    // note optionnelle
    const bad=document.getElementById('perm-note');
    if(bad){
      if(!citoyenOk && !modOK){ bad.textContent='👀 Vous êtes visiteur : connectez-vous pour contribuer.';
        bad.classList.remove('hidden'); }
      else bad.classList.add('hidden');
    }
  }
  window.addEventListener('DOMContentLoaded', ()=>{ appliquer(); setTimeout(appliquer,400); });
  window.addEventListener('storage', appliquer);
  const iv=setInterval(appliquer, 1400); setTimeout(()=>clearInterval(iv), 22000);
})();
