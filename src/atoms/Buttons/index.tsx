import { ButtonHTMLAttributes, useMemo } from 'react';
import { ClipLoader } from 'react-spinners';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  variant:
    | 'filled'
    | 'transparent'
    | 'outlined'
    | 'light'
    | 'underlined'
    | 'danger';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = ({
  text,
  variant,
  className,
  children,
  isLoading,
  leftIcon,
  rightIcon,
  ...rest
}: IButtonProps) => {
  const style = useMemo(() => {
    switch (variant) {
      case 'filled':
        return 'button-filled';
      case 'light':
        return 'button-light';
      case 'outlined':
        return 'button-outlined';
      case 'transparent':
        return 'button-transparent';
      case 'underlined':
        return 'button-underlined';
      case 'danger':
        return 'button-danger';
      default:
        break;
    }
  }, [variant]);

  return (
    <button
      className={`button group cursor-pointer ${style} ${className}`}
      {...rest}
    >
      {isLoading ? (
        <ClipLoader
          color="#ffffff"
          size={20}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <>
          {leftIcon}
          {children || (
            <p className={`${leftIcon && 'ml-2'} ${rightIcon && 'mr-2'}`}>
              {text}
            </p>
          )}
          {rightIcon}
        </>
      )}
    </button>
  );
};

export default Button;
