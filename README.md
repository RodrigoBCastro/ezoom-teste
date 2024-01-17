
# Documentação da API RESTful e Front-end React

## 1. Introdução
Esta API RESTful foi desenvolvida utilizando o framework Laravel 9 e é acompanhada de um front-end React. Ela permite aos usuários gerenciar tarefas, que incluem operações de criação, leitura, atualização e exclusão de registros de uma entidade chamada "Tarefas". Cada tarefa possui um título, uma descrição e um status (pendente, concluída, cancelada).

## 2. Requisitos de Sistema
- PHP 8.2
- Composer
- Laravel 9
- MySQL
- Node 20
- Servidor web (Apache/Nginx)

## 3. Configuração do Ambiente
### Instalação do PHP, MySQL, e Node
- Instale PHP 8.2, MySQL e Node 20 seguindo as instruções oficiais de cada plataforma.
- Certifique-se de que o Composer (para PHP) e o NPM (para Node) estão instalados.

### Configuração do Laravel
- Utilize o Composer para instalar o Laravel 9.
- Configure o arquivo `.env` com as credenciais do seu banco de dados MySQL e outras variáveis de ambiente necessárias.

### Configuração do React
- Utilize o NPM para criar um novo projeto React.
- Configure o ambiente React para se comunicar com a API Laravel utilizando o Axios ou outro cliente HTTP.

## 4. Estrutura do Projeto
### Back-end (Laravel)
- `app/`: Contém a lógica principal da aplicação.
- `routes/api.php`: Define os endpoints da API.
- `database/migrations/`: Contém as migrações do banco de dados.

### Front-end (React)
- `src/`: Contém os componentes React.
- `public/`: Contém arquivos estáticos como HTML, CSS, e imagens.

## 5. Configuração do Banco de Dados
- Utilize as migrações do Laravel para configurar as tabelas do banco de dados.
- As tabelas principais incluem `users` (para autenticação) e `tasks` (para as tarefas).

## 6. Implementação da API
### Endpoints
- `GET /tasks` - Listar todas as tarefas
- `GET /tasks/{id}` - Obter detalhes de uma tarefa
- `POST /tasks` - Criar uma nova tarefa
- `PUT /tasks/{id}` - Atualizar uma tarefa
- `DELETE /tasks/{id}` - Excluir uma tarefa

### Autenticação
- Utiliza o sistema de autenticação padrão do Laravel (Sanctum).
- Requer que os usuários se autentiquem para acessar os endpoints.

## 7. Desenvolvimento Front-end
- Utiliza React para criar uma interface de usuário dinâmica.
- Integra-se com a API Laravel para realizar operações CRUD nas tarefas.

## 8. Segurança
- Implementa autenticação de usuários.
- Utiliza validações no lado do servidor para evitar injeções SQL e ataques XSS.
