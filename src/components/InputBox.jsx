import React, { useId } from "react";
import { styles } from "./styles";
export default function InputBox({
  label,   // <-- from , to labels
  amount,  // <-- amount value
  onAmountChange, // <-- amount change handler
  onCurrencyChange, // <-- currency change handler
  currencyOptions = [], // <-- currency options for select like usd, inr, etc
  selectCurrency = "usd",  // <-- selected currency value
  amountDisable = false,    // <-- disable amount input when fetching data (otional)
  currencyDisable = false, // <-- disable select when fetching data (otional)
  className = "", // <-- additional tailwind className for container (otional)
}) {

  const amountInputId = useId(); // generating unique id for amount input to associate it with label for better accessibility. useId is a react hook that generates unique id on each render and ensures that it remains the same across renders, so we can safely use it here without worrying about id conflicts or changes on re-render.
 
  return (
    <div className={`${styles.container} ${className}`}>
      <div className={styles.leftSection}>
        <label htmlFor={amountInputId} className={styles.label}>
          {label}
        </label>

        <input
          id={amountInputId}
          className={styles.input}
          type="number"
          placeholder="Amount"
          disabled={amountDisable} // check if amount input should be disabled or not
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value)) // sometimes the return value from event can be string, so converting it to number before passing to handler
          } // call amount change handler when input value changes only if handler is provided
        />
      </div>

      <div className={styles.rightSection}>
        <p className={styles.currencyText}>Currency Type</p>

        <select
          className={styles.select}
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            // react gives warning if we don't provide unique key because it gets confused if it renders same component multiple times
            <option key={currency} value={currency}> 
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
