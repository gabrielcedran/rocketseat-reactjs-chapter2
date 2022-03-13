import { FormEvent, useState } from 'react';
import Modal from 'react-modal'
import closeImg from '../../assets/close_button.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { useTransactions } from '../../hooks/useTransactions';
import { Container, RadioBox, TransactionTypeContainer } from './styles';

type NewTransactionModalProps = {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
    const [_, createTransaction] = useTransactions();

    const [transactionType, setTransactionType] = useState('income');
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');

    async function handleCreateNewTransaction(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const transaction = {description, amount, category, transactionType};

        await createTransaction(transaction);

        setDescription('');
        setAmount(0);
        setCategory('');
        setTransactionType('income');

        onRequestClose();
    }

    return (
        <Modal 
        isOpen={isOpen} 
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content">
            <button type='button'><img src={closeImg} alt="Close modal" onClick={onRequestClose} className='react-modal-close' /></button>
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Add new Transaction</h2>
                <input placeholder='Description' value={description} onChange={(event) => setDescription(event.target.value)}/>
                <input type='number' placeholder='Amount' value={amount} onChange={(event) => setAmount(Number(event.target.value))}/>
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
                <input placeholder='Category' value={category} onChange={(event) => setCategory(event.target.value)}/>
                <button type="submit">Add</button>
            </Container>
        </Modal>
    )
}