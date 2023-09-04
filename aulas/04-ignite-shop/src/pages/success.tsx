import Link from 'next/link';
import { ImageContainer, SuccessContainer } from '../styles/pages/success';

export default function Success() {
  return (
    <SuccessContainer>
      <h1>Purchase made!</h1>

      <ImageContainer></ImageContainer>

      <p>
        Uhuul <strong>Rafael</strong>, sua{' '}
        <strong>Camise Beyond the Limts</strong> já está a caminha da sua casa.
      </p>

      <Link href={'/'}>Back to catalog</Link>
    </SuccessContainer>
  );
}
