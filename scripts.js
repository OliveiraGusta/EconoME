const Modal = {
   open() {
      //Abrir Modal
      //Adicionar a class active ao Modal

      document.querySelector('.modal-overlay')
         .classList
         .add('active')
   },
   close() {
      //Fechar o modal
      //Remover a class active ao Modal 

      document.querySelector('.modal-overlay')
         .classList
         .remove('active')
   }
}

const transactions = [
   {
      id: 1,
      description: 'Venda de Ursinho',
      amount: 500000,
      date: '03/02/2022'
   },
   {
      id: 2,
      description: 'Venda de Ursinho',
      amount: 500000,
      date: '03/02/2022'
   },
   {
      id: 3,
      description: 'Criação de Website',
      amount: 200000,
      date: '21/01/2022'
   },
   {
      id: 4,
      description: 'Internet',
      amount: 12000,
      date: '10/01/2022'
   },
]

const Transaction = {
   incomes() {
      //Somar as entradas
   },
   expenses() {
      //Somar as saídas
   },
   total() {
      //entradas - saidas
   }
}

