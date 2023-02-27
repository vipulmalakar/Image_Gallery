import React from "react";
import styledComponents from "styled-components";
import {MutatingDots} from "react-loader-spinner";

const Loading = () => {
    return (
        <StyledLoading>
            <MutatingDots 
                height="100"
                width="100"
                color="#4fa94d"
                secondaryColor= '#4fa94d'
                radius='15'
                ariaLabel="mutating-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
            <StyledLoadingText>Loading some awesome Images...</StyledLoadingText>
        </StyledLoading>
    );
}

export default Loading;

const StyledLoading = styledComponents.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const StyledLoadingText = styledComponents.h1`
    font-size: 2rem;
    font-weight: 700;
    color: #A7A7A7;
    margin-top: 1rem;
`

