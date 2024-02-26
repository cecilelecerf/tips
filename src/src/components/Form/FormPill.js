function FormPill ({number, setTipAmount}){

    return(
        <p className="border border-primary border-2 rounded-pill px-3 text-primary mx-2" onClick={()=> setTipAmount(number.toString())}>{number}</p>
    )
}

export default FormPill