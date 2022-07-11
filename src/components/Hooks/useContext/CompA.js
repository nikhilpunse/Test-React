import React, { createContext } from 'react'
import CompB from './CompB'
const firstName = createContext();
const lastName = createContext();

const CompA = () => {
    
  return (
    <>
    <firstName.Provider value ={'Swapnil'}>
        <lastName.Provider value = {'punse'}>
            <CompB />
        </lastName.Provider>
    </firstName.Provider>
    </>
  )
}

export default CompA;
export {firstName,lastName};