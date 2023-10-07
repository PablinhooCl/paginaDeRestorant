

const orderNow= () =>{
    const _bodyContent= document.getElementById('bodyContent');
    if(_bodyContent.hasChildNodes()== true){
        while (_bodyContent.firstChild) {
            _bodyContent.removeChild(_bodyContent.firstChild);
        }}    else{};



    // Crear un nuevo div con la clase "orderNow" y el ID "orderNow"
    const orderNowDiv = document.createElement('div');
    orderNowDiv.className = 'orderNow';
    orderNowDiv.id = 'orderNow';

    // Crear un formulario dentro del div
    const form = document.createElement('form');
    form.action = ''; // Puedes establecer la acción del formulario aquí

    // Crear etiqueta y campo de texto para Nombre
    const nombreLabel = document.createElement('label');
    nombreLabel.setAttribute('for', 'nombre');
    nombreLabel.textContent = 'Nombre: ';
    const nombreInput = document.createElement('input');
    nombreInput.type = 'text';
    nombreInput.id = 'nombre';
    nombreInput.name = 'nombre';
    nombreInput.required = true;

    // Crear etiqueta y campo de texto para Dirección
    const direccionLabel = document.createElement('label');
    direccionLabel.setAttribute('for', 'direccion');
    direccionLabel.textContent = 'Dirección: ';
    const direccionInput = document.createElement('input');
    direccionInput.type = 'text';
    direccionInput.id = 'direccion';
    direccionInput.name = 'direccion';
    direccionInput.required = true;

    // Crear etiqueta y campo de número para Contacto
    const contactoLabel = document.createElement('label');
    contactoLabel.textContent = 'Contacto: +56';
    const telefonoInput = document.createElement('input');
    telefonoInput.type = 'number';
    telefonoInput.id = 'phone';
    telefonoInput.name = 'phone';
    telefonoInput.required = true;

    // Agregar los elementos al formulario
    form.appendChild(nombreLabel);
    form.appendChild(nombreInput);
    form.appendChild(direccionLabel);
    form.appendChild(direccionInput);
    form.appendChild(contactoLabel);
    form.appendChild(telefonoInput);

    // Agregar el formulario al div "orderNow"
    orderNowDiv.appendChild(form);

    // Obtener el elemento con el ID "bodyContent"
    const bodyContent = document.getElementById('bodyContent');

    // Agregar el div "orderNow" al elemento "bodyContent"
    bodyContent.appendChild(orderNowDiv);
    };

export {orderNow};