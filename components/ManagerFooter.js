import styled from "@emotion/styled";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import { useTheme, useThemeUpdate } from "../utils/functions";

export const FooterContainer = styled.div`
  background: ${({ myTheme }) => myTheme.backgroundColor};
  box-shadow: 0 1px 4px rgba(0, 0, 0, 1), 0 0 40px 0 rgba(0, 0, 0, 0.05) inset;
  align-items: center;
  padding: 0 2rem;
  width: 100%;
`;

export const FooterWrap = styled.div`
  padding: 1.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1500px;
  margin: 0 auto;
`;

export const SocialMedia = styled.section`
  width: 100%;
  align-items: center;
`;

export const SocialMediaWrap = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SocialLogo = styled.a`
  color: ${({ myTheme }) => (myTheme == "#f5f5f5" ? "#000" : "#fff")};
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: bold;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: ${({ myTheme }) => (myTheme == "#01bf71" ? "#000" : "#01bf71")};
    transform: scale(1.05);
  }
`;

export const WebsiteRights = styled.small`
  color: ${({ myTheme }) => (myTheme == "#f5f5f5" ? "#000" : "#fff")};
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const ColorSelector = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 7rem;
  gap: 0.5rem;

  .dark {
    background: #0d0d0d;
    height: 0.85rem;
    width: 0.85rem;
    border-radius: 50%;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 1);
    border: 2px solid #444;
    cursor: pointer;
    &:hover {
      transition: all 0.2s ease-in-out;
      transform: scale(1.3);
    }
  }
  .light {
    background: #f5f5f5;
    height: 0.85rem;
    width: 0.85rem;
    border-radius: 50%;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 1);
    border: 2px solid #444;
    cursor: pointer;
    &:hover {
      transition: all 0.2s ease-in-out;
      transform: scale(1.3);
    }
  }
  .dark-green {
    background: #0f2520;
    height: 0.85rem;
    width: 0.85rem;
    border-radius: 50%;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 1);
    border: 2px solid #444;
    cursor: pointer;
    &:hover {
      transition: all 0.2s ease-in-out;
      transform: scale(1.3);
    }
  }
  .green {
    background: #01bf71;
    height: 0.85rem;
    width: 0.85rem;
    border-radius: 50%;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 1);
    border: 2px solid #444;
    cursor: pointer;
    &:hover {
      transition: all 0.2s ease-in-out;
      transform: scale(1.3);
    }
  }
`;

export const SocialIconLink = styled.a`
  color: ${({ myTheme }) => myTheme.textColor};
  font-size: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    color: ${({ myTheme }) => (myTheme == "#01bf71" ? "#000" : "#01bf71")};
    transform: scale(1.2);
  }
`;

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  const setColor = useThemeUpdate();
  const myTheme = useTheme();
  return (
    <>
      <FooterContainer myTheme={myTheme}>
        <FooterWrap>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to="/" onClick={toggleHome} myTheme={myTheme}>
                FÚTBOL
              </SocialLogo>
              <WebsiteRights myTheme={myTheme}>
                FÚTBOL © 2021 All rights reserved
              </WebsiteRights>
              <SocialIcons>
                <SocialIconLink
                  myTheme={myTheme}
                  href="/"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink
                  myTheme={myTheme}
                  href="/"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink
                  myTheme={myTheme}
                  href="/"
                  target="_blank"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </SocialIconLink>
                <SocialIconLink
                  myTheme={myTheme}
                  href="/"
                  target="_blank"
                  aria-label="Youtube"
                >
                  <FaYoutube />
                </SocialIconLink>
              </SocialIcons>
              <ColorSelector>
                <button className="dark" onClick={() => setColor("dark")} />
                <button className="light" onClick={() => setColor("light")} />
                <button
                  className="dark-green"
                  onClick={() => setColor("dark-green")}
                />
                <button className="green" onClick={() => setColor("green")} />
              </ColorSelector>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;
