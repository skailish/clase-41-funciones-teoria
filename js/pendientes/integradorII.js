// Integrador 2

// 🛒 Nuestra clienta, muy conforme con el trabajo que hicimos la vez pasada, nos pidió que hagamos un nuevo programa para gestionar los usuarios de su tienda online.


// 💻 Crear un programa para gestionar usuarios

// 👥 El programa debe venir ya con una lista de usuarios precargados, con los siguientes datos


// ID	NOMBRE	TELEFONO	EMAIL
// 0	Carla	1545628984	carla@gmail.com
// 1	Pedro	1545251245	pedro@gmail.com
// 2	Lucas	1523357849	lucas@gmail.com
// 3	Ana	15789456	ana@gmail.com
// ⚙️ Debe tener un menú que permita realizar las siguientes operaciones(con su respectivo flujo)


// Operaciones

// 👤 Crear un usuario

// Debe pedir los datos del usuario a ingresar, uno por uno
// Los datos a guardar son
// Nombre
// Teléfono
// Email
// Una vez ingresados debe mostrar los datos ingresados y preguntar si desea confirmar la operación
// Si la respuesta es afirmativa debe agregar un nuevo usuario a la lista de usuarios con los datos ingresados y mostrar un mensaje de éxito.Al usuario agregado se le tiene que asignar un id automáticamente, este id debe ser único para cada usuario
// Si la respuesta es negativa mostrar un mensaje indicando que la operación fue cancelada
// A continuación debe pedir si se desea realizar nuevamente el procedimiento
// Si la respuesta es afirmativa debe volver a realizar el procedimiento
// Si la respuesta es negativa debe llevar al menú de operaciones

// 🔎 Buscar un usuario
// Debe pedir seleccionar por qué dato se va a buscar: id, nombre, celular o email
// A continuación debe pedir ingresar el valor que se va a buscar
// Si el usuario existe debe mostrar la información del usuario con todos sus datos
// Si el usuario no existe debe mostrar un mensaje informándolo
// A continuación debe pedir si se desea realizar nuevamente el procedimiento
// Si la respuesta es afirmativa debe volver a realizar el procedimiento
// Si la respuesta es negativa debe llevar al menú de operaciones

// 📄 Listar todos los usuarios
// Debe mostrar un listado con todos los usuarios y todos sus datos:
// Id
// Nombre
// Teléfono
// Email
// Luego debe llevar al menú de operaciones

// ✏️ Modificar un usuario
// Debe pedir ingresar el id del usuario a modificar
// Si el usuario existe debe pedir ingresar uno por uno los datos a modificar del usuario:
// Nombre
// Teléfono
// Email
// Luego debe mostrar los datos ingresados y preguntar si desea confirmar la operación
// Si la respuesta es afirmativa debe modificar los datos del usuario con los nuevos ingresados y mostrar un mensaje de éxito
// Si la respuesta es negativa debe mostrar un mensaje indicando que la operación fue cancelada
// Si el usuario no existe debe mostrar un mensaje informándolo
// A continuación debe pedir si se desea realizar nuevamente el procedimiento
// Si la respuesta es afirmativa debe volver a realizar el procedimiento
// Si la respuesta es negativa debe llevar al menú de operaciones

// 🗑️ Eliminar un usuario
// Debe pedir ingresar el id del usuario a eliminar
// Si el usuario existe debe mostrar los datos del usuario y preguntar si desea confirmar la operación
// Si la respuesta es afirmativa debe eliminar el usuario de la lista de usuarios y mostrar un mensaje de éxito
// Si la respuesta es negativa debe mostrar un mensaje indicando que la operación fue cancelada
// A continuación debe pedir si se desea realizar nuevamente el procedimiento
// Si la respuesta es afirmativa debe volver a realizar el procedimiento
// Si la respuesta es negativa debe llevar al menú de operaciones

// 🚪 Salir del programa
// Debe preguntar si desea confirmar la operación
// Si la respuesta es afirmativa debe mostrar un mensaje de despedida y salir del programa
// Si la respuesta es negativa debe volver al menú de operaciones
