import "./App.css";
import Customer from "./components/Customer";
import "normalize.css";
import CustomerProps from "./model/CustomerProps";
import Paper from "@mui/material/Paper/Paper";
import Table from "@mui/material/Table/Table";
import TableHead from "@mui/material/TableHead/TableHead";
import TableBody from "@mui/material/TableBody/TableBody";
import TableRow from "@mui/material/TableRow/TableRow";
import TableCell from "@mui/material/TableCell/TableCell";
import { TableContainer } from "@mui/material";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
const styles = {
  root: { width: "100%", overflowX: "auto" },
  table: { minWidth: 1080 },
  progress: { margin: "10", display: "flex" },
};

function App() {
  //
  // const customerArray: CustomerProps[] = [
  //   {
  //     id: 0,
  //     name: "jhone",
  //     age: 1,
  //     gender: "female",
  //     img: "https://img.freepik.com/free-icon/user_318-563642.jpg?w=360",
  //     job: "student",
  //   },
  //   {
  //     id: 1,
  //     name: "ffff",
  //     age: 1,
  //     gender: "female",
  //     img: "https://img.freepik.com/free-icon/user_318-563642.jpg?w=360",
  //     job: "student",
  //   },
  //   {
  //     id: 2,
  //     name: "gg",
  //     age: 1,
  //     gender: "female",
  //     img: "https://img.freepik.com/free-icon/user_318-563642.jpg?w=360",
  //     job: "student",
  //   },
  // ];
  //
  const callApi = async () => {
    const response = await fetch("http://localhost:5000/api/customers");
    const body = await response.json();
    return Promise.resolve(body);
  };

  const [customers, setCustomers] = useState<CustomerProps[]>([]);
  const [completed, setCompleted] = useState<number>(0);

  function progeress(): void {
    completed >= 100 ? setCompleted(0) : setCompleted(completed + 1);
  }

  useEffect(() => {
    setInterval(() => progeress(), 20);
    callApi()
      .then(setCustomers)
      .catch((err) => console.log(err));
  }, []);

  //
  return (
    <TableContainer component={Paper} sx={styles.root}>
      <Table sx={styles.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>profile</TableCell>
            <TableCell>name</TableCell>
            <TableCell>gender</TableCell>
            <TableCell>age</TableCell>
            <TableCell>job</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {completed ? (
            customers.map((customerData, idx) => {
              return (
                <Customer
                  key={idx}
                  id={customerData.id}
                  img={customerData.img}
                  age={customerData.age}
                  job={customerData.job}
                  name={customerData.name}
                  gender={customerData.gender}
                />
              );
            })
          ) : (
            <TableRow>
              <TableCell colSpan={6} align="center">
                {" "}
                //!왜인지모르겠으나 안나옴
                <CircularProgress
                  sx={styles.progress}
                  variant="determinate"
                  value={completed}
                />
              </TableCell>
            </TableRow>
          )}
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
