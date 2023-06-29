import React from 'react'
import {
  Button,
  LoadingOverlay,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from '@mantine/core'
import { useForm, yupResolver } from '@mantine/form'
import { loginSchema } from 'services/yup/schema'
import { useDispatch } from 'react-redux'
import userAPI from 'services/api/userAPI'
import { toast } from 'react-hot-toast'
import { useDisclosure } from '@mantine/hooks'
import { userAction } from 'services/redux/slices/userSlice'
import { modals } from '@mantine/modals'
import userThunk from 'services/redux/thunk/userThunk'

export default function FormLogin() {
  /* Hook Init */
  const [visible, { open, close }] = useDisclosure(false)
  const dispatch = useDispatch()
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },
    validate: yupResolver(loginSchema),
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
    const result = userAPI.signin(data).finally(close)
    toast.promise(result, {
      loading: 'Loading',
      success: (data) => {
        const userLogin = userAction.login(data.content)
        dispatch(userLogin)
        dispatch(userThunk.getProfile())
        dispatch(userThunk.getProductLike())
        modals.closeAll()
        return `${data.message}`
      },
      error: (err) => `${err.message}`,
    })
  }
  return (
    <>
      <LoadingOverlay visible={visible} overlayBlur={2} />
      <Text fw={'bold'} fz={24} ta={'center'} mb={20} color="white">
        Sign In
      </Text>
      <form onSubmit={form.onSubmit((data) => submitForm(data))}>
        <Stack>
          <TextInput {...form.getInputProps('email')} label="Email" />
          <PasswordInput {...form.getInputProps('password')} label="Password" />
          <Button type="submit" mt={10}>
            Sign In
          </Button>
        </Stack>
      </form>
    </>
  )
}
