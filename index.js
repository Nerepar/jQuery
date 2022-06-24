$(document).ready(() => {
    // console.log($('.button'));
    // console.log($('#button'));
    // console.log($('h3'));
    // console.log($('ul li'));
    // $('.button').click(() => {
    //     console.log('Привет!');
    // });
    // $('.button').click();
    // console.log($('.button').text());
    // $('.button').text('Привет!');

    // $('#test').click(() => {
    //     console.log('click');
    // });
    // $('#test').on('input', () => {
    //     console.log('input');
    // });
    // $('#test').on('change', () => {
    //     console.log('change');
    // });
    // $('#test').on('blur', () => {
    //     console.log('blur');
    // });

    // $('#test').on('input', () => {
    //     $('#text').text($('#test').val());
    // });
    // $('#clear').on('click', () => {
    //     $('#test').val('');
    //     $('#text').text('');
    // });
    let isHide = false;
    $('#click').on('click', () => {
        if (isHide) {
            $('#popup').show();
        } else {
            $('#popup').hide();
        }
        $('#click').text(!isHide ? 'Показать' : 'Скрыть');
        isHide = !isHide;
    });

});