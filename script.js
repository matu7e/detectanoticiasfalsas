const inputData = {
    input: 'Datos de entrada para la consulta' // Aquí debes proporcionar tus propios datos de entrada
    };
    
    fetch('URL_DE_TU_APP_FLASK/predict', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(inputData)
    })
    .then(response => response.json())
    .then(results => {
        // Mostrar los resultados en la página web
        const resultElement = document.getElementById('result');
        resultElement.textContent = JSON.stringify(results);
    })
    .catch(error => {
        // Manejar cualquier error que pueda ocurrir
        console.error(error);
    });
    