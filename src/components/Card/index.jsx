export default function Card({ data }) {
  return (
    <div>
      <div>
        <p>{data[0]}</p>
      </div>
      <div>
        <p>Nome do titular</p>
        <p>{data[1]}</p>
      </div>
      <div>
        <p>Expiração</p>
        <p>{data[2]}</p>
      </div>
      <div>
        <p>CVC</p>
        <p>{data[3]}</p>
      </div>
    </div>
  )
}
