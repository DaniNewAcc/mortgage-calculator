import { Fragment, useRef, useState } from "react";
import Input from "./Input";
import RadioInput from "./RadioInput";
import Completed from "./Completed";
import ResultsEmpty from "./ResultsEmpty";

const mortgageType = ["Repayment", "Interest Only"]

const Form = ({ amount, term, interest, calcType, updateFields }) => {
  const [errors, setErrors] = useState({})
  const [result, setResult] = useState(false)
  const [calcResult, setCalcResult] = useState({
    monthly: 0,
    total: 0,
  })
  const formRef = useRef()

  const handleInputChange = (e) => {
    const { type, id, value } = e.target

    if ( type === 'radio') {
      updateFields({ calcType: value })
    } else {
      updateFields({ [id]: value })
    }
  }


  const handleClearAll = () => {
    formRef.current.reset();
    updateFields({ amount: "", term: "", interest: "", calcType: "" })
    setCalcResult({
      monthly: 0,
      total: 0
    })
    setErrors({});
    setResult(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm(amount, term, interest, calcType);
    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      calcMortgage();
    } else {
      setResult(false)
    }
  }

  const validateForm = (amount, term, interest, calcType) => {
    const errors = {};

    if (!amount.trim()) {
      errors.amount = 'This field is required';
    }
    if(amount <= 0) {
      errors.amount = 'This value needs to be greater than 0'
    }

    if (!term.trim()) {
      errors.term = 'This field is required';
    }
    if(term <= 0) {
      errors.term = 'This value needs to be greater than 0'
    }

    if (!interest.trim()) {
      errors.interest = 'This field is required';
    }
    if(interest < 0) {
      errors.interest = 'This value needs to be a positive number'
    }

    if (!calcType.trim()) {
      errors.calcType = 'This field is required';
    }

    return errors
  }

  const calcMortgage = () => {
    const P = parseFloat(amount)
    const r = (parseFloat(interest) / 100) / 12;
    const n = parseFloat(term) * 12;

    let monthlyRepayment;

    if (calcType === "Repayment") {
      monthlyRepayment = P * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    } else {
      monthlyRepayment = P * n
    }

    const total = monthlyRepayment * n;

    setCalcResult({
      monthly: monthlyRepayment,
      total: total
    })
    setResult(true);
  }



  return (
    <main className='bg-white w-full h-screen flex flex-col md:h-full md:rounded-3xl md:my-8 lg:w-[840px] lg:h-fit lg:flex-row'>
        <form ref={formRef} className='w-full relative mb-8 md:h-full lg:w-1/2 lg:ms-8 lg:me-11 lg:my-8' onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2 items-start mt-8 mb-6 md:flex-row md:justify-between max-lg:mx-8 lg:items-center lg:mt-0">
              <h1 className='text-slate900 text-[1.3rem] font-bold lg:text-lg'>Mortgage Calculator</h1>
              <button className='bg-transparent underline text-slate700 text-sm hover:text-slate900' type='button' onClick={handleClearAll}>Clear All</button>
            </div>
            <div className='flex flex-col max-lg:mx-8'>
              <Input id="amount" name="amount" label="Mortgage Amount" type="number" symbol="£" value={amount} onChangeInput={handleInputChange} errors={errors.amount} />
              <div className="flex flex-col gap-4 my-4 md:flex-row">
                <Input id="term" name="term" label="Mortgage Term" type="number" symbol="years" value={term} onChangeInput={handleInputChange} errors={errors.term} />
                <Input id="interest" name="interest" label="Interest Rate" type="number" symbol="%" value={interest} onChangeInput={handleInputChange} errors={errors.interest} />
              </div>
              <div className='flex flex-col items-start mb-6 lg:mt-2 lg:mb-8'>
                <p className='text-slate700 text-sm'>Mortgage Type</p>
                {mortgageType.map((type) => {
                  return  <Fragment key={type}>
                            <RadioInput id={type} label={type} type="radio" name="calctype" value={type} checked={calcType === type} onChangeInput={handleInputChange} />
                          </Fragment>
                })}
                {errors.calcType && <small className="mt-2 text-red">{errors.calcType}</small>}
              </div>
              <footer className="w-full">
                <button className='bg-lime text-slate900 font-bold w-full flex justify-center items-center gap-2 rounded-[2rem] px-4 py-4 hover:bg-opacity-60 md:w-1/2 lg:w-3/4 lg:py-3' type="submit"><i><img className='w-[21px]' src="./images/icon-calculator.svg" alt="Calculator" /></i>Calculate Repayments</button>
              </footer>
            </div>
        </form>
        {result 
          ? <Completed calcResult={calcResult} />
          : <ResultsEmpty />
        }
    </main>
  )
}

export default Form