import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import { useTheme } from "@mui/material";
import { tokens } from "@/app/theme";
import Link from "next/link";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: ${(props) => props.colors.greenAccent[500]};
  text-decoration: none;
  transition: all 0.5s;
  font-size: 14px;
  color: ${props => props.mode === "dark" ? props.colors.blueAccent[200] : props.colors.blueAccent[300]};
  &:hover {
    text-decoration: underline;
  }
`;

const PostCard = ({img, title, desc, id, owner}) => {
  const theme = useTheme();
  const mode = theme.palette.mode;
  const colors = tokens(mode);
  return (
    <Card
      sx={{
        minWidth: 250,
        maxWidth: 300,
        backgroundColor: colors.primary[400],
        margin: "20px",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="100"
          image={img}
          alt="green iguana"
          sx={{
            objectFit: "cover",
            width: "100%",
            height: "250px",
            overflow: "hidden",
          }}
        />
        <CardContent>
          <Typography 
            gutterBottom variant="h5" 
            component="div"
            sx={{
              fontSize:"15px",
              fontWeight:"bold",
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              height: "50px",
              overflow: "hidden",
              color:
                mode === "dark" ? colors.gray[200] : colors.primary[200],
              fontSize: "14px",
            }}
          >
            {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <StyledLink colors={colors} mode={mode} href={`blog/post/?id=${id}&owner=${owner}`}>
          Read More
        </StyledLink>
      </CardActions>
    </Card>
  );
};

export default PostCard;
