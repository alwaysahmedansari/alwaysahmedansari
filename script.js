(()=>{const d=document,r=d.documentElement;
const io='IntersectionObserver' in window?new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12}):null;
d.querySelectorAll('.rv').forEach(e=>io?io.observe(e):e.classList.add('in'));
const w=d.getElementById('w');
if(w){const W=['human psychology','history & civilisation','society & culture','Urdu literature','critical thinking'];let i=0;
setInterval(()=>{w.style.opacity=0;setTimeout(()=>{i=(i+1)%W.length;w.textContent=W[i];w.style.opacity=1},350)},2600)}
const pg=d.getElementById('pg');
if(pg)addEventListener('scroll',()=>{const h=r.scrollHeight-innerHeight;pg.style.transform='scaleX('+(h>0?scrollY/h:0)+')'},{passive:true});
const fs=d.querySelectorAll('.f');
const filt=f=>{fs.forEach(x=>x.classList.toggle('on',x.dataset.f===f));let n=0;
d.querySelectorAll('.entry-card').forEach(c=>{const s=f==='all'||c.dataset.c===f;c.hidden=!s;n+=s});
const em=d.getElementById('em');if(em)em.hidden=n>0};
fs.forEach(b=>b.onclick=()=>{filt(b.dataset.f);history.replaceState(null,'',b.dataset.f==='all'?location.pathname:'#'+b.dataset.f)});
if(fs.length){const h=location.hash.slice(1);if(['en','ur','pdf','ext'].includes(h))filt(h)}
const lt=d.getElementById('latest');
if(lt&&location.protocol.indexOf('http')===0)fetch('archive.html').then(x=>x.text()).then(h=>{
const n=[...new DOMParser().parseFromString(h,'text/html').querySelectorAll('.entry-card')].slice(0,2);
if(n.length)lt.replaceChildren(...n.map(x=>d.importNode(x,true)))}).catch(()=>{});
})();
