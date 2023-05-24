import { ContanerCard, Text } from './styles'

export default function Card({ data }) {
  return (
    <div>
      <ContanerCard>
        <div>
          <text>{data[0]}</text>
        </div>
        <div>
          <Text>Nome do titular</Text>
          <Text>{data[1]}</Text>
        </div>
        <div>
          <Text>Expiração</Text>
          <Text>{data[2]}</Text>
        </div>
        <div>
          <Text>CVC</Text>
          <Text>{data[3]}</Text>
        </div>
      </ContanerCard>
    </div>
  )
}
