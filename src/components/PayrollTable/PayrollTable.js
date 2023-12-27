import { UserOutlined } from "@ant-design/icons";
import { Avatar, Table } from "antd";
import React from "react";
import ActionDot from "../Icons/ActionDot";
import DollarIcon from "../Icons/DollarIcon";
import "./PayrollTable.scss";

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
    title: "Gross Pay",
    dataIndex: "grossPay",
    key: "grossPay",
  },
  {
    title: "Tax",
    dataIndex: "tax",
    key: "tax",
  },
  {
    title: "Total",
    dataIndex: "total",
    key: "total",
    render: (val, row) => (
      <div className="total-info">
        <div className="lable-val">
          <div className="phone">
            <DollarIcon />
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
      val === "Complete" ? (
        <div className="Complete">{val}</div>
      ) : val === "Pending" ? (
        <div className="Pending">{val}</div>
      ) : (
        <div className="Failed">{val}</div>
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
    grossPay: "$ 2.500.00",
    tax: "$ 250.00",
    total: "$ 2.250.00",
    status: "Complete",
  },
  {
    key: "2",
    id: "ADM221-10",
    name: "Abhoy Latif",
    email: "ripu@meje.org",
    position: "Accounting",
    grossPay: "$ 2.500.00",
    tax: "$ 250.00",
    total: "$ 2.250.00",
    status: "Pending",
  },
  {
    key: "3",
    id: "ADM221-10",
    name: "Dushane Daniel",
    email: "ze@ju.neto",
    position: "CS Online",
    grossPay: "$ 2.500.00",
    tax: "$ 250.00",
    total: "$ 2.250.00",
    status: "Failed",
  },
  {
    key: "4",
    id: "ADM221-10",
    name: "Lungelo Ngcaba",
    email: "sana@ruwrenon.com",
    position: "Head of Finance",
    grossPay: "$ 2.500.00",
    tax: "$ 250.00",
    total: "$ 2.250.00",
    status: "Complete",
  },
  {
    key: "5",
    id: "ADM221-10",
    name: "Nahia Colunga",
    email: "ucuma@wes.co.uk",
    position: "HR Speciaist",
    grossPay: "$ 2.500.00",
    tax: "$ 250.00",
    total: "$ 2.250.00",
    status: "Pending",
  },
  {
    key: "6",
    id: "ADM221-10",
    name: "Nghiêm Thế Quyền",
    email: "han@vinojepes.gov",
    position: "Programmer",
    grossPay: "$ 2.500.00",
    tax: "$ 250.00",
    total: "$ 2.250.00",
    status: "Failed",
  },
  {
    key: "7",
    id: "ADM221-10",
    name: "Nitithorn Prinya",
    email: "vuhjac@tobpejto.net",
    position: "Sr. Digital Marketing",
    grossPay: "$ 2.500.00",
    tax: "$ 250.00",
    total: "$ 2.250.00",
    status: "Complete",
  },
  {
    key: "8",
    id: "ADM221-10",
    name: "Saami Al Samad",
    email: "kavetvi@jeuv.gov",
    position: "Accounting",
    grossPay: "$ 2.500.00",
    tax: "$ 250.00",
    total: "$ 2.250.00",
    status: "Pending",
  },
  {
    key: "9",
    id: "ADM221-10",
    name: "Sadou Mokaté",
    email: "ganituno@ci.gov",
    position: "CS Online",
    grossPay: "$ 2.500.00",
    tax: "$ 250.00",
    total: "$ 2.250.00",
    status: "Failed",
  },
  {
    key: "10",
    id: "ADM221-10",
    name: "Samuil Sadovsky",
    email: "leha@suhaf.co.uk",
    position: "Sr. Digital Marketing",
    grossPay: "$ 2.500.00",
    tax: "$ 250.00",
    total: "$ 2.250.00",
    status: "Complete",
  },
  {
    key: "11",
    id: "ADM221-10",
    name: "Somun Ae-Ri",
    email: "uwajih@sijuhagu.io",
    position: "HR Speciaist",
    grossPay: "$ 2.500.00",
    tax: "$ 250.00",
    total: "$ 2.250.00",
    status: "Pending",
  },
  {
    key: "12",
    id: "ADM221-10",
    name: "Tsutsui Ichiha",
    email: "aplaop@ocehitag.io",
    position: "Programmer",
    grossPay: "$ 2.500.00",
    tax: "$ 250.00",
    total: "$ 2.250.00",
    status: "Failed",
  },
];

const PayrollTable = () => {
  return (
    <div>
      <Table columns={columns} dataSource={data} pagination={false} />
    </div>
  );
};

export default PayrollTable;
