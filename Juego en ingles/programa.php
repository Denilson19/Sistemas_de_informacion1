<?php
// Verificar si se ha enviado el formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Verificar si se han enviado los datos de inicio de sesión
    if(isset($_POST['username']) && isset($_POST['password'])) {
        // Obtener el nombre de usuario y la contraseña
        $usuario = $_POST['username'];
        $contraseña = $_POST['password'];

        // Verificar las credenciales
        $archivoCredenciales = "credenciales.txt";
        $credenciales = file($archivoCredenciales, FILE_IGNORE_NEW_LINES);
        
        foreach ($credenciales as $linea) {
            list($usuario_guardado, $contraseña_guardada) = explode(':', $linea);
            if ($usuario == $usuario_guardado && $contraseña == $contraseña_guardada) {
                echo "Inicio de sesión exitoso. Bienvenido, $usuario!";
                return;
            }
        }

        // Si las credenciales no son válidas
        echo "Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.";
    }
}
?>
