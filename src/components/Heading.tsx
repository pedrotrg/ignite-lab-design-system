import { Slot } from '@radix-ui/react-slot';
import {clsx} from 'clsx'; 
import { Children } from 'react';

export interface HeadingProps {
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
    asChild?: boolean;
}

export function Heading({ size = 'md', Children, asChild }: HeadingProps) {
    const Comp = asChild ? Slot : 'h2';

    return (
        <Comp 
        className={clsx(
            'text-grey-100 font-bold font-sans',
            {
              'text-lg': size === 'sm',
              'text-xl': size === 'md',
              'text-2xl': size === 'lg',

             }
            )}
        >
            {Children}
            </Comp>
    )
}