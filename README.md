# Proyecto-de-CV-interactivo

Enlace al proyecto en vivo: https://josephcortez15.github.io/Proyecto-de-CV-interactivo/

Este repositorio contiene el código fuente de mi Curriculum Vitae interactivo, desarrollado como parte de la evaluación práctica de la asignatura Tecnologías Web I (SIS-214).
El proyecto demuestra la capacidad de diseñar un navegador web, aplicando fundamentos de HTML, CSS y JavaScript

El código está estructurado bajo una estricta separación de responsabilidades:

- Estructura (index.html): Es el esqueleto semántico, toda la pagina web se basa más que todo en esta parte.
- Presentación (css/styles.css): Otorga un estilo y el color que se le asigna a la pagina web.
- Comportamiento (js/main.js): Añade la lógica de interactividad y manipulación.

-- HTML5 Semántico y Accesibilidad: Se utilizó un marcado estricto con etiquetas como header, main, section y nav para evitar la "sopa de divs".
-- El Modelo de Caja (Box Model): Se aplicó la primera regla fundamental de buenas prácticas, conocida como el reseteo universal. Al utilizar box-sizing: border-box de manera global, se obliga al navegador a absorber el grosor del relleno y el borde hacia adentro, logrando un control matemático exacto del tamaño final de las cajas.
-- Control Espacial con Flexbox: La maquetación utiliza el sistema Flexbox para crear contenedores dinámicos. Esto permite alinear y distribuir el espacio entre los elementos de forma precisa utilizando relaciones de padre e hijo a través de un eje principal y un eje cruzado.
-- Interactividad y Manipulación del DOM: Se implementó lógica en JavaScript interactuando con identificadores únicos (IDs). Estos selectores de alta especificidad permiten capturar nodos exactos del documento para modificar el comportamiento visual en tiempo real de manera eficiente.
-- Formularios y Captura de Datos: Se integró un formulario HTML5 de nueva generación que aprovecha las validaciones nativas y atributos de restricción. Esto asegura la integridad de los datos directamente en el cliente antes de que la información sea procesada.

Desarrollado por Joseph Wendell Hans Cortez Chura - 2026