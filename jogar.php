<?php
    if ($_GET) {
        $campo = $_GET['id'];

        echo("Última jogada no campo ".$campo);

        $arq = file_get_contents('jogadas.txt');

        $arq .= $campo." ";
        file_put_contents('jogadas.txt', $arq);
        return;
    };
