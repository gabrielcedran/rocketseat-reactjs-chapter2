import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({

  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          description: 'Java freelance',
          amount: 12333.78,
          category: 'development',
          transactionType: 'income',
          createdAt: new Date('2021-02-12 09:00:01')
        },
        {
          id: 2,
          description: 'Rent',
          amount: 1222.39,
          category: 'rent',
          transactionType: 'outcome',
          createdAt: new Date('2021-02-14 15:38:01')
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })
    
    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('transaction', data);
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
