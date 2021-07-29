
# Project Report
Participantes

Alecxannder J. S. B. Ferreira - NºUSP 10295707

Jayro Boy de Vasconcellos Neto - NºUSP 9762880

Gabriel dos Santos Brito - NºUSP 10284250

## Milestone 3

Nosso proejto se encontra incompleto. O 'back-end' está na pasta de mesmo nome, para rodar o codigo basta ir até a o diretorio Backend/node-start e digitar npm install e em seguida npm start. Para o 'front-end'e só ir na pasta inicial (onde se encontra o back end) e digitar npm install e npm start.

## 0. Project Idea
  Nosso "site" permite a venda e compra de realização de trabalhos acadêmicos dentro
da plataforma. Os produtos podem ser avaliados e comentados por usuários. Os usuários
podem adicionar crédito em conta sendo capazes de assim realizar compras com esse
valor. Usuários também podem oferecer seus serviços no site.

## 1. Requirements
      
* Nossa plataforma, como pedido na especificação do projeto, comporta dois tipo de 
usuário : Clientes e Administradores. Todos possuem os atributos requisitados, com exceção
de telefone. Administrador e Cliente podem acessar suas contas por meio da mesma
página de login.
*  O Administrador pode aceitar ou remover itens da loja, banir usuários e moderar
comentários e avaliações. Na sua página possui as opções: verificar seus dados, verificar
denúncias, histórico de banimentos.
*  O cliente pode adicionar itens ao seu carrinho de compras, comentar e avaliar
produtos, alterar seus dados, verificar seu histórico de compra e buscar por produtos no
site. Também pode adicionar à sua conta dinheiro que será creditado para compras futuras.
 Além disso, pode oferecer a realização de um trabalho.
* Todo produto nosso possui uma página individual contendo informações sobre o
produto como um nome, foto, descrição, preço, quantidade vendida, comentários e
avaliação de 0 a 5 estrelas. Não faz sentido termos uma quantidade de estoque pela
natureza do nosso produto. Vendedores podem alterar as informações do produto conforme
o desejado, exceto por avaliação, comentários e número de produtos vendidos.
* Após a seleção dos produtos, na página de carrinho, o usuário pode finalizar a
compra optando por usar o método de pagamento padrão ou outro método. Com isso o
carrinho é esvaziado e os produtos são adicionados ao histórico de compras do cliente, se
crédito foi usado ele é subtraído da conta do comprador, o valor da compra é creditado na
conta do vendedor ou enviado a conta bancária/serviço desejado pelo vendedor.

## 2. Project Description
    
As funcionalidades do nosso projeto são :

### Cadastramento no Site
* Os usuários, ao entrarem no site, se não possuírem uma conta, vão ter a opção de
se cadastrar no site, opções como minha conta e meu carrinho levariam até a página de
cadastro. Usuários não cadastrados podem realizar buscas e visualizar produtos, mas não
podem avaliar ou comentar em um produto.
* Um administrador recebe seu nome de usuário e senha de modo externo, então
não precisa se cadastrar por via dessas páginas. Usuario será admin e senha admin
* Imaginamos que a conta será armazenada na nossa base de dados do servidor
junto com as informações pertinentes.
  
### Login no Site
* Tanto usuários quanto administradores podem acessar suas contas por meio da
página de login, inserindo nos campos nome de usuário e senhas, os dados respectivos.
Em seguida aperta o botão para acessar a conta e, caso os dados estejam corretos, entra
com sucesso. Caso contrário ele permanece na tela, agora com um aviso de erro.
* Imaginamos que as informações de segurança do usuário não serão guardadas
como plain text.

### Busca na Base de Dados
* Em todas as páginas o usuário pode buscar por um produto por meio de uma string.
Não sabemos ainda como será processada, conhecemos métodos de busca via string mas
não temos experiência suficiente para afirmar como isso vai ser feito na base de dados.
  
### Adição de Produtos
* Usuários em nossa plataforma podem adicionar como produto a realização de um
trabalho, indicando o preço, número de trabalhos que consegue fazer em paralelo e número
máximo de páginas. A especialização do vendedor também é explicitada *.
*  Usuários podem adicionar seus projetos antigos como produto, incluindo preço,
número de páginas, tópico abordado, tipo de arquivo e um nome.
* Produtos e suas informações relevantes como, vendedor, preço, avaliação,
comentários e imagem do produto serão armazenados no servidor.

### Gerenciamento de Produtos
* Usuários podem modificar informações sobre os produtos/serviços oferecidos por
ele, alterando nomes, preços, imagem e descrição do produto.
* Os dados serão alterados na base de dados.

### Exclusão de Produtos
* Um usuário pode excluir um item dos seus produtos ofertados, tirando o produto da
base de dados de busca. Mesmo que o item seja “excluido”, administradores deveriam ter
acesso para fins de moderação.
* Administradores podem também excluir itens de baixa qualidade/mal serviços, ou de
usuários que realizam fraudes e outros tipos de má prática.
* Por hora assumimos que nosso produto, uma vez excluído, é removido da base de
dados.

### Avaliação de Produtos
* Usuários que comprarem um produto podem avaliá-lo em 0 a 5 estrelas e mandar
um comentário sobre o produto. A média do produto é calculada a cada compra e
armazenada no banco de dados.
* Avaliações são armazenadas em conjunto com o produto.

### Comentários em Produtos
* Comentários podem ser realizados ao comprar um produto. O usuário pode editar e
remover seu comentário a qualquer momento. Administradores podem remover
comentários impróprios.
* Comentários são armazenados com o produto.

### Compra de Produtos
* Na página do produto o usuário pode adicionar a seu carrinho de compras o
produto, vários tipos diferentes de produto podem ser adicionados ao carrinho. Ao
selecionar os produtos desejados o usuário pode visualizar seu carrinho e apertar o botão
finalizar sua compra. Na página de finalização de compra pode escolher o método de
pagamento, nosso produto é digital e não possui local de entrega.
 * Uma vez comprado o item deve ser inserido no histórico de compras do usuário, não
sabemos ainda como exatamente seria feito isso, mas já temos em mente que esse pode
ser um desafio.

### Adição de Crédito a Conta
* O usuário pode adicionar crédito em conta, que pode ser usado para compras. O
crédito do usuário é armazenado na base de dados em conjunto com outras informações de
conta.
* Seria armazenado no banco de dados como um valor associado a conta do usuario

### Histórico de Compras
* O usuário pode acessar um histórico que armazena todas compras passadas que
ele mesmo fez. As compras finalizadas são associadas a conta e armazenadas na base de
dados.
* Histórico de compras seria armazenado e associado a conta do usuario

## 3.Comments About the Code
N/A

## 4.Test Plan

Front-end
* O que fizemos foi tentar navegar com base na pagina inicial, como algumas paginas estão incompletas colocamos uma pagina 404.

Back-end
* Testamos se as funções get put post e delete dos models implementados (customer, order e product) funcionavam, usamos o Postman para enviar os comandos e a plataforma 3T para verificar se eles estavam sendo de fato inseridos na Base de Dados.

## 5.Test Result

* Back-end

  ### Usuario

  Cadrastramento de ususario (Sign Up)
  
  ![image](https://user-images.githubusercontent.com/26423265/127410666-5c01878a-415c-4810-b1ac-07ea575c3209.png)
  
  Inserçao 
  
  ![image](https://user-images.githubusercontent.com/26423265/127410847-82ec4da2-35d2-42fb-9912-ad8ff9fbde5c.png)

  Resultado
  
  ![image](https://user-images.githubusercontent.com/26423265/127410894-23f35b8d-de0c-4ce7-9858-e2030bf7a13f.png)

  Atualizar Informações de Usuario (Alterar Dados, usa o id do usuario)
  
  ![image](https://user-images.githubusercontent.com/26423265/127411150-84f75f95-113d-46d9-ac02-1ec0108ae018.png)
  
  Resultado
  
  ![image](https://user-images.githubusercontent.com/26423265/127411214-9c707f79-acac-44a3-b12b-9f75be1ef371.png)

  Remover Usuario (Caso ele fosse banido pelo admnistrador ou removesse a conta, usa o id tambem)
  
  ![image](https://user-images.githubusercontent.com/26423265/127411265-3768aed5-75d0-461b-804e-54fe82d31e11.png)

  Resultado
  
  ![image](https://user-images.githubusercontent.com/26423265/127411284-9abdbb96-520a-46b5-a40f-ed4c7079ef22.png)
  
  ### Produtos
  
  Inserção de Produtos
  
  ![image](https://user-images.githubusercontent.com/26423265/127411659-45c73d49-79fb-495a-a026-3823d9da49cc.png)

  Inserção
  
  ![image](https://user-images.githubusercontent.com/26423265/127411952-f73f5145-1829-412b-bfb5-7e7fbd1af39f.png)
  
  Resultado
  
  ![image](https://user-images.githubusercontent.com/26423265/127411994-704723ca-5d90-43ed-a080-6384568b9db2.png)

  Atualização de Produtos (Usa ID)
  
  ![image](https://user-images.githubusercontent.com/26423265/127412077-4ec0e1d2-ab5e-4ee9-a7ae-3b3f1cc752b6.png)

  Resultado
  
  ![image](https://user-images.githubusercontent.com/26423265/127412100-721c0a2b-c404-4810-8f95-f9e05ba1706d.png)

  Remoção de Produto (Usa ID, os valores mudaram por um erro que tinha no delete, consertado)
  
  ![image](https://user-images.githubusercontent.com/26423265/127412514-aa69a0d6-7105-4dfc-ae81-1cea8a8984ca.png)
  
  Resultado
  
  ![image](https://user-images.githubusercontent.com/26423265/127412546-eeb171e5-edd8-4e8d-897e-366ad1736d1c.png)

  Busca por Tag (Tem por Id e outros tipos, mas são triviais)
  
  ![image](https://user-images.githubusercontent.com/26423265/127412638-0e284a7c-32cc-483f-aa6e-11186274b696.png)

 
  ### Pedidos

   
   
  
  

  

## 6. Build Procedures

Nosso proejto se encontra incompleto. O 'back-end' está na pasta de mesmo nome, para rodar o codigo basta ir até a o diretorio Backend/node-start e digitar npm install e em seguida npm start. Para o 'front-end'e só ir na pasta inicial (onde se encontra o back end) e digitar npm install e npm start.

## 7.Problems

* Encontramos dificuldades nos dois lados do projeto. No front aplicar router no vue custou muito tempo e no back end tivemos de nos adaptar a usar uma ferramenta chamda heroku, já que a plataforma azure apresentou complicações. Por razões que ainda não entendemos o Heroku ao tentar falar com a base de dados era negado, mesmo tendo deixado o acesso a base livre para todos e nos garantindo que nos testes não estava rodando localmente apenas.

## 8.Comments

* Mesmo com os tutoriais apresentados em aula fomos incapazes de concluir o projeto

# Navigation Diagram
![diagramdenavegação](https://user-images.githubusercontent.com/26423265/120227625-e82d7500-c21f-11eb-8c37-2931bbec8d98.png)
