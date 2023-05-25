import {
  ContanerCard,
  TitleDate,
  NumberCard,
  CardholderName,
  CardExpiration,
  CardCvc,
} from './styles'

export default function Card({ data }) {
  return (
    <ContanerCard>
      <div>
        <NumberCard>{data[0]}</NumberCard>
      </div>
      <div>
        <TitleDate>Nome do titular</TitleDate>
        <CardholderName>{data[1]}</CardholderName>
      </div>
      <div>
        <TitleDate>Expiração</TitleDate>
        <CardExpiration>{data[2]}</CardExpiration>
      </div>
      <div>
        <TitleDate>CVC</TitleDate>
        <CardCvc>{data[3]}</CardCvc>
      </div>
    </ContanerCard>
  )
}
