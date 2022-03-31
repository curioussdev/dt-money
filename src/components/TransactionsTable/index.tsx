import { Container } from "./style";

export function TransactionsTable(){
    return(
        
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenolvimento de Website</td>
                        <td className="deposit">190.000 kz</td>
                        <td>Software</td>
                        <td>30/12/2021</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">-19.000 kz</td>
                        <td>Casa</td>
                        <td>17/12/2021</td>
                    </tr>
                   
                </tbody>
            </table>
        </Container>
    )
}