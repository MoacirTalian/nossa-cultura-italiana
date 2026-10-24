# Nossa Cultura Italiana

Site estático em HTML, CSS e JavaScript, pronto para publicar com GitHub Pages.

## Arquivos principais

- `index.html` — página inicial
- `historia.html` — imigração italiana no Rio Grande do Sul
- `talian.html` — língua e identidade cultural
- `cantorias.html` — cantorias e corais
- `galeria.html` — espaço inicial para fotografias e vídeos
- `sobre.html` — finalidade do projeto
- `style.css` — cores, layout e adaptação para celular
- `script.js` — menu móvel e ano automático

## Como publicar no GitHub Pages

1. Entre em https://github.com e crie um repositório chamado `nossa-cultura-italiana`.
2. Envie todos os arquivos desta pasta para a raiz do repositório (não envie apenas o ZIP).
3. No repositório, abra **Settings → Pages**.
4. Em **Build and deployment**, selecione **Deploy from a branch**.
5. Escolha a branch `main` e a pasta `/ (root)`; clique em **Save**.
6. Aguarde a publicação. Para um repositório com esse nome, o endereço normalmente será `https://SEU-USUARIO.github.io/nossa-cultura-italiana/`.

Se quiser que o endereço seja `https://SEU-USUARIO.github.io/`, o repositório precisa ter exatamente o nome `SEU-USUARIO.github.io`.

## Como personalizar

- Edite os textos dentro dos arquivos `.html`.
- Altere as cores no começo de `style.css`, na seção `:root`.
- Para usar suas fotografias, crie/ use a pasta `assets/imagens`, envie os arquivos e substitua os espaços de exemplo em `galeria.html` por tags `<img src="assets/imagens/nome-da-foto.jpg" alt="Descrição da fotografia">`.
- Para vídeos do YouTube, use o endereço de incorporação do vídeo, respeitando as permissões do autor.

## Observações

- A fotografia de fundo da página inicial é carregada de um serviço externo e precisa de internet para aparecer. Você pode trocar a URL no arquivo `style.css`.
- O site não tem formulário de envio, login ou banco de dados. Esses recursos exigem um serviço adicional.
- Revise datas, fatos históricos, créditos e autorizações antes de publicar.

