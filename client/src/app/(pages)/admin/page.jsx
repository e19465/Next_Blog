"use client";

import { useTheme } from "@mui/material";
import { tokens } from "@/app/theme";
import FormComponent from "./Form";
import UsersTable from "./UsersTable";
import {
  AdminMain,
  UserManageContainer,
  AllUsersContainer,
  AddUserContainer,
  FieldSet,
} from "./styled";

//////////////////////////////////////////////////
const Admin = () => {
  const theme = useTheme();
  const mode = theme.palette.mode;
  const colors = tokens(mode);
  return (
    <AdminMain>
      <UserManageContainer>
        <AllUsersContainer>
          <UsersTable />
        </AllUsersContainer>
        <AddUserContainer>
          <FieldSet>
            <legend>Register User</legend>
            <FormComponent />
          </FieldSet>
        </AddUserContainer>
      </UserManageContainer>
    </AdminMain>
  );
};

export default Admin;
