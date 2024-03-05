import React, { TextareaHTMLAttributes } from 'react';

interface InputTextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  containerClassName?: string;
  darkMode?: boolean;
  labelText?: string;
  overlapGroupClassName?: string;
  placeholderText?: string;
  resizerClassName?: string;
  status?: string;
}

const InputTextArea: React.FC<InputTextAreaProps> = ({
  className,
  containerClassName,
  darkMode,
  labelText,
  overlapGroupClassName,
  placeholderText,
  resizerClassName,
  status,
  ...props
}) => {
  return (
    <div className={containerClassName}>
      {labelText && <label>{labelText}</label>}
      <textarea
        className={`${className} ${overlapGroupClassName} ${resizerClassName}`}
        placeholder={placeholderText}
        {...props} // Spread the rest of the props to the textarea element
      />
    </div>
  );
};

export default InputTextArea;