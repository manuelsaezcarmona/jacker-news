# Prueba Tecnica Hacker News https://github.com/midudev/aprendiendo-react/tree/master/projects/14-hacker-news-prueba-tecnica

Requisitos:

- [ ] Utiliza una solución de Componentes Estilizados/CSS-en-JS de tu elección -> styled-components
- [ ] Muestra un marcador de posición/esqueleto para las historias y comentarios mientras se cargan ✅
- [ ] Respeta la indentación de los elementos de la lista para los comentarios ✅
- [ ] Cada página debe tener una URL única (ej. localhost:8080/artículo/12121). Debe ser una SPA pero todas las URLs deben ser accesibles mediante enlace directo. ✅

- Instrucciones:

  - [ ] Parte 1: Escribe una aplicación de React o React Native que obtenga y muestre las 10 principales historias de Hacker News usando la API de Hacker News - https://github.com/HackerNews/ ✅
        API

- [ ] Parte 2: Si haces clic en una historia, deberías ver los comentarios en una página diferente. Obtén y muestra los primeros 10 comentarios y sus respuestas usando la API de Hacker News. Puedes usar cualquier biblioteca adicional que consideres necesaria. (recuerda respetar los comentarios anidados)

- [ ] Parte 3: Implementa un desplazamiento infinito para las principales historias usando un botón de "Cargar más".
- [ ] Parte 4: Asegúrate de desplazarte hasta el fondo cada vez que se carguen nuevas historias.

- [ ] Parte 5: Haz que las llamadas a la API para obtener comentarios fallen el 75% de las veces y maneja el error de manera adecuada.

## Criterios de Evaluación:

Por favor, asegúrate de que tu código esté bien organizado y sea fácil de leer.
Reutiliza tanto código como sea posible.

---

"typescript.inlayHints.enumMemberValues.enabled": true,
"typescript.inlayHints.functionLikeReturnTypes.enabled": true

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
