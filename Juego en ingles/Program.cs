using System;
using System.IO;

class Program
{
    static void Main()
    {
        string archivoCredenciales = "credenciales.txt";

        // Menú de opciones
        while (true)
        {
            Console.WriteLine("1. Insertar nuevo usuario y contraseña");
            Console.WriteLine("2. Salir");
            Console.Write("Seleccione una opción: ");
            string opcion = Console.ReadLine();

            switch (opcion)
            {
                case "1":
                    InsertarCredencial(archivoCredenciales);
                    break;
                case "2":
                    return;
                default:
                    Console.WriteLine("Opción no válida. Por favor, seleccione una opción válida.");
                    break;
            }
        }
    }

    static void InsertarCredencial(string rutaArchivo)
    {
        Console.WriteLine("Ingrese el nombre de usuario:");
        string usuario = Console.ReadLine();

        Console.WriteLine("Ingrese la contraseña:");
        string contraseña = Console.ReadLine();

        // Verificar si el archivo existe, si no existe, se crea
        if (!File.Exists(rutaArchivo))
        {
            using (StreamWriter writer = File.CreateText(rutaArchivo))
            {
                writer.WriteLine($"{usuario}:{contraseña}");
            }
        }
        else
        {
            // Si el archivo ya existe, se agregan las credenciales al final del archivo
            using (StreamWriter writer = File.AppendText(rutaArchivo))
            {
                writer.WriteLine($"{usuario}:{contraseña}");
            }
        }

        Console.WriteLine("Usuario y contraseña insertados correctamente.");
    }
}

