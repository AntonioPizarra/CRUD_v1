/*********************************************************
 *      js functions for CRUD Login&Inserction
 *      author: Antonio González Mayorga
 *      version: 1.0
 *      date March 2024
 *      comment: functions
 * *******************************************************/

function confirmDelete() {
    if (confirm("¿Está seguro de que quieres eliminar este usuario?")) {
        alert("El usuario ha sido eliminado.");
    } else {
        alert("Acción cancelada.");
    }
}