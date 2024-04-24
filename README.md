
## 🌈  Descripción
Este es un blog desarrollado utilizando el stack MERN (MongoDB, Express, React, Node.js), enfocado en compartir actualizaciones sobre desarrollo web, tecnologías emergentes y oportunidades de empleo en el sector tecnológico. Aquí, podrás encontrar desde tutoriales hasta análisis profundos de las últimas tendencias en tecnología.




## 💻 Tecnologías 
- HTML 5
- CSS 3
- Tailwind
- Express
- MongoDB
- Vite

## 🔥 Herramientas
- Git / GitHub
- Visual Studio Code
- Insomnia (para probar APIs)

## 🚀 Instalación

- 🔸 carpeta BLOG  
  - 🔹npm create vite@latest  
  - 🔹npm i express  
  - 🔹node api/index.js  
  - 🔹npm i nodemon  
  - 🔹npm i mongoose ➰ una librería para trabajar con MongoDB en Node.js.  
  - 🔹npm i dotenv ➰ un módulo que carga variables de entorno desde un archivo .env a process.env. Esto ayuda a mantener la configuración separada del código.  
  - 🔹npm i bcryptjs ➰ una librería para hash y comparar contraseñas en Node.js. No de guardar la contraseña directamente, se guarda un hash de la misma. 
  - 🔹npm i jsonwebtoken ➰ una implementación de JSON Web Tokens, comúnmente usados para implementar autenticación y autorización en aplicaciones web y móviles. 

 
- 🔸 carpeta client
  - ➖ npm i
  - ➖ npm install -D tailwindcss postcss autoprefixer
  - ➖ npx tailwindcss init -p
  - ➖ npm i react-router-dom
  - ➖ npm i flowbite-react y En el archivo tailwind.config.js lo añadimos
  - ➖ npm i react-icons
  - ➖ npm install @reduxjs/toolkit react-redux  
  - ➖ react-circular-progressbar  
  - ➖ npm i cookie-parser 
  - ➖ npm install react-quill --save    
  - ➖ npm install --save moment react-moment 
  - ➖ npm i moment   
  - ➖ npm install --save-dev tailwind-scrollbar
  - ➖ npm install @reduxjs/toolkit react-redux  
       ➰ herramientas para facilitar la gestión del estado en aplicaciones, permite conectar componentes React con el estado Redux, permitiendo a los componentes suscribirse a actualizaciones del estado y despachar acciones para actualizarlo.
  - ➖ npm install --save-dev tailwind-scrollbar  


## 🚨Instalación
- 🔹 Creamos un archivo .env donde va la clave  
- 🔹 gitignore lo incluimos para que no se vean nuestros datos  
- 🔹 Para instalar todas las dependencias necesarias para el servidor y el cliente, ejecuta:npm run build


## ♨️ Arrancamos con:

- 🔹Frontend  localhost:5173  (dentro de client) npm run dev  
- 🔹Backend localhost:3000  npm run start

## 🔗 Deploy 

https://blog-6.onrender.com/

## 🚨 Implementación de Prácticas de Desarrollo Seguro
- 🔹ReCaptcha de Google para el formulario.

![image](https://github.com/MamenFB/BLOG/assets/106315129/402a97a6-7262-46e2-9d29-88550c7108ee)

- 🔹Dentro de contacto se implementar 2 campos ocultos en el formulario contacto.

![image](https://github.com/MamenFB/BLOG/assets/106315129/75892841-6e0a-48fd-8f1a-ea86603d7391)

- 🔹y si todo va bien se envia a gmail.

![image](https://github.com/MamenFB/BLOG/assets/106315129/9f6bcaa2-d3bf-4c6a-a992-008583c4e073)

- 🔹Rutas para login(email , password) con 2 roles diferentes admin y user.

![image](https://github.com/MamenFB/BLOG/assets/106315129/84244f95-51bb-44f7-aa13-a8a406014377)


usuario 
nadie2
nadie2@gamil.com
contraseña:
789456
- 🔹El admin es el único para crear, editar y eliminar usuarios.

![image](https://github.com/MamenFB/BLOG/assets/106315129/a577c29c-6a00-413f-bffd-0d78cbf9517d)

- 🔹Panel de control, publicaciones, usuarios, comentarios y likes.

![image](https://github.com/MamenFB/BLOG/assets/106315129/a9e50161-e12f-472b-a7f3-c039d9fa8159)

![image](https://github.com/MamenFB/BLOG/assets/106315129/bdd0cacf-618f-4608-bd3b-dbe5bdab22e2)

![image](https://github.com/MamenFB/BLOG/assets/106315129/42e5a177-1d13-4f36-854a-479a543c5229)

![image](https://github.com/MamenFB/BLOG/assets/106315129/c958faee-fb1a-411e-bcde-fcca35c95858)

![image](https://github.com/MamenFB/BLOG/assets/106315129/4ae50b68-3964-4840-8129-187d4cdac687)

- 🔹Se aplica un middleware en la ruta limitando el número de peticiones aceptadas con tokenExpirationTime.

![alt text](image.png)

