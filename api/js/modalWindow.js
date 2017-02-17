$(document).ready(function () {

    var info={};
    $('#sendMail').click(function () {
        $('#send-window').toggle()
    });

    $('#click-send').click(function () {
        var info={
            name: $('#name-person')[0].value,
            mail: $('#mail-person')[0].value,
            phone: $('#phone-person')[0].value,
            text: $('#text-person')[0].value
        }
        if(validatorErr(info)===false){
            alert('не правильно введены данные')
            return false;
        }else{
           var valiIinfo={
                name: info.name,
                mail: info.mail,
                phone: info.phone.replace(/[^\d]/g, ''),//очистили номер
                text: info.text
            };
            validatorTrue(valiIinfo)
        }
    });
    function validatorTrue(_info){
        var info=_info;
        console.log(info)//через POST отправляем на php сервер для записи
        $('#send-window').toggle()
    }
    function validatorErr(_info) {
        var err = [];
        var cash = _info;
        for (key in cash) {
            switch (cash[key]) {
                case cash[key]:
                    if(cash[key].length < 5 || cash[key] === ''){
                        err.push([{key: 'мало'}]);
                    }

                case cash[key]:
                    if (key === 'mail'){
                        if (!(cash[key].match(/.+@.+\..+/i))) {
                            err.push([{key: 'не корректно'}]);
                        }
                    }
                case cash[key]:
                    if (key === 'phone'){
                        if (!(cash[key].match(/\d/))) {
                            err.push([{key: 'не корректно'}]);
                        }
                    }
            }
        }
        if(err.length===0){
           console.log(err);
            return true
        }else {
            console.log(err);
            return false
        }


    }
});
