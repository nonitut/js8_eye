document.addEventListener("DOMContentLoaded", function(){

    function handleMouseMove(event){
        let eyes = document.querySelectorAll(".eye");
        // получаем все эленты с классом .eye
        eyes.forEach(function(eye){
            let rect = eye.getBoundingClientRect();
            // .getBoundingClientRect() - метод который 
            // возвращает координаты в контексте окна 
            let eyeX = rect.left + eye.clientWidth / 2;
            let eyeY = rect.top + eye.clientHeight / 2;
            // далее вычисляем угол между курсором и центром глаза
            let radian = Math.atan2(event.clientX - eyeX, event.clientY - eyeY);
            let rotation = (radian * (180 / Math.PI ) * -1) + 360;
            // поворачиваем глаза в направлении курсора
            eye.style.transform = `rotate(${rotation}deg)`;
        });
    };

    let moveA = document.querySelector(".move-area");
    moveA.addEventListener("mousemove", handleMouseMove );


    function sursorX(event){
        let cursor = document.querySelector(".cursor");
        cursor.style.left = `${event.pageX - 20}px`;
        cursor.style.top = `${event.pageY - 30}px`;
    };
    document.addEventListener("mousemove", sursorX );


});
