"use client";

import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import {
  SinglePostMain,
  ImageContainer,
  PostImage,
  TextContainer,
  Title,
  AuthurAndDateContainer,
  AuthurImageDataContainer,
  AuthurImage,
  AuthurData,
  DateContainer,
  PostContent,
  IconsContainer,
  IconButtonsContainer,
  StyledIconButton,

} from "./styled";
import { useTheme } from "@mui/material";
import { tokens } from "@/app/theme";


///////////////////////////////////////////////////////
const SinglePost = ({params, searchParams}) => {
  const theme = useTheme();
  const mode = theme.palette.mode;
  const colors = tokens(mode);

  console.log(searchParams);
  return (
    <SinglePostMain mode={mode} colors={colors}>
      <ImageContainer>
        <PostImage
          src={
            "https://images.pexels.com/photos/144474/pexels-photo-144474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          width={500}
          height={500}
          alt="single blog post image"
          loading="lazy"
        />
      </ImageContainer>
      <TextContainer>
        <Title>This is title</Title>
        <AuthurAndDateContainer>
          <AuthurImageDataContainer>
            <AuthurImage
              src={
                "https://images.pexels.com/photos/371985/pexels-photo-371985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt="authur image"
              loading="lazy"
              width={500}
              height={500}
            />
            <AuthurData>
              <p>Authur</p>
              <h3>John Smilga</h3>
            </AuthurData>
          </AuthurImageDataContainer>
          <DateContainer>
            <p>Published</p>
            <h3>Nov 25, 2024</h3>
          </DateContainer>
        </AuthurAndDateContainer>
        <PostContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          magnam natus cum suscipit corporis distinctio necessitatibus dolorem
          magni nesciunt similique eligendi voluptatum quo aperiam, nobis
          aliquid nemo laboriosam ex tenetur nisi atque obcaecati ab
          praesentium, incidunt illo? Maiores aspernatur magnam ipsa vero
          mollitia tenetur vel laboriosam. Debitis voluptatum dolorum et
          accusamus consectetur libero a aspernatur voluptatibus asperiores
          laborum molestiae similique nostrum aperiam, accusantium sunt
          molestias sapiente ipsa minima! Debitis, ex amet tenetur facere beatae
          quo ducimus aliquid asperiores reiciendis consectetur veniam.
          Consequatur nostrum eaque quam nesciunt minima hic dolore ipsam
          accusamus reprehenderit architecto alias, pariatur veritatis
          doloremque aut, magni illum.
        </PostContent>
        <IconsContainer>
          <IconButtonsContainer>
            <StyledIconButton>
              <FavoriteIcon />
            </StyledIconButton>
            <span>500</span>
          </IconButtonsContainer>
          <IconButtonsContainer>
            <StyledIconButton>
              <ShareIcon />
            </StyledIconButton>
          </IconButtonsContainer>
        </IconsContainer>
      </TextContainer>
    </SinglePostMain>
  );
};

export default SinglePost;
