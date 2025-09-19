const IO=new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('is-in') }),{threshold:.15});
document.querySelectorAll('.fade-in').forEach(el=>IO.observe(el));
