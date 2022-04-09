import Modal from 'react-modal';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import closeImg from '../../assets/close.svg';
import { useState } from 'react';

interface newTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: newTransactionModalProps){
    const [type, setType] = useState('');

   
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

        <Container>
            <h2>Cadastar Transação</h2>

            <input 
                placeholder='titulo' 
            />

            <input 
                type='number'
                placeholder='valor' 
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
            />

            <button type="submit">
                Cadastrar
            </button>

        </Container>


      </Modal>

    )
}

