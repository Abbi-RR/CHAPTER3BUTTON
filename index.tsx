import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  type: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
};

export const ButtonSuccess = ({ children, type, onClick, className }: Props) => {
  return (
    <button
      className={`text-sm bg-green-600 text-white rounded-md py-2 px-4 hover:bg-green-700 font-bold ${className}`}
      type={type}
      onClick={() => onClick && onClick()}
    >
      {children}
    </button>
  );
};

export const ButtonWarning = ({ children, type, onClick, className }: Props) => {
  return (
    <button
      className={`text-sm bg-yellow-500 text-white rounded-md py-2 px-4 hover:bg-yellow-600 font-bold ${className}`}
      type={type}
      onClick={() => onClick && onClick()}
    >
      {children}
    </button>
  );
};

export const ButtonDanger = ({ children, type, onClick, className }: Props) => {
  return (
    <button
      className={`text-sm bg-red-600 text-white rounded-md py-2 px-4 hover:bg-red-700 font-bold ${className}`}
      type={type}
      onClick={() => onClick && onClick()}
    >
      {children}
    </button>
  );
};

export const ButtonOutlineSuccess = ({ children, type, onClick, className }: Props) => {
  return (
    <button
      className={`text-sm bg-red-600 text-white rounded-md py-2 px-4 hover:bg-red-700 font-bold ${className}`}
      type={type}
      onClick={() => onClick && onClick()}
    >
      {children}
    </button>
  );
};

export const ButtonOutlineDanger = ({ children, type, onClick, className }: Props) => {
  return (
    <button
      className={`text-sm bg-white text-green-500 border border-green-500 rounded-md py-2 px-4 hover:bg-green-500 hover:text-white font-bold ${className}`}
      type={type}
      onClick={() => onClick && onClick()}
    >
      {children}
    </button>
  );
};


export const ButtonOutlineInfo = ({ children, type, onClick, className }: Props) => {
  return (
    <button
      className={`text-sm bg-white text-blue-500 border border-blue-500 rounded-md py-2 px-4 hover:bg-blue-500 hover:text-white font-bold ${className}`}
      type={type}
      onClick={() => onClick && onClick()}
    >
      {children}
    </button>
  );
};
