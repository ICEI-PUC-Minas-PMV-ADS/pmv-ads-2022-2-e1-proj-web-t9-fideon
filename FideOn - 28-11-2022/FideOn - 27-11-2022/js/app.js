var Cadastro = [
    {
        "nome":"Otávio das Neves",
        "cidade":"Belo Horizonte",
        "idade":20,
        "email":"otavioneves@gmail.com",
        "senha":"123456",
        "telefone":"(31) 3081-6314",
        "rank":1,
        "favorito":"Padaria da Neca"
    },
    {
        "nome":"Maria Luiza Aragão",
        "cidade":"Belo Horizonte",
        "idade":32,
        "email":"malu.aragao@gmail.com",
        "senha":"123456",
        "telefone":"(31) 3033-0713",
        "rank":2,
        "favorito":"Padaria da Neca"
    },
    {
        "nome":"Ana Pereira",
        "cidade":"Belo Horizonte",
        "idade":19,
        "email":"pereira.ana@gmail.com",
        "senha":"123456",
        "telefone":"(31) 2389-4037",
        "rank":3,
        "favorito":"Padaria da Neca"
    },
    {
        "nome":"Helena da Mata",
        "cidade":"Belo Horizonte",
        "idade":25,
        "email":"helenamata12@gmail.com",
        "senha":"123456",
        "telefone":"(31) 3142-7280",
        "rank":2,
        "favorito":"Padaria da Neca"
    },
    {
        "nome":"Heitor Oliveira",
        "cidade":"Belo Horizonte",
        "idade":41,
        "email":"oliveiraheitor@gmail.com",
        "senha":"123456",
        "telefone":"(31) 2732-4117",
        "rank":2,
        "favorito":"Padaria da Neca"
    },
    {
        "nome":"Raquel da Mota",
        "cidade":"Belo Horizonte",
        "idade":39,
        "email":"raquelmota@gmail.com",
        "senha":"123456",
        "telefone":"(31) 2005-1896",
        "rank":1,
        "favorito":"Padaria da Neca"
    },
    {
        "nome":"João Lucas Martins",
        "cidade":"Belo Horizonte",
        "idade":22,
        "email":"lucasmartins.joao@gmail.com",
        "senha":"123456",
        "telefone":"(35) 2870-2070",
        "rank":1,
        "favorito":"Padaria da Neca"
    },
    {
        "nome":"Carolina Moura",
        "cidade":"Belo Horizonte",
        "idade":23,
        "email":"carolmou@gmail.com",
        "senha":"123456",
        "telefone":"(32) 2315-6615",
        "rank":2,
        "favorito":"Padaria da Neca"
    },
    {
        "nome":"Davi Lucca Martins",
        "cidade":"Belo Horizonte",
        "idade":20,
        "email":"davilucca@gmail.com",
        "senha":"123456",
        "telefone":"(32) 3706-7007",
        "rank":3,
        "favorito":"Padaria da Neca"
    }
];

var Empresas = [
    {
        "nome":"Padaria da Neca",
        "endereço":"Av dos Milagres, 982",
        "bairro":"Cabral",
        "telefone":"(31) 3234 5432",
        "email":"padariadaneca@fideon.com.br",
        "senha":"123456",
        "comentarios":[
            "Atendimento excelente! Preços ok",
            "Tudo perfeito!",
            "Achei os preços um pouco salgados, mas de resto, perfeito",
            "Funciona 24h!"],
        "vendas":[
            "Pão Francês, 1000 unidades",
            "Pizzas, 5 unidades"
        ]
    },
    {
        "nome":"Pizzaria do Doca",
        "endereço":"Av Paulista, 321",
        "bairro":"Dona Clara",
        "telefone":"(31) 3122 8965",
        "email":"pizzadodoca@fideon.com.br",
        "senha":"123456",
        "comentarios":[
            "Otima pizza, pessimo atendimento",
        ],
        "vendas":[
            "Pão Francês, 1000 unidades",
            "Pizzas, 5 unidades"
        ]
    },
    {
        "nome":"Restaurante da Esquina",
        "endereço":"Rua dos Beija-flores, 99",
        "bairro":"Tiradentes",
        "telefone":"(31) 3667 5489",
        "email":"esquinarestaurante@fideon.com.br",
        "senha":"123456",
        "comentarios":[
            "Ideal para um almoço executivo, sem gastar muito",
        ],
        "vendas":[
            "Pão Francês, 1000 unidades",
            "Pizzas, 5 unidades"
        ]
    },
    {
        "nome":"Bão de Minas",
        "endereço":"Ruas dos Atleticanos, 299",
        "bairro":"Caiçara",
        "telefone":"(31) 3381-9638",
        "email":"baodeminas@fideon.com.br",
        "senha":"123456",
        "comentarios":[
            "Atendimento excelente! Preços de acordo com a qualidade do local",
            "Tudo perfeito!",
            "Local super aconchegante e familiar",
            "Brunch maravilhoso, super recomendo!"
        ],
        "vendas":[
            "Pão Francês, 1000 unidades",
            "Pizzas, 5 unidades"
        ]
    },
    {
        "nome":"Açaí Legal",
        "endereço":"Rua dos Cruzeirenses, 399 B",
        "bairro":"Floresta",
        "telefone":"(31) 2213-5642",
        "email":"acailegal@fideon.com.br",
        "senha":"123456",
        "comentarios":[
            "Atendimento excelente! Preços ok",
            "Tudo perfeito!",
            "Achei os preços um pouco salgados, mas de resto, perfeito",
            "Funciona 24h!"
        ],
        "vendas":[
            "Pão Francês, 1000 unidades",
            "Pizzas, 5 unidades"
        ]
    }
];

/* VALIDAR LOGIN */

function validarLogin(){

    var uniqueCliente = document.getElementById("uniqueID").value;
    var ClientePassword = document.getElementById("uniquePW").value;

    for (let i = 0; i < Cadastro.length; i++){
        if(uniqueCliente === Cadastro[i].email && ClientePassword === Cadastro[i].senha){            
            alert('Validar login!');            
            return true;
        }            
    }

    for (let i = 0; i < Empresas.length; i++){
        if(uniqueCliente === Empresas[i].email && ClientePassword === Empresas[i].senha){
            alert('Validar login!');
            return true;
        }            
    }

    alert('Usuário ou senha incorreto');
    return false;

};

function OndeEncontrar(){
    
    var textoHTML = 'Atualmente, temos parceiros localizados nos seguintes bairros de Belo Horizonte:<br>';
    var textoHTML2 = '';

    for (let i = 0; i < Empresas.length; i++){
        textoHTML += '<br>';
        textoHTML += Empresas[i].bairro;
    }

    var tela = document.getElementById('tela');
    tela.innerHTML = textoHTML;
    var tela2 = document.getElementById('tela2');
    tela2.innerHTML = textoHTML2;

}

function ExibirFavorito(){

    var textoHTML2 = '';
    var textoHTML = 'Minha empresa FideOn favorita é ';
    textoHTML += Cadastro[0].favorito;   

    var tela = document.getElementById('tela');
    tela.innerHTML = textoHTML;
    var tela2 = document.getElementById('tela2');
    tela2.innerHTML = textoHTML2;
    
};

function ExibirBeneficios(){

    var textoHTML = 'Seu rank é ';
    var textoHTML2 = 'Atualmente, a FideOn está trabalhando em sistemas de ranqueamento.<br>' +
    'Cliente Ouro: 20% desconto em toda a loja.<br>' +
    'Cliente Prata: 15% desconto em toda a loja.<br>' +
    'Cliente Bronze: 10% desconto em toda a loja.<br>';


    switch(Cadastro[0].rank){
        case 1:
            textoHTML += 'Ouro';
            break;
        case 2:
            textoHTML += 'Prata';
            break;
        case 3:
            textoHTML += 'Bronze';
            break;
        default:
            textoHTML += 'Invalido';
            break;
    }

    var tela = document.getElementById('tela');
    tela.innerHTML = textoHTML;

    var tela2 = document.getElementById('tela2');
    tela2.innerHTML = textoHTML2;

};

function ExibirPerfis(){

    var textoHTML = 'Atualmente, nosso banco de dados consta com os seguintes clientes:<br><br>';
    var textoHTML2 = '';

    for ( let i = 0; i < Cadastro.length; i++){
        textoHTML += '<br>'
        textoHTML += Cadastro[i].nome + ' - ';
        textoHTML += Cadastro[i].cidade + ' - ';
        textoHTML += Cadastro[i].idade + ' anos - ';
        textoHTML += Cadastro[i].email+ ' - ';
        textoHTML += Cadastro[i].telefone;        
        textoHTML += '<br>'
    };

    var tela = document.getElementById('tela');
    tela.innerHTML = textoHTML;
    var tela2 = document.getElementById('tela2');
    tela2.innerHTML = textoHTML2;
};

function ExibirEmpresas(){
    
    var textoHTML = 'Confira abaixo nossas empresas parceiras!';
    var textoHTML2 = '';

    for ( let i = 0; i < Empresas.length; i++){
        textoHTML += '<br><br><br>'
        textoHTML += Empresas[i].nome + '<br>';
        textoHTML += 'Endereço: ' + Empresas[i].endereço + '<br>';
        textoHTML += 'Bairro: ' + Empresas[i].bairro + '<br>';
        textoHTML += 'Telefone: ' + Empresas[i].telefone + '<br>' ;
        textoHTML += 'Email: ' + Empresas[i].email + '<br>';

        textoHTML += 'Comentários:'
        for(let j = 0; j<Empresas[i].comentarios.length; j++)
        {
            textoHTML += '<br>'
            textoHTML += Empresas[i].comentarios[j];
        }
    };

    var tela = document.getElementById('tela');
    tela.innerHTML = textoHTML;
    var tela2 = document.getElementById('tela2');
    tela2.innerHTML = textoHTML2;
};

function ExibirRank(){

    var textoHTML = 'Os clientes, em ordem de ranqueamento, são:<br>';
    var textoHTML2 = '';


    for ( let j = 1; j <= 3; j++){            
        for ( let i = 0; i < Cadastro.length; i++){
                if(Cadastro[i].rank == j){
                    textoHTML += '<br>'
                    textoHTML += 'Nome: ' + Cadastro[i].nome + '  -  ';
                    if(j==1)
                        textoHTML += 'Rank: Ouro';
                    else if(j==2)
                        textoHTML += 'Rank: Prata';
                    else if(j==3)
                        textoHTML += 'Rank: Bronze';
                    else
                    textoHTML += 'Rank: Invalido';
                }    
            }        
    };

    var tela = document.getElementById('tela');
    tela.innerHTML = textoHTML;
    var tela2 = document.getElementById('tela2');
    tela2.innerHTML = textoHTML2;
};

function ExibirFaleConosco(){
    
    

}

//daqui pra baixo, Junia diz que tentou fazer algo kkkk

function ExibirComentarios(){

    var textoHTML = '';
    var textoHTML2 = '';

    for ( let i = 0; i < Empresas.length; i++){
        textoHTML += '<br><br><br>'
        textoHTML += Empresas[i].nome;
        for(let j = 0; j<Empresas[i].comentarios.length; j++)
        {
            textoHTML += '<br><br>'
            textoHTML += Empresas[i].comentarios[j] + ' - ';
        }
    };

    var tela = document.getElementById('tela');
    tela.innerHTML = textoHTML;
    var tela2 = document.getElementById('tela2');
    tela2.innerHTML = textoHTML2;
};


