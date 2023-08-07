import "./App.css";
import Customer from "./components/Customer";
import "normalize.css";
import CustomerProps from "./model/CustomerProps";
import user from "./img/user.jpg";
import Paper from "@mui/material/Paper/Paper";
import Table from "@mui/material/Table/Table";
import TableHead from "@mui/material/TableHead/TableHead";
import TableBody from "@mui/material/TableBody/TableBody";
import TableRow from "@mui/material/TableRow/TableRow";
import TableCell from "@mui/material/TableCell/TableCell";
import { TableContainer } from "@mui/material";

const styles = {
  root: { width: "100%", overflowX: "auto" },
  table: { minWidth: 1080 },
};

function App() {
  //
  const customerArray: CustomerProps[] = [
    {
      id: 0,
      name: "jhone",
      age: 1,
      gender: "female",
      img: user,
      job: "student",
    },
    {
      id: 1,
      name: "ffff",
      age: 1,
      gender: "female",
      img: user,
      job: "student",
    },
    {
      id: 2,
      name: "gg",
      age: 1,
      gender: "female",
      img: user,
      job: "student",
    },
  ];
  //

  return (
    <TableContainer component={Paper} sx={styles.root}>
      <Table sx={styles.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>profile</TableCell>
            <TableCell>name</TableCell>
            <TableCell>number</TableCell>
            <TableCell>job</TableCell>
            <TableCell>gender</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customerArray.map((customerData, idx) => {
            return (
              <Customer
                key={idx}
                id={customerData.id}
                img={customerData.img}
                age={customerData.age}
                job={customerData.job}
                name={customerData.name}
                gender={customerData.gender}
              ></Customer>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default App;

// class MakeCustomer implements CustomerProps {
//   name;
//   age;
//   gender;
//   img;
//   job;
//   id;
//   constructor(
//     name: string,
//     age: number,
//     gender: "male" | "female",
//     img: string,
//     job: string,
//     id: number
//   ) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.img = img;
//     this.job = job;
//     this.id = id;
//   }
// }
