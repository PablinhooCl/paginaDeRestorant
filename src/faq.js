const faqContent= () =>{
    const _bodyContent= document.getElementById('bodyContent');
    if(_bodyContent.hasChildNodes()== true){
        while (_bodyContent.firstChild) {
            _bodyContent.removeChild(_bodyContent.firstChild);
        }}    else{};

    // Crear el div con la clase "faq" y el ID "faq"
    const faqDiv = document.createElement('div');
    faqDiv.className = 'faq';
    faqDiv.id = 'faq';

    // Crear la primera pregunta y respuesta
    const question1 = document.createElement('h3');
    question1.textContent = 'Do you have happy hour?';
    const answer1 = document.createElement('h4');
    answer1.textContent = 'Yes, in locations on Monday to Wednesday from 5 PM - 7 PM only';

    // Crear una línea horizontal
    const hr1 = document.createElement('hr');

    // Crear la segunda pregunta y respuesta
    const question2 = document.createElement('h3');
    question2.textContent = 'Are you halal?';
    const answer2 = document.createElement('h4');
    answer2.textContent = 'Yes we are halal certified but we do serve pork and alcohol on site';

    // Crear otra línea horizontal
    const hr2 = document.createElement('hr');

    // Crear la tercera pregunta y respuesta
    const question3 = document.createElement('h3');
    question3.textContent = 'What events do you have?';
    const answer3 = document.createElement('h4');
    answer3.textContent = 'We have bottomless brunch (£34.50 pp) on the weekend and bottomless dinner (£35.50 pp) on Wednesday & Thursdays in ALL locations, you must pay in advance via our booking page. 18+ only events, I.D. may be required';

    // Agregar las preguntas, respuestas y líneas horizontales al div "faq"
    faqDiv.appendChild(question1);
    faqDiv.appendChild(answer1);
    faqDiv.appendChild(hr1);
    faqDiv.appendChild(question2);
    faqDiv.appendChild(answer2);
    faqDiv.appendChild(hr2);
    faqDiv.appendChild(question3);
    faqDiv.appendChild(answer3);

    // Obtener el elemento con el ID "bodyContent"
    const bodyContent = document.getElementById('bodyContent');

    // Agregar el div "faq" como hijo del elemento "bodyContent"
    bodyContent.appendChild(faqDiv);
    }

export { faqContent };