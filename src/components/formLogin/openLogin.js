import { modals } from '@mantine/modals'
import modalCenter from 'HOC/modalCenter'
import FormLogin from './FormLogin'

export default function openLogin() {
  modals.closeAll()
  modalCenter(FormLogin)
}
