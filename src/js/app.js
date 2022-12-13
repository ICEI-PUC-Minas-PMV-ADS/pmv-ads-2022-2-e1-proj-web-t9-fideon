var Cadastro = [
    {
        "nome":"Otávio das Neves",
        "cidade":"Contagem",
        "idade":20,
        "telefone":"(31) 3081-6314",
        "favorito":"Padaria da Neca",
        "rank":1,
    },
    {
        "nome":"Maria Luiza Aragão",
        "cidade":"Belo Horizonte",
        "idade":32,
        "telefone":"(31) 3033-0713",
        "favorito":"Pizzaria do Doca",
        "rank":2,
    },
    {
        "nome":"Ana Pereira",
        "cidade":"Betim",
        "idade":19,
        "telefone":"(31) 2389-4037",
        "favorito":"Restaurante da Esquina",
        "rank":3,
    },
    {
        "nome":"Helena da Mata",
        "cidade":"Belo Horizonte",
        "idade":25,
        "telefone":"(31) 3142-7280",
        "favorito":"Padaria da Neca",
        "rank":2,
    },
    {
        "nome":"Heitor Oliveira",
        "cidade":"Belo Horizonte",
        "idade":41,
        "telefone":"(31) 2732-4117",
        "favorito":"Restaurante da Esquina",
        "rank":2,
    },
    {
        "nome":"Raquel da Mota",
        "cidade":"Ribeirão das Neves",
        "idade":39,
        "telefone":"(31) 2005-1896",
        "favorito":"Bão de Minas",
        "rank":1,
    },
    {
        "nome":"João Lucas Martins",
        "cidade":"Nova Lima",
        "idade":22,
        "telefone":"(35) 2870-2070",
        "favorito":"Padaria da Neca",
        "rank":1,
    },
    {
        "nome":"Carolina Moura",
        "cidade":"Belo Horizonte",
        "idade":23,
        "telefone":"(32) 2315-6615",
        "favorito":"Pizzaria do Doca",
        "rank":2,
    },
    {
        "nome":"Davi Lucca Martins",
        "cidade":"Nova Lima",
        "idade":20,
        "telefone":"(32) 3706-7007",
        "favorito":"Açai Legal",
        "rank":3,
    }
];

var validaCliente = [
    {
        "Index":1,
        "email":"otavioneves@gmail.com",
        "senha":"123456"
    },
    {
        "Index":2,
        "email":"malu.aragao@gmail.com",
        "senha":"123456",
    },
    {
        "Index":3,
        "email":"pereira.ana@gmail.com",
        "senha":"123456",
    },
    {
        "Index":4,
        "email":"helenamata12@gmail.com",
        "senha":"123456",
    },
    {
        "Index":5,
        "email":"oliveiraheitor@gmail.com",
        "senha":"123456",
    },
    {
        "Index":6,
        "email":"raquelmota@gmail.com",
        "senha":"123456",
    },
    {
        "Index":7,
        "email":"lucasmartins.joao@gmail.com",
        "senha":"123456",
    },
    {
        "Index":8,
        "email":"carolmou@gmail.com",
        "senha":"123456",
    },
    {
        "Index":9,
        "email":"davilucca@gmail.com",
        "senha":"123456",
    }
];

var Adm = [
    {
        "index":0,
        "nome":"Administrador FideOn",
        "email":"fideon@fideon.com.br",
        "senha":"654321"
    }
]

var validaEmpresas = [
    {
        "index":1,
        "email":"padariadaneca@fideon.com.br",
        "senha":"123456"
    },
       
    {
        "index":2,
        "email":"pizzadodoca@fideon.com.br",
        "senha":"123456"
    },

    {
        "index":3,
        "email":"esquinarestaurante@fideon.com.br",
        "senha":"123456"
    },

    {
        "index":4,
        "email":"baodeminas@fideon.com.br",
        "senha":"123456"
    },

    {
        "index":5,
        "email":"acailegal@fideon.com.br",
        "senha":"123456"
    }
];

var Empresas = [
    {
        "nome":"Padaria da Neca",
        "endereço":"Av dos Milagres, 982",
        "bairro":"Cabral",
        "telefone":"(31) 3234 5432",
        "comentarios":[
            "Atendimento excelente! Preços ok",
            "Tudo perfeito!",
            "Achei os preços um pouco salgados, mas de resto, perfeito",
            "Funciona 24h!"
        ],
        "vendas":6239.98,
        "cliente":2,
    },
    {
        "nome":"Pizzaria do Doca",
        "endereço":"Av Paulista, 321",
        "bairro":"Dona Clara",
        "telefone":"(31) 3122 8965",
        "comentarios":[
            "Otima pizza, pessimo atendimento",
        ],
        "vendas":1121.44,
        "cliente":7,
    },
    {
        "nome":"Restaurante da Esquina",
        "endereço":"Rua dos Beija-flores, 99",
        "bairro":"Tiradentes",
        "telefone":"(31) 3667 5489",
        "comentarios":[
            "Ideal para um almoço executivo, sem gastar muito",
        ],
        "vendas":4221.10,
        "cliente":3,
    },
    {
        "nome":"Bão de Minas",
        "endereço":"Ruas dos Atleticanos, 299",
        "bairro":"Caiçara",
        "telefone":"(31) 3381-9638",
        "comentarios":[
            "Atendimento excelente! Preços de acordo com a qualidade do local",
            "Tudo perfeito!",
            "Local super aconchegante e familiar",
            "Brunch maravilhoso, super recomendo!"
        ],
        "vendas":3211.22,
        "cliente":1,
    },
    {
        "nome":"Açaí Legal",
        "endereço":"Rua dos Cruzeirenses, 399 B",
        "bairro":"Floresta",
        "telefone":"(31) 2213-5642",
        "comentarios":[
            "Açai super gostoso, mas faltaram opções de acompanhamento",
            "Não fui atendido, não saberia avaliar!",
            "Açai de verdade"
        ],
        "vendas":2391.10,
        "cliente":5,
    }
];

/* VALIDAR LOGIN */

function validarLogin(){
    
    var uniqueCliente = document.getElementById("uniqueID").value;
    var ClientePassword = document.getElementById("uniquePW").value;

    
    for (let i = 0; i < validaCliente.length; i++){
        if(uniqueCliente === validaCliente[i].email && ClientePassword === validaCliente[i].senha){             
            window.location.href = 'index-cliente.html' + '#' + validaCliente[i].Index;
            return ;
        }          
    }

    for (let i = 0; i < validaEmpresas.length; i++){
        if(uniqueCliente === validaEmpresas[i].email && ClientePassword === validaEmpresas[i].senha){         
            window.location.href = 'index-empresa.html' + '#' + validaEmpresas[i].index;            
            return;
        }  
    }

    alert('Nome e/ou usuário incorretos!');
    return;
};


function WelcomeCliente(){

    var index = window.location.hash.substring(1);
    var textoHTML = 'Olá, '
    for (let i = 0; i < Cadastro.length; i++){
        if(index == validaCliente[i].Index){
            textoHTML += Cadastro[i].nome;
        }
    }

    textoHTML += '!!' + '<br>' + 'No menu ao lado, você pode visualizar seus dados. Fique a vontade.';
    var textoHTML2 = '';


    var tela = document.getElementById('tela');
    tela.innerHTML = textoHTML;
    var tela2 = document.getElementById('tela2');
    tela2.innerHTML = textoHTML2;
}

function WelcomeEmpresa(){

    var index = window.location.hash.substring(1);
    var textoHTML = 'Olá, '
    for (let i = 0; i < Empresas.length; i++){
        if(index == validaEmpresas[i].index){
            textoHTML += Empresas[i].nome;
        }
    }

    textoHTML += '!!' + '<br>' + 'No menu ao lado, você pode visualizar seus dados. Fique a vontade.';
    var textoHTML2 = '';


    var tela = document.getElementById('tela');
    tela.innerHTML = textoHTML;
    var tela2 = document.getElementById('tela2');
    tela2.innerHTML = textoHTML2;
}

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

function ExibirFavorito(index){
    var textoHTML2 = '';
    var textoHTML = 'Minha empresa FideOn favorita é ';
    textoHTML += Cadastro[index].favorito;   

    var tela = document.getElementById('tela');
    tela.innerHTML = textoHTML;
    var tela2 = document.getElementById('tela2');
    tela2.innerHTML = textoHTML2;
};

function ExibirBeneficios(index){

    var textoHTML = 'Seu rank é ';
    var textoHTML2 = 'Atualmente, a FideOn está trabalhando em sistemas de ranqueamento.<br>' +
    'Cliente Ouro: 20% desconto em toda a loja.<br>' +
    'Cliente Prata: 15% desconto em toda a loja.<br>' +
    'Cliente Bronze: 10% desconto em toda a loja.<br>';


    switch(Cadastro[index].rank){
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
        textoHTML += validaCliente[i].email+ ' - ';
        textoHTML += Cadastro[i].telefone;        
        textoHTML += '<br>'
    };

    var tela = document.getElementById('tela');
    tela.innerHTML = textoHTML;
    var tela2 = document.getElementById('tela2');
    tela2.innerHTML = textoHTML2;
};

  // Cria a tabela HTML de Empresas ou Cadastro.
function ExibirEmpresas(selector) {

    var columns = addTableHeaderEmpresas(Empresas, selector);
  
    for (var i = 0; i < Empresas.length; i++) {
      var row$ = $('<tr/>');
      for (var colIndex = 0; colIndex < columns.length; colIndex++) {
        var cellValue = Empresas[i][columns[colIndex]];
        if (cellValue == null) cellValue = "";
        row$.append($('<td/>').html(cellValue));
      }
      $(selector).append(row$);
    }
};

function ExibirCadastros(selector) {


    var textoHTML = 'Atualmente, nosso banco de dados consta com os seguintes clientes:<br><br>';

    var columns = addTableHeaderCadastros(Cadastro, selector);
  
    for (var i = 0; i < Cadastro.length; i++) {
      var row$ = $('<tr/>');
      for (var colIndex = 0; colIndex < columns.length; colIndex++) {
        var cellValue = Cadastro[i][columns[colIndex]];
        if (cellValue == null) cellValue = "";
        row$.append($('<td/>').html(cellValue));
      }
      $(selector).append(row$);
    }

    var tela = document.getElementById('tela');
    tela.innerHTML = textoHTML;
};
  
  // Adds a header row to the table and returns the set of columns.
  // Need to do union of keys from all records as some records may not contain
  // all records.
function addTableHeaderEmpresas(Empresas, selector) {

    var columnSet = [];
    var headerTr$ = $('<tr/>');
  
    for (var i = 0; i < Empresas.length; i++) {
      var rowHash = Empresas[i];
      for (var key in rowHash) {
        if ($.inArray(key, columnSet) == -1) {
          columnSet.push(key);
          headerTr$.append($('<th/>').html(key));
        }
      }
    }
    $(selector).append(headerTr$);
  
    return columnSet;
};

function addTableHeaderCadastros(Cadastro, selector) {

    var columnSet = [];
    var headerTr$ = $('<tr/>');
  
    for (var i = 0; i < Cadastro.length; i++) {
      var rowHash = Cadastro[i];
      for (var key in rowHash) {
        if ($.inArray(key, columnSet) == -1) {
          columnSet.push(key);
          headerTr$.append($('<th/>').html(key));
        }
      }
    }
    $(selector).append(headerTr$);
  
    return columnSet;
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

function meuPerfil(index){
    var index  = window.location.hash.substring(1) - 1;
    var textoHTML = '';
    var textoHTML2 = '';

    textoHTML += Empresas[index].nome + '<br>';
    textoHTML += Empresas[index].endereço + '<br>';
    textoHTML += Empresas[index].bairro + '<br>';
    textoHTML += Empresas[index].telefone;

    var tela = document.getElementById('tela');
    tela.innerHTML = textoHTML;
    var tela2 = document.getElementById('tela2');
    tela2.innerHTML = textoHTML2;     
}

//daqui pra baixo, Junia diz que tentou fazer algo kkkk

function ExibirComentarios(index){

    var index  = window.location.hash.substring(1) - 1;
    var textoHTML = '';
    var textoHTML2 = '';
    textoHTML += '<br><br><br>'
    textoHTML += Empresas[index].nome + '<br>';
    for(let j = 0; j<Empresas[index].comentarios.length; j++)
    {
        textoHTML += '<br><br>'
        textoHTML += Empresas[index].comentarios[j] + '<br>';
    };

    var tela = document.getElementById('tela');
    tela.innerHTML = textoHTML;
    var tela2 = document.getElementById('tela2');
    tela2.innerHTML = textoHTML2;
    
    return index;
};

function Relatorio(index){

    var index  = window.location.hash.substring(1) - 1;
    var textoHTML = '';
    var textoHTML2 = '';

    textoHTML += 'Foram gerados para voce, ' + Empresas[index].nome +', R$' + Empresas[index].vendas + ' oriundos de clientes FideOn';
    textoHTML += '<br>O cliente do mês foi ';
    
    for(var i = 1; i < Cadastro.length; i++){
        if(Empresas[index].cliente == validaCliente[i].Index){
            textoHTML += Cadastro[i].nome;
        }
    };

    var tela = document.getElementById('tela');
    tela.innerHTML = textoHTML;
    var tela2 = document.getElementById('tela2');
    tela2.innerHTML = textoHTML2;
}