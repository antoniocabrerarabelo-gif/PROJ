// script.js - Versão corrigida e funcional

document.addEventListener('DOMContentLoaded', () => {

    const botoes = document.querySelectorAll('.botao');
    const conteudoSecao = document.getElementById('conteudo-secao');

    // Conteúdo de cada seção (vazio, como você pediu)
    const secoes = {
        'Metas': `
            <h2>Minhas Metas para 2026</h2>
            <ul class="lista" id="lista-metas">
                <!-- Suas metas serão adicionadas aqui --> Me aprofundar com tecnologia, fazer curso de computação. - Melhorar na matemática.
        
            </ul>
        `,

        'Concluídos': `
            <h2>Objetivos Concluídos</h2>
                        <textarea id="registro-falhas" placeholder="Conclusões e parcialmente encerrado... "></textarea> 

            <ul id="lista-concluidos" class="lista"></ul>
            <button id="btn-salvar" class="botao-salvar">Salvar Registro</button>

        `,

        'Futuros projetos': `
            <h2>Futuros Projetos</h2>
            <ul class="lista" id="lista-projetos">
                <!-- Seus projetos serão adicionados aqui --> Melhorar meu inglês e possivelmente outros idiomas para um trabalho ou necessidade futura.
            </ul>
        `,

        'Falhas e imprevistos': `
            <h2>Falhas e Imprevistos</h2>
            <textarea id="registro-falhas" placeholder="Descreva aqui o que não saiu como planejado e o que você aprendeu..."></textarea> 
            <button id="btn-salvar" class="botao-salvar">Salvar Registro</button>
            <div id="registros-salvos"></div>
        `
    };

    // Adiciona evento de clique em cada botão
    botoes.forEach(botao => {
        botao.addEventListener('click', () => {
            
            // Remove a classe 'ativo' de todos os botões
            botoes.forEach(b => b.classList.remove('ativo'));
            
            // Adiciona a classe 'ativo' no botão clicado
            botao.classList.add('ativo');

            // Pega o texto do botão
            const textoBotao = botao.textContent.trim();

            // Atualiza o conteúdo da seção
            if (secoes[textoBotao]) {
                conteudoSecao.innerHTML = secoes[textoBotao];
            } else {
                conteudoSecao.innerHTML = `<h2>${textoBotao}</h2><p>Conteúdo em desenvolvimento...</p>`;
            }

            // Se clicar na aba "Falhas e imprevistos", ativa a função de salvar
            if (textoBotao === 'Falhas e imprevistos') {
                ativarSalvamentoFalhas();
            }
        });
    });

    // Função para salvar registros de falhas
    function ativarSalvamentoFalhas() {
        const btnSalvar = document.getElementById('btn-salvar');
        const textarea = document.getElementById('registro-falhas');
        const containerRegistros = document.getElementById('registros-salvos');

        if (btnSalvar) {
            btnSalvar.addEventListener('click', () => {
                if (textarea.value.trim() === '') {
                    alert('⚠️ Por favor, escreva algo antes de salvar.');
                    return;
                }

                const dataAtual = new Date().toLocaleDateString('pt-BR');
                
                const novoRegistro = `
                    <div class="registro">
                        <small>${dataAtual}</small>
                        <p>${textarea.value}</p>
                    </div>
                `;

                containerRegistros.innerHTML += novoRegistro;
                textarea.value = ''; // 
                
                alert('✅ Registro salvo com sucesso!');
            });
        }
    }

    // Abre automaticamente a aba "Metas" quando a página carrega
    botoes[0].click();

});