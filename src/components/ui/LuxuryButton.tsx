import { ReactNode } from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
}

export default function LuxuryButton({ children, variant = 'primary', className = '', ...props }: Props) {
  const styles = variant === 'primary'
    ? 'bg-primary text-white hover:bg-primary-hover shadow-glow'
    : 'bg-surface-2 text-text-primary hover:bg-surface-3 border border-border';
  return <button className={`inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background ${styles} ${className}`} {...props}>{children}</button>;
}