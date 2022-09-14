import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import { useMutation } from '@tanstack/react-query'

// interface CreatedUser {
//     email: string;
//     createdAt: string;
//     loginRecords: any[];
//     name: string;
//     picUrl?: string;
//     role: [];
//     updatedAt: string;
//     id: string
// }

const createUser = async (data: { registerToken: string | undefined }) => {
    const res = await axios.post('https://jayweb.online/api/v1/users', data)
    return res
}

function SignSuccess() {
    const params = useParams()
    const { token } = params
    const { mutate, isError, isLoading, isSuccess, error, data } = useMutation(createUser, {
        mutationKey: ['postUsers'],
    })

    useEffect(() => {
        console.info("first")
        mutate({ registerToken: token })
    }, [mutate, token])

    if (isLoading) return <h2>Loading...</h2>
    if (isError) return <pre>{JSON.stringify(error as object, undefined, 4)}</pre>
    if (isSuccess) return <pre>{JSON.stringify(data, undefined, 4)}</pre>
    return <div>null</div>

}

SignSuccess.propTypes = {}

export default SignSuccess
