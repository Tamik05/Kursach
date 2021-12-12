/* Устанавливаем стартовый индекс слайда по умолчанию: */
let slideIndex = 1;
/* Вызываем функцию, которая реализована ниже: */
showSlides(slideIndex);

/* Увеличиваем индекс на 1 — показываем следующий слайд: */
function nextSlide() {
    showSlides(slideIndex += 1);
}

/* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
function previousSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливаем текущий слайд: */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Функция перелистывания: */
function showSlides(n) {
    /* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
    let slides = document.getElementsByClassName("item");
    
    /* Проверяем количество слайдов: */
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
  
    /* Проходим по каждому слайду в цикле for: */
    for (let slide of slides) {
        slide.style.display = "none";
    }
    /* Делаем элемент блочным: */
    slides[slideIndex - 1].style.display = "block";    
}




let modal = document.querySelector('.modal');
let btn1 = document.querySelector('.cnopka1');
let square = document.querySelector('.crestik');
btn1.addEventListener('click',()=>{
    modal.style.display="block";
    
})
square.addEventListener('click',()=>{
    modal.style.display="none";
})






let modal_2 = document.querySelector('.modal-2');
let btn_2 = document.querySelector('.cnopka2');
let square_2 = document.querySelector('.crestik2');
btn_2.addEventListener('click',()=>{
    modal_2.style.display="block";
    
})
square_2.addEventListener('click',()=>{
    modal_2.style.display="none";
})


let modal_3 = document.querySelector('.modal-3');
let btn_3 = document.querySelector('.cnopka3');
let square_3 = document.querySelector('.crestik3');
btn_3.addEventListener('click',()=>{
    modal_3.style.display="block";
    
})
square_3.addEventListener('click',()=>{
    modal_3.style.display="none";
})


let modal_4 = document.querySelector('.modal-4');
let btn_4 = document.querySelector('.cnopka4');
let square_4 = document.querySelector('.crestik4');
btn_4.addEventListener('click',()=>{
    modal_4.style.display="block";
    
})
square_4.addEventListener('click',()=>{
    modal_4.style.display="none";
})


let modal_5 = document.querySelector('.modal-5');
let btn_5 = document.querySelector('.cnopka5');
let square_5 = document.querySelector('.crestik5');
btn_5.addEventListener('click',()=>{
    modal_5.style.display="block";
    
})
square_5.addEventListener('click',()=>{
    modal_5.style.display="none";
})


let modal_6 = document.querySelector('.modal-6');
let btn_6 = document.querySelector('.cnopka6');
let square_6 = document.querySelector('.crestik6');
btn_6.addEventListener('click',()=>{
    modal_6.style.display="block";
    
})
square_6.addEventListener('click',()=>{
    modal_6.style.display="none";
})





    
