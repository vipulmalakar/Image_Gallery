import React from "react";
import styled from "styled-components";

const Cover = () => {
    return (
        <StyledCover>
            <StyledHeading>Download High Quality Images by creators</StyledHeading>
            <StyledText>Over 2.4 million+ stock Images by our talented community</StyledText>
        </StyledCover>
    );
}

export default Cover;

const StyledCover = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url("https://images.unsplash.com/photo-1606323309671-c51570922278?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80");
    background-size: cover;
    background-position: center;
    height: 50vh;
    width: 100%;
    background-repeat: no-repeat;
    background-attachment: fixed;
    text-align: center;
`
const StyledHeading = styled.h1`
    color: #fff;
    font-weight: 600;
    text-align: center;
    margin-bottom: 1rem;
    @media screen and (max-width: 500px) {
        font-size: 1.5rem;
    }
`
const StyledText = styled.p`
    color: #C4C4C4;
    @media screen and (max-width: 500px) {
        font-size: 0.8rem;
    }
`