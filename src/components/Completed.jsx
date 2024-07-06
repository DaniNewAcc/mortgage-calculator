import { FormatNumbers } from '../utils/FormatNumbers'

const Completed = ({ calcResult }) => {
  return (
    <div className='bg-slate900 w-full flex flex-col gap-3 px-7 py-6 max-md:h-full md:rounded-b-3xl md:px-8 md:py-8 lg:w-1/2 lg:rounded-bl-[3.5rem] lg:rounded-e-3xl lg:py-8'>
        <h3 className='text-white text-[1.5rem] text-start font-bold lg:text-[1.2rem]'>Your results</h3>
        <p className='text-slate300 text-[.985rem] md:text-[.875rem] lg:text-[.785rem] text-start text-pretty leading-5'>Your results are shown below based on the information you provided. 
        To adjust <br className="max-sm:hidden lg:hidden" /> the results, edit the form and click “calculate repayments” again.</p>
        <div className="bg-altSlate w-full rounded-lg border-t-4 border-t-lime mt-4 px-6 lg:mt-5">
            <div className="border-b border-b-slate100 py-4 lg:py-6">
            <p className="text-[1.075rem] text-slate300 lg:text-[.785rem]">Your monthly repayments</p>
            <h1 className="text-lime text-[2.7rem] font-bold">{FormatNumbers(calcResult.monthly)}</h1>
            </div>
            <div className="py-4 lg:py-8">
            <p className="text-base text-slate300 mb-1 lg:text-[.785rem]">Total you ll repay over the term</p>
            <h3 className="text-[1.4rem] text-white lg:text-[1.2rem]">{FormatNumbers(calcResult.total)}</h3>
            </div>
        </div>
    </div>
  )
}

export default Completed