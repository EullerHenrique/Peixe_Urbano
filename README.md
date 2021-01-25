# Peixe Urbano

<p align="center">
 
 <img alt="Framework" src="https://img.shields.io/static/v1?label=Angular&message=framework&color=blue&style=plastic&logo=ANGULAR">
 
 <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/EullerHenrique/Peixe_Urbano">
  
 <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/EullerHenrique/Peixe_Urbano">
  
 <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/EullerHenrique/Peixe_Urbano">

 <a href="https://github.com/EullerHenrique/Peixe_Urbano/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/EullerHenrique/Peixe_Urbano">
 </a>
  
 <img alt="Github status" src="http://img.shields.io/static/v1?label=status&message=concluded&color=GREEN&style=plastic"/>
 
</p>

## Sumário 

- [Página Online](#página-online)

- [Página Online Editável](#página-online-editável)

- [Projeto Base](#projeto-base)

- [Projeto Proveniente Do Curso](#projeto-proveniente-do-curso)

- [Aprendizados](#aprendizados)

- [Tecnologias Utilizadas](#tecnologias-utilizadas)

- [Layout](#layout)

- [Pré-Requisitos](#pré-requisitos)

- [Instalação e inserção do repositório em um projeto angular](#instalação-e-inserção-do-repositório-em-um-projeto-angular)

- [Build e Deploy via Angular Cli](#build-e-deploy-via-angular-cli)

- [Build via Angular Cli](#build-via-angular-cli)
  
  - [Deploy via servidor HTTP](#deploy-via-servidor-http)  
  
  - [Deploy via HTTP-server](#deploy-via-http-server)
   
- [Licença](#licença)
  
  


## Página Online

> https://eullerhenrique.github.io/Peixe_Urbano/

## Página Online Editável

> https://stackblitz.com/edit/peixe-urbano

## Projeto Base

    Projeto Pássaro Urbano

## Projeto Proveniente Do Curso

- [Curso de Desenvolvimento WEB com ES6, TypeScript e Angular](https://www.udemy.com/course/curso-de-desenvolvimento-web-com-es6-typescript-e-angular-4/)
  - Professor: [Jorge Sant Ana](https://www.udemy.com/user/jorgetadeusantanasilva/)
  - Seções: 
    - Seção 7: Primeiros passos
    - Seção 8: Serviços e Promises
    - Seção 9: Criando uma API Rest fake, injeção de dependências e HTTP Request
    - Seção 10: Rotas e Navegação
    - Seção 11: Observables
    - Seção 12: Pipes
    - Seção 13: Formulários
    - Seção 14: Formulários - Templates
    - Seção 15: Formulário - Reactive Forms
    - Seção 16: Implementando o carrinho de compras
  



## Aprendizados 

- Como criar e consumir serviços

- Promises

- Como consumir uma API Rest

- Rotas e navegação

- Observables e o paradigma de Programação Reativa

- Pipes (Utilização de pipes nativos e criação de novos pipes)

- Formulários (Template forms / Reactive forms)




## Tecnologias Utilizadas

 - HTML 5
 - CSS
 - JAVASCRIPT MODERNO ES6 (ECMAScript 2016)
 - BOOTSTRAP 4
 - NODE JS
 - TYPESCRIPT
 - ANGULAR 4


## Layout

### Home

![eullerhenrique github io_Peixe_Urbano_ (1)](https://user-images.githubusercontent.com/48317736/105648561-dc552f00-5e8a-11eb-9c20-e17ea343275b.png)

---

### Restaurantes

![eullerhenrique github io_Peixe_Urbano_ (2)](https://user-images.githubusercontent.com/48317736/105648559-dbbc9880-5e8a-11eb-9b5d-c44b5f470a68.png)

---

### Diversão

![eullerhenrique github io_Peixe_Urbano_ (3)](https://user-images.githubusercontent.com/48317736/105648557-da8b6b80-5e8a-11eb-9e78-726423984558.png)

---

### Oferta

![eullerhenrique github io_Peixe_Urbano_ (6)](https://user-images.githubusercontent.com/48317736/105665879-b776b100-5eb6-11eb-9bdf-b5380ac285ae.png)

---
  
### Ordem De Compra  

![eullerhenrique github io_Peixe_Urbano_ (4)](https://user-images.githubusercontent.com/48317736/105648556-d95a3e80-5e8a-11eb-853f-94a18d104776.png)

---

# Pré-Requisitos 

  **1.** Instale o Node.js    
  
    sudo apt-get install nodejs    

  **2.** Instale o npm    
    
    sudo apt-get install npm     
  
  **3.** Instale o Angular Cli 1.1.0 (Contém o Angular 4)
    
    sudo npm install @angular/cli@1.1.0 
    
  **4.** Instale o intl
  
    sudo npm install intl
    
    
# Instalação e inserção do repositório em um projeto angular

  **1.** Clone o repositório    
  
    git clone -b dev https://github.com/EullerHenrique/Peixe_Urbano.git
        
  **2.** Crie um projeto angular
  
    ng new nome-do-projeto     

  **3.** Exclua a pasta src presente no diretório nome-do-projeto
          
    cd nome-projeto
    rm -rf nome-projeto
  
  **4.** Insira a pasta src presente no diretório Peixe_Urbano no diretório nome-do-projeto  
      
    cd ..
    cd Peixe_Urbano
    mv src ../nome-projeto
              
              
 # Build e Deploy via Angular Cli   
 
  **1.** Entre na pasta nome-do-projeto, gere um build e um servidor local remoto 
   
    cd nome-do-projeto
    
    ng serve

  **2.** Acesse em seu navegador o servidor gerado  
  
    localhost:4200 || 127.0.0.1:4200 (Somente o dispositivo atual pode acessar esse servidor) 
      
 # Deploy   
    
  ## Deploy via HTTP-server
  
   **1.** Instale o HTTP-server
   
    sudo npm install http-server -g
    
   **2.** Entre na pasta dist e gere um servidor   
   
    cd dist
    
    http-server
 
   **3.** Acesse em seu navegador o servidor gerado  
 
    localhost:8080 || 127.0.0.1:8080 (Somente o dispositivo atual pode acessar esse servidor)  

    ou  

    ip_do_roteador:8080 (Qualquer dispositivo pode acessar esse servidor)    
        
   
## Licença 

The [MIT License](https://github.com/EullerHenrique/Peixe_Urbano/blob/master/LICENSE) (MIT)

Copyright :copyright: 2020 - Peixe Urbano

                        
            
  


