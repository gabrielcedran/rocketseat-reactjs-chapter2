import { useState } from 'react';
import Modal from 'react-modal'
import closeImg from '../../assets/close_button.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { Container, RadioBox, TransactionTypeContainer } from './styles';

type NewTransactionModalProps = {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
    const [transactionType, setTransactionType] = useState('income');

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
                    <RadioBox 
                    type='button' 
                    onClick={() => setTransactionType('income')}
                    isActive={transactionType === 'income'}
                    activeColour='green'>
                        <img src={incomeImg} alt="Income" />
                        <span>Income</span>
                    </RadioBox>
                    <RadioBox 
                    type='button' 
                    onClick={() => setTransactionType('outcome')}
                    isActive={transactionType === 'outcome'}
                    activeColour='red'>
                        <img src={outcomeImg} alt="Outcome" />
                        <span>Outcome</span>
                    </RadioBox>
                </TransactionTypeContainer>
                <input placeholder='Category' />
                <button type="submit">Add</button>
            </Container>
        </Modal>
    )
}