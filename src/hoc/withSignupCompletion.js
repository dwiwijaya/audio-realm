import { useUser } from '@/context/user';
import { useRouter } from 'next/router'

const WithSignupCompletion = (Pages) => {
    return (props) => {
        const router = useRouter();
        const user = useUser();
        const { uid,status } = user;
        
        if (uid && status == 1) {
            router.replace('/');
            return <></>
        } else if(!uid){
            router.replace('/auth/signin');
            return <></>
        }
        return <Pages {...props} />
    }
}

export default WithSignupCompletion