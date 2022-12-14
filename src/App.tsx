import { Heading } from './components/Heading';
import { Text } from './components/Text';
import { Logo } from './logo';
import { TextInput } from './components/TextInput';
import { Button } from './components/Button';

import './styles/global.css';
import { Envelope } from 'phosphor-react';
import { Lock } from 'phosphor-react';
import { Checkbox } from './components/Checkbox';



export function App() {
  return (
    <div className="w-screen h-screen bg-grey-900 flex flex-col items-center justify-center text-grey-100">
      <header className="flex flex-col items-center ">
        <Logo />
        
        <Heading size='lg' className="mt-4">      
          Ignite Lab
        </Heading>
      
      
        <Text size='lg' className="text-grey-400 mt-1">
          Faça login e comece a usar
        </Text>
      </header>
      <form className="flex flex-col gap-4 items-strecht w-full max-w-sm mt-10">
        <label htmlFor="email" className="flex flex-col gap-3">
          <text className="font-semibold">Endereço de e-mail</text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            
            </TextInput.Icon>
            <TextInput.Input type="email" id="email" placeholder="Digite o seu e-mail" />
          </TextInput.Root>
        </label>

        <label htmlFor="email" className="flex flex-col gap-3">
          <text className="font-semibold">Digite sua senha</text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            
            </TextInput.Icon>
            <TextInput.Input type="password" id="password" placeholder="********" />
          </TextInput.Root>
        </label>

        <label htmlFor="remenber" className="flex items-center gap-2">
          <Checkbox />
          <Text size="sm">Lembrar-me de mim</Text>
        </label>

        <Button type="submit" className="mt-4">Entrar na plataforma</Button>

      </form> 
      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text asChild size="sm">
         <a href="" className="text-grey-400 underline  hover:text-grey-300">Esqueceu sua senha?</a>
        </Text>
        <Text asChild size="sm">
          <a href="" className="text-grey-400 underline  hover:text-grey-300" >Não possui conta? Crie uma agora!</a>
        </Text>
      </footer>
      

      

    </div>
  )
}


