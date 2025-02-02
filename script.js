// comentários adicionados para o tony entender o codigo não é chatgpt não profe :(

document.addEventListener('DOMContentLoaded', function() {
    // const = variavel que não muda tony, isso é so para armazenar para eu usar o codigo começa depois da linha
    const variableDemo = document.getElementById('variableDemo');
    const variableOutput = document.getElementById('variableOutput');

    // ------------------------------------------------------------------
    
    variableDemo.addEventListener('click', function() { //lembre-se addeventlistener é o gancho para o codigo entender quando o click acontecer
        let x = 5;
        const y = 10;
        var z = 15;

        x += 5;
        // y += 5; // esse erro é de proposito para lembrar de add isso pois o y é uma constante(valor impossivel de mudar)
        z += 5;

        variableOutput.textContent = `x = ${x}, y = ${y}, z = ${z}`; // é o textinho do resultado
    });

    // Demonstração das funções mano é literal que ta no site é uma calculadora basica de soma
    const num1 = document.getElementById('num1');
    const num2 = document.getElementById('num2');
    const calculateSum = document.getElementById('calculateSum');
    const sumResult = document.getElementById('sumResult');

    function sum(a, b) {
        return a + b; //função da soma mano pela mor né
    }

    calculateSum.addEventListener('click', function() {
        const result = sum(Number(num1.value), Number(num2.value));
        sumResult.textContent = `A soma é: ${result}`;
    });

    // Manipulação do DOM
    const changeMe = document.getElementById('changeMe');
    const changeTextBtn = document.getElementById('changeTextBtn');

    changeTextBtn.addEventListener('click', function() {
        changeMe.textContent = 'O Texto foi alterado!';
        changeMe.style.color = 'red';
    });

    // Demonstração de Eventos, É o famoso gancho que vivo te falando do listener
    const eventBox = document.getElementById('eventBox');
    const eventOutput = document.getElementById('eventOutput');

    eventBox.addEventListener('mouseover', function() { //gancho para quando o mouse esta no botão
        this.textContent = 'O mouse está em min!';
        this.style.backgroundColor = '#0056b3';
    });

    eventBox.addEventListener('mouseout', function() { //gancho esperando o mouse ficar em cima do botão
        this.textContent = 'coloque o mouse em min!';
        this.style.backgroundColor = '#007bff';
    });

    eventBox.addEventListener('click', function() { //gancho de clique
        eventOutput.textContent = 'Você clicou no botão!';
    });

    // Exemplo de uso de querySelector
    const exampleSection = document.querySelector('#dom-manipulation');
    
    // Exemplo de setTimeout
    setTimeout(() => {
        const timeoutMessage = document.createElement('p');
        timeoutMessage.textContent = 'Esta mensagem aparece após 5 segundos!';
        exampleSection.appendChild(timeoutMessage);
    }, 5000); // 5000ms = 5 segundos

    // Exemplo de createElement e createTextNode
    const newElement = document.createElement('div'); // codigo para criar um elemento
    const newText = document.createTextNode('Este é um novo elemento criado!'); // auto explicativo -_-
    newElement.appendChild(newText);
    newElement.setAttribute('class', 'new-element'); // Adicionando uma classe ao novo elemento
    exampleSection.appendChild(newElement); // Adicionando o novo elemento à seção

    // Exemplo de insertBefore
    const existingElement = document.querySelector('#changeMe');
    const newElement2 = document.createElement('div');
    newElement2.textContent = 'Este elemento foi inserido antes do texto que você pode mudar!';
    exampleSection.insertBefore(newElement2, existingElement); // Inserindo antes do elemento existente
});