"use client";
import { useSelector } from "react-redux";
import FormComponent from "./Form";
import UsersTable from "./UsersTable";
import {
  AdminMain,
  UserManageContainer,
  AllUsersContainer,
  AddUserContainer,
  FieldSet,
} from "./styled";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

//////////////////////////////////////////////////
const Admin = () => {
  const router = useRouter();
  const { payload } = useSelector((store) => store.user);

  useEffect(() => {
    if (!payload || payload.isAdmin === false) {
      router.push("/");
    }
  }, [payload, router]);

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
