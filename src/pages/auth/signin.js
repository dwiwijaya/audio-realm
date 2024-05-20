import Container from '@/components/layout/Container'
import SigninForm from '@/components/view/auth/SigninForm'
import WithUnprotected from '@/hoc/withUnprotected'
import React from 'react'

const signin = () => {
  return (
    <Container>
        <SigninForm/>
    </Container>
  )
}

export default WithUnprotected(signin) 