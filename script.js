// variáveis usadas por mais de uma função
var click = 0;
// variáveis de temporizador
var timer;
var volta;

function marcar(id) {
    // requisição AJAX
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
            document.getElementById("teste").innerHTML = xmlHttp.responseText;
        };
    };
    // Requisição do server
    let url = "jogar.php?id=" + id;
    xmlHttp.open("GET", url, true);
    xmlHttp.send();

    marcarPonto(id);
}

function marcarPonto(id) {
    // botão pra voltar
    let botao = document.createElement("input");
    botao.setAttribute("value", "Jogar novamente");
    botao.setAttribute("type", "button");
    botao.setAttribute("onclick", "voltar()");
    let aux = id;

    let jogada;

    let campo = document.getElementById(id);
    if (campo.value != "X" && campo.value != "O") {
        click += 1;
        let jogador = click % 2 || 2;

        if ((click % 2) == 1) {
            jogada = "X";
            campo.setAttribute("value", jogada);
            campo.setAttribute("disabled", "disabled");
            document.getElementById('historico').value += click + "ª = " + id + " " + jogada + "\n";
        } else {
            jogada = "O";
            campo.setAttribute("value", jogada);
            campo.setAttribute("disabled", "disabled");
            document.getElementById('historico').value += click + "ª = " + id + " " + jogada + "\n";
        }

        document.getElementById('jogadas').value = click + " Jogada(s)";

        // Para as verificações das diagonais
        if (id == 1 || id == 5 || id == 9) {
            id = 1;
            campo = document.getElementById(id);
            if (campo.value == document.getElementById((id + 4)).value &&
                campo.value == document.getElementById((id + 8)).value) {
                alert("O jogador " + jogador + " ganhou!");
                document.getElementById('historico').value += "FIM";
                document.getElementById('princ').appendChild(botao);
                clearInterval(timer)
                disab()
                return false;
            }
            id = aux;
        }
        if (id == 3 || id == 7 || id == 5) {
            id = 3;
            campo = document.getElementById(id);

            if (campo.value == document.getElementById((id + 2)).value &&
                campo.value == document.getElementById((id + 4)).value) {
                alert("O jogador " + jogador + " ganhou!");
                document.getElementById('historico').value += "FIM";
                document.getElementById('princ').appendChild(botao);
                clearInterval(timer)
                disab()
                return false;
            }
            id = aux;
        }

        // pra avaliar as horizontais
        if (id == 1 || id == 2 || id == 3) {
            id = 1;
            campo = document.getElementById(id);

            if (campo.value == document.getElementById((id + 1)).value &&
                campo.value == document.getElementById((id + 2)).value) {
                alert("O jogador " + jogador + " ganhou!");
                document.getElementById('historico').value += "FIM";
                document.getElementById('princ').appendChild(botao);
                clearInterval(timer)
                disab()
                return false;
            }
            id = aux;
        }
        if (id == 4 || id == 5 || id == 6) {
            id = 4;
            campo = document.getElementById(id);

            if (campo.value == document.getElementById((id + 1)).value &&
                campo.value == document.getElementById((id + 2)).value) {
                alert("O jogador " + jogador + " ganhou!");
                document.getElementById('historico').value += "FIM";
                document.getElementById('princ').appendChild(botao);
                clearInterval(timer)
                disab()
                return false;
            }
            id = aux;
        }
        if (id == 7 || id == 8 || id == 9) {
            id = 7;
            campo = document.getElementById(id);

            if (campo.value == document.getElementById((id + 1)).value &&
                campo.value == document.getElementById((id + 2)).value) {
                alert("O jogador " + jogador + " ganhou!");
                document.getElementById('historico').value += "FIM";
                document.getElementById('princ').appendChild(botao);
                clearInterval(timer)
                disab()
                return false;
            }
            id = aux;
        }

        // Para as verificações das verticais
        if (id == 1 || id == 4 || id == 7) {
            id = 1;
            campo = document.getElementById(id);

            if (campo.value == document.getElementById((id + 3)).value &&
                campo.value == document.getElementById((id + 6)).value) {
                alert("O jogador " + jogador + " ganhou!");
                document.getElementById('historico').value += "FIM";
                document.getElementById('princ').appendChild(botao);
                clearInterval(timer)
                disab()
                return false;
            }
            id = aux;
        }

        if (id == 2 || id == 5 || id == 8) {
            id = 2;
            campo = document.getElementById(id);
            if (campo.value == document.getElementById((id + 3)).value &&
                campo.value == document.getElementById((id + 6)).value) {
                alert("O jogador " + jogador + " ganhou!");
                document.getElementById('historico').value += "FIM";
                document.getElementById('princ').appendChild(botao);
                clearInterval(timer)
                disab()
                return;
            }
            id = aux;
        }

        if (id == 3 || id == 6 || id == 9) {
            id = 3;
            campo = document.getElementById(id);

            if (campo.value == document.getElementById((id + 3)).value &&
                campo.value == document.getElementById((id + 6)).value) {
                alert("O jogador " + jogador + " ganhou!");
                document.getElementById('historico').value += "FIM";
                document.getElementById('princ').appendChild(botao);
                clearInterval(timer)
                disab()
                return;
            }
            id = aux;
        }
        if (click % 2 == 1 && document.getElementById('tipo').value == 2) {
            botJoga()
        }
    }
}

function retor(id) {
    // requisição AJAX
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
            if (xmlHttp.responseText) {
                marcarPonto(xmlHttp.responseText);
            }
        };
    };

    // Requisição do server
    let url = "retorno.php?id=" + id;
    xmlHttp.open("GET", url, true);
    xmlHttp.send();
}

function botJoga() {
    let bot;
    do {
        bot = Math.floor(Math.random() * 9) + 1;
    } while (document.getElementById(bot).value)

    marcar(bot)
}

function voltar() {
    click = 0;
    document.getElementById('jogadas').value = click + " Jogada(s)";
    document.getElementById('historico').value = "";
    window.location.reload();
}

function tipoJogo(tipo) {
    document.getElementById('btnBVB').setAttribute("type", "hidden")
    document.getElementById('btnPVB').setAttribute("type", "hidden")
    document.getElementById('btnPVP').setAttribute("type", "hidden")
    document.getElementById('historico').value = "";

    if (tipo == 1) {
        for (let i = 1; i < 10; i++) {
            document.getElementById(i).removeAttribute("disabled");
        }
        clearInterval(volta)
        timer = setInterval(botJoga, 1000)
    } else if (tipo == 2) {
        for (let i = 1; i < 10; i++) {
            document.getElementById(i).removeAttribute("disabled");
        }
        document.getElementById('tipo').setAttribute("value", 2)
        clearInterval(volta)
    } else {
        for (let i = 1; i < 10; i++) {
            document.getElementById(i).removeAttribute("disabled");
        }
        document.getElementById('atualizar').setAttribute("type", "button")
    }
    document.getElementById('historico').value = "";
}

function disab() {
    for (let i = 1; i < 10; i++) {
        document.getElementById(i).setAttribute("disabled", "disabled");
    }
    click = 0;
}

function verificador() {
    timer = setInterval(verificador, 1000)
    for (let i = 1; i < 10; i++) { retor(i); }
}