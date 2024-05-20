import Container from '@/components/layout/Container'
import GetStartedForm from '@/components/view/auth/GetStartedForm'
import WithProtected from '@/hoc/withProtected'
import React from 'react'

const getStarted = () => {
  return (
      <GetStartedForm />
  )
}

export default WithProtected(getStarted)
