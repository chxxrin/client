import styled from 'styled-components'

export const Container = ({ children, padding = '0px' }) => {
  return <StyledContainer padding={padding}>{children}</StyledContainer>
}

const StyledContainer = styled.div`
  padding: ${({ padding }) => padding}px;
`
