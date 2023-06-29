import { nprogress } from '@mantine/nprogress'
import React, { useEffect } from 'react'

export default function useNaviProgress() {
  return useEffect(() => {
    nprogress.complete()
  }, [])
}
