import React from "react";

const Form = ({state, updateValues}) => {
    const {billAmount, tipPercentage, nbOfPeople} = state;
    const percentages = [5, 10, 15, 25, 50];
    const totalTip = Number((state.billAmount * tipPercentage) / 100).toFixed(2);
    const tipPerPerson = Number(totalTip/nbOfPeople).toFixed(2);
    const totalPerPerson = (parseInt(billAmount)/parseInt(nbOfPeople)) +parseInt(tipPerPerson);
    
    return (
        <main>
            <img
                src="./icons/logo.svg"
                className="logo"
                alt="Splitter logo. 'SPLI' on one line and 'TTER' on another to indicate splitting."
            />
            <section className="card">
                <div className="card-left">
                    <div className="input-group" id="totalBillGroup">
                        <div className="input-label-container">
                            <label className="body-text input-label" htmlFor="totalBill">Bill</label>
                            <small className="body-text input-error" id="totalBillError">Input field is valid</small>
                        </div>
                        <input
                            type="number"
                            className="body-l-text input-field"
                            placeholder="0"
                            name="Total bill value"
                            id="totalBill"
                            onChange={(e)=> {
                                updateValues({
                                    billAmount: e.target.value,
                                })
                            }}
                        />
                    </div>

                    <div className="input-group" id="totalTipPercentageGroup">
                        <div className="input-label-container">
                            <label className="body-text input-label">Select Tip %</label>
                            <small className="body-text input-error" id="totalTipPercentageError">Input field is
                                valid</small>
                        </div>
                        <div className="input-tips-container">
                            {percentages.map((p)=>{
                                return(
                                    <button className="body-l-text input-tip" id="tip5"
                                    onClick={() => {
                                        updateValues({tipPercentage : p})
                                    }}
                                >
                                    {p}%
                                    </button>
                                )
                            })}
                            <input 
                                max={100} min={0} 
                                type="number" 
                                className="body-l-text input-field" 
                                placeholder="Custom"
                                id="totalTipPercentage"
                                onChange={(e) => {
                                    updateValues({
                                        tipPercentage: 
                                            e.target.value < 0
                                            ?0
                                            : e.target.value > 100
                                            ? 100
                                            : e.target.value,
                                    })
                                }}
                                value={tipPercentage}
                            />
                        </div>
                    </div>

                    <div className="input-group" id="numberOfPeopleGroup">
                        <div className="input-label-container">
                            <label className="body-text input-label" htmlFor="numberOfPeople">Number of People</label>
                            <small className="body-text input-error" id="numberOfPeopleError">Input field is
                                valid</small>
                        </div>
                        <input
                            type="number"
                            className="body-l-text input-field"
                            placeholder="0"
                            name="Number of people"
                            id="numberOfPeople"
                            onChange={(e) => {
                                updateValues({
                                    nbOfPeople: e.target.value,
                                })
                            }}
                        />
                    </div>
                </div>
                <div className="card-right">
                    <section className="card-price-container">
                        <div>
                            <b className="body-text card-price-title">Tip Amount</b>
                            <p className="body-s-text card-price-subtitle">/ person</p>
                        </div>
                        <strong className="strong-text card-price-value" id="tipAmount">${tipPerPerson}</strong>
                    </section>
                    <section className="card-price-container">
                        <div>
                            <b className="body-text card-price-title">Total</b>
                            <p className="body-s-text card-price-subtitle">/ person</p>
                        </div>
                        <strong type="number" className="strong-text card-price-value" id="totalPrice">${Number((totalPerPerson)).toFixed(2)}</strong>
                    </section>
                    <button 
                        className="btn btn-primary btn-reset"
                        onClick={() => {
                            updateValues({
                                totalPerPerson : 0,
                                nbOfPeople : 0,
                                billAmount : 0,
                                tipPerPerson : 0
                            })
                        }}
                    >Reset</button>
                </div>
            </section>
        </main>
    )
}

export default Form;