import { UserOutlined } from "@ant-design/icons";
import { Avatar, Table } from "antd";
import React from "react";
import ActionDot from "../Icons/ActionDot";
import PhoneIcon from "../Icons/PhoneIcon";
import "./EmployeeTable.scss";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",

    sorter: true,
    render: (val, row) => (
      <div className="employee-item">
        <div className="employee-intro">
          <div className="employee-details">
            <Avatar icon={<UserOutlined />} />
            <div>
              <div className="profile-name">{val}</div>
              <span className="email">{row.email}</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Position",
    dataIndex: "position",
    key: "position",
  },
  {
    title: "Department",
    dataIndex: "department",
    key: "department",
    render: (val, row) => (
      <div className="card-info">
        <div className="lable-val">
          {val === "Marketing" ? (
            <div className="Marketing_dot"></div>
          ) : val === "Accounting" ? (
            <div className="Accounting_dot"></div>
          ) : val === "Cs. Support" ? (
            <div className="Cs_Support_dot"></div>
          ) : val === "Finance" ? (
            <div className="Finance_dot"></div>
          ) : val === "IT Support" ? (
            <div className="IT_Support_dot"></div>
          ) : (
            <div className="Hr_dot"></div>
          )}
          {val}
        </div>
      </div>
    ),
  },
  {
    title: "Phone number",
    dataIndex: "phoneNumber",
    key: "phoneNumber",
    render: (val, row) => (
      <div className="card-info">
        <div className="lable-val">
          <div className="phone">
            <PhoneIcon />
          </div>
          {val}
        </div>
      </div>
    ),
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (val, row) =>
      val === "Contract" ? (
        <div className="designation-Contract">{val}</div>
      ) : val === "Full time" ? (
        <div className="designation-FullTime">{val}</div>
      ) : (
        <div className="designation-Intern">{val}</div>
      ),
  },
  {
    title: "",
    key: "operation",
    render: () => (
      <div className="action">
        <ActionDot />
      </div>
    ),
  },
];
const data = [
  {
    key: "1",
    id: "ADM221-10",
    name: "Maria Roselia",
    email: "vaz@vid.io",
    position: "Sr. Digital Marketing",
    department: "Marketing",
    phoneNumber: "(847) 785-2310",
    status: "Contract",
  },
  {
    key: "2",
    id: "ADM221-10",
    name: "Abhoy Latif",
    email: "ripu@meje.org",
    position: "Accounting",
    department: "Accounting",
    phoneNumber: "(847) 785-2310",
    status: "Full time",
  },
  {
    key: "3",
    id: "ADM221-10",
    name: "Dushane Daniel",
    email: "ze@ju.neto",
    position: "CS Online",
    department: "Cs. Support",
    phoneNumber: "(847) 785-2310",
    status: "Intern",
  },
  {
    key: "4",
    id: "ADM221-10",
    name: "Lungelo Ngcaba",
    email: "sana@ruwrenon.com",
    position: "Head of Finance",
    department: "Finance",
    phoneNumber: "(847) 785-2310",
    status: "Contract",
  },
  {
    key: "5",
    id: "ADM221-10",
    name: "Nahia Colunga",
    email: "ucuma@wes.co.uk",
    position: "HR Speciaist",
    department: "Human Resource",
    phoneNumber: "(847) 785-2310",
    status: "Full time",
  },
  {
    key: "6",
    id: "ADM221-10",
    name: "Nghiêm Thế Quyền",
    email: "han@vinojepes.gov",
    position: "Programmer",
    department: "IT Support",
    phoneNumber: "(847) 785-2310",
    status: "Intern",
  },
  {
    key: "7",
    id: "ADM221-10",
    name: "Nitithorn Prinya",
    email: "vuhjac@tobpejto.net",
    position: "Sr. Digital Marketing",
    department: "Marketing",
    phoneNumber: "(847) 785-2310",
    status: "Contract",
  },
  {
    key: "8",
    id: "ADM221-10",
    name: "Saami Al Samad",
    email: "kavetvi@jeuv.gov",
    position: "Accounting",
    department: "Accounting",
    phoneNumber: "(847) 785-2310",
    status: "Full time",
  },
  {
    key: "9",
    id: "ADM221-10",
    name: "Sadou Mokaté",
    email: "ganituno@ci.gov",
    position: "CS Online",
    department: "Cs. Support",
    phoneNumber: "(847) 785-2310",
    status: "Intern",
  },
  {
    key: "10",
    id: "ADM221-10",
    name: "Samuil Sadovsky",
    email: "leha@suhaf.co.uk",
    position: "Sr. Digital Marketing",
    department: "Finance",
    phoneNumber: "(847) 785-2310",
    status: "Contract",
  },
  {
    key: "11",
    id: "ADM221-10",
    name: "Somun Ae-Ri",
    email: "uwajih@sijuhagu.io",
    position: "HR Speciaist",
    department: "Human Resource",
    phoneNumber: "(847) 785-2310",
    status: "Full time",
  },
  {
    key: "12",
    id: "ADM221-10",
    name: "Tsutsui Ichiha",
    email: "aplaop@ocehitag.io",
    position: "Programmer",
    department: "IT Support",
    phoneNumber: "(847) 785-2310",
    status: "Intern",
  },
];

const EmployeeTable = () => {
  return (
    <div>
      <Table columns={columns} dataSource={data} pagination={false} />
    </div>
  );
};

export default EmployeeTable;
