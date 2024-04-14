"use client";

import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "@/app/theme";
import { useTheme } from "@mui/material";
import styled from "styled-components";
import { xs, xm, m, l, xl, xl_2 } from "@/app/responsive";
import { useEffect, useState } from "react";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import useAuthAxios from "@/hooks/authHook";
import { TableMain, BtnsContainer, Button, StyledDiv } from "./styled";

const UsersTable = () => {
  const authInstance = useAuthAxios();
  const theme = useTheme();
  const mode = theme.palette.mode;
  const colors = tokens(mode);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsersDb = async () => {
      try {
        const response = await authInstance.get("/user/all");
        setUsers(response.data);
      } catch (err) {
        console.log(err);
        return err;
      }
    };
    getUsersDb();
  }, []);

  const handleDeleteUser = () => {
    alert("user deleted");
  };

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 2,
      renderCell: (params) => {
        return (
          <StyledDiv>
            <span> {params.value} </span>
          </StyledDiv>
        );
      },
    },
    {
      field: "username",
      headerName: "Username",
      flex: 1,
      renderCell: (params) => {
        return (
          <StyledDiv>
            <span> {params.value} </span>
          </StyledDiv>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      renderCell: (params) => {
        return (
          <StyledDiv>
            <span> {params.value} </span>
          </StyledDiv>
        );
      },
    },
    {
      field: "manage",
      headerName: "Delete",
      renderCell: (params) => {
        return (
          <BtnsContainer>
            <Button onClick={() => handleDeleteUser(params.row._id)}>
              <DeleteOutlineOutlinedIcon />
            </Button>
          </BtnsContainer>
        );
      },
    },
  ];

  return (
    <TableMain>
      <DataGrid
        sx={{
          width: "100%",
          height: "100%",
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom:
              mode === "dark"
                ? "1px solid rgba(255,255,255,0.1)"
                : "1px solid rgba(0,0,0,0.1)",
            borderRight:
              mode === "dark"
                ? "1px solid rgba(255,255,255,0.1)"
                : "1px solid rgba(0,0,0,0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflowX: "auto",
            color: colors.gray[200],
            "&::-webkit-scrollbar": {
              width: "10px !important",
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "#e0e0e0",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#888",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              backgroundColor: "#555",
            },
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeader": {
            backgroundColor:
              mode === "dark" ? colors.primary[500] : colors.gray[800],
            borderBottom: "none",
            height: "30px",
            color: colors.gray[200],
            borderRight:
              mode === "dark"
                ? "1px solid rgba(255,255,255,0.1)"
                : "1px solid rgba(0,0,0,0.1)",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor:
              mode === "dark" ? colors.primary[500] : colors.gray[800],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
        checkboxSelection
        rows={users}
        columns={columns}
        getRowId={(row) => row._id}
      />
    </TableMain>
  );
};

export default UsersTable;
