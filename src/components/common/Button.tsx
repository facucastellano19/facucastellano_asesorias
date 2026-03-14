import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'outline';
  className?: string;
}

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}: ButtonProps) => {
  
  const baseStyles = "px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2 w-full md:w-fit cursor-pointer active:scale-95";
  
  const variants = {
    primary: "bg-brand-red text-white hover:bg-red-600 shadow-lg shadow-red-500/20",
    outline: "border border-white/20 text-white hover:bg-white/10"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;