
/**
 * Indian Currency formatting utilities
 * Provides consistent INR formatting across the application
 */

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount);
};

export const formatCurrencyCompact = (amount: number): string => {
  if (amount >= 10000000) { // 1 crore
    return `₹${(amount / 10000000).toFixed(1)}Cr`;
  } else if (amount >= 100000) { // 1 lakh
    return `₹${(amount / 100000).toFixed(1)}L`;
  } else if (amount >= 1000) { // 1 thousand
    return `₹${(amount / 1000).toFixed(1)}K`;
  }
  return `₹${amount.toLocaleString('en-IN')}`;
};

export const parseCurrency = (currencyString: string): number => {
  return parseFloat(currencyString.replace(/[₹,]/g, ''));
};

// Additional utility for displaying currency without symbol (for calculations)
export const formatCurrencyPlain = (amount: number): string => {
  return new Intl.NumberFormat('en-IN', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount);
};

// Format currency for display in tables and cards
export const formatCurrencyDisplay = (amount: number, compact: boolean = false): string => {
  return compact ? formatCurrencyCompact(amount) : formatCurrency(amount);
};
