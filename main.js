$(document).ready(function() {
    $('#task-form').submit(function(event) {
        event.preventDefault()

        var taskText = $('#nova-tarefa').val().trim() // puxa o texto da tarefa e remove espaços em branco

        if (taskText) {
            // isso adiciona novas tarefas
            $('#task-list').append('<li>' + taskText + '</li>')
            $('#nova-tarefa').val('') // limpa o campo de entrada
        }
    });

    // função para riscar a tarefa quando clicada
    $('#task-list').on('click', 'li', function() {
        $(this).toggleClass('completed'); // alterna a classe 'completed' no item da lista
    });
});
