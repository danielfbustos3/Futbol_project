import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const rotateBackground = keyframes`
0%{
  background-image: linear-gradient(0deg, #5ddcff, #3c67e3 43%, #4e00c2);
}
25%{
  background-image: linear-gradient(90deg, #5ddcff, #3c67e3 43%, #4e00c2);
}
50%{
  background-image: linear-gradient(180deg, #5ddcff, #3c67e3 43%, #4e00c2);
}
75%{
  background-image: linear-gradient(270deg, #5ddcff, #3c67e3 43%, #4e00c2);
}
100%{
  background-image: linear-gradient(360deg, #5ddcff, #3c67e3 43%, #4e00c2);
}
`;

const rotateDeg = keyframes`
  from{
    0deg
  }
  to {
    180deg
  }
`;

export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  /* background: linear-gradient(
    108deg,
    rgba(1, 147, 86, 1) 0%,
    rgba(10, 201, 122, 1) 100%
  ); */
  background: #000;
`;

const CardShadow = styled.div`
  position: absolute;
  content: "";
  top: 8rem;
  left: 50%;
  margin-left: -6rem;
  height: 16rem;
  width: 12rem;
  transform: scale(0.8);
  filter: blur(10vh);
  background-image: linear-gradient(120deg, #faffe4, #01bf71 43%, #340096);
  opacity: 1;
  transition: opacity 0.5s;
  animation: ${rotate} 15s linear infinite;
  z-index: 1;
`;

const FormWrap = styled.div`
  min-height: 100vh;
  /* background: #0f2520; */
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 2rem;
  padding-bottom: 2rem;
  box-sizing: border-box;

  .cardBorder {
    width: 45vh;
    height: 65vh;
    position: relative;
    border-radius: 10px;
    background: black;
    overflow: hidden;
    color: rgb(88 199 250 / 0%);
    z-index: 2;
    justify-content: center;
    padding: 0.2rem;
    align-items: center;

    &:before {
      content: "";
      width: 260%;
      height: 220%;
      background-image: linear-gradient(135deg, #faffe4, #01bf71 55%, #340096);
      position: absolute;
      top: -32.5vh;
      left: -22.5vh;
      animation: ${rotate} 1.5s linear infinite;
    }
  }
  .cardContent {
    position: relative;
    border-radius: 8px;
    left: 0;
    top: -27px;
    width: 100%;
    height: 100%;
    background: linear-gradient(#0d0d0d 65%, #051f14);
    padding: 40px;
    h2 {
      margin: 0 0 30px;
      padding: 0;
      color: #fff;
      text-align: center;
    }
    .user-box {
      position: relative;
      input {
        width: 100%;
        padding: 10px 0;
        font-size: 16px;
        color: #fff;
        margin-bottom: 30px;
        border: none;
        border-bottom: 1px solid #fff;
        outline: none;
        background: transparent;
      }
      label {
        position: absolute;
        top: 0;
        left: 0;
        padding: 10px 0;
        font-size: 16px;
        color: #fff;
        pointer-events: none;
        transition: 0.5s;
      }
    }
  }
`;

// export const FormWrap = styled.div`
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;

//   @media screen and (max-width: 400px) {
//     height: 80%;
//   }
// `;

export const Icon = styled.a`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;
  &:hover {
    transition: all 0.2s ease-in-out;
    color: #010606;
    transform: scale(1.005);
  }

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  background: #010101;
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
`;

const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
`;

const FormButton = styled.button`
  background: #01bf71;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;

const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
`;

const Signins = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <CardShadow />
          <div className="cardBorder">
            holis
            <div className="cardContent">
              <h2>Login</h2>
              <form>
                <div class="user-box">
                  <input type="text" name="" required="" />
                  <label>Username</label>
                </div>
                <div class="user-box">
                  <input type="password" name="" required="" />
                  <label>Password</label>
                </div>
                <a href="#">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Submit
                </a>
              </form>
            </div>
          </div>
          {/* <Icon href="/">FÚTBOL</Icon>
          <FormContent>
            <Form action="/manager">
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor="for">E-mail</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" required />
              <FormButton type="submit">Continue</FormButton>
              <Text>Forgot Password</Text>
            </Form>
          </FormContent> */}
        </FormWrap>
      </Container>
    </>
  );
};

export default Signins;
