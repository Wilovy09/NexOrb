# NexOrb

Es una herramienta que admite código html estilizado con TailwindCSS y te devuelve una clase de css con el estilo que le corresponde.

## Tailwind

Sabemos que con CSS se puede hacer lo mismo y hacerlo 1000 veces mejor, pero tampoco esta mal usar Tailwind, es una herramienta que te permite desarrollar muy rapido.

La idea es poder seguir usando clases como Tailwind, pero tener una clase `maestra` en la que puedas englobar todas tus clases en un archivo CSS, asi solo dejas en el codigo tu clase maestra

```html
<h1 class="titulo{ text-center text-red-500 }">Hello NexOrb</h1>
```

```css
/* CSS generado */
.titulo{
  text-align:center;
  --tw-text-opacity: 1;
  color: rgb(239 68 68 / var(--tw-text-opacity));
}
```

Básicamente, la idea es que puedas escribir tu código con Tailwind y que NexOrb te devuelva una clase con el estilo que le corresponde.

## TODO

* [x] Crear la web básica
* [ ] Crear un parser para Tailwind
* [ ] Crear un paquete npm
