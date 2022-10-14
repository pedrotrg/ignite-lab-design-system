import { Slot } from '@radix-ui/react-slot';
import {clsx} from 'clsx'; 
import { InputHTMLAttributes, ReactNode } from 'react';

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

interface TextInputRootsProps {
    children: ReactNode;
}
function TextInputRoot(props: TextInputRootsProps){
    return (
        <div className="flex items-center h-12 gap-3 py-4 px-3 rounded bg-grey-800 w-full  focus-within:ring-2 ring-cyan-300">
            {props.children}
        </div>
    )
}

export interface TextInputIconProps {
    children: ReactNode;
}

function TextInputIcon(props: TextInputIconProps) {
    return (
        <slot className="w-6 h-6 text-grey-400 ">
            {props.children}
        </slot>
    )
}

TextInputIcon.displayName = 'TextInput.Icon'

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}


function TextInputInput(props:TextInputInputProps){
    return(
        <input 
            className="bg-transparent w-full flex-1 text-grey-100 text-xs outline-none placeholder:text-grey-400"
            {...props}
        />
    )
}

TextInputInput.displayName = 'TextInput.Input'


export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon,
    
}