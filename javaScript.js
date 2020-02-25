var canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');
ctx.lineWidth = 3;
ctx.strokeStyle = '#ffd800';
ctx.font = 'bold 24px Tahoma';

//Инициальзация переменных
var positionX = 5;// координата х для отрисовки символа(fillText)
var positionY = 32;// координата у для отрисовки символа(fillText)
var i = 1;// щетчик для выыбора элемента по индексу
var xForChar;//переменная-условие для цикла while
var x = 46;// начальное значение х, для рисования рамки логотипа
var y = 10;//начальное значение у, для рисования рамки логотипа
var direction = 1;//переменная для смены направления рисования рамки
var timerForDrowFrame;// таймер для функции рисования рамки (drowFrame) 
var timerForDrowChar;//таймер для функции рисования текста символа(drowChar)
var text = 'SUPER LOGO';//текст для отрисовки
var stopDrow = 177;//переменная для прекращения отрисовки символа, перед предыдущим символом
var clearWidth;// переменная для установки ширины очищаемой области canvas

//Вызов функции рисования логотипа.
setTimeout(drowLogo, 4000);

//Реализация функции рисования логотипа.
function drowLogo() {

    //Сброс таймеров для прекращения рисования. Необходимо для корректной отрисовки при перенаведении курсора на доготип, когда он еще не дорисован.          
    clearTimeout(timerForDrowFrame);
    clearTimeout(timerForDrowChar);

    //Сброс переменных до начальных значений           
    i = 1;
    x = 46;
    y = 10;
    direction = 1;
    stopDrow = 177;

    //Начальная точка рисования
    ctx.beginPath();
    ctx.moveTo(x, y);

    //Очистка области canvas перед каждым рисованием логотипа(задержка необходима для удаления последнего нарисованного символа в цикле while)
    setTimeout(function () {
        ctx.clearRect(0, 0, 180, 46);
    }, 35);

    //Рисуем рамку
    drowFrame();

    //После отрисовки рамки рисуем движушиеся буквы
    timerForDrowChar = setTimeout(drowChar, 1000);

    //Функция рисования рамки
    function drowFrame() {
        switch (direction) {
            case 1:
                y -= 2;
                if (y == 2) {
                    direction = 2;
                }
                break;
            case 2:
                x -= 2;
                if (x == 2) {
                    direction = 3
                }
                break;
            case 3:
                y += 2;
                if (y == 44) {
                    direction = 4;
                }
                break;
            case 4:
                x += 2;
                if (x == 46) {
                    direction = 5;
                }
                break;
            case 5:
                y -= 2;
                break;
        }

        ctx.lineTo(x, y);
        ctx.stroke();
        timerForDrowFrame = setTimeout(drowFrame, 10);
        if (x == 46 & y == 36) {
            clearTimeout(timerForDrowFrame);
        }
    }

    //Функция рисования текста(по-символьно)
    function drowChar() {
        //Сброс условия и координат перед рисованием каждого символа
        xForChar = 5;
        positionX = 5;
        //Выбор символа
        char = text[text.length - i];
        //Точка последнего рисования символа (учитывая ширину каждого символа)
        stopDrow -= ctx.measureText(char).width;
        clearWidth = stopDrow - 5 + ctx.measureText(char).width;
        while (xForChar <= stopDrow) {
            setTimeout(function () {
                ctx.clearRect(5, 12, clearWidth, 22);
                ctx.fillText(char, positionX += 1, positionY);
                if (positionX > stopDrow) {
                    drowChar();
                }
            }, 35);
            xForChar += 1;
        }
        i += 1;
    }
}
//установка обработчика события при наведении курсора на логотип
document.getElementById('canvas').onmouseover = drowLogo;