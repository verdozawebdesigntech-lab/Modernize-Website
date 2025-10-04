document.querySelector('.nav-toggle')?.addEventListener('click', ()=>{
    const nav = document.querySelector('.nav');
    if(!nav) return;
    nav.computedStyleMap.display = nav.style.display === 'block' ? 'none' : 'block';
});
document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
        e.preventDefault();
        const target = document.querySelector(a.getAttribute('href'));
        if(target) target.scrollIntoView({behavior:'smooth'});
    });
});