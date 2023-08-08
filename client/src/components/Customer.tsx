import CustomerProps from "../model/CustomerProps";
import { TableRow } from "@mui/material";
import { TableCell } from "@mui/material";
import styled from "styled-components";

const Customer: React.FC<CustomerProps> = ({
  name,
  age,
  gender,
  img,
  // id,
  job,
}) => {
  return (
    <>
      <TableRow>
        <TableCell>
          <ProfileImg src={img} alt="profile" />
        </TableCell>
        <TableCell>{name}</TableCell>
        <TableCell>{gender}</TableCell>
        <TableCell>{age}</TableCell>
        <TableCell>{job}</TableCell>
      </TableRow>
    </>
  );
};

export default Customer;

const ProfileImg = styled.img`
  width: 25px;
  height: 25px;
`;
