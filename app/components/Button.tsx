'use client';

import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import classNames from 'classnames';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 active:scale-[0.98]',
  {
    variants: {
      variant: {
        primary:
          'bg-gradient-primary text-white shadow-lg shadow-primary-500/20 hover:shadow-xl hover:shadow-teal-500/30 hover:-translate-y-0.5',
        secondary:
          'bg-white/80 dark:bg-white/5 backdrop-blur text-primary-700 dark:text-teal-300 border border-primary-200 dark:border-white/10 hover:border-primary-400 dark:hover:border-teal-400 hover:bg-white dark:hover:bg-white/10',
        outline:
          'border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800',
        ghost: 'text-primary-600 dark:text-teal-400 hover:bg-primary-50 dark:hover:bg-slate-800',
        danger: 'bg-red-600 text-white hover:bg-red-700',
      },
      size: {
        xs: 'px-3 py-1.5 text-sm',
        sm: 'px-5 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
        xl: 'px-10 py-5 text-xl',
      },
      fullWidth: {
        true: 'w-full',
        false: 'w-auto',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      fullWidth: false,
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      isLoading,
      disabled,
      children,
      ...props
    },
    ref
  ) => (
    <button
      ref={ref}
      className={classNames(
        buttonVariants({ variant, size, fullWidth }),
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          Loading...
        </>
      ) : (
        children
      )}
    </button>
  )
);

Button.displayName = 'Button';

export default Button;
