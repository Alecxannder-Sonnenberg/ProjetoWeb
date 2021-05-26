Project Report
Participantes
Alecxannder J. S. B. Ferreira - NºUSP 10295707
Jayro Boy de Vasconcellos Neto - NºUSP 9762880
Gabriel dos Santos Brito - NºUSP 10284250
0. Project Idea
Nosso site permite a venda e compra de realização de trabalhos acadêmicos dentro
da plataforma. Os produtos podem ser avaliados e comentados por usuários. Os usuários
podem adicionar crédito em conta sendo capazes de assim realizar compras com esse
valor. Usuários também podem oferecer seus serviços no site.
1. Requirements
Nossa plataforma, como pedido na especificação do projeto, comporta dois tipos de
usuário: Clientes e Administradores. Todos possuem os atributos requisitados, com exceção
de telefone. Administrador e Cliente podem acessar suas contas por meio da mesma
página de l ogin.
O Administrador pode aceitar ou remover i tens da l oja, banir usuários e moderar
comentários e avaliações. Na sua página possui as opções: verificar seus dados, verificar
denúncias, histórico de banimentos.
O cliente pode adicionar i tens ao seu carrinho de compras, comentar e avaliar
produtos, alterar seus dados, verificar seu histórico de compra e buscar por produtos no
site. Também pode adicionar à sua conta dinheiro que será creditado para compras futuras.
Além disso, pode oferecer a realização de um trabalho.
Todo produto nosso possui uma página i ndividual contendo i nformações sobre o
produto como um nome, foto, descrição, preço, quantidade vendida, comentários e
avaliação de 0 a 5 estrelas. Não faz sentido termos uma quantidade de estoque pela
natureza do nosso produto. Vendedores podem alterar as i nformações do produto conforme
o desejado, exceto por avaliação, comentários e número de produtos vendidos.
Após a seleção dos produtos, na página de carrinho, o usuário pode finalizar a
compra optando por usar o método de pagamento padrão ou outro método. Com i sso o
carrinho é esvaziado e os produtos são adicionados ao histórico de compras do cliente, se
crédito foi usado ele é subtraído da conta do comprador, o valor da compra é creditado na
conta do vendedor ou enviado a conta bancária/serviço desejado pelo vendedor.
2. Project Description
● Navigation diagram for your application l inked to the screen mockups. This l ink can be
just the name of the mockup (i.e. Mockup1, Mockup2, etc) or an H TML link.
● The i nformation you are going to save i n the server (no need to decide how that
information will be saved).
As funcionalidades do nosso projeto são:
Cadastramento no Site
Os usuários, ao entrarem no site, se não possuírem uma conta, vão ter a opção de
se cadastrar no site, opções como minha conta e meu carrinho l evariam até a página de
cadastro. Usuários não cadastrados podem realizar buscas e visualizar produtos, mas não
podem avaliar ou comentar em um produto.
Um administrador recebe seu nome de usuário e senha de modo externo , então
não precisa se cadastrar por via dessas páginas.
Imaginamos que a conta será armazenada na nossa base de dados do servidor
junto com as i nformações pertinentes.
Login no Site
Tanto usuários quanto administradores podem acessar suas contas por meio da
página de l ogin, i nserindo nos campos nome de usuário e senhas, os dados respectivos.
Em seguida aperta o botão para acessar a conta e, caso os dados estejam corretos, entra
com sucesso. Caso contrário ele permanece na tela, agora com um aviso de erro.
Imaginamos que as i nformações de segurança do usuário não serão guardadas
como plain text.
Busca na Base de Dados
Em todas as páginas o usuário pode buscar por um produto por meio de uma string.
Não sabemos ainda como será processada, conhecemos métodos de busca via string mas
não temos experiência suficiente para afirmar como i sso vai ser feito na base de dados.
Adição de Produtos
Usuários em nossa plataforma podem adicionar como produto a realização de um
trabalho, i ndicando o preço, número de trabalhos que consegue fazer em paralelo e número
máximo de páginas. A especialização do vendedor também é explicitada *.
Usuários podem adicionar seus projetos antigos como produto, i ncluindo preço,
número de páginas, tópico abordado, tipo de arquivo e um nome.
Produtos e suas i nformações relevantes como, vendedor, preço, avaliação,
comentários e i magem do produto serão armazenados no servidor.
Gerenciamento de Produtos
Usuários podem modificar i nformações sobre os produtos/serviços oferecidos por
ele, alterando nomes, preços, i magem e descrição do produto.
Os dados serão alterados na base de dados.
Exclusão de Produtos
Um usuário pode excluir um i tem dos seus produtos ofertados, tirando o produto da
base de dados de busca. Mesmo que o i tem seja “excluido”, administradores deveriam ter
acesso para fins de moderação.
Administradores podem também excluir i tens de baixa qualidade/mal serviços, ou de
usuários que realizam fraudes e outros tipos de má prática.
Por hora assumimos que nosso produto, uma vez excluído, é removido da base de
dados.
Avaliação de Produtos
Usuários que comprarem um produto podem avaliá-lo em 0 a 5 estrelas e mandar
um comentário sobre o produto. A média do produto é calculada a cada compra e
armazenada no banco de dados.
Avaliações são armazenadas em conjunto com o produto.
Comentários em Produtos
Comentários podem ser realizados ao comprar um produto. O usuário pode editar e
remover seu comentário a qualquer momento. Administradores podem remover
comentários i mpróprios.
Comentários são armazenados com o produto.
Compra de Produtos
Na página do produto o usuário pode adicionar a seu carrinho de compras o
produto, vários tipos diferentes de produto podem ser adicionados ao carrinho. Ao
selecionar os produtos desejados o usuário pode visualizar seu carrinho e apertar o botão
finalizar sua compra. Na página de finalização de compra pode escolher o método de
pagamento, nosso produto é digital e não possui l ocal de entrega.
Uma vez comprado o i tem deve ser i nserido no histórico de compras do usuário, não
sabemos ainda como exatamente seria feito i sso, mas j á temos em mente que esse pode
ser um desafio.
Adição de Crédito a Conta
O usuário pode adicionar crédito em conta, que pode ser usado para compras. O
crédito do usuário é armazenado na base de dados em conjunto com outras i nformações de
conta.
Seria armazenado no banco de dados como um valor associado a conta do usuario
Histórico de Compras
O usuário pode acessar um histórico que armazena todas compras passadas que
ele mesmo fez. As compras finalizadas são associadas a conta e armazenadas na base de
dados.
Histórico de compras seria armazenado e associado a conta do usuario
3.Comments About the Code
N/A
4.Test Plan
N/A
5.Test Result
N/A
6. Build Procedures
N/A
7.Problems
N/A
8.Comments
N/A