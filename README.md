# **Intro-typescript**

## __Introducción a TypeScript__

1. Por qué usar TypeScript

2. TypeScript vs. JavaScript

3. Configurando nuestro proyecto

  a. Crear carpeta del proyecto `ts-project`.

  b.  Crear el archivo `.gitignore` para ello utilizamos el sitio web de `https://gitignore.io`

  c. Creamos el archivo `.aditorconfig` y además será ncecsario instalar el plugins `editor config for VS Code`.

  d. Inicializamos node `npm init -y`

  e. Instalar `typescript` con el comando `npm intall typescript`

  f. Para ver la versión de typescript instalado ejecutamos `npx tsc --version` <!--// Version 5.5.4 //-->

  g. Inicializamos git `git init`

  h. Además opcional renombrar nombre de la rama principal `master` a `main` con el comando `git branch -M main`.

4. Atrapando bugs

  - En archivo `src/demo.js` al inicio escribimos `//@ts-check` que nos ayudará a encontrar errores al momento de esccribir el código.

5. El compilador de TypeScript

  - Para compilar necesitamos ejecutar lo siguiente `npx tsc src/demo.ts --target es6`.

  - Crear carpeta `/dist` de distribution.

  - Enviamos la compilación a la carpete `/dist/` con el comando `npx tsc src/*.ts --target es6 --outDir dist` 

6. Veamos el TSConfig.json

  - Generamos el srchivo `TSConfig.json` con el comando `npx tsc --init`

  - Luego ejecutamos el comando `npx tsc --watch` que permite hacer transcripción de archivos `*.js` dentro de la carpeta `/dist`

7. ¿Qué es tipado en TypeScript?

```ts
// Sintaxis
const productPrice: number = 12; 

// const productPrice -> Declaracrión de la variable
// number -> Tipado - Type Annotation / Tipo de anotación
// 12 -> Asiganción de valor

```
