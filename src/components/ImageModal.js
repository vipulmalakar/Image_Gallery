import React, {useContext} from 'react';
import Modal from 'react-modal';
import styled from "styled-components";
import Item from './Item';
import { HiOutlineThumbUp } from "react-icons/hi";
import { RxInstagramLogo, RxTwitterLogo } from "react-icons/rx";
import { GrFormClose } from "react-icons/gr";
import { AppContext } from "../App";

const customStyles = {
  content: {
    width:'75%',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '0',
    margin: '0',
    border: '0px solid',
    borderRadius: '1rem',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  }
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#yourAppElement');

const ImageModal = ({data}) => {
  const {dark} = useContext(AppContext);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [tags, setTags] = React.useState([]);

  React.useEffect(() => {
    if(data?.tags?.length > 0){
      setTags(data?.tags?.map((tag) => tag?.title || tag?.type));
    }
  }, [data]);

  return (
    <div>
      <div onClick={openModal}><Item data={data}/></div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
       <StyledModal dark={dark}>
        <StyledCloseIcon onClick={closeModal} />
        <StyledItemImg src={data?.urls?.regular} alt="item" />
        <StyledDetailsContainer className="gap-4">
          <StyledTopContainer>
              <StyledUser className="gap-3">
                <StyledProfileImg src={data?.user?.profile_image?.small} alt="img" />
                <StyledUserData>
                  <StyledUserName dark={dark}>{data?.user?.name}</StyledUserName>
                  <StyledUserId>@{data?.user?.username}</StyledUserId>
                </StyledUserData>
                <StyledUserId><RxInstagramLogo /> {`${data?.user?.social?.instagram_username?'/'+data?.user?.social?.instagram_username:''}`}</StyledUserId>
                <StyledUserId><RxTwitterLogo /> {`${data?.user?.social?.twitter_username?'/'+data?.user?.social?.twitter_username:''}`}</StyledUserId>
              </StyledUser>
              <StyledUser className="gap-3">
                <StyledUserName dark={dark}>1.2k downloads</StyledUserName>
                <StyledUserLikes>
                    <StyledLikeIcon dark={dark}/>
                    <StyledUserName dark={dark}>{data?.likes}</StyledUserName>
                </StyledUserLikes>
              </StyledUser>
          </StyledTopContainer>
          <StyledBottomContainer>
            <StyledUserName dark={dark}>Related Tags</StyledUserName>
            <StyledTagsContainer>
              {
                tags?.map((tag, key) => <StyledTag key={key}>{tag}</StyledTag>)
              }
            </StyledTagsContainer>
          </StyledBottomContainer>
        </StyledDetailsContainer>
       </StyledModal> 
      </Modal>
    </div>
  );
}

export default ImageModal;

const StyledModal = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${props => props.dark ? '#232323' : '#fff'};
    @media screen and (max-width: 768px){
        aspect-ratio: 1/0.8;
        overflow-x: scroll;
        width: 40rem;
    }
`
const StyledCloseIcon = styled(GrFormClose)`
    position: absolute;
    right: 0rem;
    font-size: 2rem;
    color: #000;
    cursor: pointer;
    background-color: #fff;
    border-radius: 50%;
    padding: 5px;
`
const StyledItemImg = styled.img`
    height: 30rem;
    @media screen and (max-width: 1024px){
        height: 20rem;
    }
    @media screen and (max-width: 768px){
        ${'' /* aspect-ratio: 3/2 */}
    }
`
const StyledDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
`
const StyledTopContainer = styled.div`
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 768px){
        flex-wrap: wrap;
        gap: 1rem;
    }
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
    color: ${props => props.dark ? '#fff' : '#000'};
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
    color: ${props => props.dark ? '#fff' : '#000'};
`
const StyledBottomContainer = styled.div`
    display: flex;
    flex-direction: column;
`
const StyledTagsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 10px;
`
const StyledTag = styled.span`
    padding: 0.5rem 1rem;
    border-radius: 6px;
    background-color: #ECECEC;
`