import { Container } from "./styles";

export function TransactionsTable() {
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
                    <tr>
                        <td>Website development</td>
                        <td className="income">R$ 12,000.00</td>
                        <td>Free lance</td>
                        <td>20/02/2022</td>
                    </tr>
                    <tr>
                        <td>Rent</td>
                        <td className="outcome">- R$ 12,000.00</td>
                        <td>Monthly Expenses</td>
                        <td>20/02/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}