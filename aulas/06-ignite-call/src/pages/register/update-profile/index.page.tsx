import {
  Avatar,
  Button,
  Heading,
  MultiStep,
  Text,
  TextArea,
} from '@orafadev-ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSession } from 'next-auth/react'
import { GetServerSideProps } from 'next'
import { getServerSession } from 'next-auth'
import { useRouter } from 'next/router'

import { buildNextAuthOptions } from '../../api/auth/[...nextauth].api'
import { api } from '../../../lib/axios'

import { Container, Header } from '../styles'

import { FormAnnotation, ProfileBox } from './styles'

const updateFormSchema = z.object({
  bio: z.string(),
})

type UpdateFormData = z.infer<typeof updateFormSchema>

export default function UpdateProfile() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<UpdateFormData>({
    resolver: zodResolver(updateFormSchema),
  })

  const session = useSession()
  const router = useRouter()

  async function handleUpdateProfile(data: UpdateFormData) {
    await api.put('/users/profile', {
      bio: data.bio,
    })

    await router.push(`/schedule/${session.data?.user.username}`)
  }

  return (
    <Container>
      <Header>
        <Heading as="strong">Set your availability</Heading>
        <Text>Finally, a short description and a profile picture.</Text>

        <MultiStep size={4} currentStep={4} />
      </Header>

      <ProfileBox as="form" onSubmit={handleSubmit(handleUpdateProfile)}>
        <label>
          <Text size="sm">Profile picture</Text>
          <Avatar
            src={session.data?.user.avatar_url}
            alt={session.data?.user.name}
          />
        </label>

        <label>
          <Text size="sm">About you</Text>
          <TextArea {...register('bio')} />
          <FormAnnotation size="sm">
            Talk a little about yourself. This will be displayed on your
            personal page.
          </FormAnnotation>
        </label>

        <Button type="submit" disabled={isSubmitting}>
          Finish <ArrowRight />
        </Button>
      </ProfileBox>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getServerSession(
    req,
    res,
    buildNextAuthOptions(req, res),
  )

  return {
    props: {
      session,
    },
  }
}
