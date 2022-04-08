import Modal from 'react-modal';
import { Container } from './styles';
import closeImg from '../../assets/close.svg';

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

