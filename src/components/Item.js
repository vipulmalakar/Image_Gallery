import React, {useContext} from "react";
import styled from "styled-components";
import { HiOutlineThumbUp } from "react-icons/hi";
import { AppContext } from "../App";

const Item = ({data}) => {
    const {dark} = useContext(AppContext);

    return(
        <StyledItem dark={dark}>
            <StyledItemImg src={data?.urls?.small} alt="item" />
            <StyledUserContainer>
                <StyledUser>
                    <StyledProfileImg src={data?.user?.profile_image?.small} alt="img" />
                    <StyledUserData>
                        <StyledUserName dark={dark}>{data?.user?.name}</StyledUserName>
                        <StyledUserId>@{data?.user?.username}</StyledUserId>
                    </StyledUserData>
                </StyledUser>
                <StyledUserLikes>
                    <StyledLikeIcon dark={dark}/>
                    <StyledUserName dark={dark}>{data?.likes}</StyledUserName>
                </StyledUserLikes>
            </StyledUserContainer>
        </StyledItem>
    );
}

export default Item;

const StyledItem = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    margin-bottom: 2rem;
    width: 28rem;
    cursor: pointer;
    background-color: ${props => props.dark==='dark' ? "#000" : "#fff"};
    @media screen and (max-width: 500px){
        width: 20rem;
    }
`
const StyledItemImg = styled.img`
    width: 100%;
    border-Top-Left-radius: 10px;
    border-Top-Right-radius: 10px;
    aspect-ratio: 2 / 1;
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
    color: ${props => props.dark==='dark' ? "#fff" : "#000"};
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
    color: ${props => props.dark==='dark' ? "#fff" : "#000"};
`