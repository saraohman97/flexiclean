import React, { useEffect, useState } from 'react'
import { addDoc, collection, serverTimestamp, doc, getDoc, updateDoc } from '@firebase/firestore'
import { getDownloadURL, ref, uploadBytesResumable } from '@firebase/storage'
import { db, storage } from '../../firebase'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

const NewPost = () => {
    const navigate = useNavigate()
    const date = new Date()
    const [error, setError] = useState(false)
    const [form, setForm] = useState({
        title: "",
        body: "",
        dDate: date.getDate(),
        dMonth: date.getMonth(),
        dYear: date.getFullYear(),
    })

    //Upload file to storage
    const [file, setFile] = useState(null)
    const [progress, setProgress] = useState(null)

    useEffect(() => {
        const uploadFile = () => {
            const storageRef = ref(storage, file.name);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on("state_change", (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log("Upload is " + progress + "% done.");
                setProgress(progress)
                switch (snapshot.state) {
                    case "paused":
                        console.log("Upload is paused");
                        break;
                    case "running":
                        console.log("Upload is running");
                        break;
                    default:
                        break;
                }
            }, (error) => {
                console.log(error)
            },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
                        setForm((prev) => ({ ...prev, imgUrl: downloadUrl }));
                    })
                })
        }
        file && uploadFile();
    }, [file])


    //edit post
    const { id } = useParams()

    useEffect(() => {
        id && getPostDetail();
    }, [id])

    const getPostDetail = async () => {
        const docRef = doc(db, 'posts', id);
        const snapshot = await getDoc(docRef);
        if (snapshot.exists()) {
            setForm({ ...snapshot.data() })
        }
    }


    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (form.title === '' || form.body === '') {
            setError(true)
        } else {
            setError(false)

            if (!id) {
                try {
                    await addDoc(collection(db, 'posts'), {
                        ...form,
                        timestamp: serverTimestamp(),
                    })
                    toast.success('The post was successfylly created!')
                    navigate('/')

                } catch (err) {
                    console.log(err)
                }
            } else {
                try {
                    await updateDoc(doc(db, 'posts', id), {
                        ...form,
                        timestamp: serverTimestamp(),
                    })
                    toast.success('The post was successfully updated!')
                    navigate('/')

                } catch (err) {
                    console.log(err)
                }
            }
        }

    }

    return (
        <div className="container mx-auto my-40">
            {/* form */}
            <form onSubmit={handleSubmit} className='flex flex-col gap-4 mx-40'>
                <h3 className='text-4xl'>{id ? 'Uppdatera en artikel' : 'Skapa en artikel'}</h3>

                <div className='relative'>
                    <label htmlFor="text" className='absolute top-2 left-2 text-sm text-gray-400'>Titel</label>
                    <input
                        value={form.title}
                        name='title'
                        onChange={handleChange}
                        type="text"
                        className='border rounded px-5 pt-8 pb-5 w-full'
                    />
                </div>

                <div className='relative'>
                    <label htmlFor="text" className='absolute top-2 left-2 text-sm text-gray-400'>Text</label>
                    <textarea
                        value={form.firstParagraph}
                        name='body'
                        onChange={handleChange}
                        type="text"
                        className='border rounded px-5 pt-8 pb-5 w-full'
                    />
                </div>

                <input
                    accept="image/png,image/jpeg"
                    onChange={(e) => setFile(e.target.files[0])}
                    type="file"
                    className=''
                />

                {error && <span className='text-red-500 mt-4'>Post must contain a title and text.</span>}
                <button
                    disabled={progress !== null && progress < 100}
                    className={
                        progress !== null && progress < 100 ? 'w-20 bg-blue-400 rounded-full self-start'
                            : 'w-40 h-12 text-white bg-blue-400 rounded-full self-start'
                    }>
                    {progress !== null && progress < 100 && 'Vänta...'}
                    {id ? 'Uppdatera' : 'Posta'}
                </button>
            </form>
        </div>
    )
}

export default NewPost