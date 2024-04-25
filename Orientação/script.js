document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Obtém os valores dos campos do formulário
    const titulo = document.getElementById('titulo').value;
    const autor = document.getElementById('autor').value;
    const genero = document.getElementById('genero').value;
    const estado = document.getElementById('estado').value;
    const nomeDoador = document.getElementById('nomeDoador').value;
    const contatoDoador = document.getElementById('contatoDoador').value;

    // Validação opcional (evita envio de dados incompletos)
    if (titulo === '' || autor === '' || genero === '' || estado === '') {
        alert('Preencha todos os campos obrigatórios!');
        return; // Interrompe a execução do código caso a validação falhe
    }

    // Salva os dados no localStorage
    localStorage.setItem('titulo', titulo);
    localStorage.setItem('autor', autor);
    localStorage.setItem('genero', genero);
    localStorage.setItem('estado', estado);
    localStorage.setItem('nomeDoador', nomeDoador);
    localStorage.setItem('contatoDoador', contatoDoador);

    // Exibe mensagem de confirmação para o usuário
    alert('Livro cadastrado com sucesso!');

    // Redireciona o usuário para outra página ou faz outra ação, se necessário
     window.location.href = 'ConsultarLivros.html';
});

// Adiciona um event listener para o botão de consultar livros
document.getElementById('btnConsultarLivros').addEventListener('click', function() {
    // Redireciona para a página de consulta de livros
    window.location.href = 'ConsultarLivros.html';
});