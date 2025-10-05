# dndcharacterquiz

Aplicação web simples para percorrer o questionário de Dungeons & Dragons 2024 presente no ficheiro `dnd_2024_questionario.json`. O fluxo apresenta uma pergunta de cada vez, permite recuar para alterar respostas e mostra um ecrã de resultados com as variáveis escolhidas.

## Pré-requisitos

* [Node.js](https://nodejs.org/) 18 ou superior

## Como executar

1. Instala as dependências (não há dependências externas, este passo serve apenas para inicializar o projecto caso seja necessário):

   ```bash
   npm install
   ```

2. Arranca o servidor de desenvolvimento:

   ```bash
   node server.js
   ```

3. Abre [http://localhost:3000](http://localhost:3000) no teu navegador preferido.

4. Responde às perguntas. Usa o botão **Anterior** para recuar se quiseres rever alguma resposta. Depois da última pergunta será mostrado o ecrã de resultados com o resumo das tuas escolhas.

## Estrutura

* `index.html` – página principal da aplicação.
* `style.css` – estilos globais.
* `app.js` – lógica do questionário (carregamento do JSON, navegação, cálculo de resultados).
* `server.js` – servidor HTTP mínimo para servir os ficheiros estáticos.
* `dnd_2024_questionario.json` – fonte de dados do questionário.
