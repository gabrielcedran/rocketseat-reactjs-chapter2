import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

type Transaction = {
    id: number;
    description: string;
    amount: number;
    category: string;
    transactionType: string;
    createdAt: Date;
}

export function TransactionsTable() {

    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
        api.get('transactions')
        .then(response => {
            console.log(response.data.transactions)
            setTransactions(response.data.transactions)
        })
    }, [])

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Category</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction => (
                        <tr key={transaction.id}>
                            <td>{transaction.description}</td>
                            <td className={transaction.transactionType}>R$ {transaction.amount}</td>
                            <td>{transaction.category}</td>
                            <td>{transaction.createdAt}</td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
        </Container>
    )
}