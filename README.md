# Desafio do módulo 03 - Cubos Player

![player](https://github.com/alvdelci/desafio-frontend-m03-ddst12/assets/54966827/12180f6a-d0a4-42a7-9f44-92d85711d09b)

A aplicação é um player de músicas desenvolvido com React aplicando os conceitos de flexbox, props, estados e hooks.
Neste projeto, o maior desafio foi trabalhar com props passando informações das músicas através dos componentes, além da barra de progresso que acompanha o progresso da música

---
### Executando o App
Para executar a aplicação é necessário ter o nodejs instalado na máquina e seguir os passos abaixo:

- Clonar este repositório utilizando o comando `https://github.com/alvdelci/desafio-frontend-m03-ddst12.git`
- Instalar as dependências do projeto
  <br>-- Para instalar as dependências do projeto vamos utilizar um gerenciador de pacotes. Por padrão, o nodejs vem com o NPM, mas recomendo a instalação do YARN com o comando `npm install -g yarn`
  <br>-- Abra o terminal na pasta do projeto e execute o comando `npm install` (com NPM) ou `yarn install` (com YARN)
- Após a instalação das dependências podemos executar com o comando `npm run start` (com NPM) ou `yarn start` (com YARN)
- Ao executar o passo anterior a aplicação abrirá no seu navegador padrão, se isso não acontecer, basta abrir o navegador e acessar a url `http://localhost:3000`

### Considerações sobre a aplicação

- As músicas podem ser tocadas clicando no cartão da música onde, ao passar o cursor, aparece um ícone de play.
- A primeira música está definida como valor inicial do play, portanto, se ela estiver aparecendo na barra de playing não poderá ser iniciada clicando no cartão, apenas pelo botão de play.
- As músicas não tocam automaticamente quando a anterior termina.
- O botão de Preview retornar as músicas até a primeira lista.
- O botão de Next avança as músicas de forma circular, ou seja, ao chegar na ultima ela avançará para a primeira e o ciclo recomeçará.
- O usuário pode interagir com a barra de progresso clicando ou arrastando para avançar e retornar o tempo da música.
- O controle de volume é iniciado por padrão no volume 3, podendo ser aumentado até o volume 10 e reduzido até o volume 0 puxando o slider.
- O áudio pode ser mutado clicando no ícone do volume.




##### OBS.: Todas as músicas utilizadas no projeto além das que foram fornecidas pela Instituição de ensino são para fins totalmente acadêmicos, sendo vetada sua distribuição.

