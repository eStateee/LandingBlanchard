document.addEventListener("DOMContentLoaded", function() {
    let phone = document.querySelector("input[type='tel']")
    var im = new Inputmask("+7 (999) 999-99-99")
    im.mask(phone);
    let form = '.feedback-form-js'
    new window.JustValidate(form, {
        colorWrong: '#D11616',

        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true,
                function: (name, value) => {
                    const ph = phone.inputmask.unmaskedvalue();
                    return Number(ph) && ph.length === 10;
                }
            },
        },

        messages: {

            name: "Недопустимый формат",
            phone: {

                required: "Недопустимый формат",
                function: "Недопустимый формат"
            }
        },
        // Отправка письма
        submitHandler: function(form) {
            let formData = new FormData(form);
            let xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        console.log('Отправлено');
                    } else {
                        console.log('Ошибка статус кода ', xhr.status, ' ожидалось 200')
                    }
                }
            }
            xhr.open('POST', 'mail.php', true);
            xhr.send(formData)

        }


    });
})