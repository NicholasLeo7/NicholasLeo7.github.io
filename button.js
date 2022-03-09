const modal = document.getElementById('email-modal');
const openBtn = document.querySelector('.contact-btn');
const closeBtn = document.querySelector('.closebtn');
//click events
openBtn.addEventListener('click', () =>{
    modal.style.display = 'block';
});
closeBtn.addEventListener('click', () =>{
    modal.style.display = 'none';
});
window.addEventListener('click',(e)=>{
    if(e.target === modal){
        modal.style.display = 'none';
    }
});
