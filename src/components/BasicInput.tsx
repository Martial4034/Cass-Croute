import React, { ChangeEvent } from 'react';

type InputProps = {
  className?: string;
  darkMode?: boolean;
  frameClassName?: string;
  icon?: string;
  labelText?: string;
  placeholderText?: string;
  state?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

const BasicInput: React.FC<InputProps> = ({
  className,
  darkMode,
  frameClassName,
  icon,
  labelText,
  placeholderText,
  state,
  value,
  onChange,
}) => {
  const inputClassName = `${className} ${darkMode ? 'dark-mode-class' : 'light-mode-class'}`;
  const frameClass = `${frameClassName} additional-frame-styles`;

  return (
    <div className={frameClass}>
      {labelText && <label>{labelText}</label>}
      <input
        type="text"
        className={inputClassName}
        placeholder={placeholderText}
        value={value}
        onChange={onChange}
        // ...other attributes you might need
      />
      {/* icon logic can be implemented here */}
      {/* state logic can be implemented here */}
    </div>
  );
};

export default BasicInput;
