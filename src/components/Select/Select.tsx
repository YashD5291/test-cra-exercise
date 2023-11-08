import { FC } from "react";
import styles from "./Select.module.scss";

export type OptionType = { value: string; label: string };

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: OptionType[];
}

const Select: FC<SelectProps> = ({ label, options, ...selectAttrs }) => {
  return (
    <div className={styles.selectWrap}>
      {label && (
        <label className={styles.label} htmlFor={""}>
          {label}
        </label>
      )}
      <div className={styles.selectRootWrap}>
        <select className={styles.selectRoot} {...selectAttrs}>
          {options.map((o) => (
            <option value={o.value}>{o.label}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Select;
