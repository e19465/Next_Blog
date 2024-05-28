import { useDispatch } from "react-redux";
import styled from "styled-components";
import { closePostDeleteModal } from "@/redux/features/post_delete_modal/postDeleteSlice";
import { xs } from "@/app/responsive";
import { BASE_URL } from "@/hooks/authHook";
import useAuthAxios from "@/hooks/authHook";

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

const PostDeleteModal = ({ post_id, postData, setPostData }) => {
  const authAxios = useAuthAxios();
  const dispatch = useDispatch();
  const handlePostDelete = async (post_uuid) => {
    dispatch(closePostDeleteModal());
    try {
      const response = await authAxios.delete(
        `${BASE_URL}/post/delete/${post_uuid}`
      );
      setPostData(postData.filter((post) => post.unique_uuid !== post_uuid));
      console.log(response.data);
      alert(response.data.message);
    } catch (err) {
      alert(err.response.data.error);
      console.log(err);
    }
  };

  return (
    <ModalMain>
      <ModalContainer>
        <ModalQuestion>Do you really want to delete this?</ModalQuestion>
        <ModalBtnContainer>
          <ModalBtn color="#005757" onClick={() => handlePostDelete(post_id)}>
            confirm
          </ModalBtn>
          <ModalBtn
            color="darkred"
            onClick={() => {
              dispatch(closePostDeleteModal());
            }}
          >
            cancel
          </ModalBtn>
        </ModalBtnContainer>
      </ModalContainer>
    </ModalMain>
  );
};

export default PostDeleteModal;
