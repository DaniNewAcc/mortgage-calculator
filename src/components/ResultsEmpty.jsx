const ResultsEmpty = () => {
  return (
    <div className='bg-slate900 w-full text-center flex flex-col justify-center py-6 max-md:h-full md:rounded-b-3xl md:gap-4 md:px-8 md:py-8 lg:w-1/2 lg:gap-2 lg:px-7 lg:rounded-bl-[3.5rem] lg:rounded-e-3xl'>
        <i><img className='w-1/2 mx-auto md:w-1/4 lg:w-1/2' src="./images/illustration-empty.svg" alt="Illustration Empty" /></i>
        <div className="flex flex-col mt-2 md:mt-0 max-lg:gap-2 max-lg:mb-2">
            <h3 className='text-white text-[1.5rem] md:text-[1.2rem]'>Results shown here</h3>
            <p className=' text-slate300 text-[.975rem] text-center md:text-[.875rem] md:leading-6 lg:text-[.785rem] lg:leading-5'>Complete the form and click “calculate repayments” to see what 
            your monthly <br className="max-sm:hidden lg:hidden" /> repayments would be.</p> 
        </div>
    </div>
  )
}

export default ResultsEmpty