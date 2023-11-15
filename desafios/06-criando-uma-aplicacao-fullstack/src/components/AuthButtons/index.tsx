import { AuthButton, Container } from "./styles"

export function AuthButtons() {
  return (
    <Container>
      <AuthButton>
        <img src="/images/icons/google.svg" alt="Google Logo" />
        Login with Google
      </AuthButton>
      <AuthButton>
        <img src="/images/icons/github.svg" alt="Github Logo" />
        Login with Github
      </AuthButton>
      <AuthButton>
        <img src="/images/icons/rocket.svg" alt="Rocket Logo" />
        Login as a guest
      </AuthButton>
    </Container>
  )
}