// import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
`
const Pane = styled.div`
    flex: 1
`

export const SplitScreen = ({ 
    // left: Left,
    // right: Right,
    leftWeight = 1,
    rightWeight = 1,
    children 
}) => {
    const [left, right] = children;
  return (
    <Container>
      {/* <Pane>
        <Left />
      </Pane>
      <Pane>
        <Right />
      </Pane> */}
      <Pane weight={leftWeight}>{left}</Pane>
      <Pane weight={rightWeight}>{right}</Pane>
    </Container>
  );
};
