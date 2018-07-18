# CursoAngular1

INSTALACIONES PREVIAS

1. Instalación de Node y NPM :
    https://nodejs.org/es/

2. Instalación de TypeScript ( desde consola ) :
    npm install -g typescript

3. Comprobar instalación y versión desde consola de los puntos 1 y 2 ( desde consola ):
    node -v
    npm -v
    tsc -v

4. Instalación de VisualStudio :
    https://code.visualstudio.com/

5. Instalación de Angular/cli ( desde consola ) :
    npm install -g @angular/cli

PRIMER PROYECTO ANGULAR

1. Para crear un nuevo proyecto ( desde consola ):
    ng new nombreProyecto

2. Para arrancar la aplicación ( desde consola y dentro del directorio del proyecto creado ) :
    ng serve  ( en el navegador ponemos : localhost:4200 )   

3. Para parar el servdor ( desde consola ): 
    ctrl + c

4. Si queremos cambiar el puerto: 
    ng serve --port 3000 ( en el navegador ponemos : localhost:3000 )   

ESTRUCTURA GENERAL DE UNA APLICACION ANGULAR

 *src *assets : archivos estaticos de la aplicacion ( principalmente imagenes )

 *src *app : modulos y componentes de la aplicacion
