import React from 'react';
import { useRouteError } from 'react-router-dom';

const Errorpage = () => {
    const error = useRouteError()
    return (
        <div className='flex flex-col min-h-[700px] justify-center items-center'>
             <h1 className='text-4xl  font-medium text-lime-500'>Ops! An Error Ocurred!</h1>
             <br />
             {error && (
                <div>
                    <p className='text-xl text-red-500 font-bold py-6 '>{error.statusText || error.message}</p>
                    <p className='text-xl font-bold  ' >Error Status: <span  className='text-lg text-red-700'>{error.status}</span></p>
                </div>
             )
             }
        </div>
    );
};

export default Errorpage;