import { useState } from 'react'
import Button from '../Button'
import Card from '../Card'
import {
  ContainerForm,
  InputLarge,
  BoxInputSmall,
  InputSmall,
  Text,
  BoxButton,
} from './styles'

export default function Form() {
  const [numberCArd, SetNumberCArd] = useState('')
  const [cardholderName, SetCardholderName] = useState('')
  const [expirationCard, SetExpirationCard] = useState('')
  const [numberCvc, SetNumberCvc] = useState('')
  const data = [numberCArd, cardholderName, expirationCard, numberCvc]

  return (
    <div>
      <div>
        <Card data={data} />
      </div>
      <div>
        <ContainerForm action="">
          <div>
            <Text>Número do cartão</Text>
            <InputLarge
              type="number"
              onChange={(e) => {
                SetNumberCArd(e.target.value)
              }}
            />
          </div>
          <div>
            <Text>Nome do titular</Text>
            <InputLarge
              type="text"
              onChange={(e) => {
                SetCardholderName(e.target.value)
              }}
            />
          </div>
          <BoxInputSmall>
            <div>
              <Text>Expiração</Text>
              <InputSmall
                type="date"
                onChange={(e) => {
                  SetExpirationCard(e.target.value)
                }}
              />
            </div>
            <div>
              <Text>CVC</Text>
              <InputSmall
                type="number"
                onChange={(e) => {
                  SetNumberCvc(e.target.value)
                }}
              />
            </div>
          </BoxInputSmall>
          <BoxButton>
            <Button>Adicionar</Button>
          </BoxButton>
        </ContainerForm>
      </div>
    </div>
  )
}
