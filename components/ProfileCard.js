import styled from "@emotion/styled";
import { useState } from "react";

const ProfilesCard = styled.a`
  background-size: cover;
  background-image: url(${({ imageUrl }) => imageUrl});

  opacity: 1;
  height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  overflow: hidden;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    opacity: 1;
    :before {
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
          180deg,
          rgba(0, 0, 0, 0.2) 0%,
          rgba(0, 0, 0, 0.6) 100%
        ),
        linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    }
  }
`;

const ProfilesCardContent = styled.div`
  padding: 3rem;
  height: 100%;
  width: 100%;
  /* background: lightyellow; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const ProfilesTitle = styled.h2`
  position: relative;
  color: #fff;
  letter-spacing: 0.04rem;
  text-align: center;
  width: 100%;
  font-size: clamp(1.2rem, -0.875rem + 4.333vw, 1.8rem);
  margin-bottom: 10px;
`;

const ProfilesDescript = styled.p`
  color: #fff;
  position: absolute;
  font-size: clamp(1rem, -0.875rem + 4.333vw, 1.3rem);
  text-align: center;
  margin: 1.5rem;
`;

const ProfileCard = ({ item }) => {
  const [hover, setHover] = useState(true);
  const onHover = () => {
    setHover(!hover);
  };

  return (
    <ProfilesCard
      imageUrl={item.imageUrl}
      onMouseEnter={onHover}
      onMouseLeave={onHover}
    >
      <ProfilesCardContent>
        {hover ? (
          <ProfilesTitle>{item.title}</ProfilesTitle>
        ) : (
          <ProfilesDescript>{item.description}</ProfilesDescript>
        )}
      </ProfilesCardContent>
    </ProfilesCard>
  );
};

export default ProfileCard;
