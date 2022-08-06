relogio = function () {
  console.log("oi");
  let timer = document.getElementById("timer");

  function criarData(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString("pt-BR", {
      hour12: false,
      timeZone: "UTC",
    });
  }

  let s = 0;
  let temp;

  iniciar.onclick = function () {
    clearInterval(temp);
    temp = setInterval(function () {
      s++;
      timer.innerHTML = criarData(s);
    }, 1000);
  };

  zerar.onclick = function () {
    console.log("oi");
    s = 0;
    clearInterval(temp);
    timer.innerHTML = criarData(s);
  };

  pausar.onclick = function () {
    clearInterval(temp);
  };
};

try {
  relogio();
} catch (error) {}
