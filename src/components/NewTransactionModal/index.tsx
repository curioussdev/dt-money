import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import closeImg from '../../assets/close.svg';
import { api } from '../../services/api';


interface newTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: newTransactionModalProps){
    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0)
    const [category, setCategory] = useState('');
    const [type, setType] = useState('');

    function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault()

        const data = {
            title,
            value,
            category,
            type
        };

        api.post('/transactions', data)
    }
   
    return(

      <Modal 
        isOpen={isOpen}
        onRequestClose={onRequestClose} 
        overlayClassName="react-modal-overlay" // formatar o backgrond do modal
        className="react-modal-content" // formatar a estilização do modal
      >

          <button 
            type='button' 
            onClick={onRequestClose}
            className="react-modal-close"
          >
            <img src={closeImg} alt="Fechar modal" />
          </button>

        <Container onSubmit={handleCreateNewTransaction}>
            <h2>Cadastar Transação</h2>

            <input 
                placeholder='titulo'
                value={title}
                onChange={event => setTitle(event.target.value)}
            />

            <input 
                type='number'
                placeholder='valor'
                value={value}
                onChange={event => setValue(Number(event.target.value))} // o Number é usado em caso do input receber apenas valor numérico
            />

            <TransactionTypeContainer>
                <RadioBox
                    type='button'
                    onClick={() => {setType('deposit')}}
                    isActive={type === 'deposit'}
                    activeColor='green'
                >
                    <img src={incomeImg} alt="Entrada" />
                    <span>Entrada</span>
                </RadioBox>

                <RadioBox
                    type='button'
                    onClick={() => {setType('withdraw')}}
                    isActive={type === 'withdraw'}
                    activeColor='red'
                >
                    <img src={outcomeImg} alt="Saída" />
                    <span>Saída</span>
                </RadioBox>

            </TransactionTypeContainer>

            <input 
                placeholder='Categoria' 
                value={category}
                onChange={ event => setCategory(event.target.value) }
            />

            <button type="submit">
                Cadastrar
            </button>

        </Container>


      </Modal>

    )
}

