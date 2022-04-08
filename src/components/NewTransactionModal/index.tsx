import Modal from 'react-modal';
import { Container } from './styles';

interface newTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: newTransactionModalProps){
    return(

      <Modal 
        isOpen={isOpen}
        onRequestClose={onRequestClose} 
        overlayClassName="react-modal-overlay" // formatar o backgrond do modal
        className="react-modal-content" // formatar a estilização do modal
      >
        <Container>
            <h2>Cadastar Transação</h2>

            <input 
                placeholder='titulo' 
            />

            <input 
                type='number'
                placeholder='valor' 
            />

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

