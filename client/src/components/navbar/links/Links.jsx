"use client";

import SingleLink from "./SingleLink";
import styled from "styled-components";
import { xs, xm, m, l, xl, xl_2 } from "@/app/responsive";

const LinksMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  padding: 10px 0;
  ${xs({
    display: "none",
  })}
  ${xm({
    display: "none",
  })}
    ${m({
    display: "none",
  })}
`;

export const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

const Links = ({ colors, theme }) => {
  const isAdmin = true;
  const isAuthenticated = true;

  return (
    <LinksMain>
      {links.map((link) => (
        <SingleLink
          key={link.title}
          link={link}
          theme={theme}
          colors={colors}
        />
      ))}
      {isAuthenticated && isAdmin && (
        <SingleLink
          key={"Admin"}
          link={{
            title: "Admin",
            path: "/admin",
          }}
          theme={theme}
          colors={colors}
        />
      )}
    </LinksMain>
  );
};

export default Links;
