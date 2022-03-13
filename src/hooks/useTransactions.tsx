import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

type Transaction = {
    id: number;
    description: string;
    amount: number;
    category: string;
    transactionType: string;
    createdAt: string;
}

// type TransactionInput = Pick<Transaction, 'description' | 'amount' | 'category' | 'transactionType'>

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

type TransactionProviderProps = {
    children: ReactNode
}


const TransactionsContext = createContext<[Transaction[], (transaction: TransactionInput) => Promise<void>]>([[], () => new Promise(() => {})]);

export function TransactionsProvider({children}: TransactionProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
        api.get('transactions')
        .then(response => {
            setTransactions(response.data.transactions)
        })
    }, []);

    async function createTransaction(transactionInput: TransactionInput) {
        const response = await api.post('/transactions', {...transactionInput, createdAt: new Date()});

        const {transaction} = response.data;

        setTransactions([...transactions, transaction])
    }

    return (
        <TransactionsContext.Provider value={[transactions, createTransaction]}>
            {children}
        </TransactionsContext.Provider>
    )
}


export function useTransactions() {
    const context = useContext(TransactionsContext);

    return context;
}
