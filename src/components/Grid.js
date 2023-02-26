import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { HiOutlineThumbUp } from "react-icons/hi";

const Grid = () => {
    const [images, setImages] = useState([]);
    useEffect(() => {
        getImages();
    }, []);
    const getImages = () => {
        fetch("https://api.unsplash.com/photos/?client_id=0LqKnzvSE1QsZFukJNa-xXT58LWIbyKAPbNbSmr2GeI#")
            .then(res => res.json())
            .then(data => {
                console.log(data,'data');
                setImages(data);
            });
    }

    return (
        <StyledGrid>
            <StyledGridItem>
                <StyledGridItemImg src={images[0].urls.small} alt="img" />
                <StyledUserContainer>
                    <StyledUser>
                        <StyledProfileImg src={images[0].user.profile_image.small} alt="img" />
                        <StyledUserData>
                            <StyledUserName>Julia Robertson</StyledUserName>
                            <StyledUserId>@juliaclicks</StyledUserId>
                        </StyledUserData>
                    </StyledUser>
                    <StyledUserLikes>
                        <StyledLikeIcon /> 
                        <StyledUserName>2.3k</StyledUserName>
                    </StyledUserLikes>
                </StyledUserContainer>
            </StyledGridItem>
        </StyledGrid>
    );
}

export default Grid;

const StyledGrid = styled.div`
    display: Grid;
    grid-template-areas:
    'header header header header header header'
    'menu main main main right right'
    'menu footer footer footer footer footer';
    gap: 10px;
    color: #fff;
    padding: 2rem 5rem;
`
const StyledGridItem = styled.div`
    grid-column: 1 / 3;
    grid-row: 1;
    border: 1px solid #E5E5E5;
    border-radius: 10px;
    font-size: 30px;
    text-align: center;
`
const StyledGridItemImg = styled.img`
    height: 100%;
    border-Top-Left-radius: 10px;
    border-Top-Right-radius: 10px;
`
const StyledUserContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
`
const StyledUser = styled.div`
    display: flex;
    align-items: center;
    ${'' /* padding: 1rem 0; */}
`
const StyledProfileImg = styled.img`
    height: 50px;
    width: 50px;
    border-radius: 50%;
    margin-right: 1rem;
`
const StyledUserData = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
const StyledUserName = styled.span`
    font-size: 1rem;
    font-weight: 700;
    color: #000;
`
const StyledUserId = styled.span`
    font-size: 1rem;
    font-weight: 700;
    font-family: 'Poppins';
    font-style: italic;
    color: #A7A7A7;
`
const StyledUserLikes = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.3rem;
    font-weight: 700;
    color: #000;
`
const StyledLikeIcon = styled(HiOutlineThumbUp)`
    font-size: 1.8rem;
    margin-right: 0.5rem;
`