import GetStartedForm from '@/components/view/auth/GetStartedForm'
import WithSignupCompletion from '@/hoc/withSignupCompletion'

const getStarted = () => {
  return (
      <GetStartedForm />
  )
}

export default WithSignupCompletion(getStarted)
