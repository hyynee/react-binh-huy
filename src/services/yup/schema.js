import * as Yup from 'yup'
import errMess from './errorMessage'
import { regexNumber, regexPassword } from './regex'
import capitalizeStr from 'utils/method'

Yup.setLocale({
  mixed: {
    required: ({ path }) => `${capitalizeStr(path)} is required`,
  },
  string: {
    email: ({ path }) => `${capitalizeStr(path)} is invalid`,
    max: ({ path, max }) => `${capitalizeStr(path)} max ${max} character`,
    min: ({ path, min }) => `${capitalizeStr(path)} min ${min} character`,
  },
})

const registerSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string()
    .matches(regexPassword, errMess.password)
    .required()
    .max(20),
  name: Yup.string().required(),
  phone: Yup.string().matches(regexNumber, errMess.phone).min(10).required(),
  gender: Yup.boolean().required(),
})

const loginSchema = Yup.object().shape({
  email: Yup.string().required(),
  password: Yup.string().required(),
})

export { registerSchema, loginSchema }
