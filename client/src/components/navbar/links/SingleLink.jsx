
import Link from "next/link"
import styled from "styled-components"
import { IconButton } from "@mui/material";
import { usePathname } from "next/navigation";
import { xs, xm, m, l, xl, xl_2 } from "@/app/responsive";


const StyledIconButton = styled.button`
    border: none;
    outline: none;
    cursor: pointer;
    width: 90px;
    padding: 10px;
    border-radius: 5px;
    font-size: 20px;
    transition: all 0.5s;
    margin-right: 7px;
    
    color: ${props => props.active === "true" ? (
        props.theme.palette.mode === "dark" ? props.colors.primary[500] : props.colors.gray[900]
    ) : (
        props.theme.palette.mode === "dark" ? props.colors.greenAccent[500] : props.colors.gray[200]
    )};

    background-color: ${props => props.active === "true" ? (
        props.theme.palette.mode === "dark" ? props.colors.greenAccent[500] : props.colors.blueAccent[400]
    ) : (
        props.theme.palette.mode === "dark" ? props.colors.primary[500] : props.colors.gray[900]
    )};
    
    &:hover {
        color: ${props => props.colors.gray[800]};
        background-color: ${props =>props.theme.palette.mode === "dark" ? props.colors.gray[100] : props.colors.gray[400]};
    }
`;

const SingleLink = ({link, theme,colors}) => {

    const pathName = usePathname();

  return (
    <Link href={link.path} key={link.title} >
        <StyledIconButton colors={colors} theme={theme} active={pathName === link.path ? "true" : "false"}>
            {link.title}
        </StyledIconButton>
    </Link>
  )
}

export default SingleLink