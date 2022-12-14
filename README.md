{que es lo que hace un taxista seduciendo a la vida}

Instalacion del proyecto Antes de empezar, se debe tener en cuenta que este proyecto esta hecho bajo el framework de Ionic y NodeJs, por lo que se debe tener instalado este framework. Puedes descargar NodeJs desde este link!. Una vez tengas NodeJs instalado, deberas instalar el framework de ionic. Para instalarlo solo debes abrir tu terminal preferida y ejecutar el siguiente comando:

npm i -g @ionic/cli

A lo que se haya instalado ionic, deberas generar el proyecto con:

ionic start {{nombre del proyecto}} blank

Se te abrira un menu en el que deberas seleccionar la opcion de 'Angular', Y luego te preguntara si deseas enviar tus datos de manera anonima a Google.

Luego debes entrar a la carpeta que se haya generado con el nombre que pusiste para despues clonar este repositorio con: con:

git clone https://github.com/PesaoKliao/ET_registrAPP_Pizarro_005D.git

Una vez hecho esto, deberas eliminar la carpeta llamada 'src' y reemplazar el nombre de la carpeta 'ex3RegistrAPP_Pizarro_005D' por 'src'.

Luego de todo ese procedimiento, se necesitaran instalar los siguientes modulos para el debido funcionamiento de la aplicacion

npm install --save @ionic/storage

npm install --save @ionic/storage-angular

Ya hecho esto, es posible emular la aplicacion mediante el browser preferido. Para poder hacerlo solo debemos ejecutar en la terminal:

ionic serve --lab

Se debera aceptar la instalacion del modulo lab para que este ambiente de emulacion se ejecute de manera adecuada
