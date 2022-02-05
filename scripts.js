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
      description: 'Luz',
      amount: -30000,
      date: '15/01/2022'
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

const DOM = {
   transactionsContainer: document.querySelector('#data-table tbody'),

   addTransaction(transaction, index) {
      const tr = document.createElement('tr')
      tr.innerHTML = DOM.innerHTMLTransaction(transaction)
      
      DOM.transactionsContainer.appendChild(tr)
      
      
   },
   innerHTMLTransaction(transaction) {
      const CSSclass = transaction.amount > 0 ? "income" : "expense"

      // const amount = 

      const html = `      
            <td class="description">${transaction.description}</td>
            <td class="${CSSclass}">${transaction.amount}</td>
            <td class="date">${transaction.date} </td>
            <td>
               <img src="./assets/minus.svg" alt="Remover transação">
            </td> 
            `

      return html
   }
}



transactions.forEach((transaction) => {
   DOM.addTransaction(transaction)
})







