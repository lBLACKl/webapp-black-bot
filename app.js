let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#fff';
tg.MainButton.color = '#0088cc';

let item = '';

let clicked = false;
let current = '';

let buttons = document.querySelectorAll('.item__button');
buttons.forEach((button, index) => {
    button.addEventListener('click', event => {
        console.log('Вы выбрали товар ' + (index+1));
        // if (tg.MainButton.isVisible) {
        if (clicked) {
            if (current === index) {
                tg.MainButton.hide();
                clicked = false;
            } else {
                tg.MainButton.setText('Вы выбрали товар ' + (index+1));
                item = index+1;
                current = index;
            }
        } else {
            tg.MainButton.setText('Вы выбрали товар ' + (index+1));
            item = index+1;
            clicked = true;
            current = index;
            tg.MainButton.show();
        }

        // } else {
        //     tg.MainButton.setText('Вы выбрали товар ' + (index+1));
        //     item = index+1;
        //     clicked = true;
        //     current = index;
        //     tg.MainButton.show();
        // }
    })
});

Telegram.WebApp.onEvent('mainButtonClick', () => {
    tg.sendData(item);
});

let usercard = document.querySelector('.user__block');

let p = document.createElement('p');

p.innerHTML = `${tg.initDataUnsafe.user.first_name}` +
            + `<br>` +
            + `${tg.initDataUnsafe.user.last_name}`;

usercard.appendChild(p);
