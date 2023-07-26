imoveis = [] //array

do {
    opcao = prompt("Quantidade de Imóveis cadastrados: " + imoveis.length + 
                    "\n\nDigite  a opção que deseja:" +
                    "\n 1 - Cadastrar novo imóvel" +
                    "\n 2 - Mostrar imóveis cadastrados no sistema" +
                    "\n 3 - Encerrar programa"
                    )

    switch(opcao){
        case "1":
            imovel = {} //objeto
            imovel.proprietario = prompt("Digite o nome do proprietario do imóvel")
            imovel.banheiros = prompt("Digite a quantidade de banheiros do imóvel")
            imovel.quartos = prompt("Digite a quantidade de quartos do imóvel ")
            imovel.garagem = prompt("Digite se há garagem (SIM ou NÃO)")
            imoveis.push(imovel)
            break
        case "2":
            for(i=0; i<imoveis.length; i++){
                alert( "Imóvel: " + (i+1) +
                       "\nProprietário: " + imoveis[i].proprietario +
                       "\nQtd Banheiros: " + imoveis[i].banheiros +
                       "\nQtd Quartos: " + imoveis[i].quartos +
                       "\nHá garagem: " + imoveis[i].garagem )
            }
            break
        case "3":
            alert("Encerrando programa")
        break
        default:
            alert("Você escolheu uma opção errada, escolha uma opção válida!")    
        break        

    }                
} while (opcao !== "3");
