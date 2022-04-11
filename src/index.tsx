import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import App from './App';

createServer({

  models: {
    transaction: Model,
  },

  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance Dev',
          type: 'deposit',
          category: 'desenvolvimento',
          amount: 5000,
          created_at: new Date()
        },
        {
          id: 2,
          title: 'Alugeul',
          type: 'withdraw',
          category: 'casa',
          amount: 7656,
          created_at: new Date('11/04/2022')
        },
      ],
    })
  },

  routes(){
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
