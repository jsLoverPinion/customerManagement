import React, { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";

interface Props {
  refreshFunc(): void;
}

const CustomerAdd: React.FC<Props> = ({ refreshFunc }) => {
  //

  const [file, setFile] = useState<any>(null);
  const [userName, setUserName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [job, setJob] = useState<string>("");
  const [fileName, setFileName] = useState<string>("");

  const addCustomer = () => {
    const url = "http://localhost:5000/api/customers";
    const formData = new FormData();
    formData.append("image", file);
    formData.append("name", userName);
    formData.append("age", age);
    formData.append("gender", gender);
    formData.append("job", job);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    return axios.post(url, formData, config);
  };

  function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    addCustomer().then((res) => {
      console.log(res.data);
      refreshFunc();
    });
    setFile(null);
    setFileName("");
    setUserName("");
    setAge("");
    setGender("");
    setJob("");
  }
  //
  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
    setFileName(e.target.value);
  }
  //
  function handleVlaueChange(e: ChangeEvent<HTMLInputElement>) {
    switch (e.target.name) {
      //
      case "userName":
        setUserName(e.target.value);
        break;
      //
      case "age":
        setAge(e.target.value);
        break;
      //
      case "gender":
        setGender(e.target.value);
        break;
      //
      case "job":
        setJob(e.target.value);
        break;
    }
  }

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <h1>고객추가</h1>
        프로필 이미지:{" "}
        <input
          type="file"
          name="file"
          data-file={file}
          value={fileName}
          onChange={handleFileChange}
        />
        <br />
        이름 :{" "}
        <input
          type="text"
          name="userName"
          value={userName}
          onChange={handleVlaueChange}
        />
        <br />
        나이 :{" "}
        <input
          type="number"
          name="age"
          value={age}
          onChange={handleVlaueChange}
        />
        <br />
        성별 :{" "}
        <input
          type="text"
          name="gender"
          value={gender}
          onChange={handleVlaueChange}
        />
        <br />
        직업 :{" "}
        <input
          type="text"
          name="job"
          value={job}
          onChange={handleVlaueChange}
        />
        <br />
        <button type="submit">추가하기</button>
      </form>
    </>
  );
};

export default CustomerAdd;
