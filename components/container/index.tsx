import styled from 'styled-components'
import type { ContainerProps } from '../../types/container'

const Container = styled.div<ContainerProps>`
  max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}px` : `1400px`)};
  margin: 0 auto;
`

export default Container
