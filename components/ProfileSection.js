import styled from "@emotion/styled";
import ProfileCard from "./ProfileCard";
import { cardObjArray } from "./ProfileCardData";

export const ProfilesContainer = styled.div`
  height: auto;
  padding: 15px 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  background: #010606;

  @media screen and (max-width: 768px) {
    height: auto;
  }

  @media screen and (max-width: 480px) {
    height: auto;
  }
`;

export const ProfilesWrapper = styled.div`
  width: 100%;
  /* margin-top: -50px; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 0;
  padding: 0;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

// export const ProCardImg = styled.img`
//   display: none;
//   margin-top: -100px;
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   background: #232a34;
// `;

export const ProfilesH1 = styled.h1`
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 20px;
  padding: 30px;
  margin-left: 6rem;
  @media screen and (max-width: 768px) {
    margin-left: 1rem;
  }
`;

const ProfileSection = () => {
  return (
    <ProfilesContainer id="profileintro">
      <ProfilesH1>Selecciona tu Perfil</ProfilesH1>
      <ProfilesWrapper>
        {cardObjArray.map((item, index) => (
          <ProfileCard item={item} key={index} />
        ))}
      </ProfilesWrapper>
    </ProfilesContainer>
  );
};

export default ProfileSection;
