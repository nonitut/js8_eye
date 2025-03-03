document.addEventListener("DOMContentLoaded", function(){

    function handleMouseMove(event){
        let eyes = document.querySelectorAll(".eye");  // Получаем все элементы с классом .eye
        eyes.forEach(function(eye){                    //   получаем координаты центра глаза
            let rect = eye.getBoundingClientRect();
            // Метод elem.getBoundingClientRect() возвращает координаты 
            // в контексте окна для минимального по размеру прямоугольника, который заключает в себе элемент elem, 
            // в виде объекта встроенного класса DOMRect
            let eyeX = rect.left + eye.clientWidth / 2;
            let eyeY = rect.top + eye.clientHeight / 2;
            // вычисляем угол между курсором и центром глаза;
            let radian = Math.atan2(event.clientX - eyeX, event.clientY - eyeY );
            let rotation = (radian * (180 / Math.PI) * -1) + 180;
            // поворачиваем глаз в направлении курсора;
            eye.style.transform = `rotate(${rotation}deg)`;
        });
    };

    let moveArea = document.querySelector(".move-area");
    moveArea.addEventListener("mousemove", handleMouseMove);

    function cursorColor(event) {
        let cursor = document.querySelector(".cursor");
        cursor.style.left = `${event.pageX - 2}px`;
        cursor.style.top = `${event.pageY - 2}px`;
    }
    document.addEventListener("mousemove", cursorColor);



});