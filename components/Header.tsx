import Link from 'next/link';
import React from 'react'
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderWrapper className="container">
      <LogoWrapper>
        <Link href="/" tabIndex={1}>
          <a tabIndex={1}>NG STAEM</a>
        </Link>
      </LogoWrapper>
      <Link href="/about" >
        <BtnText className="blue-btn btn-small" tabIndex={2}>About This Project</BtnText>
      </Link>
    </HeaderWrapper>
  )
}

export default Header

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
`
const LogoWrapper = styled.div`
  margin: 0;
  color: var(--white);
  letter-spacing: 2px;
  font-size: 1.5rem;
  
  a {
    color: white;
    border-bottom: 2px solid transparent;
    border-radius: 2px;
    padding-bottom: 4px;
    &:hover,
    &:focus-visible {
      border-bottom-color: var(--white);
    }
  }
`
const BtnText = styled.a`
  margin-left: auto;

`