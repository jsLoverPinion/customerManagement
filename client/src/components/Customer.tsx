import CustomerProps from "../model/CustomerProps";
import { TableRow } from "@mui/material";
import { TableCell } from "@mui/material";
import styled from "styled-components";

const Customer: React.FC<CustomerProps> = ({
  name,
  age,
  gender,
  img,
  id,
  job,
}) => {
  return (
    <>
      <TableRow>
        <TableCell>
          <ProfileImg src={img} alt="profile" />
        </TableCell>
        <TableCell>{name}</TableCell>
        <TableCell>{age}</TableCell>
        <TableCell>{job}</TableCell>
        <TableCell>{gender}</TableCell>
      </TableRow>
    </>
  );
};

// const CustimerInfo: React.FC<Omit<CustomerProps, "img">> = ({
//   name,
//   id,
//   age,
//   gender,
//   job,
// }) => {
//   return (
//     <>
//       <p>이름 : {name}</p>
//       <p>id : {id}</p>
//       <p>age : {age}</p>
//       <p>gender : {gender}</p>
//       <p>job : {job}</p>
//     </>
//   );
// };

// const CustomerImg: React.FC<Pick<CustomerProps, "img">> = ({ img }) => {
//   return (
//     <>
//       <img src={img} alt="" />
//     </>
//   );
// };
//
export default Customer;

const ProfileImg = styled.img`
  width: 25px;
  height: 25px;
`;
