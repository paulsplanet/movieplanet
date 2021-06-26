import React from "react";
import styled from "styled-components";

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    font-size: 30px;
    maring-top: 20px;
    color: #feda4a;
`;

export default () => (
    <Container>
        <span role="img" aria-label="loading">⚙</span>
    </Container>
);