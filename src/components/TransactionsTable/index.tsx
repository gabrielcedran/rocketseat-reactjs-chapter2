import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

type Transaction = {
    id: number;
    description: string;
    amount: number;
    category: string;
    transactionType: string;
    createdAt: string;
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
                            { // new Intl.NumberFormat('en-GB')  or new Intl.NumberFormat(Intl.DateTimeFormat().resolvedOptions().locale) for i18n
                            }
                            <td className={transaction.transactionType}>
                                {new Intl.NumberFormat(Intl.DateTimeFormat().resolvedOptions().locale, {style: 'currency', currency: 'BRL'}).format(transaction.amount)}
                            </td>
                            <td>{transaction.category}</td>
                            <td>
                            {// new Intl.DateTimeFormat('pt-BR')
                            }
                            {new Intl.DateTimeFormat().format(new Date(transaction.createdAt))}
                            </td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
        </Container>
    )
}