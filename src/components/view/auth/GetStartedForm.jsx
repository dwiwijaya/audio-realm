import Container from '@/components/layout/Container'
import { useUser } from '@/context/user';
import useDebounce from '@/hooks/useDebounce';
import getDocument from '@/services/firebase/crud/getDocument';
import { updateDocument } from '@/services/firebase/crud/updateDocument';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const GetStartedForm = () => {
    const user = useUser();
    const {uid} = user;

    const router = useRouter();
    const [formStep, setFormStep] = useState(1)
    const [formData, setFormData] = useState({
        username: '',
        fullName: '',
        userType: 'newbie',
        status: 1
    });
    const [usernameErr, setUsernameErr] = useState('');
    const [LoadingCheckCheck, setLoadingCheckCheck] = useState(false);
    const debounceCheck = useDebounce(formData.username)

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name == 'username') {
            setFormData({
                ...formData,
                username: value.replace(/[^a-zA-Z0-9-_]/g, '').toLowerCase()
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleTypeChange = (value) => {
        setFormData({
            ...formData,
            userType: value,
        });
    }

    useEffect(() => {
        const checkUsername = async () => {
            setLoadingCheckCheck(true)
            if (formData.username != '') {
                const { result } = await getDocument('user', formData.username, false, 'username');
                if (Object.keys(result).length !== 0 && result.uid !== uid) {
                    setUsernameErr(true);
                } else {
                    setUsernameErr(false);
                }
                setLoadingCheckCheck(false)
            }
        }
        checkUsername()
    }, [debounceCheck])

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            if (formStep == 2) {
                const { success, error } = await updateDocument('user',uid, formData);

                if (success) {
                    toast.success(`Account Created successfully`);
                } else {
                    setLoading(false);
                    toast.error(`Failed to save`);
                    console.error("Error:", error);
                }
                router.push('/'); // Redirect ke halaman dashboard setelah signup
            } else {
                setFormStep(formStep + 1)
            }
        } catch (error) {
            console.error('Error completing sign-up:', error.message);
        }
    };

    const userTypes = [
        { label: 'Newbie', 'icon': 'leaf' },
        { label: 'Expert', 'icon': 'crown' },
    ]

    return (
        <main className='flex justify-center items-center h-[100vh]'>
            <div className="min-w-[80%]">
                <form className='' onSubmit={handleSignup}>
                    {formStep == 1 ?
                        <>
                            <div className="mb-12">
                                <h2 className='text-center text-3xl font-bold'>Welcome! Let’s create your profile</h2>
                                <p className='text-center '>Let others get to know you better!</p>
                            </div>
                            <div className="p-1 flex gap-2 justify-center">
                                <div>
                                    <label className='font-bold' htmlFor="">Username</label>
                                    <input className='input-form' name='username' type="text" value={formData.username} onChange={handleChange} required />
                                </div>
                                <div>
                                    <label className='font-bold' htmlFor="">Full Name</label>
                                    <input className='input-form' name='fullName' type="text" value={formData.fullName} onChange={handleChange} required />
                                </div>
                            </div>
                            <div className="flex gap-2 justify-center">
                                <button className='mt-8 btn bg-secondary !w-fit !rounded-xl ' type='submit'>Continue</button>
                            </div>
                        </>
                        :
                        <>
                            <div className="mb-12">
                                <h2 className='text-center text-3xl font-bold'>First things first</h2>
                                <p className='text-center '>Would you consider yourself a beginner or an expert?</p>
                            </div>
                            <div className="flex justify-center gap-3">
                                {userTypes.map((type, i) => (
                                    <div
                                        key={i}
                                        className={`relative cursor-pointer flex items-center gap-2 card !px-3 ${formData.userType === type.label.toLowerCase() ? '!border-slate-950 text-slate-950' : ''}`}
                                        onClick={() => handleTypeChange(type.label.toLowerCase())}
                                    >
                                        <div className={`p-1 transition-base bx bx-${type.icon} ${formData.userType === type.label.toLowerCase() ? ' bg-secondary rounded-md' : ''}`}></div> {`I'am a ${type.label}`}
                                    </div>
                                ))}

                            </div>
                            <div className="flex gap-2 justify-center">

                                <button className='mt-8 btn bg-secondary !w-fit !rounded-xl' onClick={() => setFormStep(formStep - 2)} >Back</button>
                                <button className='mt-8 btn bg-secondary !w-fit !rounded-xl' type='submit'>Continue</button>
                            </div>
                        </>
                    }
                </form>
            </div >
        </main >
    )
}

export default GetStartedForm