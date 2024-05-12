

window.addEventListener('DOMContentLoaded', () => {


    const kun = document.querySelector('.kun');
    const tun = document.querySelector('.tun');
    const body = document.querySelector('body');
    const bar = document.querySelector('.bar');
    const modall = document.querySelector('.modall');
    const iks = document.querySelector('.iks');
    
    
    
    const one__car = document.querySelector('.one__car');
    const two__car = document.querySelector('.two__car');
    const tree__car = document.querySelector('.tree__car');
    const four__car = document.querySelector('.four__car');
    const gt__big = document.querySelector('.gt__big');
    
    
    
    const one__btn = document.querySelector('.one__btn');
    const birni__psi = document.querySelector('.birni__psi');
    const tepaga__a = document.querySelector('.tepaga__a');
    const pas__bir = document.querySelector('.pas__bir');
    
    
    
    
    
    const two__btn = document.querySelector('.two__btn');
    const ikkini__psi = document.querySelector('.ikkini__psi');
    const tepaga__b = document.querySelector('.tepaga__b');
    const pas__ikki = document.querySelector('.pas__ikki');
    
    
    
    
    
    
    const tree__btn = document.querySelector('.tree__btn');
    const uchni__psi = document.querySelector('.uchni__psi');
    const tepaga__c = document.querySelector('.tepaga__c');
    const pas__uch = document.querySelector('.pas__uch');
    
    
    
    
    
    
    const four__btn = document.querySelector('.four__btn');
    const tortni__psi = document.querySelector('.tortni__psi');
    const tepaga__d = document.querySelector('.tepaga__d');
    const pas__tort = document.querySelector('.pas__tort');
    
    const barni__manyusi = document.querySelector('#barni__manyusi');
    
    
    
    const p = document.querySelector('.p');
    
    
    
    const pastga__a = document.querySelector('.pastga__a');
    const pastga__b = document.querySelector('.pastga__b');
    const pastga__c = document.querySelector('.pastga__c');
    const pastga__d = document.querySelector('.pastga__d');
    
    
    
    
    
    
    
    
    
    
    // navbarni js qismi start
    
    barni__manyusi.addEventListener('click', () => {
      modall.style.display = 'block';
      barni__manyusi.style.display = "none";
      iks.style.display = 'block';
      iks.style.color = '#fff';
    
    
    });
    
    
    iks.addEventListener('click', () => {
      modall.style.display = 'none';
      barni__manyusi.style.display = "block";
      iks.style.display = 'none';
    
    
    
    });
    
    
    // navbarni js qismi finish
    
    
    // ozgartiruvchi rasmlar start
    
    
    
    one__car.addEventListener('click', () => {
      gt__big.style.backgroundImage = './image/Rectangle\ 162.png'
    })
    
    
    // ozgartiruvchi rasmlar start
    
    
    
    
    // pastga ochiladigan funksiyalar boshlash
    
    pastga__a.addEventListener('click', () => {
      birni__psi.style.display="flex";
      one__btn.style.background="red";
      pas__bir.style.height="100px";
      pastga__a.style.display= 'none';
      tepaga__a.style.display= 'flex';
    
    })
    tepaga__a.addEventListener('click', () => {
      birni__psi.style.display="none";
      one__btn.style.background="#262626";
      pas__bir.style.height="50px";
      pastga__a.style.display= 'block';
      tepaga__a.style.display= 'none';
    
    
    })
    
    
    
    
    
    pastga__b.addEventListener('click', () => {
      ikkini__psi.style.display="flex";
      two__btn.style.background="red";
      pas__ikki.style.height="100px";
      pastga__b.style.display= 'none';
      tepaga__b.style.display= 'flex';
    })
    tepaga__b.addEventListener('click', () => {
      ikkini__psi.style.display="none";
      two__btn.style.background="#262626";
      pas__ikki.style.height="50px";
      pastga__b.style.display= 'flex';
      tepaga__b.style.display= 'none';
    })
    
    
    
    
    
    
    pastga__c.addEventListener('click', () => {
      uchni__psi.style.display="flex";
      tree__btn.style.background="red";
      pas__uch.style.height="100px";
      pastga__c.style.display= 'none';
      tepaga__c.style.display= 'flex';
    })
    tepaga__c.addEventListener('click', () => {
      uchni__psi.style.display="none";
      tree__btn.style.background="#262626";
      pas__uch.style.height="50px";
      pastga__c.style.display= 'flex';
      tepaga__c.style.display= 'none';
    })
    
    
    
    
    
    
    
    pastga__d.addEventListener('click', () => {
      tortni__psi.style.display="flex";
      four__btn.style.background="red";
      pas__tort.style.height="100px";
      pastga__d.style.display= 'none';
      tepaga__d.style.display= 'flex';
    })
    tepaga__d.addEventListener('click', () => {
      tortni__psi.style.display="none";
      four__btn.style.background="#262626";
      pas__tort.style.height="50px";
      pastga__d.style.display= 'flex';
      tepaga__d.style.display= 'none';
    })
    
    
    
    
    
    
    
    
    // pastga ochiladigan funksiyalar boshlash
    
    
    
    
    
    
    
    
    
    
    
    
    
    const swiper = new Swiper('.swiper', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
    
    
    
    async function countrys() { 
      loader.style.display = 'none'
    
    }
    
    
  
  })
  
  
  
  
  
  
  
  