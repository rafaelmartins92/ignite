import { AuthButtons } from "@/components/AuthButtons";
import { Heading, Text } from "@/components/Typography";
import { LoginContainer, LoginSection, WelcomeSection } from "@/styles/pages/login";
import Image from "next/image";

export default function Login() {
  return (
    <LoginContainer>
      <LoginSection>
        <Image src="/images/logo.svg" alt="BookWise Logo" width={232} height={58} />
      </LoginSection>

      <WelcomeSection>
        <Heading size="lg" color="gray-100">Welcome!</Heading>
        <Text color="gray-200">Log in or access as a guest.</Text>
        <AuthButtons />
      </WelcomeSection>
    </LoginContainer>
  )
}