<html>
  
    <body>
        <?php
            $servidor = "fdb19.awardspace.net";
            $username = "2655502_provincias";
            $password = "adrian1234";
            $basedatos = "2655502_provincias";

            # Crear conexión
            $conn = mysqli_connect($servidor, $username, $password, $basedatos);

            # Comprobar conexión
            if (!$conn) {
                die("Conexi&ocacuten fallida: " . mysqli_connect_error());
            }
            echo "Conexi&oacuten con &eacutexito";
           

            
            $consulta = "SELECT * FROM empleados";
          
            # A continuación se ejecuta la consulta y se devuelve el resultado
            # en el caso de que se trate de un SELECT. En otro caso devuelve
            # TRUE. Salvo si hay fallo, en cuyo caso devuelve FALSE.
            $result = mysqli_query($conn, $consulta);
           
            # Es preciso iterar para extrar una a una las filas del resultado
            while ($fila = mysqli_fetch_array($result)) {
             
                echo $fila[0] . ': ' . $fila[1];
                echo '<br>';
                 # Esta es una manera alternativa de mostrar la fila, habida
                 # cuenta de que mysqli_fetch_array devuelve un array
                 # asociativo
                echo $fila[DNI] . ': ' . $fila[nombre];
                echo '<br>';
                echo '<br>';
               
            }

            mysqli_close($conn);
        ?>
       
    </body>
   
</html>