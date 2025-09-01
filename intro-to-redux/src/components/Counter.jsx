import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount } from '../redux/features/counter/counterSlice';

const Counter = () => {
    const {count} = useSelector((state) => state.counter)
    const dispatch = useDispatch()

    return (
        <div>
            <div className='flex gap-5'>
                <button className='p-4 bg-green-400 text-white rounded-md' onClick={()=>dispatch(increment())}>Increment</button>
                <button className='p-4 bg-red-400 text-white rounded-md' onClick={()=>dispatch(decrement())}>Decrement</button>
                <button className='p-4 bg-blue-400 text-white rounded-md' onClick={()=>dispatch(incrementByAmount(5))}>Increment By Value</button>
            </div>
            <span className='text-xl'>{count}</span>
        </div>
    );
};

export default Counter;