import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
// import "./App.css";
import { styles } from "./Appstyle";
function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      className={styles.page}
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/8991558/pexels-photo-8991558.jpeg')`,
      }}
    >
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className={styles.inputWrapperTop}>
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>

            <div className={styles.swapContainer}>
              <button type="button" className={styles.swapBtn} onClick={swap}>
                Swap
              </button>
            </div>

            <div className={styles.inputWrapperBottom}>
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(curr) => setTo(curr)}
                selectCurrency={to}
                amountDisable
              />
            </div>

            <button type="submit" className={styles.submitBtn}>
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
