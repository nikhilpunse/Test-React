import React, { useContext } from 'react'
import { firstName,lastName } from './CompA'
const CompC = () => {
    const fname = useContext(firstName);
    const lname = useContext(lastName)
  return (
    <>
    Happy mothers day from {fname} {lname}
    </>
  )
}

export default CompC