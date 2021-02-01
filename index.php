<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Jogo da Velha</title>
    </head>

    <body onload="disab()">
    <?php unlink('jogadas.txt'); fopen('jogadas.txt', 'x+');?>
        <h2 align='center'>JOGO DA VELHA</h2>
        <div align="center" class="jogo">
            <form id="princ" method="GET" action="index.php">
                <input type="hidden" id="tipo">
                <?php
                    for ($i = 1; $i <= 9; $i++) {
                        echo('<input type="button" value = "" id="'. $i .'" onclick="marcar('. $i .')">');
                        if ($i == 3 || $i == 6) {
                            echo '<br>';
                        }
                    };
                ?>
                <br>
                <input type="hidden" id="atualizar" onclick="verificador()" value="Sync jogadas inimigas">
                <br>
                <input type="button" value="BvB" id="btnBVB" onclick="tipoJogo(1)">
                <input type="button" value="PvB" id="btnPVB" onclick="tipoJogo(2)">
                <input type="button" value="PvP" id="btnPVP" onclick="tipoJogo()">
                <p id="teste"></p>
                <input type="text" value="0 Jogadas" id="jogadas" disabled>
                <br>
                <textarea name="historico" id="historico" cols="30" rows="10" disabled></textarea>
                <br>
            </form>
        </div>
        <script type="text/javascript" src="script.js"></script>
    </body>
</html>