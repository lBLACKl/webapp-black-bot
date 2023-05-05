let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#fff';
tg.MainButton.color = '#0088cc';

let item = '';

let buttons = document.querySelectorAll('.item__button');
buttons.forEach((button, index) => {
    button.addEventListener('click', event => {
        if (tg.MainButton.isVisible) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.setRangeText('Вы выбрали товар ' + (index+1));
            item = '1';
            tg.MainButton.show();
        }
    })
});

Telegram.WebApp.onEvent('mainButtonClick', () => {
    tg.sendData(item);
});


let usercard = document.querySelector('.user_card');

let p = document.createElement('p');


console.log(tg.initDataUnsafe)


p.innerHTML = `${tg.initDataUnsafe.user.first_name}` +
            + `<br>` +
            + `${tg.initDataUnsafe.user.last_name}`;

usercard.appendChild(p);
