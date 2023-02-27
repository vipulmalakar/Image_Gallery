import React,{useContext} from "react";
import styled from "styled-components";
import Cover from "../components/Cover";
import Header from "../components/Header";
import Pagination from "../components/utils/Pagination";
import ImageModal from "../components/ImageModal";
import {AppContext} from "../App";
import Loading from "../components/Loading";

const Home = () => {
    const {response, isLoading} = useContext(AppContext);

    return (
        <StyledHome>
            <Header />
            <Cover />
            {
                isLoading ? <Loading /> :
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