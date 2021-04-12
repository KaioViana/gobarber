import React from 'react'
import { Form, Input } from '@rocketseat/unform'
import { useDispatch, useSelector } from 'react-redux'
import { updateProfileRequest } from '~/store/modules/user/actions'
import { Container } from './styles'


export default function Profile() {
    const dispatch = useDispatch()
    const profile = useSelector(state => state.user.profile)

    function handleSubmit(data) {
        dispatch(updateProfileRequest(data))
    }

    return (
        <Container>
            <Form initialData={profile} onSubmit={handleSubmit}>
                <Input name="name" placeholder="Nome completo" />
                <Input type="email" name="email" placeholder="Seu endereço de email" />

                <hr />

                <Input type="password" name="Oldpassword" placeholder="Sua senha atual" />
                <Input type="password" name="password" placeholder="Nova senha" />
                <Input type="password" name="Oldpassword" placeholder="Confirmação de senha" />

                <button type="submit">Atualizar Perfil</button>
            </Form>
            
            <button type="button">Sair do Gobarber</button>
        </Container>
    )
}