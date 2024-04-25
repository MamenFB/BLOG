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


![image](https://github.com/MamenFB/BLOG/assets/106315129/91da87ad-dea7-4148-8ccd-e0908e6a83ec)

- 🔹Se realiza un análisis automático con Owasp Zap.
- 
https://drive.google.com/file/d/1AXrh4WjzAn9Jd9oXyHGxJ1mRbHq_f2YK/view?usp=drive_link

## 🚨Auditoría de los endpoints de la api buscando las 10 vulnerabilidades de Owasp.

Análisis del Informe ZAP:

1. Content Security Policy (CSP) no configurada
Riesgo: Medio
Solución: Configura una política CSP adecuada para evitar ataques como XSS. Más información en la Cheat Sheet de OWASP sobre CSP.

2. Configuración Incorrecta Cross-Domain (CORS)
Riesgo: Medio
Solución: Revisa y restringe las políticas CORS para que solo permitan acceso de dominios confiables. Más detalles aquí.

3. Falta de cabecera Anti-Clickjacking
Riesgo: Medio
Solución: Implementa cabeceras como X-Frame-Options para prevenir este tipo de ataques. Consulta la documentación de MDN sobre X-Frame-Options.

4. Strict-Transport-Security Header Not Set
Riesgo: Bajo
Solución: Configura el header Strict-Transport-Security para forzar la comunicación segura vía HTTPS. Aquí la Cheat Sheet de OWASP sobre HSTS.

5. X-Content-Type-Options Header Missing
Riesgo: Bajo
Solución: Asegúrate de incluir el header X-Content-Type-Options: nosniff para evitar ataques basados en la interpretación errónea de MIME types por parte del navegador.

6. Divulgación de información a través de headers como X-Powered-By
Riesgo: Bajo
Solución: Elimina o modifica headers innecesarios que revelan detalles del software del servidor para minimizar la información disponible para los atacantes.

7. Divulgación de marcas de tiempo Unix
Riesgo: Bajo
Solución: Evita exponer marcas de tiempo Unix en nombres de archivos o URLs, que podrían ser utilizados para determinar versiones o configuraciones del sistema.

8. Información potencialmente sensible en comentarios en código fuente
Riesgo: Informativo
Solución: Revisa y limpia los comentarios del código fuente antes de desplegar a producción.

9. Directivas de Cache-control necesitan revisión
Riesgo: Informativo
Solución: Configura adecuadamente las cabeceras de control de caché para evitar el almacenamiento no deseado de datos sensibles.

10. Datos recuperados desde caché
Riesgo: Informativo
Solución: Asegúrate de que la información sensible no se almacene en caché del navegador.