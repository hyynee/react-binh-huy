import { modals } from '@mantine/modals'
import modalCenter from 'HOC/modalCenter'
import FormRegister from './FormRegister'

export default function openRegister() {
  modals.closeAll()
  modalCenter(FormRegister)
}
