const Modal = {
    open(){
       //Abrir Modal
       //Adicionar a class active ao Modal

       document.querySelector('.modal-overlay')
       .classList
       .add('active')
    },
    close(){
      //Fechar o modal
      //Remover a class active ao Modal 

      document.querySelector('.modal-overlay')
       .classList
       .remove('active')        
    }
    
}