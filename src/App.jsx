import { useState } from 'react'
import './App.css'
import Form from './components/Form'

const INITIAL_DATA = {
  amount: "",
  term: "",
  interest: "",
  calcType: "",
}

function App() {
  const [data, setData] = useState(INITIAL_DATA)

  function updateFields(fields) {
    setData(prev => {
        return { ...prev, ...fields }
    })
  }

  return (
    <>
        <Form {...data} updateFields={updateFields} />
    </>
  )
}

export default App
