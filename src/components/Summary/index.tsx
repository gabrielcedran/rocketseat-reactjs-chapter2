import { useContext } from 'react';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { TransactionsContext } from '../../TransactionsContext';
import { Container } from "./styles";

export function Summary() {

    const [transactions] = useContext(TransactionsContext);

    const summary = transactions.reduce((acc, transaction) => {
        if (transaction.transactionType == 'income') {
            acc.income += transaction.amount
            acc.balance += transaction.amount
        } else {
            acc.outcome += transaction.amount
            acc.balance -= transaction.amount
        }
        return acc;
    }, {income: 0, outcome: 0, balance: 0})

    return (
        <Container>
            <div>
                <header>
                    <p>Income</p>
                    <img src={incomeImg} alt="Incomes" />
                </header>
                <strong>{new Intl.NumberFormat(Intl.DateTimeFormat().resolvedOptions().locale, {currency: 'BRL', style: 'currency'}).format(summary.income)}</strong>
            </div>
            <div>
                <header>
                    <p>Outcome</p>
                    <img src={outcomeImg} alt="Outcomes" />
                </header>
                <strong>-{new Intl.NumberFormat(Intl.DateTimeFormat().resolvedOptions().locale).format(summary.outcome)}</strong>
            </div>
            <div className='highlight-background'>
                <header>
                    <p>Balance</p>
                    <img src={totalImg} alt="Balance" />
                </header>
                <strong>{new Intl.NumberFormat(Intl.DateTimeFormat().resolvedOptions().locale).format(summary.balance)}</strong>
            </div>
        </Container>
    )
}