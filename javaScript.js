var canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');
ctx.lineWidth = 3;
ctx.strokeStyle = '#ffd800';
ctx.font = 'bold 24px Tahoma';

//������������� ����������
var positionX = 5;// ���������� � ��� ��������� �������(fillText)
var positionY = 32;// ���������� � ��� ��������� �������(fillText)
var i = 1;// ������ ��� ������� �������� �� �������
var xForChar;//����������-������� ��� ����� while
var x = 46;// ��������� �������� �, ��� ��������� ����� ��������
var y = 10;//��������� �������� �, ��� ��������� ����� ��������
var direction = 1;//���������� ��� ����� ����������� ��������� �����
var timerForDrowFrame;// ������ ��� ������� ��������� ����� (drowFrame) 
var timerForDrowChar;//������ ��� ������� ��������� ������ �������(drowChar)
var text = 'SUPER LOGO';//����� ��� ���������
var stopDrow = 177;//���������� ��� ����������� ��������� �������, ����� ���������� ��������
var clearWidth;// ���������� ��� ��������� ������ ��������� ������� canvas

//����� ������� ��������� ��������.
setTimeout(drowLogo, 4000);

//���������� ������� ��������� ��������.
function drowLogo() {

    //����� �������� ��� ����������� ���������. ���������� ��� ���������� ��������� ��� ������������� ������� �� �������, ����� �� ��� �� ���������.          
    clearTimeout(timerForDrowFrame);
    clearTimeout(timerForDrowChar);

    //����� ���������� �� ��������� ��������           
    i = 1;
    x = 46;
    y = 10;
    direction = 1;
    stopDrow = 177;

    //��������� ����� ���������
    ctx.beginPath();
    ctx.moveTo(x, y);

    //������� ������� canvas ����� ������ ���������� ��������(�������� ���������� ��� �������� ���������� ������������� ������� � ����� while)
    setTimeout(function () {
        ctx.clearRect(0, 0, 180, 46);
    }, 35);

    //������ �����
    drowFrame();

    //����� ��������� ����� ������ ���������� �����
    timerForDrowChar = setTimeout(drowChar, 1000);

    //������� ��������� �����
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

    //������� ��������� ������(��-���������)
    function drowChar() {
        //����� ������� � ��������� ����� ���������� ������� �������
        xForChar = 5;
        positionX = 5;
        //����� �������
        char = text[text.length - i];
        //����� ���������� ��������� ������� (�������� ������ ������� �������)
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
//��������� ����������� ������� ��� ��������� ������� �� �������
document.getElementById('canvas').onmouseover = drowLogo;