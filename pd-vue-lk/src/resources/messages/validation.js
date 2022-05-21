export default {
    required: 'Поле обязательно к заполнению',
    email: 'Некорректный email',
    userAgreement: 'Вы должны принять пользовательское соглашение',
    min: {
        symbols(num) {
            return 'Минимальная длина: ' + num + ' символов';
        },
        numbers(num) {
            return 'Значение не должно быть меньше ' + num;
        },
    },
    max: {
        symbols(num) {
            return 'Максимальная длина: ' + num + ' символов';
        },
        numbers(num) {
            return 'Значение не должно превышать ' + num;
        },
    },
}
