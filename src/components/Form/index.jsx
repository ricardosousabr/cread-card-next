import {
  ContainerForm,
  InputLarge,
  BoxInputSmall,
  InputSmall,
  Text,
  BoxButton,
} from './styles'

export default function Form() {
  return (
    <div>
      <div>
        <ContainerForm action="">
          <div>
            <Text>Número do cartão</Text>
            <InputLarge type="number" />
          </div>
          <div>
            <Text>Nome do titular</Text>
            <InputLarge type="number" />
          </div>
          <BoxInputSmall>
            <div>
              <Text>Expiração</Text>
              <InputSmall type="number" />
            </div>
            <div>
              <Text>CVC</Text>
              <InputSmall type="number" />
            </div>
          </BoxInputSmall>
          <BoxButton>
            <button>Adicionar</button>
          </BoxButton>
        </ContainerForm>
      </div>
    </div>
  )
}
