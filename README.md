
# Curso Angular


INSTALACIONES PREVIAS


    1.  Instalación de Node y NPM :

        https://nodejs.org/es/


    2.  Instalación de TypeScript ( desde consola ) :

        npm install -g typescript


    3.  Comprobar instalación y versión desde consola de los puntos 1 y 2 ( desde consola ):

        node -v

        npm -v

        tsc -v


    4.  Instalación de VisualStudio :

        https://code.visualstudio.com/


    5.  Instalación de Angular/cli ( desde consola ) :

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



ESTRUCTURA GENERAL DE UNA APLICACIÓN ANGULAR


    *src *assets : archivos estaticos de la aplicacion ( principalmente imágenes )

    *src *app : modulos y componentes de la aplicación

    *src *models : clases/modelos de la aplicación


CREACIÓN DE COMPONENTES ( DESDE CONSOLA ) 


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


    *   Las directivas son clases de Angular con código para crear, formatear e interaccionar

        con los elementos HTML en el DOM de las páginas o sitios web.


    Hay tres tipos de directivas:

        1. Componentes 

        2. Estructurales: son los que alteran los loyouts del elemento html en el que las

           introducimos.

        3. Atributo: funcionan como un atributo en html.


    Podemos crrear nuestras propias directivas ( empaquetar un código que vayamos a utilizar mucho )
    
    e implementarlo en los diferentes componentes en los que vaya a intervenir.


DIRECTIVAS PROPIAS


    Desde consola:

        ng generate directive nombreDeLaDirectiva


PIPE


    Los 'Pipes' se emplean para dar un formato de salida a los valores que empleamos en 
    
    nuestra aplicación ( formatos de los datos de salida ).


    Para hacer un pipe propio ( desde consola ) : 

        ng generate pipe nombredelPipe


SERVICIOS


    Los 'Servicios' son elementos de Angular que nos permiten centralizar el uso de código 

    para luego usarlo en cada componente que necesitemos, mediante la inyección de 

    dependencias.


    Como se suelen usar para gestionar datos e inyectarlos en los componentes, también

    se les conoce como 'providers' ( 'providers', tambien es el nombre del array en el
        
    que se implementan, en el archivo raÍz del módulo )


    Para crear un servicio ( desde consola ) :

        ng generate service nombreCarpetaSercicios/nombreServicio --spec false

        NOTA :  Al ejecutar la anterior sentencia desde consola, no modifica

                de modo automático el archivo 'app.moule.ts' , por lo que la 

                importación hay que hacerla de modo manual, y no olvidarse de 
                    
                meter el servicio creado en el array de 'providers'.


IMPLEMENTACIÓN DE ROUTING


    Las aplicaciones Angular están diseñadas para ser 'Single Page Application', lo que hace

    que las respuestas a las acciones sea siempre muy rápida.


    No tenemos todos los componentes de una aplicación en la misma páginaporque sino eso haría que

    fuera una aplicación muy compleja y difícil de usar por el usuario cuando tengamos muchos

    componentes. Para solventar este problema, tenemos el 'Routing'.


    El 'Routing', con la ayuda de la barra de navegación del navegador, establecen las urls que lo 

    que harán será cargar cada componente dinámicamente.


FORMULARIOS


    Existen dos técnicas para crear formularios en Angular:

        1.  Template Driven : realiza la lógica de captura de datos y la validación de los mismos del lado html.

        2.  Reactive : gestiona el formulario desde el archivo .ts

    
    Validaciones:

        Por defecto Angular elimina va validación HTML5.


        'NgForm' tiene su propio sistema de validación: aprovecha los atributos de HTML, pero los intpreta de un

        modo diferente.


        Lo que implementan los objetos de un formulario  son una serie de estados por los que pasa el campo

        cuando el usuario esta utilizando el formulario. Dichos estados son los siguientes:

            1.  Dirty: 'true' cuando el usuario comienza a utilizar el campo.

            2.  Pristine: 'true' cuando el usuario an no utilizó el campo.

            3.  Touched: 'true' cuando el usuario usa y sale del foco del campo.

            4.  Valid: 'true' cuando el campo cumple las normar de validación que le hemos establecido.

            5.  Invalid: 'true' cuando el campo no cumple las normar de validación que le hemos establecido.

        
        Angular tiene unas clases CSS para cada estado que nos permiten configurar las ayudas al usuario a la 

        hora de completar formularios.




