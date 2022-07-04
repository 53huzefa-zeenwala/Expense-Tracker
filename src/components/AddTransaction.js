import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState'


export const AddTransaction = () => {
    const {addTransaction} = useContext(GlobalContext)
    const [text, settext] = useState('')
    const [amount, setAmount] = useState(0)
    const onSubmit = e => {
        e.preventDefault();
        
        const newTransaction = {
            id : Math.floor(Math.random()
            * 100000000),
            text:text,
            amount: +amount
        }
        addTransaction(newTransaction)
        setAmount(0)
        settext("")
    }
  return (
    <>
    <h3>Add new tansaction</h3>
    <form onSubmit={onSubmit}>
        <div className='form-control'>
            <label htmlFor='text'>Text</label>
            <input type='text' onChange={(e)=> settext(e.target.value)} value={text} placeholder='Enter text...' />
            <div className='form-control'>
                <label htmlFor='amount'>
                    Amount <br/>
                    (negative - expense , postive - income)
                </label>
                <input type='number' onChange={(e)=> setAmount(e.target.value)} value={amount} placeholder='Enter amount...' />
            </div>
            <button type='submit' className='btn'>Add Trasaction</button>
        </div>
    </form>
    </>
  )
}
