import styled from 'styled-components'

export const Space = ({ margin, height }) => {
  return <SpaceBase margin={margin} height={height} />
}

const SpaceBase = styled.div`
  margin: ${({ margin }) => margin};
  height: ${({ height }) => height};
`
