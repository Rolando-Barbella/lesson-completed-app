### Código CSS para mejorar el UI de nuestra aplicación

Por favor copia este código para la próxima lección

```CSS
Title {
 height: 30px;
 font-weight: 400;
}
 
.LessonCheck {
 display: block;
}
 
/* Lessons */
.LessonCheck {
 font-size: 1.5rem;
}
 
.LessonCheck label {
 text-align: left;
 display: block;
 padding-bottom: 5px;
}
 
.LessonCheck input {
 display: none; /* Esconder el checkbox predeterminado */
}
 
/* Estilo artificial del checkbox */
.LessonCheck span {
 height: 15px;
 width: 15px;
 border: 2px solid white;
 display: inline-block;
 position: relative;
 margin-right: 10px;
 border-radius: 5px;
}
 
/* Estilo cuando realizamos click en el checkbox con icono */
 
.LessonCheck [type=checkbox]:checked + span:before {
 content: '\2714';
 position: absolute;
 top: -10px;
 left: 0;
}
