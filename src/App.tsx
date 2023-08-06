import "./App.css";
import Customer from "./components/Customer";
import "normalize.css";
import CustomerProps from "./model/CustomerProps";
import user from "./img/user.jpg";
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

  return (
    <>
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
    </>
  );
}

export default App;
