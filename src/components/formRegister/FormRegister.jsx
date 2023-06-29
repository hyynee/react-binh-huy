import React from 'react'
import {
  Button,
  Group,
  LoadingOverlay,
  PasswordInput,
  Radio,
  Stack,
  Text,
  TextInput,
} from '@mantine/core'
import { useForm, yupResolver } from '@mantine/form'
import { registerSchema } from 'services/yup/schema'
import { useDisclosure } from '@mantine/hooks'
import userAPI from 'services/api/userAPI'
import { modals } from '@mantine/modals'
import { toast } from 'react-hot-toast'
import openLogin from '../formLogin/openLogin'

export default function FormRegister() {
  /* Hook Init */
  const [visible, { open, close }] = useDisclosure(false)
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
      name: '',
      phone: '',
      gender: undefined,
    },
    validate: yupResolver(registerSchema),
    transformValues: (values) => {
      const valuesTransForm = {}
      for (const key in values) {
        valuesTransForm[key] = values[key].trim()
      }
      return valuesTransForm
    },
  })
  /* Logic */
  const submitForm = (data) => {
    toast.dismiss()
    open()
    const result = userAPI.signup(data).finally(close)
    toast.promise(result, {
      loading: 'Loading',
      success: (data) => {
        modals.closeAll()
        openLogin()
        return `${data.message}`
      },
      error: (err) => `${err.message}`,
    })
  }
  return (
    <>
      <LoadingOverlay visible={visible} overlayBlur={2} />
      <Text fw={'bold'} fz={24} ta={'center'} mb={20} color="white">
        Register
      </Text>
      <form onSubmit={form.onSubmit((data) => submitForm(data))}>
        <Stack>
          <TextInput
            {...form.getInputProps('email')}
            label="Email"
            withAsterisk
          />
          <PasswordInput
            {...form.getInputProps('password')}
            label="Password"
            withAsterisk
          />
          <TextInput
            {...form.getInputProps('name')}
            label="Name"
            withAsterisk
          />
          <TextInput
            {...form.getInputProps('phone')}
            label="Phone"
            withAsterisk
          />
          <Radio.Group
            {...form.getInputProps('gender')}
            mb={10}
            label="Select your gender"
            withAsterisk
          >
            <Group my={5}>
              <Radio value={'true'} label="Male" />
              <Radio value={'false'} label="Female" />
            </Group>
          </Radio.Group>
          <Button type="submit">Register</Button>
        </Stack>
      </form>
    </>
  )
}
