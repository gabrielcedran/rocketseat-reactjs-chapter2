import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./styles";

export function TransactionsTable() {

    const [transactions] = useTransactions();

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