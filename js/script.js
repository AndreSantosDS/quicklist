document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  const input = form.querySelector("input");
  const ul = document.querySelector("ul");

  function criarItem(texto) {
    const li = document.createElement("li");
    li.className = "li_tarefa";

    const div = document.createElement("div");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const label = document.createElement("label");
    label.textContent = texto;

    div.appendChild(checkbox);
    div.appendChild(label);

    const img = document.createElement("img");
    img.src = "assets/Frame.png";
    img.alt = "Remover item";
    img.className = "frame-imagem";
    img.style.cursor = "pointer";

    img.addEventListener("click", () => {
      li.remove();
      mostrarMensagemRemocao();
    });

    li.appendChild(div);
    li.appendChild(img);

    ul.appendChild(li);
  }

 function mostrarMensagemRemocao() {
  const alerta = document.createElement("div");
  alerta.className = "alerta-remocao";

  const imgAntes = document.createElement("img");
  imgAntes.src = "assets/icon_before.png";
  imgAntes.alt = "Ícone antes";
  imgAntes.className = "icone-alerta antes";

  const texto = document.createElement("span");
  texto.textContent = "O item foi removido da lista";
  texto.className = "texto-alerta";

  const imgDepois = document.createElement("img");
  imgDepois.src = "assets/icon_after.png";
  imgDepois.alt = "Fechar";
  imgDepois.className = "icone-alerta depois";
  imgDepois.style.cursor = "pointer";

  alerta.appendChild(imgAntes);
  alerta.appendChild(texto);
  alerta.appendChild(imgDepois);

  document.body.appendChild(alerta);

  
  setTimeout(() => {
    alerta.classList.add("mostrar");
  }, 10);

  
  setTimeout(() => {
    alerta.classList.remove("mostrar");
    setTimeout(() => alerta.remove(), 300);
  }, 2000);

  
  imgDepois.addEventListener("click", () => {
    alerta.classList.remove("mostrar");
    setTimeout(() => alerta.remove(), 300);
  });
}


  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const texto = input.value.trim();
    if (texto !== "") {
      criarItem(texto);
      input.value = "";
    }
  });
});
