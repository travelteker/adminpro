# Extraer info de las rutas hijas
Utilizando el modulo Router de Angular usaremos el \<Observable\> router.events para obtener información de las rutas.  
De todas esta información nos intereserán las rutas hijas.  

Obtendremos las instancias de 'ActivationEnd' cuyo 'firstChild' sean NULL y para estas instancias obtendremos el objeto 'data' que contendrá los parámetros añadidos en el routing.module correspondiente.  

Usaremos los operadores RxJS para manipular el \<Observable\>.
