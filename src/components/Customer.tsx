import CustomerProps from "../model/CustomerProps";

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
      <>
        <CustomerImg img={img}></CustomerImg>
        <CustimerInfo
          name={name}
          age={age}
          gender={gender}
          id={id}
          job={job}
        ></CustimerInfo>
      </>
    </>
  );
};

const CustimerInfo: React.FC<Omit<CustomerProps, "img">> = ({
  name,
  id,
  age,
  gender,
  job,
}) => {
  return (
    <>
      <p>이름 : {name}</p>
      <p>id : {id}</p>
      <p>age : {age}</p>
      <p>gender : {gender}</p>
      <p>job : {job}</p>
    </>
  );
};

const CustomerImg: React.FC<Pick<CustomerProps, "img">> = ({ img }) => {
  return (
    <>
      <img src={img} alt="" />
    </>
  );
};
export default Customer;
