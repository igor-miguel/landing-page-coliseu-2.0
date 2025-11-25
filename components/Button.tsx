import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline';
    children: React.ReactNode;
    fullWidth?: boolean;
    href?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
    variant = 'primary', 
    children, 
    fullWidth = false,
    href,
    className = '',
    ...props 
}) => {
    const baseStyles = "inline-flex items-center justify-center font-bold uppercase tracking-widest transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden";
    
    const variants = {
        primary: "bg-gradient-to-br from-gold-500 via-gold-400 to-gold-600 text-black shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:shadow-[0_10px_40px_rgba(212,175,55,0.4)]",
        outline: "border border-gold-400/30 text-gold-400 hover:bg-gold-400 hover:text-black"
    };

    const widthClass = fullWidth ? "w-full" : "";
    const paddingClass = "px-8 py-4 text-sm md:text-base";

    const classes = `${baseStyles} ${variants[variant]} ${widthClass} ${paddingClass} ${className}`;

    if (href) {
        return (
            <a href={href} className={classes}>
                {children}
            </a>
        );
    }

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
};