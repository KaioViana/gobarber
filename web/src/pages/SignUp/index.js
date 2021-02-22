import React from 'react'
import { Link } from 'react-router-dom'
import logo from '~/assets/logo.svg'
import { Form, Input } from '@rocketseat/unform'
import * as Yup from 'yup'


const schema = Yup.object().shape({
    name: Yup.string().required('O nome é obrigatório'),
    email: Yup.string()
        .email('Insira um e-mail válido')
        .required('O e-mail é obrigatório'),
    password: Yup.string().min(6, 'Mínimo de 6 caracteres').required('A senha é obrigatória')
})

export default function SignUp() {
    function handleSubmit(data) {
        console.tron.log(data)
    }

    return (
        <>
            <img src={ logo } alt="GoBarber"/>

            <Form schema={schema} onSubmit={handleSubmit}>
                <Input name="name" placeholder="Nome completo" />
                <Input name="email" type="email" placeholder="Seu email" />
                <Input name="password" type="password" placeholder="Sua senha secreta" />

                <button type="subimit">Criar conta</button>
                <Link to="/">Já tenho uma conta</Link>
            </Form>
        </>
    )
}