document.addEventListener('DOMContentLoaded', () => {

    const followCursor = () => { // объявляем функцию followCursor
      const el = document.querySelector('.follow-cursor') // ищем элемент, который будет следовать за курсором

      window.addEventListener('mousemove', e => { // при движении курсора
        const target = e.target // определяем, где находится курсор
        if (!target) return

        if (target.closest('a')) { // если курсор наведён на ссылку
          el.classList.add('follow-cursor_active') // элементу добавляем активный класс
        } else { // иначе
          el.classList.remove('follow-cursor_active') // удаляем активный класс
        }

        el.style.left = e.pageX + 'px' // задаём элементу позиционирование слева
        el.style.top = e.pageY + 'px' // задаём элементу позиционирование сверху
    })
    }

    let mouseinElements = document.querySelectorAll('.mousein');
    let fosor = document.querySelector('.follow-cursor');

    mouseinElements.forEach(mouseinElement => {
    mouseinElement.addEventListener('mouseenter', () => {
        fosor.classList.add('enlarge');
    });

    mouseinElement.addEventListener('mouseleave', () => {
        fosor.classList.remove('enlarge');
    });
    });



    followCursor() // вызываем функцию followCursor

});

// $(document).ready(function() {

//     const followCursor = () => { 
//         const el = $('.follow-cursor'); 

//         $(window).on('mousemove', function(e) { 
//             const target = $(e.target); 
//             if (!target) return;

//             if (target.closest('a').length) { 
//                 el.addClass('follow-cursor_active'); 
//             } else { 
//                 el.removeClass('follow-cursor_active'); 
//             }

//             el.css({
//                 left: e.pageX + 'px',
//                 top: e.pageY + 'px'
//             });
//         });
//     };

//     let mouseinElements = $('.mousein');
//     let fosor = $('.follow-cursor');

//     mouseinElements.on('mouseenter', function() {
//         fosor.addClass('enlarge');
//     });

//     mouseinElements.on('mouseleave', function() {
//         fosor.removeClass('enlarge');
//     });

//     followCursor();
// });








