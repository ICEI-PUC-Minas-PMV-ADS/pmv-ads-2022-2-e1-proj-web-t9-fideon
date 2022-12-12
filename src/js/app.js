var Cadastro = [
    {
        "Index":1,
        "nome":"Otávio das Neves",
        "cidade":"Contagem",
        "idade":20,
        "email":"otavioneves@gmail.com",
        "telefone":"(31) 3081-6314",
        "favorito":"Padaria da Neca",
        "rank":1,
        "senha":"123456"
    },
    {
        "Index":2,
        "nome":"Maria Luiza Aragão",
        "cidade":"Belo Horizonte",
        "idade":32,
        "email":"malu.aragao@gmail.com",
        "telefone":"(31) 3033-0713",
        "favorito":"Pizzaria do Doca",
        "rank":2,
        "senha":"123456",
    },
    {
        "Index":3,
        "nome":"Ana Pereira",
        "cidade":"Betim",
        "idade":19,
        "email":"pereira.ana@gmail.com",
        "telefone":"(31) 2389-4037",
        "favorito":"Restaurante da Esquina",
        "rank":3,
        "senha":"123456",
    },
    {
        "Index":4,
        "nome":"Helena da Mata",
        "cidade":"Belo Horizonte",
        "idade":25,
        "email":"helenamata12@gmail.com",
        "telefone":"(31) 3142-7280",
        "favorito":"Padaria da Neca",
        "rank":2,
        "senha":"123456",
    },
    {
        "Index":5,
        "nome":"Heitor Oliveira",
        "cidade":"Belo Horizonte",
        "idade":41,
        "email":"oliveiraheitor@gmail.com",
        "telefone":"(31) 2732-4117",
        "favorito":"Restaurante da Esquina",
        "rank":2,
        "senha":"123456",
    },
    {
        "Index":6,
        "nome":"Raquel da Mota",
        "cidade":"Ribeirão das Neves",
        "idade":39,
        "email":"raquelmota@gmail.com",
        "telefone":"(31) 2005-1896",
        "favorito":"Bão de Minas",
        "rank":1,
        "senha":"123456",
    },
    {
        "Index":7,
        "nome":"João Lucas Martins",
        "cidade":"Nova Lima",
        "idade":22,
        "email":"lucasmartins.joao@gmail.com",
        "telefone":"(35) 2870-2070",
        "favorito":"Padaria da Neca",
        "rank":1,
        "senha":"123456",
    },
    {
        "Index":8,
        "nome":"Carolina Moura",
        "cidade":"Belo Horizonte",
        "idade":23,
        "email":"carolmou@gmail.com",
        "telefone":"(32) 2315-6615",
        "favorito":"Pizzaria do Doca",
        "rank":2,
        "senha":"123456",
    },
    {
        "Index":9,
        "nome":"Davi Lucca Martins",
        "cidade":"Nova Lima",
        "idade":20,
        "email":"davilucca@gmail.com",
        "telefone":"(32) 3706-7007",
        "favorito":"Açai Legal",
        "rank":3,
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

var ValidaEmpresas = [
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

]


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
            "Funciona 24h!"]
    },
    {
        "nome":"Pizzaria do Doca",
        "endereço":"Av Paulista, 321",
        "bairro":"Dona Clara",
        "telefone":"(31) 3122 8965",
        "comentarios":[
            "Otima pizza, pessimo atendimento",
        ]
    },
    {
        "nome":"Restaurante da Esquina",
        "endereço":"Rua dos Beija-flores, 99",
        "bairro":"Tiradentes",
        "telefone":"(31) 3667 5489",
        "comentarios":[
            "Ideal para um almoço executivo, sem gastar muito",
        ]
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
        ]
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
        ]
    }
];

/* VALIDAR LOGIN */

function validarLogin(){
    
    var uniqueCliente = document.getElementById("uniqueID").value;
    var ClientePassword = document.getElementById("uniquePW").value;

    
    for (let i = 0; i < Cadastro.length; i++){
        if(uniqueCliente === Cadastro[i].email && ClientePassword === Cadastro[i].senha){            
            window.location.href = 'index-cliente.html' + '#' + Cadastro[i].Index;
            return ;
        }          
    }

    for (let i = 0; i < ValidaEmpresas.length; i++){
        if(uniqueCliente === ValidaEmpresas[i].email && ClientePassword === ValidaEmpresas[i].senha){            
            window.location.href = 'index-empresa.html' + '#' + ValidaEmpresas[i].index;            
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
        if(index == Cadastro[i].Index){
            textoHTML += Cadastro[i].nome;
        }
    }

    textoHTML += '!!' + '<br>' + 'No menu acima, você pode visualizar seus dados. Fique a vontade.';
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
        if(index == ValidaEmpresas[i].index){
            textoHTML += Empresas[i].nome;
        }
    }

    textoHTML += '!!' + '<br>' + 'No menu acima, você pode visualizar seus dados. Fique a vontade.';
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

function ExibirBeneficios(){

    var textoHTML = 'Seu rank é ';
    var textoHTML2 = 'Atualmente, a FideOn está trabalhando em sistemas de ranqueamento.<br>' +
    'Cliente Ouro: 20% desconto em toda a loja.<br>' +
    'Cliente Prata: 15% desconto em toda a loja.<br>' +
    'Cliente Bronze: 10% desconto em toda a loja.<br>';


    switch(Cadastro[0].rank){
        case 1:
            textoHTML += 'Ouro. Válido por um ano, a partir da aquisição';
            break;
        case 2:
            textoHTML += 'Prata. Válido por 6 meses, a partir da aquisição';
            break;
        case 3:
            textoHTML += 'Bronze. Válido por 1 mês, a partir da aquisição';
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

    var columns = addTableHeaderCadastros(Cadastro, selector);
  
    for (var i = 0; i < Cadastro.length; i++) {
      var row$ = $('<tr/>');
      for (var colIndex = 0; colIndex < columns.length - 1; colIndex++) {
        var cellValue = Cadastro[i][columns[colIndex]];
        if (cellValue == null) cellValue = "";
        row$.append($('<td/>').html(cellValue));
      }
      $(selector).append(row$);
    }
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



function ExibirComentarios(){

    var index = window.location.hash.substring(1);
    var textoHTML = '';
    var textoHTML2 = '';

        textoHTML += '<br><br><br>'
        textoHTML += Empresas[index].nome;
        for(let j = 0; j<Empresas[index].comentarios.length; j++)
        {
            textoHTML += '<br><br>'
            textoHTML += Empresas[index].comentarios[j] + ' - ';
        };

    var tela = document.getElementById('tela');
    tela.innerHTML = textoHTML;
    var tela2 = document.getElementById('tela2');
    tela2.innerHTML = textoHTML2;
};





