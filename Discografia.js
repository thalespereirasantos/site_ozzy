let i = 0;
let j = 1;
let tabelas = [];
const disco = [];
const lançamento = ["20 Setembro 1980","07 Novembro 1981", "18 Maio 1983", "22 Fevereiro 1986", "28 Setembro 1988", "17 Setembro 1991", ];
const estilo = ["Heavy Metal","Heavy Metal","Heavy Metal","Heavy Metal", "Heavy Metal","Heavy Metal"] ;
const labels = [];

function criarTabela(cabecalhos, dados) {
  const tabela = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");

  // Cabeçalho
  const trCabecalho = document.createElement("tr");
  cabecalhos.forEach((texto) => {
    const th = document.createElement("th");
    th.textContent = texto;
    trCabecalho.appendChild(th);
  });
  thead.appendChild(trCabecalho);

  // Linhas
  dados.forEach((linha) => {
    const tr = document.createElement("tr");
    linha.forEach((valor) => {
      const td = document.createEleml cabent("td");
      td.textContent = valor;
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });

  tabela.appendChild(thead);
  tabela.appendChild(tbody);

  let cabecalhos = [disco[i]];
  let dados = [["LANÇAMENTO", lançamento[i]], ["ESTILO", estilo[i]], ["LABELS", labels[i]]];

  return tabela;
}

for (j; j <= 13; j++) {
  const container = document.getElementById("table" + j);
}
// Cria 13 tabelas iguais
for (i = 0; i <= 12; i++) {
  const tabela = criarTabela(cabecalhos, dados);
  container.appendChild(titulo);
  container.appendChild(tabela);
}
