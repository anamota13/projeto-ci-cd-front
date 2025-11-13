const API_URL = ''; 

document.getElementById('chamarApiBtn').addEventListener('click', chamarAPI);

async function chamarAPI() {
    const saidaElement = document.getElementById('saida');
    saidaElement.className = 'message-loading';
    saidaElement.innerText = '... Chamando API no Render... Aguardando resposta...';

    try {
        const resposta = await fetch(API_URL);
        
        if (!resposta.ok) {
            throw new Error(`Erro HTTP: ${resposta.status}. Verifique se a API está online.`);
        }
        
        const dados = await resposta.json();
        
        saidaElement.className = 'message-success';
        saidaElement.innerText = `[SUCESSO] Mensagem da API: ${dados.mensagem}`;
        
    } catch (erro) {
        saidaElement.className = 'message-error';
        saidaElement.innerText = `[ERRO] Não foi possível conectar. Verifique o CORS no Backend. Detalhe: ${erro.message}`;
        console.error("Erro na chamada da API:", erro);
    }
}