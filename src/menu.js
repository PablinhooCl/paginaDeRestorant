
const menuContent= () =>{
  
    const _bodyContent= document.getElementById('bodyContent');
    if(_bodyContent.hasChildNodes()== true){
        while (_bodyContent.firstChild) {
            _bodyContent.removeChild(_bodyContent.firstChild);
        }}    else{};

    const menuImage = document.createElement('img');

    // Establecer los atributos src, alt e id
    menuImage.src = '/src/restaurant menu - Hecho con PosterMyWall.png';
    menuImage.alt = 'menu';
    menuImage.id = 'menu';

    // Obtener el elemento donde deseas agregar la imagen (por ejemplo, bodyContent)
    const bodyContent = document.getElementById('bodyContent');

    // Agregar la imagen como hijo del elemento bodyContent
    bodyContent.appendChild(menuImage);

};

export {menuContent};