import { Meta, StoryObj} from '@storybook/react'
import { Text, TextProps } from './Text'

export default {
    title: 'Components/Text',
    component: Text,
    args: {
        Children: 'Lorem Ipsum.', 
        size: 'md',
    },
    argTypes: {
        size: {
            options: ['sm', 'md','lg'],
            control: {
                type: 'inline-radio'
            }

        }
    }
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {

}

export const Small: StoryObj<TextProps> = {
    args: {
        Children: 'Lorem Ipsum.', 
        size: 'sm',
    }
}

export const Large: StoryObj<TextProps> = { 
    args: {
    Children: 'Lorem Ipsum.', 
    size: 'lg',
}
}

export const CustomComponent: StoryObj<TextProps> = { 
    args: {
        asChild: true ,
        Children: (
            <p>Testando</p>
        )
    },
    argTypes: {
        Children: {
            table: {
                disable: true,
            }
        },
        asChild: {
            table: {
                disable: true,
            }
        }
    }
}

