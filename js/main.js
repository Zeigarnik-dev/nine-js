const dd = document.querySelector('.dropdown')
const subm = document.querySelector('.submenu')
const faq = document.querySelector('.faq')
let time_o;

dd.addEventListener('mouseenter', ()=>{
    clearTimeout(time_o)
    subm.classList.add('active');
})

dd.addEventListener('mouseleave', ()=>{
    time_o = setTimeout(()=>{
        subm.classList.remove('active')
    }, 200)
})

faq.addEventListener('click', (e)=>{
    let target_it = e.target.closest('.faq_h');
    if(!target_it) return;
    let c_text = target_it.nextElementSibling;
    target_it.classList.toggle('active')
    if(target_it.classList.contains('active')){
        c_text.style.height = c_text.scrollHeight + 'px';
    }else{
        c_text.style.height = 0;
    }
})

