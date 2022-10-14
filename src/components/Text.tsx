import { Slot } from '@radix-ui/react-slot';
import {clsx} from 'clsx'; 
import { Children } from 'react';

export interface TextProps {
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
    asChild?: boolean;
}

export function Text({ size = 'md', Children, asChild }: TextProps) {
    const Comp = asChild ? Slot : 'span';

    return (
        <Comp 
        className={clsx(
            'text-grey-100 font-sans',
            {
              'text-xs': size === 'sm',
              'text-sm': size === 'md',
              'text-md': size === 'lg',

             }
            )}
        >
            {Children}
            </Comp>
    )
}