import React,{useContext} from "react";
import styled from "styled-components";
import Cover from "../components/Cover";
import Header from "../components/Header";
import Pagination from "../components/utils/Pagination";
import ImageModal from "../components/ImageModal";
import {AppContext} from "../App";
import Loading from "../components/Loading";

const Home = () => {
    const {dark, response, isLoading} = useContext(AppContext);

    return (
        <StyledHome>
            <Header />
            <Cover />
            {
                isLoading ? <Loading /> :
                <Pagination data={response} itemsPerPage={9} Component={ImageModal} />
            }
            <StyledCopyRight dark={dark} >© Copyright 2023 Vipul Malakar. All rights reserved</StyledCopyRight>
        </StyledHome>
    );
}

export default Home;

const StyledHome = styled.div`
    display: flex;
    flex-direction: column;
`
const StyledCopyRight = styled.span`
    text-align: center;
    padding: 3rem 0 1rem 0;
    background-color: ${props => props.dark==='dark' ? "#232323" : "#fff"};
    color: ${props => props.dark==='dark' ? "#fff" : "#000"};
    font-weight: 500;
`