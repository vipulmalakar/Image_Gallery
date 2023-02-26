import React, {useState,useContext} from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { BsToggleOn, BsToggleOff } from "react-icons/bs";
import { AppContext } from "../App";

const Header = () => {
    const {fetchData, dark, setDark} = useContext(AppContext);
    const [searchValue, setSearchValue] = useState("");

    const handleInputChange = (e) => {
        setSearchValue(e.target.value);
        fetchData(`search/photos?page=1&query=${searchValue}&client_id=${process.env.REACT_APP_ACCESS_KEY}`)
    }
  return (
    <StyledHeader dark={dark}>
        <Logo dark={dark}>Image Gallery</Logo>
        <Search>
            <SearchIcon />
            <SearchInput value={searchValue} onChange={handleInputChange} type="text" placeholder="Search Images here" />
        </Search>
        <StyledToggle className="gap-2" onClick={()=>setDark(!dark)} >
            <StyledText dark={dark}>{dark?'Light':'Dark'} Mode</StyledText>
            <StyledToggleIcon dark={dark}>
                {dark ? <BsToggleOn /> : <BsToggleOff />}
            </StyledToggleIcon>
        </StyledToggle>
    </StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.header`
    display: flex;
    padding: 1rem 3rem;
    justify-content: space-between;
    background-color: ${props => props.dark ? '#232323' : '#FFFFFF'};
    gap: 2rem;
    @media screen and (max-width: 768px) {
        flex-direction: column;
        padding: 1rem;
    }
`
const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
`
const Logo = styled.h1`
    font-family: Pattaya;
    cursor: pointer;
    color: ${props => props.dark ? '#FFFFFF' : '#000000'};
`
const Search = styled.div`
    margin: auto 0;
    display: flex;
    align-items: center;
    background-color: #EEEEEE;
    color: #C4C4C4;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
`
const SearchIcon = styled(FiSearch)`
    font-size: 1.5rem;
`
const SearchInput = styled.input`
    border: none;
    width: 25rem;
    background-color: #EEEEEE;
    :focus {
        outline: none;
    }
    @media screen and (max-width: 990px) {
        width: 14rem;
    }
`
const StyledText = styled.span`
    font-weight: 700;
    cursor: pointer;
    color: ${props => props.dark ? '#FFFFFF' : '#000000'};
`
const StyledToggle = styled.div`
    display: flex;
    align-items: center;
    @media screen and (max-width: 768px) {
        position: absolute;
        top: 1rem;
        right: 1rem;
    }
`
const StyledToggleIcon = styled.div`
    font-size: 1.5rem;
    cursor: pointer;
    color: ${props => props.dark ? '#FFFFFF' : '#000000'};
`