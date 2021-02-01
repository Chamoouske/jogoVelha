<?php
if ($_GET) {
    $id = $_GET['id'];
    $texto = file_get_contents('jogadas.txt');
    $linhas = explode(" ", $texto);

    for ($i=0; $i < count($linhas); $i++) { 
        if ($linhas[$i] == $id) {
            echo ($linhas[$i]);
            return;
        }
    }
}