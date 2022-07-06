import React from "react";

export type ButtonProps = {
    children?: React.ReactNode;
    code: string;
    loading: boolean;
    onClick: (e: React.MouseEvent<HTMLFormElement, MouseEvent>) => void;
};