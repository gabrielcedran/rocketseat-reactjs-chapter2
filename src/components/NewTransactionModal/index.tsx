import Modal from 'react-modal'
import closeImg from '../../assets/close_button.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { Container, TransactionTypeContainer } from './styles';

type NewTransactionModalProps = {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
    return (
        <Modal 
        isOpen={isOpen} 
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content">
            <button type='button'><img src={closeImg} alt="Close modal" onClick={onRequestClose} className='react-modal-close' /></button>
            <Container>
                <h2>Add new Transaction</h2>
                <input placeholder='Description' />
                <input type='number' placeholder='Amount' />
                <TransactionTypeContainer>
                    <button type='button'>
                        <img src={incomeImg} alt="Income" />
                        <span>Income</span>
                    </button>
                    <button type='button'>
                        <img src={outcomeImg} alt="Outcome" />
                        <span>Outcome</span>
                    </button>
                </TransactionTypeContainer>
                <input placeholder='Category' />
                <button type="submit">Add</button>
            </Container>
        </Modal>
    )
}