
$(document).ready(function() {
    $(".adress").click(function(event) {
        console.log(event.target.parentNode.childNodes);
        if(event.target.parentNode.childNodes[0].id==='map1'){
            initMap(t(55.8954676), a(24.548207))
        }else if(event.target.parentNode.childNodes[0].id==='map2'){
            initMap(t(52.8954676), a(22.548207))
        }else if(event.target.parentNode.childNodes[0].id==='map3'){
            initMap(t(55.8954676), a(27.548207))
        }
    });
});
var t=function(lat) {
    return lat;
};
var a=function(lng) {
    return lng;
};
var map;
function initMap(t, a) {
    map = new google.maps.Map(document.getElementById('map'), {
        // устанавливаем стартовую точку
        center: {lat:  t || 53.8954676 , lng:  a || 27.548207},
        zoom: 8
    });
    // Создаем маркер на карте
    var marker = new google.maps.Marker({
        // Определяем позицию маркера или меняем его положение
        position: {lat:  t || 53.8954676 , lng:  a || 27.548207},
        // Указываем, где он должен появится.
        map: map,
        //название маркера - появится если навести на него курсор
        title: 'Основной склад и магазин',
        // иконка для маркера
        icon: 'api/image/font-icons/Untitled-1.png'
    });
    // Создать наполнение для информационного окна
    var contentString = '<span>Основной склад и магазин</span>';
    // информационное окно
    var infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 400
    });
    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });
}
