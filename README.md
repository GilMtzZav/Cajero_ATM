#Cajero Automático
###Crea una aplicación web con JavaScript donde simulemos la interacción con un cajero automático.

##Funcionamiento básico:
Al ingresar al cajero, puedes seleccionar la cuenta con la que deseas interactuar. Deben existir al menos tres cuentas:
*Persona 1
*Persona 2
*Persona 3

Al seleccionar una cuenta, debes ingresar el password asociado a la cuenta. Si el password es incorrecto, debes notificar al usuario y permitirle intentarlo nuevamente. Si el password es correcto, debes mostrar las siguientes opciones:
*Consultar saldo
*Ingresar monto
*Retirar Monto
*Al seleccionar consultar saldo, debe mostrar en pantalla el saldo actual de la cuenta
*Al seleccionar ingresar monto, el usuario debe escribir el monto a ingresar. Al ingresar el monto, debe mostrarle al usuario el monto ingresado y el nuevo saldo total.
*Al seleccionar retirar monto, el usuario debe escribir el monto a retirar. Al retirar el monto, debe mostrarle al usuario el monto retirado y el nuevo saldo total.
*Implementa un botón de salir de la sesión del usuario.

**Como regla de negocio, una cuenta no debe de tener más de $990 y menos de
$10. Es necesario hacer las validaciones pertinentes para que no se rompa esta
regla de negocio.**

##Buenas prácticas:
*Utilizar las herramientas vistas en clase.
*Iterar correctamente el objeto de cuentas
*Accesar correctamente a los elementos de las cuentas
*Uso correcto de const y let
*Limpiar los inputs una vez que se hagan las operaciones pertinentes.
*Mensajes claros al usuario

###Plus:
*Validación de los campos inputs para valores null , Undefined y NaN .
*Validación de cantidades negativas.
*Uso de algún método avanzado de iteración (forEach, filter, map) investigarlos.
*Uso de Bootstrap
*Diseño Responsive
*Mensajes al usuario como parte de la interfaz.
*Uso de localStorage para guardar la persistencia de la información/data de los usuarios. investigarlo

 
