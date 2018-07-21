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

    *src *models : clases/modelos de la aplicacion

CREACION DE COMPONENTES DESDE CONSOLA

    ng generate component nombreComponente --spec false

    ( o tambien )

    ng g c nombreComponente --spec false

    ( con '--spec false' se especifica que no cree el archivo de testing )

DATA BINDING ( ENLACE A DATOS )

    Hay dos tipos de formas:

    1. One Way Binding ( unidireccional )

        a)  .ts --> .html 

            ( de la fuente de datos a la vista )

            ( interpolacion ( moustache : {{}} ) / property binding )


        b)  .ts <-- .html

            ( de la vista a la fuente de datos )

            ( event binding )


    2. Two way Biding ( bidireccional )

        a)  .ts <--> .html

            ( de la fuente de datos a la vista / de la vista a la fuente de datos )

DIRECTIVAS

    *   Las directivas son clases de Angular con codigo para crear, formatear e interaccionar

        con los elementos HTML en el DOM de las paginas o sitios web.


    *   Hay tres tipos de directivas:

            1. Componentes: 

            2. Estructurales: son los que alteran los loyouts del elemento html en el que las

               introducimos.

            3. Atributo: funcionan como un atributo en html.

    *   Podemos crrear nuestras propias directivas ( empaquetar un codigo que vayamos a utilizar mucho )
    
        e implementarlo en los diferentes componentes en los que vaya a intervenir.

DIRECTIVAS PROPIAS

    Desde consola:

    ng generate directive nombreDeLaDirectiva

PIPE

    Los pipes se emplean para dar un formato de salida a los valores que empleamos en 
    
    nuestra aplicación ( formatos de los datos de salida ).