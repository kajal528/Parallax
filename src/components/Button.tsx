import React from "react";
import { Play } from "../Icons/Icons";

export interface ButtonProps {
  type: ButtonTypes;
  children: string;
  onClick?: () => void;
}

export enum ButtonTypes {
  Primary = "primary",
  Secondary = "secondary",
}

const Button: React.FC<ButtonProps> = ({
  type,
  children,
  onClick,
}: ButtonProps) => {
  const isPrimary = type === ButtonTypes.Primary;

  function handleOnClick() {}

  return (
    <button
      className={` h-12 rounded-lg  ${!isPrimary ? "p-[2px] w-28" : " w-32"} bg-gradient-to-br from-primary to-secondary`}
      onClick={handleOnClick}
    >
      <div
        className={` w-full h-full ${!isPrimary ? "bg-white" : " text-white font-bold"} px-2 py-1 rounded-lg text-center inline-flex justify-center items-center`}
      >
        <span>{children}</span>
      </div>
    </button>
  );
};

const PlayButton: React.FC= () => {

  function handleOnClick() {}

  return (
    <button
      className={` size-12 rounded-full bg-gradient-to-br from-primary to-secondary px-[1px] py-[1px]`}
      onClick={handleOnClick}
    >
      <div
        className={` w-full h-full rounded-full border-4 border-white bg-gradient-to-br from-primary to-secondary flex items-center justify-center`}
      >
        <Play height={'20'} width={'20'} />
      </div>
    </button>
  );
};

export { Button, PlayButton };
