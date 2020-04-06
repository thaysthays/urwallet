import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Menu from '../Menu'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { device } from '../../theme/breakpoints'
import User from '../User'
import Wallet from '../../components/Wallet'

const Header = () =>
  <S.Header>
    <S.Wrapper>
      <S.LogoMenu>
        <Link to='/dashboard'>
          <StyledLogo />
        </Link>
        <Menu />
      </S.LogoMenu>
      <Wallet />
      <User />
    </S.Wrapper>
  </S.Header>

const StyledLogo = styled(Logo)`
  height: 18px;
  color: #FFF;
  margin-right: 14px;
`

const S = {
  Header: styled.header`
    background: #403F4B;

    @media ${device.tablet} {
      height: 48px;
    }
  `,
  Wrapper: styled.div`
    align-items: center;
    text-align: center;
    margin: auto;
    justify-content: space-between;
    padding: 8px 16px;

    @media ${device.tablet} {
      display: flex;
      padding: 4px 0;
      width: 1200px;
    }
  `,
  LogoMenu: styled.div`
   a {
    color: #d1d4e6;
   }
  `
}

export default Header
