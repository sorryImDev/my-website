import React from 'react';
import Button from '@mui/material/Button';

interface ButtonProps {
  text: string;
  onClick: () => void;
  icon?: React.ReactNode
  className?: string;
  style?: React.CSSProperties;
}

const CustomButton: React.FC<ButtonProps> = ({
  text,
  onClick,
  icon,
  className,
  style,
}) => {
  return (
    <Button
    variant="contained"
    startIcon={icon}
    className={className}
    onClick={onClick}
    style={{fontSize : '16px', backgroundColor : 'var(--app-blue)', fontFamily: 'var(--manrope-font)', borderRadius: '8px', padding: '12px 20px', whiteSpace: 'nowrap'}}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
