import React from 'react'
import styled from 'styled-components'

import { device } from '../../theme/breakpoints'
import BitcoinTicker from '../BitcoinTicker'
import BritaTicker from '../BritaTicker'

const TickerBar = () =>
  <S.TickerBar>
    <S.Wrapper>
      <BitcoinTicker /> | <BritaTicker />
    </S.Wrapper>
  </S.TickerBar>

const S = {
  TickerBar: styled.section`
    background: var(--base-primary-dark);
  `,
  Wrapper: styled.div`
    padding: 8px 16px;
    margin: auto;
    color: var(--text-primary-light);
    text-align: left;

    @media ${device.tablet} {
      width: 1200px;
      padding: 8px 0;
    }
  `
}

export default TickerBar
