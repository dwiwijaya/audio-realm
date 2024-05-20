import { Authentication } from '@/services/firebase/config'
import { useEffect, useState } from 'react'
import { useUser, InitialUserState } from './user';
import getDocument from '@/services/firebase/crud/getDocument';
import { useRouter } from 'next/router';

export const AuthStateChangeProvicer = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();
    const user = useUser();
    const { setUser } = user;

    const initiateAuthStateChange = async () => {
        Authentication().onAuthStateChanged(async (user) => {
            if (user) {
                const uid = user.uid
                console.log("user authenticated");
                const { result } = await getDocument('user', uid)
                const { status } = result
                setUser(result)
                
                if (status === -1) {
                    router.replace('/auth/getting-started');
                }
            } else {
                console.log("user not authenticated");
                setUser(InitialUserState)
            }
            setIsLoading(false)
        })
    }
    useEffect(() => {
        initiateAuthStateChange()
    }, [])

    if (isLoading) {
        return <div className='flex justify-center items-center h-[100vh]'><i className=' text-subtext text-3xl bx bx-loader-alt bx-spin' ></i></div>
    }

    return children
}