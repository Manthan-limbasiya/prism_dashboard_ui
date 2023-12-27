import { Button, Menu, Pagination, Progress } from "antd";
import "./App.scss";
import Cards from "./components/Cards/Cards";
import Dashboard from "./components/Dashboard/Dashboard";
import EmployeeTable from "./components/EmployeeTable/EmployeeTable";
import Header from "./components/Header/Header";
import CombinedShapeIcon from "./components/Icons/CombinedShapeIcon";
import InfoIcon from "./components/Icons/InfoIcon";
import NoteIcon from "./components/Icons/NoteIcon";
import ShapeIcon from "./components/Icons/ShapeIcon";
import PayrollTable from "./components/PayrollTable/PayrollTable";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const itemRender = (_, type, originalElement) => {
    if (type === "prev") {
      return <a>{"< Previous"}</a>;
    }
    if (type === "next") {
      return <a>{"Next >"}</a>;
    }
    return originalElement;
  };
  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        <Header />
        <div>
          <div className="main-content">
            {/* <div className="title">Employee’s</div> */}
            {/* <div className="title">Payroll</div> */}
            {/* <div className="sideview"> */}
            {/* <div className="gridBtn">
                <div className="shape1-icon">
                  <CombinedShapeIcon />
                </div>
                <div className="shape2-icon">
                  <ShapeIcon />
                </div>
              </div> */}
            {/* <div className="add_btn"> */}
            {/* <Button type="primary">Add Employee</Button> */}
            {/* <Button type="primary">Print Report</Button> */}
            {/* </div>
            </div> */}

            <div className="greeting">
              <div className="welcome">Good morning, Justin</div>
              <div className="message">
                Here’s what’s going on with your team Designspace
              </div>
            </div>
            <div className="time">
              <div className="day">Friday</div>
              <div className="date">26 February 2021</div>
            </div>
          </div>

          {/* for page 3 */}
          {/* <div className="payroll">
            <div className="info">
              <div className="progressBar">
                <Progress
                  type="circle"
                  size={"small"}
                  percent={60}
                  format={() => <InfoIcon />}
                />
              </div>
              <div className="Information">
                <div className="Information-title">Information</div>
                <span className="description">
                  Your payment status for this month is paid in{" "}
                  <span className="persent">65%</span>.
                </span>
              </div>
            </div>
            <div className="total-info">
              <div className="total-amount">
                <div className="Information-Paytroll">Total Paytroll</div>
                <span className="amount-Paytroll">$ 120,630</span>
              </div>
              <div className="deadline">
                <div className="Information-Paytroll">Deadline</div>
                <span className="amount-Paytroll">25 March 2021</span>
              </div>
            </div>
          </div> */}

          {/* for page 4 */}
          <div className="dashboard-start">
            <div className="dashboard-info">
              <div className="noteIcon">
                <NoteIcon />
              </div>
              <div className="dashboard-Information">
                <div className="dashboard-title">
                  Time off requests, offer letters, and more
                </div>
                <span className="dashboard-description">
                  Let’s make managing your team a little easier by setting up
                  your HR features.
                </span>
              </div>
            </div>
            <div className="get-started-btn">
              <Button type="primary">Get Started</Button>
            </div>
          </div>
        </div>
        {/* <div className="main_menu">
          <Menu
            mode="horizontal"
            className="list-menu"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                label: "All Employee",
              },
              {
                key: "2",
                label: "Marketing",
              },
              {
                key: "3",
                label: "Accounting",
              },
              {
                key: "4",
                label: "Cs. Support",
              },
              {
                key: "5",
                label: "Finance",
              },
              {
                key: "6",
                label: "Human Resource",
              },
              {
                key: "7",
                label: "IT Support",
              },
            ]}
          />
        </div> */}
        <div className="cards">
          {/* page 1 */}
          {/* <Cards />
          <div className="pagination-footer">
            <div className="count">Show 11 from 36 employee’s</div>
            <div>
              <Pagination total={120} itemRender={itemRender} />
            </div>
          </div> */}

          {/* page 2 */}
          {/* <EmployeeTable /> */}

          {/* page 3 */}
          {/* <PayrollTable />
          <div className="pagination-footer">
            <div className="count">Show 11 from 36 employee’s</div>
            <div>
              <Pagination total={120} itemRender={itemRender} />
            </div>
          </div> */}

          {/* page 4 */}
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default App;
