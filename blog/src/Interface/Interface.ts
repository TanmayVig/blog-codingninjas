import {ReactNode, MouseEvent} from 'react';
export interface ElementProp{
    title: string,
    description: string,
    image?: string,
    _id: string,
}

export interface BlogProp extends ElementProp{
    id?: number
}

export interface ButtonProp{
    children: ReactNode,
    color: string,
    onClick: (event: MouseEvent) => void,
}