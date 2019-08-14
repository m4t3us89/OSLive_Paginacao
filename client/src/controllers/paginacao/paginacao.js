//ARRAYS 
var listaProcessos = [];
var listaBytes = [];

//PÃGINAS MEMÃ“RIA LÃ“GICA
var pagML1 = [];
var pagML2 = [];
var pagML3 = [];
var pagML4 = [];
var pagML5 = [];
var pagML6 = [];
var pagML7 = [];
var pagML8 = [];
var pagML9 = [];
var pagML10 = [];
var pagML11 = [];
var pagML12 = [];
var pagML13 = [];
var pagML14 = [];

var pagML1Ocupado = 0;
var pagML2Ocupado = 0;
var pagML3Ocupado = 0;
var pagML4Ocupado = 0;
var pagML5Ocupado = 0;
var pagML6Ocupado = 0;
var pagML7Ocupado = 0;
var pagML8Ocupado = 0;
var pagML9Ocupado = 0;
var pagML10Ocupado = 0;
var pagML11Ocupado = 0;
var pagML12Ocupado = 0;
var pagML13Ocupado = 0;
var pagML14Ocupado = 0;

//PÃGINAS MEMÃ“RIA FÃSICA
var pag1 = [];
var pag2 = [];
var pag3 = [];
var pag4 = [];
var pag5 = [];
var pag6 = [];
var pag7 = [];
var pag8 = [];
var pag9 = [];
var pag10 = [];
var pag11 = [];
var pag12 = [];
var pag13 = [];
var pag14 = [];

var pag1Ocupado = 0;
var pag2Ocupado = 0;
var pag3Ocupado = 0;
var pag4Ocupado = 0;
var pag5Ocupado = 0;
var pag6Ocupado = 0;
var pag7Ocupado = 0;
var pag8Ocupado = 0;
var pag9Ocupado = 0;
var pag10Ocupado = 0;
var pag11Ocupado = 0;
var pag12Ocupado = 0;
var pag13Ocupado = 0;
var pag14Ocupado = 0;

var codLocalizador = 0; //LOCALIZAR CADA PROCESSO

var processoTemp; //VARIAVEL AUXILIAR PARA PROCESSO TEMPORÃRIO

//CORES **********************************************
var cor1 = {livre:0, cor:"#08033A"};
var cor2 = {livre:0, cor:"#009DB2"};
var cor3 = {livre:0, cor:"#FF4E00"};
var cor4 = {livre:0, cor:"#921224"};
var cor5 = {livre:0, cor:"#360B52"};
var cor6 = {livre:0, cor:"#006400"};
var cor7 = {livre:0, cor:"#380B05"};
var cor8 = {livre:0, cor:"#961693"};
var cor9 = {livre:0, cor:"#0245A3"};
var cor10 = {livre:0, cor:"#FFA924"};
var cor11 = {livre:0, cor:"#ADACA7"};
var cor12 = {livre:0, cor:"#222831"};
var cor13 = {livre:0, cor:"#324E7B"};
var cor14 = {livre:0, cor:"#453C38"};
var corLivre = "#44C662";




app.controller('PaginacaoController', function($scope, $http, $location, $routeParams, Notification, $interval, $timeout)
{
    //FUNÃ‡ÃƒO PARA INICIALIZAR COMPONENTES NECESSÃRIOS
    load = function(){
        atualizarEstatistica();
        inicializarMF();
        carregarSimulacoesSalvas();
    }

    //INICIALIZA PÃGINAS FÃSICAS
    inicializarMF = function(isSimulacao, callback){
        var x = 1;

        var aux_lista_mf = []
        var pg1 = []
        var pg2 = []
        var pg3 = []
        var pg4 = []
        var pg5 = []
        var pg6 = []
        var pg7 = []
        var pg8 = []
        var pg9 = []
        var pg10 = []
        var pg11 = []
        var pg12 = []
        var pg13 = []
        var pg14 = []


        //INICIALIZA PAGINA FÃSICA 1 ***********
        for(var i = 0; i < 4; i++){
            var aux = new Object();
            aux.byte = " ";
            aux.deslocamento = contBin(x);
            aux.enderecoFisico = "0000";

            x++;
            if(!isSimulacao) pag1.push(aux);
            else pg1.push( aux )
        }

        if(!isSimulacao){
            $scope.pag1s = pag1;
            gerenciarCorMF(corLivre);
        }else{
            aux_lista_mf.push( pg1 )
        }    
        x = 1;

        //INICIALIZA PAGINA FÃSICA 2 ***********
        for(var i = 0; i < 4; i++){
            var aux = new Object();
            aux.byte = " ";
            aux.deslocamento = contBin(x);
            aux.enderecoFisico = "0001";

            x++;
            if(!isSimulacao) pag2.push(aux);
            else pg2.push( aux )
        }
        if(!isSimulacao){
            $scope.pag2s = pag2;
            gerenciarCorMF(corLivre);
        }else{
            aux_lista_mf.push( pg2 )
        }    
        x = 1;
        //INICIALIZA PAGINA FÃSICA 3 ***********
        for(var i = 0; i < 4; i++){
            var aux = new Object();
            aux.byte = " ";
            aux.deslocamento = contBin(x);
            aux.enderecoFisico = "0010";

            x++;
            if(!isSimulacao) pag3.push(aux);
            else pg3.push( aux )
        }
        if(!isSimulacao){
            $scope.pag3s = pag3;
            gerenciarCorMF(corLivre);
        }else{
            aux_lista_mf.push( pg3 )
        }    
        x = 1;

        //INICIALIZA PAGINA FÃSICA 4 ***********
        for(var i = 0; i < 4; i++){
            var aux = new Object();
            aux.byte = " ";
            aux.deslocamento = contBin(x);
            aux.enderecoFisico = "0011";

            x++;
            if(!isSimulacao) pag4.push(aux);
            else pg4.push( aux )
        }
        if(!isSimulacao){
            $scope.pag4s = pag4;
            gerenciarCorMF(corLivre);
        }else{
            aux_lista_mf.push( pg4 )
        }    
        x = 1;

        //INICIALIZA PAGINA FÃSICA 5 ***********
        for(var i = 0; i < 4; i++){
            var aux = new Object();
            aux.byte = " ";
            aux.deslocamento = contBin(x);
            aux.enderecoFisico = "0100";

            x++;
            if(!isSimulacao) pag5.push(aux);
            else pg5.push( aux )
        }
        if(!isSimulacao){
            $scope.pag5s = pag5;
            gerenciarCorMF(corLivre);
        }else{
            aux_lista_mf.push( pg5 )
        }    
        x = 1;

        //INICIALIZA PAGINA FÃSICA 6 ***********
        for(var i = 0; i < 4; i++){
            var aux = new Object();
            aux.byte = " ";
            aux.deslocamento = contBin(x);
            aux.enderecoFisico = "0101";

            x++;
            if(!isSimulacao) pag6.push(aux);
            else pg6.push( aux )
        }
        if(!isSimulacao){
            $scope.pag6s = pag6;
            gerenciarCorMF(corLivre);
        }else{
            aux_lista_mf.push( pg6 )
        }    
        x = 1;

        //INICIALIZA PAGINA FÃSICA 7 ***********
        for(var i = 0; i < 4; i++){
            var aux = new Object();
            aux.byte = " ";
            aux.deslocamento = contBin(x);
            aux.enderecoFisico = "0110";

            x++;
            if(!isSimulacao) pag7.push(aux);
            else pg7.push( aux )
        }
        if(!isSimulacao){
            $scope.pag7s = pag7;
            gerenciarCorMF(corLivre);
        }else{
            aux_lista_mf.push( pg7 )
        }    
        x = 1;

        //INICIALIZA PAGINA FÃSICA 8 ***********
        for(var i = 0; i < 4; i++){
            var aux = new Object();
            aux.byte = " ";
            aux.deslocamento = contBin(x);
            aux.enderecoFisico = "0111";

            x++;
            if(!isSimulacao) pag8.push(aux);
            else pg8.push( aux )
        }
        if(!isSimulacao){
            $scope.pag8s = pag8;
            gerenciarCorMF(corLivre);
        }else{
            aux_lista_mf.push( pg8 )
        }    
        x = 1;

        //INICIALIZA PAGINA FÃSICA 9 ***********
        for(var i = 0; i < 4; i++){
            var aux = new Object();
            aux.byte = " ";
            aux.deslocamento = contBin(x);
            aux.enderecoFisico = "1000";

            x++;
            if(!isSimulacao) pag9.push(aux);
            else pg9.push( aux )
        }
        if(!isSimulacao){
            $scope.pag9s = pag9;
            gerenciarCorMF(corLivre);
        }else{
            aux_lista_mf.push( pg9 )
        }    
        x = 1;

        //INICIALIZA PAGINA FÃSICA 10 ***********
        for(var i = 0; i < 4; i++){
            var aux = new Object();
            aux.byte = " ";
            aux.deslocamento = contBin(x);
            aux.enderecoFisico = "1001";

            x++;
            if(!isSimulacao) pag10.push(aux);
            else pg10.push( aux )
        }
        if(!isSimulacao){
            $scope.pag10s = pag10;
            gerenciarCorMF(corLivre);
        }else{
            aux_lista_mf.push( pg10 )
        }    
        x = 1;
        //INICIALIZA PAGINA FÃSICA 11 ***********
        for(var i = 0; i < 4; i++){
            var aux = new Object();
            aux.byte = " ";
            aux.deslocamento = contBin(x);
            aux.enderecoFisico = "1010";

            x++;
            if(!isSimulacao) pag11.push(aux);
            else pg11.push( aux )
        }
        if(!isSimulacao){
            $scope.pag11s = pag11;
            gerenciarCorMF(corLivre);
        }else{
            aux_lista_mf.push( pg11 )
        }    
        x = 1;

        //INICIALIZA PAGINA FÃSICA 12 ***********
        for(var i = 0; i < 4; i++){
            var aux = new Object();
            aux.byte = " ";
            aux.deslocamento = contBin(x);
            aux.enderecoFisico = "1011";

            x++;
            if(!isSimulacao) pag12.push(aux);
            else pg12.push( aux )
        }
        if(!isSimulacao){
            $scope.pag12s = pag12;
            gerenciarCorMF(corLivre);
        }else{
            aux_lista_mf.push( pg12 )
        }    
        x = 1;
        //INICIALIZA PAGINA FÃSICA 13 ***********
        for(var i = 0; i < 4; i++){
            var aux = new Object();
            aux.byte = " ";
            aux.deslocamento = contBin(x);
            aux.enderecoFisico = "1100";

            x++;
            if(!isSimulacao) pag13.push(aux);
            else pg13.push( aux )
        }
        if(!isSimulacao){
            $scope.pag13s = pag13;
            gerenciarCorMF(corLivre);
        }else{
            aux_lista_mf.push( pg13 )
        }    
        x = 1;
        //INICIALIZA PAGINA FÃSICA 14 ***********
        for(var i = 0; i < 4; i++){
            var aux = new Object();
            aux.byte = " ";
            aux.deslocamento = contBin(x);
            aux.enderecoFisico = "1101";

            x++;
            if(!isSimulacao) pag14.push(aux);
            else pg14.push( aux )
        }
        if(!isSimulacao){
            $scope.pag14s = pag14;
            gerenciarCorMF(corLivre);
        }else{
            aux_lista_mf.push( pg14 )
        }    
        x = 1;

        if(isSimulacao) callback( aux_lista_mf )
         
    }

    var resetarCampos = function(){
        $("#processoID option[value='"+$scope.processo.id+"']").remove(); //remove id inserido
        $('#processoID').val('').trigger('chosen:updated'); //reseta select
        $scope.processo.id =  $scope.processo.bytes = null
    }
    

    $scope.selecIdProc;
	//CRIAR PROCESSO ******************************************************************************************
	$scope.criar = function(processo){
        if(processo.id){
            $scope.selecIdProc = processo.id;
            processo.qtBytesC = 0;
            processo.codLocalizador = codLocalizador;
            processo.ativo = 0; // 0 = ATIVO, 1 = INATIVO

            processoTemp = processo; // PROCESSOTEMP ARMAZENA TEMPORARIAMENTE OS DADOS DO PROCESSO GLOBALMENTE

            //console.log(processoTemp.id);
            //TRATAMENTO
            if(processoTemp.bytes == null || processoTemp.bytes == 0){
                if(processoTemp.bytes == null){
                    Notification.warning('Quantidade de bytes do processo não informada!');
                }
                if(processoTemp.bytes == 0){
                    Notification.warning('A quantidade de bytes do processo deve ser maior que 0!');
                }
            }
            else{
                verificaBytes(); //VERIFICAR QUANTIDADE DE BYTES DO PROCESSO

                var contPag = 0;
                //FOR PARA VERIFICAR QUANTIDADE DE PÃGINAS LIVRES NA MEMÃ“RIA FÃSICA
                for(var i = 0; i < listaProcessos.length; i++){
                    if(listaProcessos[i].ativo == 0){
                        contPag = contPag + listaProcessos[i].qtPag;
                    }
                }

                //IF PARA VERIFICAR SE A QUANTIDADE DE PAG DO PROCESSO NÃƒO VAI EXCEDER A QT DE PAG FISICA LIVRE
                if(processoTemp.qtPag + contPag <= 14){
                    codLocalizador++;

                    processoTemp.cor = definirCor(); //DEFINIR COR QUE ESTEJA LIVRE PARA O PROCESSO
                    identificarByte(); //MÃ‰TODO PARA IDENTIFICAR CADA BYTE DE UM PROCESSO
                    var p = angular.copy(processoTemp); //CÃ“PIA DO OBJETO DE PROC TEMPORÃRIO PARA VAR AUXILIAR            
                    listaProcessos.push(p); //PROCESSO CRIADO Ã‰ INSERIDO NO ARRAY DE PROCESSOS ATIVOS            
                    apresentarProcAtivRem(); //CHAMADA DE FUNÃ‡ÃƒO PARA INSERIR PROCESSO CRIADO NA LISTA DE MEMÃ“RIAS LÃ“GICAS DOS PROCESSOS
                    
                    Notification.success('Processo "' + listaProcessos[listaProcessos.length-1].id + 
                        '" com ' + listaProcessos[listaProcessos.length-1].bytes + ' bytes criado com sucesso! ');
                   
                    resetarCampos()   //funcao adicionar 
                
                    
                    atualizarEstatistica(); //MÃ‰TODO PARA ATUALIZAR ESTATÃSTICAS
                    $scope.selectProcesso($scope.selecIdProc)
                }
                else{
                    Notification.warning('Não foi possível criar o processo :( insira um processo menor!');
                }
            }
        }else
            Notification.warning('Por favor, informe o ID do processo!');     
    }

    //VERIFICA SE CADA PÃGINA POSSUIRÃ UM CONJUNTO DE 4 BYTES
    verificaBytes = function(){
    	if(processoTemp.bytes % 4 == 0){
    		processoTemp.qtBytesC = processoTemp.bytes;
    		processoTemp.qtPag = processoTemp.bytes / 4;
    	}
    	else{
    		byteMultiplo4(); //FUNÃ‡ÃƒO PARA TRANSFORMAR QT DE BYTES EM MULTIPLO DE 4
    	}
    }

    //TRANSFORMAR EM MÃšLTIPLO DE 4
    byteMultiplo4 = function(){
    	for(var i = 0; i <= 56; i = i + 4){
    		if(i > processoTemp.bytes){
    			processoTemp.qtBytesC = i;
    			processoTemp.qtPag = processoTemp.qtBytesC / 4;

    			i = 57;
    		}
    	}
    }

    //IDENTIFICAR CADA BYTE DO PROCESSO
    identificarByte = function(){
    	var cont = 1;
    	var aux = new Object();
    	var contPag = 1;
    	var x = 0;

    	for(var i = 0; i < processoTemp.qtBytesC; i++){
    		//ARMAZENAMENTO DE VALORES PARA ASSOCIAR A CADA BYTE
            if(cont <= processoTemp.bytes){
    			aux.id = processoTemp.id;
    			aux.byte = processoTemp.id + cont; //NOMEIA O BYTE
    			aux.codLocalizador = processoTemp.codLocalizador;
                aux.qtPag = processoTemp.qtPag;
    			aux.estaAlocado = 0;
    			aux.ativo = 0;
                aux.cor = processoTemp.cor;
    			cont++;	    		
    		}
    		else{
    			aux.byte = " "; //IDENTIFICAÃ‡ÃƒO PARA FRAGMENTAÃ‡ÃƒO INTERNA
    			aux.codLocalizador = processoTemp.codLocalizador;
    			cont++;	
    		}

    		//IDENTIFICA A QUAL PÃGINA PERTENCE DETERMINADO BYTE
    		if(x + 4 == i){
    			contPag++;
    			x = x + 4;
    		}

    		aux.codPag = contPag;
    		var p = angular.copy(aux);
    		listaBytes.push(p);
    	}
    	gerarTabLogica(processoTemp.codLocalizador); //GERAR TABELA LÃ“GICA DO PROCESSO
    }

    //GERAR TABELA LÃ“GICA*****************************************************************************
    gerarTabLogica = function(cod){
    	var x = 1; //VAR AUX PARA IDENTIFICAR DESLOCAMENTO DO BYTE
    	var pagAux = 1; //PARA SABER QUAIS PÃGINAS JÃ FORAM ALOCADAS
    	
    	//LIMPAR VARIÃVEIS RESPONSÃVEIS PELO ARMAZENAMENTO DOS BYTES DA ML PARA 
    	pagML1.length = 0;
    	pagML1Ocupado = 0;
    	pagML2.length = 0;
    	pagML2Ocupado = 0;
    	pagML3.length = 0;
    	pagML3Ocupado = 0;
    	pagML4.length = 0;
    	pagML4Ocupado = 0;
    	pagML5.length = 0;
    	pagML5Ocupado = 0;
    	pagML6.length = 0;
    	pagML6Ocupado = 0;
    	pagML7.length = 0;
    	pagML7Ocupado = 0;
    	pagML8.length = 0;
    	pagML8Ocupado = 0;
    	pagML9.length = 0;
    	pagML9Ocupado = 0;
    	pagML10.length = 0;
    	pagML10Ocupado = 0;
    	pagML11.length = 0;
    	pagML11Ocupado = 0;
    	pagML12.length = 0;
    	pagML12Ocupado = 0;
    	pagML13.length = 0;
    	pagML13Ocupado = 0;
    	pagML14.length = 0;
    	pagML14Ocupado = 0;

    	processoTemp.qtPagTemp = processoTemp.qtPag; //VAR AUX PARA SABER QUANTAS PÃGINAS RESTAM PARA ALOCAR
    	//INSERIR PG 1 MEMORIA LÃ“GICA
    	if(pagML1Ocupado == 0 && processoTemp.qtPagTemp > 0){

    		for(var i = 0; i < listaBytes.length; i++){
    			var aux = new Object();

    			if(listaBytes[i].codLocalizador == processoTemp.codLocalizador && pagAux == listaBytes[i].codPag){
    				aux.id = listaBytes[i].id;
    				aux.codLocalizador = listaBytes[i].codLocalizador;
    				aux.byte = listaBytes[i].byte;
    				aux.codPag = listaBytes[i].codPag;
                    aux.cor = listaBytes[i].cor;
    				aux.deslocamento = contBin(x);
    				aux.enderecoLogico = "0000";
    				listaBytes[i].enderecoLogico = "0000";
                    listaBytes[i].deslocamento = aux.deslocamento;

    				x++;    				
    				pagML1.push(aux);					
    			}
    		}

    		pagAux++;
    		processoTemp.qtPagTemp--;
    		pagML1Ocupado = 1;
    		x = 1;
    		
    		$scope.pagML1s = pagML1;

            gerenciarCorML(pagML1[0].cor);
    	}
    	//INSERIR PG 2 MEMORIA LÃ“GICA
    	if(pagML2Ocupado == 0 && processoTemp.qtPagTemp > 0){

    		for(var i = 0; i < listaBytes.length; i++){
    			var aux = new Object();

    			if(listaBytes[i].codLocalizador == processoTemp.codLocalizador && pagAux == listaBytes[i].codPag){
    				aux.id = listaBytes[i].id;
    				aux.codLocalizador = listaBytes[i].codLocalizador;
    				aux.byte = listaBytes[i].byte;
    				aux.codPag = listaBytes[i].codPag;
    				aux.deslocamento = contBin(x);
    				aux.enderecoLogico = "0001";
    				listaBytes[i].enderecoLogico = "0001";
                    listaBytes[i].deslocamento = aux.deslocamento;
                    
    				x++;
    				
    				pagML2.push(aux);
					
    			}
    		}

    		pagAux++;
    		processoTemp.qtPagTemp--;
    		pagML1Ocupado = 1;
    		x = 1;
    		
    		$scope.pagML2s = pagML2;
    	}

    	//INSERIR PG 3 MEMORIA LÃ“GICA
    	if(pagML3Ocupado == 0 && processoTemp.qtPagTemp > 0){

    		for(var i = 0; i < listaBytes.length; i++){
    			var aux = new Object();

    			if(listaBytes[i].codLocalizador == processoTemp.codLocalizador && pagAux == listaBytes[i].codPag){
    				aux.id = listaBytes[i].id;
    				aux.codLocalizador = listaBytes[i].codLocalizador;
    				aux.byte = listaBytes[i].byte;
    				aux.codPag = listaBytes[i].codPag;
    				aux.deslocamento = contBin(x);
    				aux.enderecoLogico = "0010";
    				listaBytes[i].enderecoLogico = "0010";
                    listaBytes[i].deslocamento = aux.deslocamento;
                    
    				x++;
    				
    				pagML3.push(aux);
					
    			}
    		}

    		pagAux++;
    		processoTemp.qtPagTemp--;
    		pagML3Ocupado = 1;
    		x = 1;
    			
    		$scope.pagML3s = pagML3;
    	}

    	//INSERIR PG 4 MEMORIA LÃ“GICA
    	if(pagML4Ocupado == 0 && processoTemp.qtPagTemp > 0){

    		for(var i = 0; i < listaBytes.length; i++){
    			var aux = new Object();

    			if(listaBytes[i].codLocalizador == processoTemp.codLocalizador && pagAux == listaBytes[i].codPag){
    				aux.id = listaBytes[i].id;
    				aux.codLocalizador = listaBytes[i].codLocalizador;
    				aux.byte = listaBytes[i].byte;
    				aux.codPag = listaBytes[i].codPag;
    				aux.deslocamento = contBin(x);
    				aux.enderecoLogico = "0011";
    				listaBytes[i].enderecoLogico = "0011";
                    listaBytes[i].deslocamento = aux.deslocamento;
                    
    				x++;
    				
    				pagML4.push(aux);
					
    			}
    		}

    		pagAux++;
    		processoTemp.qtPagTemp--;
    		pagML4Ocupado = 1;
    		x = 1;
    			
    		$scope.pagML4s = pagML4;
    	}

    	//INSERIR PG 5 MEMORIA LÃ“GICA
    	if(pagML5Ocupado == 0 && processoTemp.qtPagTemp > 0){

    		for(var i = 0; i < listaBytes.length; i++){
    			var aux = new Object();

    			if(listaBytes[i].codLocalizador == processoTemp.codLocalizador && pagAux == listaBytes[i].codPag){
    				aux.id = listaBytes[i].id;
    				aux.codLocalizador = listaBytes[i].codLocalizador;
    				aux.byte = listaBytes[i].byte;
    				aux.codPag = listaBytes[i].codPag;
    				aux.deslocamento = contBin(x);
    				aux.enderecoLogico = "0100";
    				listaBytes[i].enderecoLogico = "0100";
                    listaBytes[i].deslocamento = aux.deslocamento;
                    
    				x++;
    				
    				pagML5.push(aux);
					
    			}
    		}

    		pagAux++;
    		processoTemp.qtPagTemp--;
    		pagML5Ocupado = 1;
    		x = 1;
    			
    		$scope.pagML5s = pagML5;
    	}

    	//INSERIR PG 6 MEMORIA LÃ“GICA
    	if(pagML6Ocupado == 0 && processoTemp.qtPagTemp > 0){

    		for(var i = 0; i < listaBytes.length; i++){
    			var aux = new Object();

    			if(listaBytes[i].codLocalizador == processoTemp.codLocalizador && pagAux == listaBytes[i].codPag){
    				aux.id = listaBytes[i].id;
    				aux.codLocalizador = listaBytes[i].codLocalizador;
    				aux.byte = listaBytes[i].byte;
    				aux.codPag = listaBytes[i].codPag;
    				aux.deslocamento = contBin(x);
    				aux.enderecoLogico = "0101";
    				listaBytes[i].enderecoLogico = "0101";
                    listaBytes[i].deslocamento = aux.deslocamento;
                    
    				x++;
    				
    				pagML6.push(aux);
					
    			}
    		}

    		pagAux++;
    		processoTemp.qtPagTemp--;
    		pagML6Ocupado = 1;
    		x = 1;
    			
    		$scope.pagML6s = pagML6;
    	}

    	//INSERIR PG 7 MEMORIA LÃ“GICA
    	if(pagML7Ocupado == 0 && processoTemp.qtPagTemp > 0){

    		for(var i = 0; i < listaBytes.length; i++){
    			var aux = new Object();

    			if(listaBytes[i].codLocalizador == processoTemp.codLocalizador && pagAux == listaBytes[i].codPag){
    				aux.id = listaBytes[i].id;
    				aux.codLocalizador = listaBytes[i].codLocalizador;
    				aux.byte = listaBytes[i].byte;
    				aux.codPag = listaBytes[i].codPag;
    				aux.deslocamento = contBin(x);
    				aux.enderecoLogico = "0110";
    				listaBytes[i].enderecoLogico = "0110";
                    listaBytes[i].deslocamento = aux.deslocamento;
                    
    				x++;
    				
    				pagML7.push(aux);
					
    			}
    		}

    		pagAux++;
    		processoTemp.qtPagTemp--;
    		pagML7Ocupado = 1;
    		x = 1;
    			
    		$scope.pagML7s = pagML7;
    	}

    	//INSERIR PG 8 MEMORIA LÃ“GICA
    	if(pagML8Ocupado == 0 && processoTemp.qtPagTemp > 0){

    		for(var i = 0; i < listaBytes.length; i++){
    			var aux = new Object();

    			if(listaBytes[i].codLocalizador == processoTemp.codLocalizador && pagAux == listaBytes[i].codPag){
    				aux.id = listaBytes[i].id;
    				aux.codLocalizador = listaBytes[i].codLocalizador;
    				aux.byte = listaBytes[i].byte;
    				aux.codPag = listaBytes[i].codPag;
    				aux.deslocamento = contBin(x);
    				aux.enderecoLogico = "0111";
    				listaBytes[i].enderecoLogico = "0111";
                    listaBytes[i].deslocamento = aux.deslocamento;
                    
    				x++;
    				
    				pagML8.push(aux);
					
    			}
    		}

    		pagAux++;
    		processoTemp.qtPagTemp--;
    		pagML8Ocupado = 1;
    		x = 1;
    			
    		$scope.pagML8s = pagML8;
    	}

    	//INSERIR PG 9 MEMORIA LÃ“GICA
    	if(pagML9Ocupado == 0 && processoTemp.qtPagTemp > 0){

    		for(var i = 0; i < listaBytes.length; i++){
    			var aux = new Object();

    			if(listaBytes[i].codLocalizador == processoTemp.codLocalizador && pagAux == listaBytes[i].codPag){
    				aux.id = listaBytes[i].id;
    				aux.codLocalizador = listaBytes[i].codLocalizador;
    				aux.byte = listaBytes[i].byte;
    				aux.codPag = listaBytes[i].codPag;
    				aux.deslocamento = contBin(x);
    				aux.enderecoLogico = "1000";
    				listaBytes[i].enderecoLogico = "1000";
                    listaBytes[i].deslocamento = aux.deslocamento;
                    
    				x++;
    				
    				pagML9.push(aux);
					
    			}
    		}

    		pagAux++;
    		processoTemp.qtPagTemp--;
    		pagML9Ocupado = 1;
    		x = 1;
    			
    		$scope.pagML9s = pagML9;
    	}

    	//INSERIR PG 10 MEMORIA LÃ“GICA
    	if(pagML10Ocupado == 0 && processoTemp.qtPagTemp > 0){

    		for(var i = 0; i < listaBytes.length; i++){
    			var aux = new Object();

    			if(listaBytes[i].codLocalizador == processoTemp.codLocalizador && pagAux == listaBytes[i].codPag){
    				aux.id = listaBytes[i].id;
    				aux.codLocalizador = listaBytes[i].codLocalizador;
    				aux.byte = listaBytes[i].byte;
    				aux.codPag = listaBytes[i].codPag;
    				aux.deslocamento = contBin(x);
    				aux.enderecoLogico = "1001";
    				listaBytes[i].enderecoLogico = "1001";
                    listaBytes[i].deslocamento = aux.deslocamento;
                    
    				x++;
    				
    				pagML10.push(aux);
					
    			}
    		}

    		pagAux++;
    		processoTemp.qtPagTemp--;
    		pagML10Ocupado = 1;
    		x = 1;
    			
    		$scope.pagML10s = pagML10;
    	}

    	//INSERIR PG 11 MEMORIA LÃ“GICA
    	if(pagML11Ocupado == 0 && processoTemp.qtPagTemp > 0){

    		for(var i = 0; i < listaBytes.length; i++){
    			var aux = new Object();

    			if(listaBytes[i].codLocalizador == processoTemp.codLocalizador && pagAux == listaBytes[i].codPag){
    				aux.id = listaBytes[i].id;
    				aux.codLocalizador = listaBytes[i].codLocalizador;
    				aux.byte = listaBytes[i].byte;
    				aux.codPag = listaBytes[i].codPag;
    				aux.deslocamento = contBin(x);
    				aux.enderecoLogico = "1010";
    				listaBytes[i].enderecoLogico = "1010";
                    listaBytes[i].deslocamento = aux.deslocamento;
                    
    				x++;
    				
    				pagML11.push(aux);
					
    			}
    		}

    		pagAux++;
    		processoTemp.qtPagTemp--;
    		pagML11Ocupado = 1;
    		x = 1;
    			
    		$scope.pagML11s = pagML11;
    	}

    	//INSERIR PG 12 MEMORIA LÃ“GICA
    	if(pagML12Ocupado == 0 && processoTemp.qtPagTemp > 0){

    		for(var i = 0; i < listaBytes.length; i++){
    			var aux = new Object();

    			if(listaBytes[i].codLocalizador == processoTemp.codLocalizador && pagAux == listaBytes[i].codPag){
    				aux.id = listaBytes[i].id;
    				aux.codLocalizador = listaBytes[i].codLocalizador;
    				aux.byte = listaBytes[i].byte;
    				aux.codPag = listaBytes[i].codPag;
    				aux.deslocamento = contBin(x);
    				aux.enderecoLogico = "1011";
    				listaBytes[i].enderecoLogico = "1011";
                    listaBytes[i].deslocamento = aux.deslocamento;
                    
    				x++;
    				
    				pagML12.push(aux);
					
    			}
    		}

    		pagAux++;
    		processoTemp.qtPagTemp--;
    		pagML12Ocupado = 1;
    		x = 1;
    			
    		$scope.pagML12s = pagML12;
    	}

    	//INSERIR PG 13 MEMORIA LÃ“GICA
    	if(pagML13Ocupado == 0 && processoTemp.qtPagTemp > 0){

    		for(var i = 0; i < listaBytes.length; i++){
    			var aux = new Object();

    			if(listaBytes[i].codLocalizador == processoTemp.codLocalizador && pagAux == listaBytes[i].codPag){
    				aux.id = listaBytes[i].id;
    				aux.codLocalizador = listaBytes[i].codLocalizador;
    				aux.byte = listaBytes[i].byte;
    				aux.codPag = listaBytes[i].codPag;
    				aux.deslocamento = contBin(x);
    				aux.enderecoLogico = "1100";
    				listaBytes[i].enderecoLogico = "1100";
                    listaBytes[i].deslocamento = aux.deslocamento;
                    
    				x++;
    				
    				pagML13.push(aux);
					
    			}
    		}

    		pagAux++;
    		processoTemp.qtPagTemp--;
    		pagML13Ocupado = 1;
    		x = 1;
    			
    		$scope.pagML13s = pagML13;
    	}
    	
    	//INSERIR PG 14 MEMORIA LÃ“GICA
    	if(pagML14Ocupado == 0 && processoTemp.qtPagTemp > 0){

    		for(var i = 0; i < listaBytes.length; i++){
    			var aux = new Object();

    			if(listaBytes[i].codLocalizador == processoTemp.codLocalizador && pagAux == listaBytes[i].codPag){
    				aux.id = listaBytes[i].id;
    				aux.codLocalizador = listaBytes[i].codLocalizador;
    				aux.byte = listaBytes[i].byte;
    				aux.codPag = listaBytes[i].codPag;
    				aux.deslocamento = contBin(x);
    				aux.enderecoLogico = "1101";
    				listaBytes[i].enderecoLogico = "1101";
                    listaBytes[i].deslocamento = aux.deslocamento;
                    
    				x++;
    				
    				pagML14.push(aux);
					
    			}
    		}

    		pagAux++;
    		processoTemp.qtPagTemp--;
    		pagML14Ocupado = 1;
    		x = 1;
    			
    		$scope.pagML14s = pagML14;
    	}
    	
    	
    	alocarPaginas();

    }

    //ALOCAR PÃGINAS DOS PROCESSOS NA MEMÃ“RIA FÃSICA*****************************************************************************
    alocarPaginas = function(){
    	var pagAlocadas = [];
    	var pagAux = 1; //PARA SABER QUAIS PÃGINAS JÃ FORAM ALOCADAS
    	var x = 1;


    	processoTemp.qtPagTemp = processoTemp.qtPag;
    	//INSERIR PG 1 MEMORIA FISICA
    	if(pag1Ocupado == 0 && processoTemp.qtPagTemp > 0){
            pag1.length = 0;
    		for(var i = 0; i < listaBytes.length; i++){
    			var aux = new Object();

    			if(listaBytes[i].codLocalizador == processoTemp.codLocalizador && pagAux == listaBytes[i].codPag){
    				//DEPOIS PASSAR TODOS OS VALORES DO PROCESSOTEMP PARA AUX
    				aux.id = listaBytes[i].id;
    				aux.codLocalizador = listaBytes[i].codLocalizador;
    				aux.byte = listaBytes[i].byte;
    				aux.codPag = listaBytes[i].codPag;
                    aux.ativo = listaBytes[i].ativo;                    
                    aux.cor = listaBytes[i].cor;
    				aux.deslocamento = contBin(x);
    				aux.enderecoFisico = "0000"
    				listaBytes[i].enderecoFisico = "0000";

    				x++;
    				
    				pag1.push(aux);
					
					listaBytes[i].estaAlocado = 1;
    			}
    		}

    		pagAlocadas.push(pagAux);
    		pagAux++;
    		processoTemp.qtPagTemp--;
    		pag1Ocupado = 1;
    		x = 1;
    				

    		$scope.pag1s = pag1;
            gerenciarCorMF(pag1[0].cor, 1);
    	}

    	//INSERIR PG 2 MEMORIA FISICA
		if(pag2Ocupado == 0 && processoTemp.qtPagTemp > 0){
            pag2.length = 0;
    		for(var i = 0; i < listaBytes.length; i++){
    			var aux = new Object();

    			if(listaBytes[i].codLocalizador == processoTemp.codLocalizador && pagAux == listaBytes[i].codPag){

    				//DEPOIS PASSAR TODOS OS VALORES DO PROCESSOTEMP PARA AUX
    				aux.id = listaBytes[i].id;
    				aux.codLocalizador = listaBytes[i].codLocalizador;
    				aux.byte = listaBytes[i].byte;
    				aux.codPag = listaBytes[i].codPag;
                    aux.ativo = listaBytes[i].ativo;
                    aux.cor = listaBytes[i].cor;
    				aux.deslocamento = contBin(x);
    				aux.enderecoFisico = "0001"
    				listaBytes[i].enderecoFisico = "0001";
    				x++;

    				pag2.push(aux);
    				
    				listaBytes[i].estaAlocado = 1;
    			}
    		}

			pagAlocadas.push(pagAux);
    		pagAux++;
    		processoTemp.qtPagTemp--;
    		pag2Ocupado = 1;
    		x = 1;

    		
    		$scope.pag2s = pag2;
            gerenciarCorMF(pag2[0].cor, 2);
    	}
    	
    	//INSERIR PG 3 MEMORIA FISICA
    	if(pag3Ocupado == 0 && processoTemp.qtPagTemp > 0){
            pag3.length = 0;
    		for(var i = 0; i < listaBytes.length; i++){
    			var aux = new Object();

    			if(listaBytes[i].codLocalizador == processoTemp.codLocalizador && pagAux == listaBytes[i].codPag){

    				//DEPOIS PASSAR TODOS OS VALORES DO PROCESSOTEMP PARA AUX
    				aux.id = listaBytes[i].id;
    				aux.codLocalizador = listaBytes[i].codLocalizador;
    				aux.byte = listaBytes[i].byte;
    				aux.codPag = listaBytes[i].codPag;
                    aux.ativo = listaBytes[i].ativo;
                    aux.cor = listaBytes[i].cor;
    				aux.deslocamento = contBin(x);
    				aux.enderecoFisico = "0010"
    				listaBytes[i].enderecoFisico = "0010";
    				x++;

    				pag3.push(aux);
    				
    				listaBytes[i].estaAlocado = 1;
    			}
    		}

			pagAlocadas.push(pagAux);
    		pagAux++;
    		processoTemp.qtPagTemp--;
    		pag3Ocupado = 1;
    		x = 1;

    		
    		$scope.pag3s = pag3;
            gerenciarCorMF(pag3[0].cor, 3);
    	}
    	
    	//INSERIR PG 4 MEMORIA FISICA
    	if(pag4Ocupado == 0 && processoTemp.qtPagTemp > 0){
            pag4.length = 0;
    		for(var i = 0; i < listaBytes.length; i++){
    			var aux = new Object();

    			if(listaBytes[i].codLocalizador == processoTemp.codLocalizador && pagAux == listaBytes[i].codPag){

    				//DEPOIS PASSAR TODOS OS VALORES DO PROCESSOTEMP PARA AUX
    				aux.id = listaBytes[i].id;
    				aux.codLocalizador = listaBytes[i].codLocalizador;
    				aux.byte = listaBytes[i].byte;
    				aux.codPag = listaBytes[i].codPag;
                    aux.ativo = listaBytes[i].ativo;
                    aux.cor = listaBytes[i].cor;
    				aux.deslocamento = contBin(x);
    				aux.enderecoFisico = "0011"
    				listaBytes[i].enderecoFisico = "0011";
    				x++;

    				pag4.push(aux);
    				
    				listaBytes[i].estaAlocado = 1;
    			}
    		}

			pagAlocadas.push(pagAux);
    		pagAux++;
    		processoTemp.qtPagTemp--;
    		pag4Ocupado = 1;
    		x = 1;

    		
    		$scope.pag4s = pag4;
            gerenciarCorMF(pag4[0].cor, 4);
    	}

    	//INSERIR PG 5 MEMORIA FISICA
    	if(pag5Ocupado == 0 && processoTemp.qtPagTemp > 0){
            pag5.length = 0;
    		for(var i = 0; i < listaBytes.length; i++){
    			var aux = new Object();

    			if(listaBytes[i].codLocalizador == processoTemp.codLocalizador && pagAux == listaBytes[i].codPag){

    				//DEPOIS PASSAR TODOS OS VALORES DO PROCESSOTEMP PARA AUX
    				aux.id = listaBytes[i].id;
    				aux.codLocalizador = listaBytes[i].codLocalizador;
    				aux.byte = listaBytes[i].byte;
    				aux.codPag = listaBytes[i].codPag;
                    aux.ativo = listaBytes[i].ativo;
                    aux.cor = listaBytes[i].cor;
    				aux.deslocamento = contBin(x);
    				aux.enderecoFisico = "0100"
    				listaBytes[i].enderecoFisico = "0100";
    				x++;

    				pag5.push(aux);
    				
    				listaBytes[i].estaAlocado = 1;
    			}
    		}

			pagAlocadas.push(pagAux);
    		pagAux++;
    		processoTemp.qtPagTemp--;
    		pag5Ocupado = 1;
    		x = 1;

    		
    		$scope.pag5s = pag5;
            gerenciarCorMF(pag5[0].cor, 5);
    	}

    	//INSERIR PG 6 MEMORIA FISICA
    	if(pag6Ocupado == 0 && processoTemp.qtPagTemp > 0){
            pag6.length = 0;
    		for(var i = 0; i < listaBytes.length; i++){
    			var aux = new Object();

    			if(listaBytes[i].codLocalizador == processoTemp.codLocalizador && pagAux == listaBytes[i].codPag){

    				//DEPOIS PASSAR TODOS OS VALORES DO PROCESSOTEMP PARA AUX
    				aux.id = listaBytes[i].id;
    				aux.codLocalizador = listaBytes[i].codLocalizador;
    				aux.byte = listaBytes[i].byte;
    				aux.codPag = listaBytes[i].codPag;
                    aux.ativo = listaBytes[i].ativo;
                    aux.cor = listaBytes[i].cor;
    				aux.deslocamento = contBin(x);
    				aux.enderecoFisico = "0101"
    				listaBytes[i].enderecoFisico = "0101";
    				x++;

    				pag6.push(aux);
    				
    				listaBytes[i].estaAlocado = 1;
    			}
    		}

			pagAlocadas.push(pagAux);
    		pagAux++;
    		processoTemp.qtPagTemp--;
    		pag6Ocupado = 1;
    		x = 1;

    		
    		$scope.pag6s = pag6;
            gerenciarCorMF(pag6[0].cor, 6);
    	}

    	//INSERIR PG 7 MEMORIA FISICA
    	if(pag7Ocupado == 0 && processoTemp.qtPagTemp > 0){
            pag7.length = 0;
    		for(var i = 0; i < listaBytes.length; i++){
    			var aux = new Object();

    			if(listaBytes[i].codLocalizador == processoTemp.codLocalizador && pagAux == listaBytes[i].codPag){

    				//DEPOIS PASSAR TODOS OS VALORES DO PROCESSOTEMP PARA AUX
    				aux.id = listaBytes[i].id;
    				aux.codLocalizador = listaBytes[i].codLocalizador;
    				aux.byte = listaBytes[i].byte;
    				aux.codPag = listaBytes[i].codPag;
                    aux.ativo = listaBytes[i].ativo;
                    aux.cor = listaBytes[i].cor;
    				aux.deslocamento = contBin(x);
    				aux.enderecoFisico = "0110"
    				listaBytes[i].enderecoFisico = "0110";
    				x++;

    				pag7.push(aux);
    				
    				listaBytes[i].estaAlocado = 1;
    			}
    		}

			pagAlocadas.push(pagAux);
    		pagAux++;
    		processoTemp.qtPagTemp--;
    		pag7Ocupado = 1;
    		x = 1;

    		
    		$scope.pag7s = pag7;
            gerenciarCorMF(pag7[0].cor, 7);
    	}

    	//INSERIR PG 8 MEMORIA FISICA
    	if(pag8Ocupado == 0 && processoTemp.qtPagTemp > 0){
            pag8.length = 0;
    		for(var i = 0; i < listaBytes.length; i++){
    			var aux = new Object();

    			if(listaBytes[i].codLocalizador == processoTemp.codLocalizador && pagAux == listaBytes[i].codPag){

    				//DEPOIS PASSAR TODOS OS VALORES DO PROCESSOTEMP PARA AUX
    				aux.id = listaBytes[i].id;
    				aux.codLocalizador = listaBytes[i].codLocalizador;
    				aux.byte = listaBytes[i].byte;
    				aux.codPag = listaBytes[i].codPag;
                    aux.ativo = listaBytes[i].ativo;
                    aux.cor = listaBytes[i].cor;
    				aux.deslocamento = contBin(x);
    				aux.enderecoFisico = "0111"
    				listaBytes[i].enderecoFisico = "0111";
    				x++;

    				pag8.push(aux);
    				
    				listaBytes[i].estaAlocado = 1;
    			}
    		}

			pagAlocadas.push(pagAux);
    		pagAux++;
    		processoTemp.qtPagTemp--;
    		pag8Ocupado = 1;
    		x = 1;

    		
    		$scope.pag8s = pag8;
            gerenciarCorMF(pag8[0].cor, 8);
    	}

    	//INSERIR PG 9 MEMORIA FISICA
    	if(pag9Ocupado == 0 && processoTemp.qtPagTemp > 0){
            pag9.length = 0;
    		for(var i = 0; i < listaBytes.length; i++){
    			var aux = new Object();

    			if(listaBytes[i].codLocalizador == processoTemp.codLocalizador && pagAux == listaBytes[i].codPag){

    				//DEPOIS PASSAR TODOS OS VALORES DO PROCESSOTEMP PARA AUX
    				aux.id = listaBytes[i].id;
    				aux.codLocalizador = listaBytes[i].codLocalizador;
    				aux.byte = listaBytes[i].byte;
    				aux.codPag = listaBytes[i].codPag;
                    aux.ativo = listaBytes[i].ativo;
                    aux.cor = listaBytes[i].cor;
    				aux.deslocamento = contBin(x);
    				aux.enderecoFisico = "1000"
    				listaBytes[i].enderecoFisico = "1000";
    				x++;

    				pag9.push(aux);
    				
    				listaBytes[i].estaAlocado = 1;
    			}
    		}

			pagAlocadas.push(pagAux);
    		pagAux++;
    		processoTemp.qtPagTemp--;
    		pag9Ocupado = 1;
    		x = 1;

    		
    		$scope.pag9s = pag9;
            gerenciarCorMF(pag9[0].cor, 9);
    	}

    	//INSERIR PG 10 MEMORIA FISICA
    	if(pag10Ocupado == 0 && processoTemp.qtPagTemp > 0){
            pag10.length = 0;
    		for(var i = 0; i < listaBytes.length; i++){
    			var aux = new Object();

    			if(listaBytes[i].codLocalizador == processoTemp.codLocalizador && pagAux == listaBytes[i].codPag){

    				//DEPOIS PASSAR TODOS OS VALORES DO PROCESSOTEMP PARA AUX
    				aux.id = listaBytes[i].id;
    				aux.codLocalizador = listaBytes[i].codLocalizador;
    				aux.byte = listaBytes[i].byte;
    				aux.codPag = listaBytes[i].codPag;
                    aux.ativo = listaBytes[i].ativo;
                    aux.cor = listaBytes[i].cor;
    				aux.deslocamento = contBin(x);
    				aux.enderecoFisico = "1001"
    				listaBytes[i].enderecoFisico = "1001";
    				x++;

    				pag10.push(aux);
    				
    				listaBytes[i].estaAlocado = 1;
    			}
    		}

			pagAlocadas.push(pagAux);
    		pagAux++;
    		processoTemp.qtPagTemp--;
    		pag10Ocupado = 1;
    		x = 1;

    		
    		$scope.pag10s = pag10;
            gerenciarCorMF(pag10[0].cor, 10);
    	}

    	//INSERIR PG 11 MEMORIA FISICA
    	if(pag11Ocupado == 0 && processoTemp.qtPagTemp > 0){
            pag11.length = 0;
    		for(var i = 0; i < listaBytes.length; i++){
    			var aux = new Object();

    			if(listaBytes[i].codLocalizador == processoTemp.codLocalizador && pagAux == listaBytes[i].codPag){

    				//DEPOIS PASSAR TODOS OS VALORES DO PROCESSOTEMP PARA AUX
    				aux.id = listaBytes[i].id;
    				aux.codLocalizador = listaBytes[i].codLocalizador;
    				aux.byte = listaBytes[i].byte;
    				aux.codPag = listaBytes[i].codPag;
                    aux.ativo = listaBytes[i].ativo;
                    aux.cor = listaBytes[i].cor;
    				aux.deslocamento = contBin(x);
    				aux.enderecoFisico = "1010"
    				listaBytes[i].enderecoFisico = "1010";
    				x++;

    				pag11.push(aux);
    				
    				listaBytes[i].estaAlocado = 1;
    			}
    		}

			pagAlocadas.push(pagAux);
    		pagAux++;
    		processoTemp.qtPagTemp--;
    		pag11Ocupado = 1;
    		x = 1;

    		

    		$scope.pag11s = pag11;
            gerenciarCorMF(pag11[0].cor, 11);
    	}

    	//INSERIR PG 12 MEMORIA FISICA
    	if(pag12Ocupado == 0 && processoTemp.qtPagTemp > 0){
            pag12.length = 0;
    		for(var i = 0; i < listaBytes.length; i++){
    			var aux = new Object();

    			if(listaBytes[i].codLocalizador == processoTemp.codLocalizador && pagAux == listaBytes[i].codPag){

    				//DEPOIS PASSAR TODOS OS VALORES DO PROCESSOTEMP PARA AUX
    				aux.id = listaBytes[i].id;
    				aux.codLocalizador = listaBytes[i].codLocalizador;
    				aux.byte = listaBytes[i].byte;
    				aux.codPag = listaBytes[i].codPag;
                    aux.ativo = listaBytes[i].ativo;
                    aux.cor = listaBytes[i].cor;
    				aux.deslocamento = contBin(x);
    				aux.enderecoFisico = "1011"
    				listaBytes[i].enderecoFisico = "1011";
    				x++;

    				pag12.push(aux);
    				
    				listaBytes[i].estaAlocado = 1;
    			}
    		}

			pagAlocadas.push(pagAux);
    		pagAux++;
    		processoTemp.qtPagTemp--;
    		pag12Ocupado = 1;
    		x = 1;

    		

    		$scope.pag12s = pag12;
            gerenciarCorMF(pag12[0].cor, 12);
    	}

    	//INSERIR PG 13 MEMORIA FISICA
    	if(pag13Ocupado == 0 && processoTemp.qtPagTemp > 0){
            pag13.length = 0;
    		for(var i = 0; i < listaBytes.length; i++){
    			var aux = new Object();

    			if(listaBytes[i].codLocalizador == processoTemp.codLocalizador && pagAux == listaBytes[i].codPag){

    				//DEPOIS PASSAR TODOS OS VALORES DO PROCESSOTEMP PARA AUX
    				aux.id = listaBytes[i].id;
    				aux.codLocalizador = listaBytes[i].codLocalizador;
    				aux.byte = listaBytes[i].byte;
    				aux.codPag = listaBytes[i].codPag;
                    aux.ativo = listaBytes[i].ativo;
                    aux.cor = listaBytes[i].cor;
    				aux.deslocamento = contBin(x);
    				aux.enderecoFisico = "1100"
    				listaBytes[i].enderecoFisico = "1100";
    				x++;

    				pag13.push(aux);
    				
    				listaBytes[i].estaAlocado = 1;
    			}
    		}

			pagAlocadas.push(pagAux);
    		pagAux++;
    		processoTemp.qtPagTemp--;
    		pag13Ocupado = 1;
    		x = 1;

    		

    		$scope.pag13s = pag13;
            gerenciarCorMF(pag13[0].cor, 13);
    	}

    	//INSERIR PG 14 MEMORIA FISICA
    	if(pag14Ocupado == 0 && processoTemp.qtPagTemp > 0){
            pag14.length = 0;
    		for(var i = 0; i < listaBytes.length; i++){
    			var aux = new Object();

    			if(listaBytes[i].codLocalizador == processoTemp.codLocalizador && pagAux == listaBytes[i].codPag){

    				//DEPOIS PASSAR TODOS OS VALORES DO PROCESSOTEMP PARA AUX
    				aux.id = listaBytes[i].id;
    				aux.codLocalizador = listaBytes[i].codLocalizador;
    				aux.byte = listaBytes[i].byte;
    				aux.codPag = listaBytes[i].codPag;
                    aux.ativo = listaBytes[i].ativo;
                    aux.cor = listaBytes[i].cor;
    				aux.deslocamento = contBin(x);
    				aux.enderecoFisico = "1101"
    				listaBytes[i].enderecoFisico = "1101";

    				x++;

    				pag14.push(aux);
    				
    				listaBytes[i].estaAlocado = 1;
    			}
    		}

			pagAlocadas.push(pagAux);
    		pagAux++;
    		processoTemp.qtPagTemp--;
    		pag14Ocupado = 1;
    		x = 1;

    		

    		$scope.pag14s = pag14;
            gerenciarCorMF(pag14[0].cor, 14);
    	}

    	gerarTabPagProc(processoTemp.codLocalizador);
    }

    //FUNÃ‡ÃƒO PARA IDENTIFICAR O DESLOCAMENTO DE CADA BYTE
    contBin = function(x){
    	if(x == 1){
    		return "00";
    	}
    	else if(x == 2){
    		return "01";
    	}
    	else if(x == 3){
    		return "10";
    	}
    	else if(x == 4){
    		return "11";
    	}
    }

    //GERAR TABELA DE PÃGINAS DO PROCESSO
    gerarTabPagProc = function(loc){
    	var auxTab = [];
        var cor;

    	for(var i = 0; i < listaBytes.length; i = i + 4){
    		if(listaBytes[i].codLocalizador == loc){
    			var aux = new Object();

    			aux.id = listaBytes[i].id;
    			aux.codLocalizador = listaBytes[i].codLocalizador;
    			aux.codPag = listaBytes[i].codPag;
    			aux.enderecoLogico = listaBytes[i].enderecoLogico;
    			aux.enderecoFisico = listaBytes[i].enderecoFisico;
                aux.cor = listaBytes[i].cor;
    			auxTab.push(aux);
                cor = listaBytes[i].cor;
    		}
    	}    	
    	$scope.tabPagProcs = auxTab;
        gerenciarCorTPP(cor);
    }

    //REMOVER PROCESSO *******************************************************************************
    $scope.remover = function(id, isCarregarSimulacao){
        //console.log(id)
        if(id == $scope.idProc){
            $('#byteProcesso').hide()
            $scope.infoByte = $scope.infoMLog = $scope.infoMFis = $scope.byteProc =  "";
            $scope.idProc = "Nenhum";
        }    

    	for(var i = 0; i < listaBytes.length; i++){
    		if (listaBytes[i].id == id) {
    			listaBytes[i].ativo = 1;
    		}    		
    	}

    	for(var i = 0; i < listaProcessos.length; i++){
    		if (listaProcessos[i].id == id) {
                listaProcessos[i].ativo = 1;
    		}
    	}

        //ATUALIZAR AS PAGINAS FÃSICAS
        for(var i = 0; i < pag1.length; i++){
            if(pag1[i].id == id){
                pag1[i].ativo = 1;
            }            
        }

        for(var i = 0; i < pag2.length; i++){
            if(pag2[i].id == id){
                pag2[i].ativo = 1;
            }            
        }

        for(var i = 0; i < pag3.length; i++){
            if(pag3[i].id == id){
                pag3[i].ativo = 1;
            }            
        }

        for(var i = 0; i < pag4.length; i++){
            if(pag4[i].id == id){
                pag4[i].ativo = 1;
            }            
        }

        for(var i = 0; i < pag5.length; i++){
            if(pag5[i].id == id){
                pag5[i].ativo = 1;
            }            
        }

        for(var i = 0; i < pag6.length; i++){
            if(pag6[i].id == id){
                pag6[i].ativo = 1;
            }            
        }

        for(var i = 0; i < pag7.length; i++){
            if(pag7[i].id == id){
                pag7[i].ativo = 1;
            }            
        }

        for(var i = 0; i < pag8.length; i++){
            if(pag8[i].id == id){
                pag8[i].ativo = 1;
            }            
        }

        for(var i = 0; i < pag9.length; i++){
            if(pag9[i].id == id){
                pag9[i].ativo = 1;
            }            
        }

        for(var i = 0; i < pag10.length; i++){
            if(pag10[i].id == id){
                pag10[i].ativo = 1;
            }            
        }

        for(var i = 0; i < pag11.length; i++){
            if(pag11[i].id == id){
                pag11[i].ativo = 1;
            }            
        }

        for(var i = 0; i < pag12.length; i++){
            if(pag12[i].id == id){
                pag12[i].ativo = 1;
            }            
        }

        for(var i = 0; i < pag13.length; i++){
            if(pag13[i].id == id){
                pag13[i].ativo = 1;
            }            
        }

        for(var i = 0; i < pag14.length; i++){
            if(pag14[i].id == id){
                pag14[i].ativo = 1;
            }            
        }

        apresentarProcAtivRem();
        atualizarMF();
        atualizarEstatistica();
        if($scope.processos.length > 0){
            $scope.selecProc($scope.processos[0].id)
        }

        if(!isCarregarSimulacao){
            Notification.success('Processo removido com sucesso!');
        } 
        
        if($scope.processos.length == 0){
            if($scope.hasSimulacaoCarregada){
                $('#carregarProc').val('').trigger('chosen:updated');  //RESETA COMBOBOX CARREGAR SIMULAÇÕES
                $scope.simulacaoSelecionada = '';
                $scope.hasSimulacaoCarregada = false;
            }    
            Notification.success('Tabela limpa com sucesso!'); 
        }
      
        $("select#processoID").append( $("<option>").val(id).html(id)); //REINSERE O PROCESSO REMOVIDO NA LISTA DE ID
       
        
    }

    //ATUALIZAR MEMÃ“RIA FÃSICA APÃ“S REMOVER UM PROCESSO*****************************************
    atualizarMF = function(){
        var auxZerar = [];

        //LIMPAR PÃGINAS 1 *********************************************************************
        for(var i = 0; i < pag1.length; i++){
            if(pag1[i].ativo == 1){
                pag1[i].byte = "";
                pag1[i].codLocalizador = "";
                pag1[i].codPag = "";
                pag1[i].id = "";

                pag1Ocupado = 0;
                pagML1Ocupado = 0;

                $scope.corMF1 = {
                    "background-color" : corLivre
                }
                libercarCor(pag1[i].cor);
            }
        }

        $scope.pag1s = auxZerar;
        $scope.pag1s = pag1;
        $scope.tabPagProcs = auxZerar;
        $scope.pagML1s = auxZerar;
        //pag1.length = 0;

        //LIMPAR PÃGINAS 2 *********************************************************************
        for(var i = 0; i < pag2.length; i++){
            if(pag2[i].ativo == 1){
                pag2[i].byte = "";
                pag2[i].codLocalizador = "";
                pag2[i].codPag = "";
                pag2[i].id = "";

                pag2Ocupado = 0;
                pagML2Ocupado = 0;

                $scope.corMF2 = {
                    "background-color" : corLivre
                }
                libercarCor(pag2[i].cor);
            }
        }

        $scope.pag2s = pag2;
        $scope.tabPagProcs = auxZerar;
        $scope.pagML2s = auxZerar;

        //LIMPAR PÃGINAS 3 *********************************************************************
        for(var i = 0; i < pag3.length; i++){
            if(pag3[i].ativo == 1){
                pag3[i].byte = "";
                pag3[i].codLocalizador = "";
                pag3[i].codPag = "";
                pag3[i].id = "";

                pag3Ocupado = 0;
                pagML3Ocupado = 0;

                $scope.corMF3 = {
                    "background-color" : corLivre
                }
                libercarCor(pag3[i].cor);
            }
        }

        $scope.pag3s = pag3;
        $scope.tabPagProcs = auxZerar;
        $scope.pagML3s = auxZerar;

        //LIMPAR PÃGINAS 4 *********************************************************************
        for(var i = 0; i < pag4.length; i++){
            if(pag4[i].ativo == 1){
                pag4[i].byte = "";
                pag4[i].codLocalizador = "";
                pag4[i].codPag = "";
                pag4[i].id = "";

                pag4Ocupado = 0;
                pagML4Ocupado = 0;

                $scope.corMF4 = {
                    "background-color" : corLivre
                }
                libercarCor(pag4[i].cor);            }
        }

        $scope.pag4s = pag4;
        $scope.tabPagProcs = auxZerar;
        $scope.pagML4s = auxZerar;

        //LIMPAR PÃGINAS 5 *********************************************************************
        for(var i = 0; i < pag5.length; i++){
            if(pag5[i].ativo == 1){
                pag5[i].byte = "";
                pag5[i].codLocalizador = "";
                pag5[i].codPag = "";
                pag5[i].id = "";

                pag5Ocupado = 0;
                pagML5Ocupado = 0;

                $scope.corMF5 = {
                    "background-color" : corLivre
                }
                libercarCor(pag5[i].cor);
            }
        }

        $scope.pag5s = pag5;
        $scope.tabPagProcs = auxZerar;
        $scope.pagML5s = auxZerar;

        //LIMPAR PÃGINAS 6 *********************************************************************
        for(var i = 0; i < pag6.length; i++){
            if(pag6[i].ativo == 1){
                pag6[i].byte = "";
                pag6[i].codLocalizador = "";
                pag6[i].codPag = "";
                pag6[i].id = "";

                pag6Ocupado = 0;
                pagML6Ocupado = 0;

                $scope.corMF6 = {
                    "background-color" : corLivre
                }
                libercarCor(pag6[i].cor);
            }
        }

        $scope.pag6s = pag6;
        $scope.tabPagProcs = auxZerar;
        $scope.pagML6s = auxZerar;

        //LIMPAR PÃGINAS 7 *********************************************************************
        for(var i = 0; i < pag7.length; i++){
            if(pag7[i].ativo == 1){
                pag7[i].byte = "";
                pag7[i].codLocalizador = "";
                pag7[i].codPag = "";
                pag7[i].id = "";

                pag7Ocupado = 0;
                pagML7Ocupado = 0;

                $scope.corMF7 = {
                    "background-color" : corLivre
                }
                libercarCor(pag7[i].cor);
            }
        }

        $scope.pag7s = pag7;
        $scope.tabPagProcs = auxZerar;
        $scope.pagML7s = auxZerar;

        //LIMPAR PÃGINAS 8 *********************************************************************
        for(var i = 0; i < pag8.length; i++){
            if(pag8[i].ativo == 1){
                pag8[i].byte = "";
                pag8[i].codLocalizador = "";
                pag8[i].codPag = "";
                pag8[i].id = "";

                pag8Ocupado = 0;
                pagML8Ocupado = 0;

                $scope.corMF8 = {
                    "background-color" : corLivre
                }
                libercarCor(pag8[i].cor);
            }
        }

        $scope.pag8s = pag8;
        $scope.tabPagProcs = auxZerar;
        $scope.pagML8s = auxZerar;

        //LIMPAR PÃGINAS 9 *********************************************************************
        for(var i = 0; i < pag9.length; i++){
            if(pag9[i].ativo == 1){
                pag9[i].byte = "";
                pag9[i].codLocalizador = "";
                pag9[i].codPag = "";
                pag9[i].id = "";

                pag9Ocupado = 0;
                pagML9Ocupado = 0;

                $scope.corMF9 = {
                    "background-color" : corLivre
                }
                libercarCor(pag9[i].cor);
            }
        }

        $scope.pag9s = pag9;
        $scope.tabPagProcs = auxZerar;
        $scope.pagML9s = auxZerar;

        //LIMPAR PÃGINAS 10 *********************************************************************
        for(var i = 0; i < pag10.length; i++){
            if(pag10[i].ativo == 1){
                pag10[i].byte = "";
                pag10[i].codLocalizador = "";
                pag10[i].codPag = "";
                pag10[i].id = "";

                pag10Ocupado = 0;
                pagML10Ocupado = 0;

                $scope.corMF10 = {
                    "background-color" : corLivre
                }
                libercarCor(pag10[i].cor);
            }
        }

        $scope.pag10s = pag10;
        $scope.tabPagProcs = auxZerar;
        $scope.pagML10s = auxZerar;

        //LIMPAR PÃGINAS 11 *********************************************************************
        for(var i = 0; i < pag11.length; i++){
            if(pag11[i].ativo == 1){
                pag11[i].byte = "";
                pag11[i].codLocalizador = "";
                pag11[i].codPag = "";
                pag11[i].id = "";

                pag11Ocupado = 0;
                pagML11Ocupado = 0;

                $scope.corMF11 = {
                    "background-color" : corLivre
                }
                libercarCor(pag11[i].cor);
            }
        }

        $scope.pag11s = pag11;
        $scope.tabPagProcs = auxZerar;
        $scope.pagML11s = auxZerar;

        //LIMPAR PÃGINAS 12 *********************************************************************
        for(var i = 0; i < pag12.length; i++){
            if(pag12[i].ativo == 1){
                pag12[i].byte = "";
                pag12[i].codLocalizador = "";
                pag12[i].codPag = "";
                pag12[i].id = "";

                pag12Ocupado = 0;
                pagML12Ocupado = 0;

                $scope.corMF12 = {
                    "background-color" : corLivre
                }
                libercarCor(pag12[i].cor);
            }
        }

        $scope.pag12s = pag12;
        $scope.tabPagProcs = auxZerar;
        $scope.pagML12s = auxZerar;

        //LIMPAR PÃGINAS 13 *********************************************************************
        for(var i = 0; i < pag13.length; i++){
            if(pag13[i].ativo == 1){
                pag13[i].byte = "";
                pag13[i].codLocalizador = "";
                pag13[i].codPag = "";
                pag13[i].id = "";

                pag13Ocupado = 0;
                pagML13Ocupado = 0;

                $scope.corMF13 = {
                    "background-color" : corLivre
                }
                libercarCor(pag13[i].cor);
            }
        }

        $scope.pag13s = pag13;
        $scope.tabPagProcs = auxZerar;
        $scope.pagML13s = auxZerar;

        //LIMPAR PÃGINAS 14 *********************************************************************
        for(var i = 0; i < pag14.length; i++){
            if(pag14[i].ativo == 1){
                pag14[i].byte = "";
                pag14[i].codLocalizador = "";
                pag14[i].codPag = "";
                pag14[i].id = "";

                pag14Ocupado = 0;
                pagML14Ocupado = 0;

                $scope.corMF14 = {
                    "background-color" : corLivre
                }
                libercarCor(pag14[i].cor);
            }
        }

        $scope.pag14s = pag14;
        $scope.tabPagProcs = auxZerar;
        $scope.pagML14s = auxZerar;

        //LIMPAR CAMPO DE INSERIR PROCESSO ******************************************************
        $scope.processo = {};
    }

    //LIBERAR COR DE PROCESSOS REMOVIDOS
    libercarCor = function(codCor){
        if(codCor == cor1.cor){
            cor1.livre = 0;
        }
        else if(codCor == cor2.cor){
            cor2.livre = 0;
        }
        else if(codCor == cor3.cor){
            cor3.livre = 0;
        }
        else if(codCor == cor4.cor){
            cor4.livre = 0;
        }
        else if(codCor == cor5.cor){
            cor5.livre = 0;
        }
        else if(codCor == cor6.cor){
            cor6.livre = 0;
        }
        else if(codCor == cor7.cor){
            cor7.livre = 0;
        }
        else if(codCor == cor8.cor){
            cor8.livre = 0;
        }
        else if(codCor == cor9.cor){
            cor9.livre = 0;
        }
        else if(codCor == cor10.cor){
            cor10.livre = 0;
        }
        else if(codCor == cor11.cor){
            cor11.livre = 0;
        }
        else if(codCor == cor12.cor){
            cor12.livre = 0;
        }
        else if(codCor == cor13.cor){
            cor13.livre = 0;
        }
        else if(codCor == cor14.cor){
            cor14.livre = 0;
        }
    }


    apresentarProcAtivRem = function(){
    	var proc = [];
    	for(var i = 0; i < listaProcessos.length; i++){
	    	if(listaProcessos[i].ativo == 0){
	    		proc.push(listaProcessos[i]);
	    	}
	    }
		$scope.processos = proc;
    }

    //GERENCIAR CORES DE CADA PROCESSO ************************************************************************
    definirCor = function(){
        if(cor1.livre == 0){
            cor1.livre = 1;
            return cor1.cor;
        }
        else if(cor2.livre == 0){
            cor2.livre = 1;
            return cor2.cor;
        }
        else if(cor3.livre == 0){
            cor3.livre = 1;
            return cor3.cor;
        }
        else if(cor4.livre == 0){
            cor4.livre = 1;
            return cor4.cor;
        }
        else if(cor5.livre == 0){
            cor5.livre = 1;
            return cor5.cor;
        }
        else if(cor6.livre == 0){
            cor6.livre = 1;
            return cor6.cor;
        }
        else if(cor7.livre == 0){
            cor7.livre = 1;
            return cor7.cor;
        }
        else if(cor8.livre == 0){
            cor8.livre = 1;
            return cor8.cor;
        }
        else if(cor9.livre == 0){
            cor9.livre = 1;
            return cor9.cor;
        }
        else if(cor10.livre == 0){
            cor10.livre = 1;
            return cor10.cor;
        }
        else if(cor11.livre == 0){
            cor11.livre = 1;
            return cor11.cor;
        }
        else if(cor12.livre == 0){
            cor12.livre = 1;
            return cor12.cor;
        }
        else if(cor13.livre == 0){
            cor13.livre = 1;
            return cor13.cor;
        }
        else if(cor14.livre == 0){
            cor14.livre = 1;
            return cor14.cor;
        }
    }
    //GERENCIAR COR MEMÃ“RIA LÃ“GICA
    gerenciarCorML = function(cor){
        $scope.corML1 = {
            "background-color" : cor
        }
    }

    //GERENCIAR COR TABELA PÃGINA PROCESSOS
    gerenciarCorTPP = function(cor){
        $scope.corML1 = {
            "background-color" : cor
        }
    }

    //GERENCIAR COR MEMÃ“RIA FÃSICA
    gerenciarCorMF = function(cor, x){
        if(x == 1){
            $scope.corMF1 = {
                "background-color" : cor
            }
        }
        else if(x == 2){
            $scope.corMF2 = {
                "background-color" : cor
            }
        }
        else if(x == 3){
            $scope.corMF3 = {
                "background-color" : cor
            }
        }
        else if(x == 4){
            $scope.corMF4 = {
                "background-color" : cor
            }
        }
        else if(x == 5){
            $scope.corMF5 = {
                "background-color" : cor
            }
        }
        else if(x == 6){
            $scope.corMF6 = {
                "background-color" : cor
            }
        }
        else if(x == 7){
            $scope.corMF7 = {
                "background-color" : cor
            }
        }
        else if(x == 8){
            $scope.corMF8 = {
                "background-color" : cor
            }
        }
        else if(x == 9){
            $scope.corMF9 = {
                "background-color" : cor
            }
        }
        else if(x == 10){
            $scope.corMF10 = {
                "background-color" : cor
            }
        }
        else if(x == 11){
            $scope.corMF11 = {
                "background-color" : cor
            }
        }
        else if(x == 12){
            $scope.corMF12 = {
                "background-color" : cor
            }
        }
        else if(x == 13){
            $scope.corMF13 = {
                "background-color" : cor
            }
        }
        else if(x == 14){
            $scope.corMF14 = {
                "background-color" : cor
            }
        }
        
    }

    
    //SELECIONAR PROCESSO E ALTERAR MEMÃ“RIA LÃ“GICA ****************************************************
    $scope.selecProc = function(id, isSimulacao , callback){
        //VARIAVEIS PARA SIMULACAO
        var _pagML1 = []
        var _pagML2 = []
        var _pagML3 = []
        var _pagML4 = []
        var _pagML5 = []
        var _pagML6 = []
        var _pagML7 = []
        var _pagML8 = []
        var _pagML9 = []
        var _pagML10 = []
        var _pagML11 = []
        var _pagML12 = []
        var _pagML13 = []
        var _pagML14 = []

        
        $scope.selectProcesso(id)
        $scope.selecIdProc = id;
    	var cod;
        var y = -1;

        for(var i = 0; i < listaBytes.length; i++){
            if(listaBytes[i].id == id && listaBytes[i].ativo == 0){
                processoTemp = listaBytes[i];
                cod = listaBytes[i].codLocalizador;
                y = i;
                i = listaBytes[i];
            }
        }

        var x = 1;
        var pagAlocadas = [];
        var pagAux = 1; //PARA SABER QUAIS PÃGINAS JÃ FORAM ALOCADAS
        
        //LIMPAR VARIÃVEIS RESPONSÃVEIS PELO ARMAZENAMENTO DOS BYTES DA ML PARA 
        pagML1.length = 0;
        pagML1Ocupado = 0;
        pagML2.length = 0;
        pagML2Ocupado = 0;
        pagML3.length = 0;
        pagML3Ocupado = 0;
        pagML4.length = 0;
        pagML4Ocupado = 0;
        pagML5.length = 0;
        pagML5Ocupado = 0;
        pagML6.length = 0;
        pagML6Ocupado = 0;
        pagML7.length = 0;
        pagML7Ocupado = 0;
        pagML8.length = 0;
        pagML8Ocupado = 0;
        pagML9.length = 0;
        pagML9Ocupado = 0;
        pagML10.length = 0;
        pagML10Ocupado = 0;
        pagML11.length = 0;
        pagML11Ocupado = 0;
        pagML12.length = 0;
        pagML12Ocupado = 0;
        pagML13.length = 0;
        pagML13Ocupado = 0;
        pagML14.length = 0;
        pagML14Ocupado = 0;

    
        var qtPagTemp = listaBytes[y].qtPag;
        //INSERIR PG 1 MEMORIA LÃ“GICA
        if(pagML1Ocupado == 0 && qtPagTemp > 0){
            //console.log("entrou inserir pag 1 " , id)
            for(var i = 0; i < listaBytes.length; i++){
                var aux = new Object();
                
                if(listaBytes[i].codLocalizador == cod && pagAux == listaBytes[i].codPag){
                    aux.id = listaBytes[i].id;
                    aux.codLocalizador = listaBytes[i].codLocalizador;
                    aux.byte = listaBytes[i].byte;
                    aux.codPag = listaBytes[i].codPag;
                    aux.cor = listaBytes[i].cor;
                    aux.deslocamento = contBin(x);
                    aux.enderecoLogico = "0000";
                    listaBytes[i].enderecoLogico = "0000";
                    x++;
                    
                    pagML1.push(aux);
                    if(isSimulacao) _pagML1.push(aux);
                    
                }
            }

            pagAlocadas.push(pagAux);
            pagAux++;
            qtPagTemp--;
            pagML1Ocupado = 1;
            x = 1;
          
            $scope.pagML1s = pagML1;
            
            gerarTabPagProc(pagML1[0].codLocalizador);

            gerenciarCorML(pagML1[0].cor);
            //console.log($scope.pagML1s)
           // callback()
           //console.log(_pagML1)
        }

        //console.log($scope.pagML1s)

        //INSERIR PG 2 MEMORIA LÃ“GICA
        if(pagML2Ocupado == 0 && qtPagTemp > 0){
            for(var i = 0; i < listaBytes.length; i++){
                var aux = new Object();
                
                if(listaBytes[i].codLocalizador == cod && pagAux == listaBytes[i].codPag){
                    aux.id = listaBytes[i].id;
                    aux.codLocalizador = listaBytes[i].codLocalizador;
                    aux.byte = listaBytes[i].byte;
                    aux.codPag = listaBytes[i].codPag;
                    aux.cor = listaBytes[i].cor;
                    aux.deslocamento = contBin(x);
                    aux.enderecoLogico = "0001";
                    listaBytes[i].enderecoLogico = "0001";
                    x++;
                    
                    pagML2.push(aux);
                    if(isSimulacao) _pagML2.push(aux);
                }
            }

            pagAlocadas.push(pagAux);
            pagAux++;
            qtPagTemp--;
            pagML2Ocupado = 1;
            x = 1;
            
            $scope.pagML2s = pagML2;
            gerarTabPagProc(pagML2[0].codLocalizador);

            gerenciarCorML(pagML2[0].cor);
        }




        //INSERIR PG 3 MEMORIA LÃ“GICA
        if(pagML3Ocupado == 0 && qtPagTemp > 0){
            for(var i = 0; i < listaBytes.length; i++){
                var aux = new Object();
                
                if(listaBytes[i].codLocalizador == cod && pagAux == listaBytes[i].codPag){
                    aux.id = listaBytes[i].id;
                    aux.codLocalizador = listaBytes[i].codLocalizador;
                    aux.byte = listaBytes[i].byte;
                    aux.codPag = listaBytes[i].codPag;
                    aux.cor = listaBytes[i].cor;
                    aux.deslocamento = contBin(x);
                    aux.enderecoLogico = "0010";
                    listaBytes[i].enderecoLogico = "0010";
                    x++;
                    
                    pagML3.push(aux);
                    if(isSimulacao) _pagML3.push(aux);
                }
            }

            pagAlocadas.push(pagAux);
            pagAux++;
            qtPagTemp--;
            pagML3Ocupado = 1;
            x = 1;
            
            $scope.pagML3s = pagML3;
            gerarTabPagProc(pagML3[0].codLocalizador);

            gerenciarCorML(pagML3[0].cor);
        }

        //INSERIR PG 4 MEMORIA LÃ“GICA
        if(pagML4Ocupado == 0 && qtPagTemp > 0){
            for(var i = 0; i < listaBytes.length; i++){
                var aux = new Object();
                
                if(listaBytes[i].codLocalizador == cod && pagAux == listaBytes[i].codPag){
                    aux.id = listaBytes[i].id;
                    aux.codLocalizador = listaBytes[i].codLocalizador;
                    aux.byte = listaBytes[i].byte;
                    aux.codPag = listaBytes[i].codPag;
                    aux.cor = listaBytes[i].cor;
                    aux.deslocamento = contBin(x);
                    aux.enderecoLogico = "0011";
                    listaBytes[i].enderecoLogico = "0011";
                    x++;
                    
                    pagML4.push(aux);
                    if(isSimulacao) _pagML4.push(aux);
                }
            }

            pagAlocadas.push(pagAux);
            pagAux++;
            qtPagTemp--;
            pagML4Ocupado = 1;
            x = 1;
            
            $scope.pagML4s = pagML4;
            gerarTabPagProc(pagML4[0].codLocalizador);

            gerenciarCorML(pagML4[0].cor);
        }

        //INSERIR PG 5 MEMORIA LÃ“GICA
        if(pagML5Ocupado == 0 && qtPagTemp > 0){
            for(var i = 0; i < listaBytes.length; i++){
                var aux = new Object();
                
                if(listaBytes[i].codLocalizador == cod && pagAux == listaBytes[i].codPag){
                    aux.id = listaBytes[i].id;
                    aux.codLocalizador = listaBytes[i].codLocalizador;
                    aux.byte = listaBytes[i].byte;
                    aux.codPag = listaBytes[i].codPag;
                    aux.cor = listaBytes[i].cor;
                    aux.deslocamento = contBin(x);
                    aux.enderecoLogico = "0100";
                    listaBytes[i].enderecoLogico = "0100";
                    x++;
                    
                    pagML5.push(aux);
                    if(isSimulacao) _pagML5.push(aux);
                }
            }

            pagAlocadas.push(pagAux);
            pagAux++;
            qtPagTemp--;
            pagML5Ocupado = 1;
            x = 1;
            
            $scope.pagML5s = pagML5;
            gerarTabPagProc(pagML5[0].codLocalizador);

            gerenciarCorML(pagML5[0].cor);
        }

        //INSERIR PG 6 MEMORIA LÃ“GICA
        if(pagML6Ocupado == 0 && qtPagTemp > 0){
            for(var i = 0; i < listaBytes.length; i++){
                var aux = new Object();
                
                if(listaBytes[i].codLocalizador == cod && pagAux == listaBytes[i].codPag){
                    aux.id = listaBytes[i].id;
                    aux.codLocalizador = listaBytes[i].codLocalizador;
                    aux.byte = listaBytes[i].byte;
                    aux.codPag = listaBytes[i].codPag;
                    aux.cor = listaBytes[i].cor;
                    aux.deslocamento = contBin(x);
                    aux.enderecoLogico = "0101";
                    listaBytes[i].enderecoLogico = "0101";
                    x++;
                    
                    pagML6.push(aux);
                    if(isSimulacao) _pagML6.push(aux);
                }
            }

            pagAlocadas.push(pagAux);
            pagAux++;
            qtPagTemp--;
            pagML6Ocupado = 1;
            x = 1;
            
            $scope.pagML6s = pagML6;
            gerarTabPagProc(pagML6[0].codLocalizador);

            gerenciarCorML(pagML6[0].cor);
        }

        //INSERIR PG 7 MEMORIA LÃ“GICA
        if(pagML7Ocupado == 0 && qtPagTemp > 0){
            for(var i = 0; i < listaBytes.length; i++){
                var aux = new Object();
                
                if(listaBytes[i].codLocalizador == cod && pagAux == listaBytes[i].codPag){
                    aux.id = listaBytes[i].id;
                    aux.codLocalizador = listaBytes[i].codLocalizador;
                    aux.byte = listaBytes[i].byte;
                    aux.codPag = listaBytes[i].codPag;
                    aux.cor = listaBytes[i].cor;
                    aux.deslocamento = contBin(x);
                    aux.enderecoLogico = "0110";
                    listaBytes[i].enderecoLogico = "0110";
                    x++;
                    
                    pagML7.push(aux);
                    if(isSimulacao) _pagML7.push(aux);
                }
            }

            pagAlocadas.push(pagAux);
            pagAux++;
            qtPagTemp--;
            pagML7Ocupado = 1;
            x = 1;
            
            $scope.pagML7s = pagML7;
            gerarTabPagProc(pagML7[0].codLocalizador);

            gerenciarCorML(pagML7[0].cor);
        }

        //INSERIR PG 8 MEMORIA LÃ“GICA
        if(pagML8Ocupado == 0 && qtPagTemp > 0){
            for(var i = 0; i < listaBytes.length; i++){
                var aux = new Object();
                
                if(listaBytes[i].codLocalizador == cod && pagAux == listaBytes[i].codPag){
                    aux.id = listaBytes[i].id;
                    aux.codLocalizador = listaBytes[i].codLocalizador;
                    aux.byte = listaBytes[i].byte;
                    aux.codPag = listaBytes[i].codPag;
                    aux.cor = listaBytes[i].cor;
                    aux.deslocamento = contBin(x);
                    aux.enderecoLogico = "0111";
                    listaBytes[i].enderecoLogico = "0111";
                    x++;
                    
                    pagML8.push(aux);
                    if(isSimulacao) _pagML8.push(aux);
                }
            }

            pagAlocadas.push(pagAux);
            pagAux++;
            qtPagTemp--;
            pagML8Ocupado = 1;
            x = 1;
            
            $scope.pagML8s = pagML8;
            gerarTabPagProc(pagML8[0].codLocalizador);

            gerenciarCorML(pagML8[0].cor);
        }

        //INSERIR PG 9 MEMORIA LÃ“GICA
        if(pagML9Ocupado == 0 && qtPagTemp > 0){
            for(var i = 0; i < listaBytes.length; i++){
                var aux = new Object();
                
                if(listaBytes[i].codLocalizador == cod && pagAux == listaBytes[i].codPag){
                    aux.id = listaBytes[i].id;
                    aux.codLocalizador = listaBytes[i].codLocalizador;
                    aux.byte = listaBytes[i].byte;
                    aux.codPag = listaBytes[i].codPag;
                    aux.cor = listaBytes[i].cor;
                    aux.deslocamento = contBin(x);
                    aux.enderecoLogico = "1000";
                    listaBytes[i].enderecoLogico = "1000";
                    x++;
                    
                    pagML9.push(aux);
                    if(isSimulacao) _pagML9.push(aux);
                }
            }

            pagAlocadas.push(pagAux);
            pagAux++;
            qtPagTemp--;
            pagML9Ocupado = 1;
            x = 1;
            
            $scope.pagML9s = pagML9;
            gerarTabPagProc(pagML9[0].codLocalizador);

            gerenciarCorML(pagML9[0].cor);
        }

        //INSERIR PG 10 MEMORIA LÃ“GICA
        if(pagML10Ocupado == 0 && qtPagTemp > 0){
            for(var i = 0; i < listaBytes.length; i++){
                var aux = new Object();
                
                if(listaBytes[i].codLocalizador == cod && pagAux == listaBytes[i].codPag){
                    aux.id = listaBytes[i].id;
                    aux.codLocalizador = listaBytes[i].codLocalizador;
                    aux.byte = listaBytes[i].byte;
                    aux.codPag = listaBytes[i].codPag;
                    aux.cor = listaBytes[i].cor;
                    aux.deslocamento = contBin(x);
                    aux.enderecoLogico = "1001";
                    listaBytes[i].enderecoLogico = "1001";
                    x++;
                    
                    pagML10.push(aux);
                    if(isSimulacao) _pagML10.push(aux);
                }
            }

            pagAlocadas.push(pagAux);
            pagAux++;
            qtPagTemp--;
            pagML10Ocupado = 1;
            x = 1;
            
            $scope.pagML10s = pagML10;
            gerarTabPagProc(pagML10[0].codLocalizador);

            gerenciarCorML(pagML10[0].cor);
        }

        //INSERIR PG 11 MEMORIA LÃ“GICA
        if(pagML11Ocupado == 0 && qtPagTemp > 0){
            for(var i = 0; i < listaBytes.length; i++){
                var aux = new Object();
                
                if(listaBytes[i].codLocalizador == cod && pagAux == listaBytes[i].codPag){
                    aux.id = listaBytes[i].id;
                    aux.codLocalizador = listaBytes[i].codLocalizador;
                    aux.byte = listaBytes[i].byte;
                    aux.codPag = listaBytes[i].codPag;
                    aux.cor = listaBytes[i].cor;
                    aux.deslocamento = contBin(x);
                    aux.enderecoLogico = "1010";
                    listaBytes[i].enderecoLogico = "1010";
                    x++;
                    
                    pagML11.push(aux);
                    if(isSimulacao) _pagML11.push(aux);
                }
            }

            pagAlocadas.push(pagAux);
            pagAux++;
            qtPagTemp--;
            pagML11Ocupado = 1;
            x = 1;
            
            $scope.pagML11s = pagML11;
            gerarTabPagProc(pagML11[0].codLocalizador);

            gerenciarCorML(pagML11[0].cor);
        }

        //INSERIR PG 12 MEMORIA LÃ“GICA
        if(pagML12Ocupado == 0 && qtPagTemp > 0){
            for(var i = 0; i < listaBytes.length; i++){
                var aux = new Object();
                
                if(listaBytes[i].codLocalizador == cod && pagAux == listaBytes[i].codPag){
                    aux.id = listaBytes[i].id;
                    aux.codLocalizador = listaBytes[i].codLocalizador;
                    aux.byte = listaBytes[i].byte;
                    aux.codPag = listaBytes[i].codPag;
                    aux.cor = listaBytes[i].cor;
                    aux.deslocamento = contBin(x);
                    aux.enderecoLogico = "1011";
                    listaBytes[i].enderecoLogico = "1011";
                    x++;
                    
                    pagML12.push(aux);
                    if(isSimulacao) _pagML12.push(aux);
                }
            }

            pagAlocadas.push(pagAux);
            pagAux++;
            qtPagTemp--;
            pagML12Ocupado = 1;
            x = 1;
            
            $scope.pagML12s = pagML12;
            gerarTabPagProc(pagML12[0].codLocalizador);

            gerenciarCorML(pagML12[0].cor);
        }

        //INSERIR PG 13 MEMORIA LÃ“GICA
        if(pagML13Ocupado == 0 && qtPagTemp > 0){
            for(var i = 0; i < listaBytes.length; i++){
                var aux = new Object();
                
                if(listaBytes[i].codLocalizador == cod && pagAux == listaBytes[i].codPag){
                    aux.id = listaBytes[i].id;
                    aux.codLocalizador = listaBytes[i].codLocalizador;
                    aux.byte = listaBytes[i].byte;
                    aux.codPag = listaBytes[i].codPag;
                    aux.cor = listaBytes[i].cor;
                    aux.deslocamento = contBin(x);
                    aux.enderecoLogico = "1100";
                    listaBytes[i].enderecoLogico = "1100";
                    x++;
                    
                    pagML13.push(aux);
                    if(isSimulacao) _pagML13.push(aux);
                }
            }

            pagAlocadas.push(pagAux);
            pagAux++;
            qtPagTemp--;
            pagML13Ocupado = 1;
            x = 1;
            
            $scope.pagML13s = pagML13;
            gerarTabPagProc(pagML13[0].codLocalizador);

            gerenciarCorML(pagML13[0].cor);
        }

        //INSERIR PG 14 MEMORIA LÃ“GICA
        if(pagML14Ocupado == 0 && qtPagTemp > 0){
            for(var i = 0; i < listaBytes.length; i++){
                var aux = new Object();
                
                if(listaBytes[i].codLocalizador == cod && pagAux == listaBytes[i].codPag){
                    aux.id = listaBytes[i].id;
                    aux.codLocalizador = listaBytes[i].codLocalizador;
                    aux.byte = listaBytes[i].byte;
                    aux.codPag = listaBytes[i].codPag;
                    aux.cor = listaBytes[i].cor;
                    aux.deslocamento = contBin(x);
                    aux.enderecoLogico = "1101";
                    listaBytes[i].enderecoLogico = "1101";
                    x++;
                    
                    pagML14.push(aux);
                    if(isSimulacao) _pagML14.push(aux);
                }
            }

            pagAlocadas.push(pagAux);
            pagAux++;
            qtPagTemp--;
            pagML14Ocupado = 1;
            x = 1;
            
            $scope.pagML14s = pagML14;
            gerarTabPagProc(pagML14[0].codLocalizador);

            gerenciarCorML(pagML14[0].cor);
        }

        if(isSimulacao) callback( [_pagML1,_pagML2,_pagML3,_pagML4,_pagML5,_pagML6,_pagML7,_pagML8,_pagML9,_pagML10,_pagML11,_pagML12,_pagML13,_pagML14] )

       
    }

    $('#byteProcesso').hide();
    $scope.idProc = "Nenhum";
    $scope.selectProcesso = function(idProcesso) {
        var auxBytes = [];
        $scope.byteProc = ""; //reseta select
        $('#byteProcesso').show()
    
        $scope.infoByte = $scope.infoMLog = $scope.infoMFis = "";
        $scope.idProc = idProcesso;
        for(var i = 0; i < listaBytes.length; i++){
            if(listaBytes[i].id == $scope.idProc){
                auxBytes.push(listaBytes[i]);
            }
        }
       
        $scope.bytePs = auxBytes.filter((value)=>{
            return value.byte != ' ';
        })
    }

    $scope.selectByte = function() {
        var aux = new Object();

        for(var i = 0; i < listaBytes.length; i++){
            if(listaBytes[i].byte == $scope.byteProc){
                aux = listaBytes[i];

                i = listaBytes.length;
            }
        }

        $scope.infoProc = aux.id;
        $scope.infoByte = aux.byte;
        $scope.infoMLog = aux.enderecoLogico + " " + aux.deslocamento;
        $scope.infoMFis = aux.enderecoFisico + " " + aux.deslocamento;
    }

    atualizarEstatistica = function(){
        var contPag = 0;
        var contBytes = 0;
        var fragmentacao = 0;
        var contDisponivel = 0;
        var contProcessos = 0;

        for(var i = 0; i < listaProcessos.length; i++){
            if(listaProcessos[i].ativo == 0){
                contPag = contPag + listaProcessos[i].qtPag;
                contProcessos++;
            }
        }

        for(var i = 0; i < listaBytes.length; i++){
            if(listaBytes[i].byte != " " && listaBytes[i].ativo == 0){
                contBytes++;
                contDisponivel++;
            }
            else if(listaBytes[i].byte == " " && listaBytes[i].ativo == 0){
                fragmentacao++;
            }
        }

        $scope.qtMemoria = 56 + " bytes";
        $scope.memDisponivel = 56 - contDisponivel + " bytes";
        $scope.memUtilizada = contBytes + " bytes";
        $scope.qtProcessos = contProcessos;
        $scope.qtPaginas = contPag;
        $scope.fragmentacao = fragmentacao + " bytes desperdiçados"
    }


    //funcoes adicionadas
    $scope.abrir_fechar_criar_processo_ = function(){
        $("#corpo_criar_processo").slideToggle("slow");
        $("#abrir_fechar_criar_processo").find('i').toggleClass('fa-angle-down fa-angle-up');
    }

    $scope.abrir_fechar_tabela_processo_ = function(){
        $("#corpo_tabela_processo").slideToggle("slow");
        $("#abrir_fechar_tabela_processo").find('i').toggleClass('fa-angle-down fa-angle-up');
    }

    $scope.abrir_fechar_info_processo_ = function(){
        $("#corpo_info_processo").slideToggle("slow");
        $("#abrir_fechar_info_processo").find('i').toggleClass('fa-angle-up fa-angle-down');
    }

    
    $scope.abrir_fechar_carregar_processo_ = function(){
        $("#corpo_carregar_processo").slideToggle("slow");
        $("#abrir_fechar_carregar_processo").find('i').toggleClass('fa-angle-up fa-angle-down');
    }

    $scope.abrir_fechar_teste  = function(){
        $("#corpo_teste").slideToggle("slow");
        $("#abrir_fechar_teste").find('i').toggleClass('fa-angle-up fa-angle-down');
    }


    $scope.processo = {
        id:'',
        bytes: ''
    }
    $scope.isLoadSimulacao = false
    $scope.simulacoesSalvas = []
    $scope.hasSimulacaoCarregada = false;
    

    var carregarSimulacoesSalvas = function(){
        $http.get('http://localhost:5000/simulacoes').then( simulacoes=>{   $scope.simulacoesSalvas = simulacoes.data;})   
    }

    $scope.carregarSimulacao = function(simulacao){
        $scope.isLoadSimulacao = true
        $http.get('http://localhost:5000/simulacoes/processos/' + simulacao.idSimulacao ).then( processos=>{ 
           if($scope.processos && $scope.processos.length > 0){
                $scope.processos.forEach(data=>{
                    $scope.remover(data.id, true)
                })
            }
             processos.data.forEach(value=>{
                    $scope.processo.id = value.identificador;
                    $scope.criar({
                        id: value.identificador,
                        bytes: value.tamanho,
                    })
            })
            Notification.success('Simulação "'+simulacao.nome+'" carregada com sucesso.')
            $scope.isLoadSimulacao = false
            $scope.hasSimulacaoCarregada = true
            
         })
        
    }

    $scope.isLoadSalvarSimulacao = false;
    $scope.salvarSimulacao = function(nomeSimulacao, simulacaoCarregada){
        if(nomeSimulacao || simulacaoCarregada){
            $scope.isLoadSalvarSimulacao = true;
            if(nomeSimulacao){
                const simulacao = { 'nome': nomeSimulacao , 'processos' : $scope.processos };
                 $http.post('http://localhost:5000/simulacoes' , simulacao ).then(retorno=>{ 
                    const r = retorno.data;
                    $scope.isLoadSalvarSimulacao = false;
                    if(!r.sucesso){
                        Notification.warning(r.msg)
                        return;
                    } 
                    
                    $('#nomeSimulacao').val('')
                    carregarSimulacoesSalvas()
                    $scope.simulacaoSelecionada = simulacao
                    $scope.hasSimulacaoCarregada = true;
                    Notification.success(r.msg)
                })
            } else{
                $http.put('http://localhost:5000/simulacoes/processos/' + simulacaoCarregada.idSimulacao , 
                { nomeSimulacao:simulacaoCarregada.nome , processos : $scope.processos } 
                ).then(retorno=>{
                    const r = retorno.data;
                    $scope.isLoadSalvarSimulacao = false;
                    if(!r.sucesso) return;  
                    Notification.success(r.msg);
                })
            }
        }else Notification.warning('Informe o nome da simulação antes de salvar.')
        
    }


    var listaTimeouts = []
    var stopIntervalFecharAnimacao;
    var stopTimeAnimacao;
    $scope.timeAnimacao;
    $scope.countFecharAnimacao;
    $scope.isSimulando = false
    $scope.simulandoProcesso = ''
    $scope.simulacaoConcluida = false

    $scope.pararSimulacao = function(){
        listaTimeouts.forEach(stop=>{
            $timeout.cancel(stop)
        })
        $scope.isSimulando = false
        $interval.cancel(stopTimeAnimacao)
        if(!$scope.simulacaoConcluida)   Notification.warning('Simulação interrompida em ' + $scope.timeAnimacao + ' segundo(s).');
        $('body').css('background-color','white')
        $('body').css('zoom', '100%');
    } 


    $scope.cancelarFecharAnimacao = function(){
        $interval.cancel( stopIntervalFecharAnimacao )
        $scope.countFecharAnimacao = 0
    }


   $scope.limparTabela = function(){
       if($scope.processos){
            $scope.processos.forEach(v=>{ $scope.remover(v.id,true) });
       } 
   }
  
  
   $scope.simular = function(){
        $('body').css('zoom', '85%');

        Notification.success('Simulação iniciada!');
        $scope.timeAnimacao = 0
        stopTimeAnimacao = $interval(()=>{ $scope.timeAnimacao = $scope.timeAnimacao + 1 }, 1000)

        $('body').css('background-color','Silver')
        
        var pos_row_tabela_fisica_id = 0;
        var numero_insert_tabela_fisica = 1;
        var id_end_logico = 0;
        var id_end_fisico = 0;
        var id_tabela_logico = 0;
        var id_tabela_fisico = 0;
        $scope.simulacaoConcluida = false
        $scope.isSimulando = true
        var lista_Processos = []    
        var timeAnimation = 0;
        var aux_processo = { 
            aux_processoId: '',  
            data: []
        }
        const deleteLinhasTabela = function(id_tabela){
            $('#'+id_tabela+' tbody > tr').remove();
        } 
        
        deleteLinhasTabela('tabela_fisica')
        deleteLinhasTabela('tabela_fisica_2')
        deleteLinhasTabela('tabela_logica')
        deleteLinhasTabela('tabela_pagina')

        const inserirQuebraDeLinhaTabela = function(id_tabela){
            var newRow = $("<tr style='background-color: Silver;'>");
        
            var cols = "";	
            cols += '<td style="padding: 1px"></td>';	    
            cols += '<td style="padding: 1px"></td>';
            cols += '<td style="padding: 1px"></td>';
            newRow.append(cols);
            $("#"+id_tabela).append(newRow);	     
        }

        const getTabelaPaginas = function(index){ return $scope.tabPagProcs[index] }

        const getTabelaMemoriaFisica = function(index){
            var aux;
            aux = $scope.getMemoriaFisica($scope.tabPagProcs[index].enderecoFisico)[0]
            
            return aux              
        }

        const indicarEnderecoLogico = function(){
            const list = [1,2,3,4];
            list.forEach(v=>{
                $("#logico"+ (id_end_logico - v)).fadeOut();
                $("#logico"+ (id_end_logico - v)).fadeIn();
            });
            $("#tab"+ id_tabela_logico).fadeOut();
            $("#tab"+ id_tabela_logico).fadeIn();    
        }

        const indiciarEnderecoFisico = function(){
            const list = [1,2,3,4];
            list.forEach(v=>{
                $("#fisico"+ (id_end_fisico - v)).fadeOut();
                $("#fisico"+ (id_end_fisico - v)).fadeIn();
            });
            $("#tab_"+ (id_tabela_fisico - 1)).fadeOut();
            $("#tab_"+ (id_tabela_fisico - 1)).fadeIn();
        }
     
        const inserirTabelaLogica = function(list){
            var newRow = ''    
            var cols = '';	
            list.forEach(data=>{
               
              
                newRow = $("<tr style='background-color: "+data.cor+";'>");
                cols += '<td style="padding: 2px; font-weight: bold;"><div id="logico'+id_end_logico+'">'+data.enderecoLogico+'</div></td>';	    
                cols += '<td style="padding: 2px; font-weight: bold;">'+data.deslocamento+'</td>';	    
                cols += '<td style="padding: 2px; font-weight: bold;">'+data.byte+'</td>';	     
                newRow.append(cols);	  
                $("#tabela_logica").append(newRow);
                cols = '';
                id_end_logico = id_end_logico + 1
                
            })    
        }

        const inserirTabelaPagina = function(data){

            var newRow = $("<tr style='background-color: "+data.cor+";'>");
            var cols = "";	
            cols += '<td style="padding: 2px; font-weight: bold;"><div id="tab'+id_tabela_logico+'">'+data.enderecoLogico+'</div></td>';	    
            cols += '<td style="padding: 2px; font-weight: bold;"><div id="tab_'+id_tabela_fisico+'">'+data.enderecoFisico+'</div></td>';	        
            newRow.append(cols);	  
            $("#tabela_pagina").append(newRow);

            
            indicarEnderecoLogico()
            $timeout( indiciarEnderecoFisico , 900 )    
          
            id_tabela_logico = id_tabela_logico + 1
            id_tabela_fisico = id_tabela_fisico + 1
            
        }

        const inserirTabelaFisica = function(list){
            var newRow = ''
            var cols = "";

            list.forEach(data=>{
             
                if(!data.cor){
                    newRow = $("<tr id='POS_"+pos_row_tabela_fisica_id+"' style='background-color: #44C662;'>");
                }else{
                    newRow = $("#POS_"+pos_row_tabela_fisica_id);
                    cols +="<tr style='background-color: "+data.cor+";'>"
                } 
                
               	 
                
                cols += '<td style="padding: 2px; font-weight: bold;"><div id="fisico'+id_end_fisico+'">'+data.enderecoFisico+'</div></td>';	    
                cols += '<td style="padding: 2px; font-weight: bold;">'+data.deslocamento+'</td>';	    
                cols += '<td style="padding: 2px; font-weight: bold;">'+data.byte+'</td>';	     
                

                if(!data.cor){
                    newRow.append(cols);
                    if(numero_insert_tabela_fisica <= 7)	  
                        $("#tabela_fisica").append(newRow);
                    else
                        $("#tabela_fisica_2").append(newRow);    
                }else{
                    cols += "</tr>"

                    newRow.replaceWith(cols);
                }
                
               

                cols = ''
                pos_row_tabela_fisica_id = pos_row_tabela_fisica_id + 1
                id_end_fisico = id_end_fisico + 1
            })
            numero_insert_tabela_fisica = numero_insert_tabela_fisica + 1	    
        }

        inicializarMF(true, lista_mf=>{
            lista_mf.forEach(value=>{
                inserirTabelaFisica(value)
                if(numero_insert_tabela_fisica <= 7)
                    inserirQuebraDeLinhaTabela('tabela_fisica')
                else if( numero_insert_tabela_fisica > 8) 
                    inserirQuebraDeLinhaTabela('tabela_fisica_2') 
            })
            pos_row_tabela_fisica_id = 0;
        })
      

        $scope.processos.forEach(value=>{
           
            $scope.selecProc(value.id, true ,  lista_pagML =>{
                var count = 0;
                aux_processo.aux_processoId = value.id
                aux_processo.data = []

                lista_pagML.forEach(value=>{
                    if(value && value.length > 0){
                        aux_processo.data.push(
                 
                            { 'logica': value },
                          
                            { 'fisica': getTabelaMemoriaFisica(count) } ,
    
                            { 'tabela': getTabelaPaginas(count) },
                         
                        )
                        count = count + 1
                    }
                });
    
                aux_processo.data.push(
                    { 'next': 'next' }
                )
    
                lista_Processos.push(aux_processo)
                aux_processo = {
                    aux_processoId : '',
                    data : []
                }

            })                
          
        })
        
        var tamanhoListaProcessos = lista_Processos.length - 1

        lista_Processos.forEach( (value,indexProcessos)=>{
               value.data.forEach( (d,index)=>{ 
                    var stop = $timeout(()=>{
                        if(index == 0){
                            $scope.simulandoProcesso = value.aux_processoId
                            $scope.selecIdProc = value.aux_processoId
                        }
                        if(d.logica){
                                inserirTabelaLogica(d.logica)
                                inserirQuebraDeLinhaTabela('tabela_logica')
                        
                        }else if(d.fisica){  
                            
                            inserirTabelaFisica(d.fisica)  
                    
                        }else if(d.tabela){
                            
                            inserirTabelaPagina(d.tabela)
                    
                        }else if(d.next){
                            if( indexProcessos == tamanhoListaProcessos ){
                                Notification.success('Simulação finalizada. Tempo da simulacao: ' + $scope.timeAnimacao + ' segundo(s).')
                                $scope.simulacaoConcluida = true
                                $scope.countFecharAnimacao = 5  
                                $interval.cancel(stopTimeAnimacao)

                                stopIntervalFecharAnimacao = $interval(()=>{
                                    $scope.countFecharAnimacao = $scope.countFecharAnimacao - 1
                                    if($scope.countFecharAnimacao == 0){
                                        $interval.cancel( stopIntervalFecharAnimacao )
                                        $scope.pararSimulacao()
                                    }
                                        
                                },1000)
                                
                            }else{
                                deleteLinhasTabela('tabela_logica')
                                deleteLinhasTabela('tabela_pagina')
                            } 
     
                        }
                    }, timeAnimation)
                    listaTimeouts.push(stop)
                    timeAnimation = timeAnimation + 2500

                })

        }) 
    }

    $scope.getMemoriaFisica = function(enderecoFisico){
        
        var aux = [];
        var aux2 = []
        if($scope.pag1s.length > 0){
            var aux2 = $scope.pag1s.filter(data=>{return data.enderecoFisico == enderecoFisico})
            if(aux2.length > 0) aux.push(aux2)
        }

        if($scope.pag2s.length > 0){
            var aux2 = $scope.pag2s.filter(data=>{return data.enderecoFisico == enderecoFisico })
            if(aux2.length > 0) aux.push(aux2)
        }

        if($scope.pag3s.length > 0){
            var aux2 = $scope.pag3s.filter(data=>{return data.enderecoFisico == enderecoFisico})
            if(aux2.length > 0) aux.push(aux2)
        }

        if($scope.pag4s.length > 0){
            var aux2 = $scope.pag4s.filter(data=>{return data.enderecoFisico == enderecoFisico})
            if(aux2.length > 0) aux.push(aux2)
        }

        if($scope.pag5s.length > 0){
            var aux2 = $scope.pag5s.filter(data=>{return data.enderecoFisico == enderecoFisico})
            if(aux2.length > 0) aux.push(aux2)
        }

        if($scope.pag6s.length > 0){
            var aux2 = $scope.pag6s.filter(data=>{return data.enderecoFisico == enderecoFisico})
            if(aux2.length > 0) aux.push(aux2)
        }

        if($scope.pag7s.length > 0){
            var aux2 = $scope.pag7s.filter(data=>{return data.enderecoFisico == enderecoFisico})
            if(aux2.length > 0) aux.push(aux2)
        }

        if($scope.pag8s.length > 0){
            var aux2 = $scope.pag8s.filter(data=>{return data.enderecoFisico == enderecoFisico})
            if(aux2.length > 0) aux.push(aux2)
        }

        if($scope.pag9s.length > 0){
            var aux2 = $scope.pag9s.filter(data=>{return data.enderecoFisico == enderecoFisico})
            if(aux2.length > 0) aux.push(aux2)
        }

        if($scope.pag10s.length > 0){
            var aux2 = $scope.pag10s.filter(data=>{return data.enderecoFisico == enderecoFisico})
            if(aux2.length > 0) aux.push(aux2)
        }

        if($scope.pag11s.length > 0){
            var aux2 = $scope.pag11s.filter(data=>{return data.enderecoFisico == enderecoFisico })
            if(aux2.length > 0) aux.push(aux2)
        }

        if($scope.pag12s.length > 0){
            var aux2 = $scope.pag12s.filter(data=>{return data.enderecoFisico == enderecoFisico})
            if(aux2.length > 0) aux.push(aux2)
        }

        if($scope.pag13s.length > 0){
            var aux2 = $scope.pag13s.filter(data=>{return data.enderecoFisico == enderecoFisico})
            if(aux2.length > 0) aux.push(aux2)
        }

        if($scope.pag14s.length > 0){
            var aux2 = $scope.pag14s.filter(data=>{ return data.enderecoFisico == enderecoFisico})
            if(aux2.length > 0) aux.push(aux2)
        }

        //console.log(aux)

        return aux;
    }

    load();



    /*
       $('body').css('zoom', '85%');

        Notification.success('Simulação iniciada!');
        $scope.timeAnimacao = 0
        stopTimeAnimacao = $interval(()=>{ $scope.timeAnimacao = $scope.timeAnimacao + 1 }, 1000)

        $('body').css('background-color','Silver')
        
        var pos_row_tabela_fisica_id = 0;
        var numero_insert_tabela_fisica = 1;
        var id_end_logico = 0;
        var id_end_fisico = 0;
        var id_tabela_logico = 0;
        var id_tabela_fisico = 0;
        $scope.simulacaoConcluida = false
        $scope.isSimulando = true
        var lista_Processos = []    
        var timeAnimation = 0;
        var aux_processo = { 
            aux_processoId: '',  
            data: []
        }
        
           /*if (_pagML1 && _pagML1.length > 0) {

                    aux_processo.data.push(
                 
                        { 'logica': _pagML1 },
                      
                        { 'fisica': getTabelaMemoriaFisica(count) } ,

                        { 'tabela': getTabelaPaginas(count) },
                     
                    )
                    count = count + 1

                }
    
    
                if (_pagML2 && _pagML2.length > 0) {
                    
                    aux_processo.data.push(
                        { 'logica': _pagML2 },
                     
                        { 'fisica': getTabelaMemoriaFisica(count) } ,

                        { 'tabela': getTabelaPaginas(count) },
                       
                    )
                    count = count + 1    
                }
    
                if ($scope.pagML3s && $scope.pagML3s.length > 0) {
    
                    aux_processo.data.push(
                        { 'logica': _pagML3 },
                       
                        { 'fisica': getTabelaMemoriaFisica(count) } ,

                        { 'tabela': getTabelaPaginas(count) },
                     
                    )
    
    
                    count = count + 1
    
                }
    
                if ($scope.pagML4s && $scope.pagML4s.length > 0) {
    
    
                    aux_processo.data.push(
                        { 'logica': _pagML4 },
                       
                        { 'fisica': getTabelaMemoriaFisica(count) } ,

                        { 'tabela': getTabelaPaginas(count) },
                      
                    )
    
    
                    count = count + 1
    
                }
    
                if ($scope.pagML5s && $scope.pagML5s.length > 0) {
    
    
    
                    aux_processo.data.push(
                        { 'logica': _pagML5 },
                      
                        { 'fisica': getTabelaMemoriaFisica(count) } ,

                        { 'tabela': getTabelaPaginas(count) },
                      
                    )
    
    
                    count = count + 1
    
                }
      
                if ($scope.pagML6s && $scope.pagML6s.length > 0) {
    
    
                    aux_processo.data.push(
                        { 'logica': _pagML6 },
                       
                        { 'fisica': getTabelaMemoriaFisica(count) } ,

                        { 'tabela': getTabelaPaginas(count) },
                     
                    )
    
    
                    count = count + 1
    
                }
    
                if ($scope.pagML7s && $scope.pagML7s.length > 0) {
    
    
                    aux_processo.data.push(
                        { 'logica': _pagML7 },
                     
                        { 'fisica': getTabelaMemoriaFisica(count) } ,

                        { 'tabela': getTabelaPaginas(count) },
                  
                    )
    
    
                    count = count + 1
    
                }
    
                if ($scope.pagML8s && $scope.pagML8s.length > 0) {
    
    
    
                    aux_processo.data.push(
                        { 'logica': _pagML8 },
                    
                        { 'fisica': getTabelaMemoriaFisica(count) } ,

                        { 'tabela': getTabelaPaginas(count) },
                      
                    )
    
    
                    count = count + 1
    
                }
    
                if ($scope.pagML9s && $scope.pagML9s.length > 0) {
    
    
                    aux_processo.data.push(
                        { 'logica': _pagML9 },
                       
                        { 'fisica': getTabelaMemoriaFisica(count) } ,

                        { 'tabela': getTabelaPaginas(count) },
                 
                    )
    
    
                    count = count + 1
    
                }
    
                if ($scope.pagML10s && $scope.pagML10s.length > 0) {
    
    
    
                    aux_processo.data.push(
                        { 'logica': _pagML10 },
                       
                        { 'fisica': getTabelaMemoriaFisica(count) } ,

                        { 'tabela': getTabelaPaginas(count) },
                     
                    )
    
    
                    count = count + 1
                }
    
                if ($scope.pagML11s && $scope.pagML11s.length > 0) {
    
                    aux_processo.data.push(
                        { 'logica': _pagML11 },
                      
                        { 'fisica': getTabelaMemoriaFisica(count) } ,

                        { 'tabela': getTabelaPaginas(count) },
                       
                    )
    
    
                    count = count + 1
    
                }
    
                if ($scope.pagML12s && $scope.pagML12s.length > 0) {
    
    
                    aux_processo.data.push(
                        { 'logica': _pagML12 },
                        
                        { 'fisica': getTabelaMemoriaFisica(count) } ,

                        { 'tabela': getTabelaPaginas(count) },
                     
                    )
    
    
                    count = count + 1
    
                }
     
                if ($scope.pagML13s && $scope.pagML13s.length > 0) {
     
                    aux_processo.data.push(
                        { 'logica': _pagML13 },
                       
                        { 'fisica': getTabelaMemoriaFisica(count) } ,

                        { 'tabela': getTabelaPaginas(count) },
                    
                    )
    
    
                    count = count + 1
    
                }
     
                if ($scope.pagML14s && $scope.pagML14s.length > 0) {
    
    
                    aux_processo.data.push(
                        { 'logica': _pagML14 },
                     
                        { 'fisica': getTabelaMemoriaFisica(count) } ,

                        { 'tabela': getTabelaPaginas(count) },
                
                    )
    
    
                    count = count + 1
    
                }*/
        
        
        
});
