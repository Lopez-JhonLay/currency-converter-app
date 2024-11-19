import React from "react";

function InputBox({
  label,
  amount,
  currencyOptions = [],
  selectedCurrency = "usd",
  isAmountDisabled = false,
  isCurrencyDisabled = false,
  onAmountChange,
  onCurrencyChange,
}) {
  return (
    <div className="card bg-base-100 w-full shadow-xl mb-2">
      <div className="card-body flex flex-row p-5 justify-center">
        <div>
          <label htmlFor="currency" className="ml-1">{label}</label>
          <input
            id="currency"
            type="number"
            value={amount}
            onChange={(e) =>
              onAmountChange && onAmountChange(Number(e.target.value))
            }
            className="input input-bordered w-full max-w-xs mt-2"
            disabled={isAmountDisabled}
          />
        </div>
        <div>
          <p className="mb-2">Currency Type</p>
          <select
            className="select select-bordered w-full max-w-xs"
            value={selectedCurrency}
            onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
            disabled={isCurrencyDisabled}
          >
            {currencyOptions.map((currency) => (
              <option key={currency} value={currency}>{currency}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
