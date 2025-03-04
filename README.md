# js8_eye

# Eye Tracking Animation

Этот проект реализует эффект "следящих глаз", где глаза поворачиваются в сторону курсора пользователя. 

## Логика работы

### 1. Определение центра глаза
Для каждого элемента с классом `.eye` вычисляются координаты его центра:

\[ \text{eyeX} = \text{rect.left} + \frac{\text{eye.clientWidth}}{2} \]
\[ \text{eyeY} = \text{rect.top} + \frac{\text{eye.clientHeight}}{2} \]

где:
- `rect.left` и `rect.top` — координаты верхнего левого угла глаза.
- `eye.clientWidth` и `eye.clientHeight` — ширина и высота глаза соответственно.

### 2. Определение угла поворота глаза к курсору
Используется арктангенс (`atan2`) для вычисления угла между вектором от центра глаза к курсору и осью X:

\[ \theta = \text{atan2} (\text{event.clientX} - \text{eyeX}, \text{event.clientY} - \text{eyeY}) \]

где:
- `event.clientX` и `event.clientY` — координаты курсора мыши.
- `eyeX` и `eyeY` — координаты центра глаза.
- `atan2(y, x)` возвращает угол в радианах относительно оси X.

Конвертация радиан в градусы:
\[ \theta_{deg} = \theta \times \frac{180}{\pi} \]

Коррекция угла для корректного поворота:
\[ \text{rotation} = -\theta_{deg} + 180 \]

### 3. Применение поворота
Глаз поворачивается в сторону курсора с помощью CSS-трансформации:
```css
 eye.style.transform = `rotate(${rotation}deg)`;
```

### 4. Отслеживание движения курсора
Кастомный курсор обновляет своё положение в реальном времени:

\[ \text{cursorX} = \text{event.pageX} - 2 \]
\[ \text{cursorY} = \text{event.pageY} - 2 \]

## Установка и использование
1. Подключите HTML, CSS и JavaScript-файлы в ваш проект.
2. Добавьте элементы с классами `.eye` для глаз.
3. Добавьте `.cursor` для кастомного курсора.
4. Запустите проект в браузере.

## Лицензия
Этот код можно использовать и модифицировать свободно.
