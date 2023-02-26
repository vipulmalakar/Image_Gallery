import React,{useContext, useEffect} from "react";
import styled from "styled-components";
import Cover from "../components/Cover";
import Header from "../components/Header";
import Pagination from "../components/utils/Pagination";
import ImageModal from "../components/ImageModal";
import {AppContext} from "../App";

const Home = () => {
    const {response, isLoading} = useContext(AppContext);
    useEffect(() => {
        console.log(response);
    }, [response])
    return (
        <StyledHome>
            <Header />
            <Cover />
            {
                isLoading ? <h1>Loading...</h1> :
                <Pagination data={response} itemsPerPage={9} Component={ImageModal} />
            }
        </StyledHome>
    );
}

export default Home;

const StyledHome = styled.div`
    display: flex;
    flex-direction: column;
`