import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import { persistor } from "@/redux/store";
import { closeLogoutModal } from "@/redux/features/logout_model/logoutModelSlice";
import { logout } from "@/redux/features/user/userSlice";
import { xs } from "@/app/responsive";

const ModalMain = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.5);
  transition: all 1s;
  z-index: 999;
`;

const ModalContainer = styled.div`
  width: 350px;
  height: 150px;
  border-radius: 4px;
  background-color: #fff;
  border: 1px solid #000;
  transition: all 1s;

  ${xs({
    width: "250px",
  })}
`;

const ModalQuestion = styled.p`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  text-align: center;
  font-size: 15px;
  border-radius: 4px 4px 0 0;
  color: #000;
  font-weight: bold;
  letter-spacing: 1px;
  padding-bottom: 5px;
`;

const ModalBtnContainer = styled.div`
  display: flex;
  width: 100%;
  height: calc(100% - 70px);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 0 10px 10px;
`;

const ModalBtn = styled.button`
  width: 100px;
  height: 30px;
  margin-right: 10px;
  border: none;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-size: 12px;
  background-color: ${(props) => props.color};
  color: #fff;
  font-weight: bolder;
  border-radius: 4px;
  cursor: pointer;
  transition: all 1s;
  &:hover {
    filter: brightness(2);
  }
`;

const LogoutModal = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    persistor.purge();
    dispatch(closeLogoutModal());
    dispatch(logout());
    localStorage.clear("mode");
    router.push("/login");
  };

  return (
    <ModalMain>
      <ModalContainer>
        <ModalQuestion>
          Do you really want to log out and end your session?
        </ModalQuestion>
        <ModalBtnContainer>
          <ModalBtn color="#005757" onClick={handleLogout}>
            confirm
          </ModalBtn>
          <ModalBtn
            color="darkred"
            onClick={() => {
              dispatch(closeLogoutModal());
            }}
          >
            cancel
          </ModalBtn>
        </ModalBtnContainer>
      </ModalContainer>
    </ModalMain>
  );
};

export default LogoutModal;
