Quiz Interativo: Informática e Matemática
Este projeto é um quiz interativo desenvolvido para um trabalho acadêmico, com o objetivo de testar conhecimentos em Informática, Matemática e Lógica de Programação. O quiz contém 40 perguntas (13 de Informática, 13 de Matemática e 14 de Lógica de Programação), cada uma com 4 opções de resposta. Cada resposta correta vale 0,5 ponto, com pontuação máxima de 20 pontos.
Funcionalidades

40 Perguntas: Divididas entre Informática (ex.: CPU, HTML, DNS), Matemática (ex.: álgebra, geometria) e Lógica de Programação (ex.: loops, operadores).
Temporizador: 30 segundos por pergunta, com alerta visual (vermelho nos últimos 5 segundos) e parada em 0 (sem números negativos).
Feedback: Botão fica verde para respostas corretas e vermelho para incorretas, com vibração no dispositivo ao errar ou quando o tempo acaba.
Avanço Automático: Ao acertar, o quiz avança para a próxima pergunta após 1 segundo.
Pontuação: 0,5 ponto por resposta correta, com pontuação final exibida (ex.: 15.5/20).
localStorage: Salva a maior pontuação do usuário.
Design Responsivo: Layout adaptável para desktop e mobile, com opções organizadas em duas colunas (A/C e B/D).
Imagem de Fundo: Fundo estilizado para melhorar a experiência visual.
HTML Semântico: Uso de <header>, <main>, <section> para acessibilidade.

Estrutura do Repositório

index.html: Estrutura principal do quiz.
css/style.css: Estilização com Flexbox, feedback visual e responsividade.
js/script.js: Lógica do quiz, incluindo perguntas, temporizador, vibração e pontuação.
img/: Contém a imagem de fundo.
README.md: Este arquivo.

Como Executar

Clone o repositório:git clone <URL_DO_REPOSITORIO>


Abra a pasta do projeto no VS Code.
Instale a extensão Live Server no VS Code.
Clique com o botão direito em index.html e selecione "Open with Live Server".
O quiz será aberto no navegador padrão.

Requisitos

Navegador moderno (Chrome, Firefox, Edge).
Dispositivo móvel com suporte a vibração (opcional, para feedback de erro).
Conexão local para carregar a imagem de fundo.

Contribuições dos Alunos
O projeto foi desenvolvido por um grupo de alunos, com as tarefas divididas da seguinte forma:

Aluno 1:

Estrutura inicial do HTML, definindo a semântica (<header>, <main>, <section>).
Organização das opções em duas colunas verticais (A/C e B/D).
Configuração inicial do repositório GitHub e commits.


Aluno 2:

Desenvolvimento do CSS com Flexbox para o layout responsivo.
Estilização da imagem de fundo, temporizador e feedback visual (verde para correto, vermelho para incorreto).
Ajustes de design para legibilidade e responsividade em dispositivos móveis.


Aluno 3:

Implementação da lógica principal do JavaScript (script.js).
Configuração do temporizador de 30 segundos, com correção para evitar números negativos.
Adição da funcionalidade de vibração (navigator.vibrate) para respostas incorretas.


Aluno 4:

Criação do banco de 40 perguntas (13 de Informática, 13 de Matemática, 14 de Lógica de Programação).
Testes das perguntas para garantir clareza e correção das respostas.
Ajustes na pontuação (0,5 por resposta, máximo 20 pontos) e localStorage.


Aluno 5:

Implementação do avanço automático para a próxima pergunta ao acertar.
Testes de funcionalidade (temporizador, vibração, pontuação, responsividade).
Documentação inicial do projeto e colaboração na escrita do README.



Notas

O projeto segue as diretrizes do enunciado, incluindo HTML semântico, CSS responsivo e JavaScript funcional.
A imagem de fundo está na pasta img/ e deve ser mantida para o design funcionar corretamente.
A vibração funciona apenas em dispositivos compatíveis (ex.: Android) e é ignorada em desktops.
Para contribuir, crie uma branch e envie um pull request no GitHub.

