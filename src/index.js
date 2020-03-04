/*** Vanilla JS ***/

// const element = document.createElement('h1');
// element.innerText = "Hello, Platzi Badges!!";

// const container = document.getElementById('app');

// container.appendChild(element);

/*** React ***/
import React from 'react';
import ReactDOM from 'react-dom';

//const element = <h1>Hello, Platzi Badges</h1>;

// React.createElement(__tipoElemento__, __{atributos/props}__, __children__)
//const element = React.createElement('a', {href: 'https://platzi.com'}, 'Ir a Platzi');
//const name = 'Nadia';
// const element = React.createElement(
//     'h1',
//     {},
//     `Hola, soy ${name}`
// );
//const jsx = <h1>Hola soy, {name}</h1>

const jsx = (
    <div>
        <h1>Hola, soy Nadia</h1>
        <p>Saludos</p>
    </div>
);

const container = document.getElementById('app');

// ReactDOM.render(__qué__, __donde__);
ReactDOM.render(jsx, container);
