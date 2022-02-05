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
   all: transactions,
   incomes() {
      let income = 0;
      // Pegar valores das transaçoes
      // para cada transaction
      Transaction.all.forEach((transaction) => {
          // Verificar se a transação > 0
        if(transaction.amount > 0 ){
          //Somar a uma variavel e returnar a varivel
            income += transaction.amount;
         }
      })
      return income;
           
         
   },
   expenses() {
      let expense = 0;
      Transaction.all.forEach((transaction) => {
        if(transaction.amount < 0 ){
            expense += transaction.amount;
         }
      })
      return expense;
   },
   total() {

      return Transaction.incomes() + Transaction.expenses();
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

      const amount = Utils.formatCurrency(transaction.amount)

      const html = `      
            <td class="description">${transaction.description}</td>
            <td class="${CSSclass}">${amount}</td>
            <td class="date">${transaction.date} </td>
            <td>
               <img src="./assets/minus.svg" alt="Remover transação">
            </td> 
            `

      return html
   },

   updateBalance() {
      document
      .getElementById('incomeDisplay')
      .innerHTML = Utils.formatCurrency(Transaction.incomes())

      document
      .getElementById('expenseDisplay')
      .innerHTML = Utils.formatCurrency(Transaction.expenses())
   
      document
      .getElementById('totalDisplay')
      .innerHTML = Utils.formatCurrency(Transaction.total())
   }
}

const Utils ={
   formatCurrency(value){
      const signal = Number(value) < 0 ? "-" : ""

      value = String(value).replace(/\D/g, "")

      value = Number(value) / 100

      value = value.toLocaleString("pt-BR", {
         style: "currency",
         currency:"BRL"
      })

      return signal + value
   }
}

transactions.forEach((transaction) => {
   DOM.addTransaction(transaction)
})

DOM.updateBalance()





