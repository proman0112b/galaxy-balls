/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { ModalProps } from '../../../hooks/useModal'
import { Wrapper, Header, StyledModal, HeaderText, CloseButton, Content, Backdrop } from './styled'

import { animated, useSpring, useTrail, useTransition } from 'react-spring'

const WinnersModal: React.FC<ModalProps> = ({ isShown, hide }) => {
  const modal = (
    <>
      <Backdrop onClick={hide} />
      <Wrapper>
        <StyledModal style={{ display: isShown ? 'block' : 'none' }}>
          <Header>
            <HeaderText>List of winners around the world</HeaderText>
            <CloseButton onClick={hide}>&#10006;</CloseButton>
          </Header>
          <Content></Content>
        </StyledModal>
      </Wrapper>
    </>
  )

  return isShown ? ReactDOM.createPortal(modal, document.body) : null
}

export default WinnersModal
