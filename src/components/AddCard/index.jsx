import { Container, Title, BoxTitle } from './styles'

export default function AddCard() {
  return (
    <Container>
      <BoxTitle>
        <div>
          {' '}
          <Title>Add your credit card</Title>
        </div>
        <div>
          {' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="32"
            height="32"
          >
            <path
              d="M22.0049 10V20C22.0049 20.5523 21.5572 21 21.0049 21H3.00488C2.4526 21 2.00488 20.5523 2.00488 20V10H22.0049ZM22.0049 8H2.00488V4C2.00488 3.44772 2.4526 3 3.00488 3H21.0049C21.5572 3 22.0049 3.44772 22.0049 4V8ZM15.0049 16V18H19.0049V16H15.0049Z"
              fill="#7d7676"
            ></path>
          </svg>
        </div>
      </BoxTitle>
    </Container>
  )
}
