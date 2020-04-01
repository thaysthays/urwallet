import React, { useState } from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'

import { useGlobalState } from '../../context'
import { login } from '../../services/urwallet/auth'
import Input from '../Atoms/Input'
import Button from '../../components/Atoms/Button'
import api from '../../services/urwallet/api'

const LoginForm = ({ history }) => {
  const globalState = useGlobalState()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      const response = await api.post('/sessions', { email, password })
      login(response.data.token)

      const id = response.data.account.id

      global.localStorage.setItem('urwallet_userId', id)
      global.localStorage.setItem('urwallet_userEmail', email)

      globalState.setUser({ id, email })

      history.push('/dashboard')
    } catch (err) {
      console.log(err, 'Tente novamente.')
    }
  }

  return (
    <S.Login onSubmit={handleSubmit}>
      <S.Fields>
        <Input
          className='login'
          type='email'
          placeholder='Insira seu email'
          onChange={e => setEmail(e.target.value)}
          required
        />
        <Input
          className='password'
          type='password'
          placeholder='Insira sua senha'
          onChange={e => setPassword(e.target.value)}
          required
        />
      </S.Fields>
      <Button text='Entrar' />
      <S.Signup>Novo por aqui? <a href="#">Crie uma nova conta</a></S.Signup>
    </S.Login>
  )
}

const S = {
  Login: styled.form`
    text-align: center;
  `,
  Fields: styled.div`
    .field {
      margin-bottom: 12px;

      &:last-child{
        margin-bottom: 28px;
      }
  }
  `,
  Signup: styled.div`
    margin-top: 22px;
    text-align: center;
    display: block;

    a {
      color: #000;
    }
  `
}

export default withRouter(LoginForm)
