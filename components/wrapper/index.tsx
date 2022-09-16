import styled from 'styled-components'
import type { WrapperProps } from '../../types/wrapper'

const Wrapper = styled.div<WrapperProps>`
  height: ${({ height }) => (height ? `${height}px` : 'auto')};
`

export default Wrapper
