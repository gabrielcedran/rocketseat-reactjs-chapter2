import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { Container } from "./styles";

export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Income</p>
                    <img src={incomeImg} alt="Incomes" />
                </header>
                <strong>R$ 1,000.00</strong>
            </div>
            <div>
                <header>
                    <p>Outcome</p>
                    <img src={outcomeImg} alt="Outcomes" />
                </header>
                <strong>-R$ 1,000.00</strong>
            </div>
            <div className='highlight-background'>
                <header>
                    <p>Balance</p>
                    <img src={totalImg} alt="Balance" />
                </header>
                <strong>R$ 1,000.00</strong>
            </div>
        </Container>
    )
}