import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./style";


interface Transactions {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

export function TransactionsTable(){

    const [transactions, setTransactions] = useState<Transactions[]>([]);

    useEffect(() =>{
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions))
    }, []);
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
                    {transactions.map(transaction => {
                        return (
                            <tr key={transaction.id}>
                                <td>{transaction.title}</td>
                                <td className={transaction.type}>
                                    {new Intl.NumberFormat('pt-PT', {
                                        style: 'currency', /* currency == moeda ||| /* Formatar o valor da moeda.*/
                                        currency: 'AOA',
                                    }).format(transaction.amount)};
                                </td> 
                                <td>{transaction.category}</td>
                                <td> {new Intl.DateTimeFormat('pt-PT').format(
                                    new Date(transaction.createdAt))}
                                </td>
                            </tr>
                    
                        )
                    })}
                </tbody>
            </table>
        </Container>
    )
}