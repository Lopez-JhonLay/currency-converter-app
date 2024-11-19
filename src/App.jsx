import { useState } from "react";
import "./App.css";
import { InputBox } from "./components/index";
import useCurrencyInfo from "./components/hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("php");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    console.log(typeof amount, amount);

    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
      }}
    >
      <div className="w-full -mt-3">
        <div className="w-full max-w-lg mx-auto border border-gray-60 rounded-lg p-7 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                onAmountChange={(amount) => setAmount(amount)}
                selectedCurrency={from}
              ></InputBox>
            </div>
            {/* <div className="relative w-full h-0.5">
              <button
                onClick={swap}
                className="absolute left-1/2 -transalate-x-1/2 -transalate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
              >
                Swap
              </button>
            </div> */}
            <div className="w-full mb-1">
              <InputBox
                label="To"
                amount={convertedAmount}
                isAmountDisabled={true}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectedCurrency={to}
              ></InputBox>
            </div>
            <button type="submit" className="w-full btn btn-success text-white mb-2">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
            <button onClick={swap} className="w-full btn btn-primary text-white">
              SWAP
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
