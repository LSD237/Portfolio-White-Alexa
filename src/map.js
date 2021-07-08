//* нужен стилизованный <div id='map'></div>
// Создайте тег скрипта, установите соответствующие атрибуты
let script = document.createElement('script')
// script.src = 'https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap'
//! строка без API ключа, она не заработает(нужна для разработки)(используй строку выше, где нужно указать API ключ(ключ должен дать заказчик сайта))
script.src = 'https://maps.googleapis.com/maps/api/js?&callback=initMap'
script.async = true

window.initMap = function () {
  // параметры карты (центр карты, зум, стилизация...)
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 54.710354996914845, lng: 20.57900152722942 },
    zoom: 17
    //есть styles (как zoom или center) для стилизации карты
  })

  let marker = new google.maps.Marker({
    // Определяем позицию маркера
    position: { lat: 54.710591923233785, lng: 20.577018102800572 },
    // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
    map: map,
    // Пишем название маркера - появится если навести на него курсор и немного подождать
    title: 'Наш маркер: Компания "Рога и копыта"',
    //задаем изображение иконки //! возможмо придется импортировать картинку(даже в другом файле)
    icon: './assets/Images/ikon/map/mappin.png'
  })
}

// Добавьте элемент 'script' в 'head'
document.head.appendChild(script)
