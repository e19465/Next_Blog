import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {  CardActionArea, CardActions } from '@mui/material';
import { useTheme } from "@mui/material";
import { tokens } from '@/app/theme';
import Link from "next/link";
import styled from "styled-components";



const StyledLink = styled(Link)`
    color: ${props => props.colors.greenAccent[500]};
    text-decoration: none;
    transition: all 0.5s;

    &:hover {
        text-decoration: underline;
    }
`;

const PostCard = () => {
    const theme = useTheme();
    const mode = theme.palette.mode;
    const colors = tokens(mode);
  return (
    <Card sx={{ maxWidth: 400, backgroundColor: colors.primary[400], margin: "20px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100"
          image={"https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=600"}
          alt="green iguana"
          sx={{
            objectFit: 'cover',
            width: '100%',
            height: '300px',
            overflow: "hidden",
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{height: "50px", overflow: "hidden"}}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <StyledLink colors={colors} mode={mode} href="/">Read More</StyledLink>
      </CardActions>
    </Card>
  );
}

export default PostCard