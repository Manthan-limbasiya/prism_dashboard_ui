import { Layout, Menu } from "antd";
import React, { useState } from "react";
import CalendarIcon from "../Icons/CalendarIcon";
import CompanyIcon from "../Icons/CompanyIcon";
import DarkModeIcon from "../Icons/DarkModeIcon";
import DashboardIcon from "../Icons/DashboardIcon";
import DepartmentIcon from "../Icons/DepartmentIcon";
import EmployeesIcon from "../Icons/EmployeesIcon";
import LightModeIcon from "../Icons/LightModeIcon";
import LogoIcon from "../Icons/LogoIcon";
import MenuIcon from "../Icons/MenuIcon";
import PayrollIcon from "../Icons/PayrollIcon";
import ReportIcon from "../Icons/ReportIcon";
import SettingsIcon from "../Icons/SettingsIcon";
import TimeOffIcon from "../Icons/TimeOffIcon";
import "./Sidebar.scss";
const { Sider } = Layout;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="sidebar-menu-logo">
          <div className="menu-icon">
            <MenuIcon />
          </div>
          <div className="sidebar-logo">
            <LogoIcon />
            <div className="sidebar-lodo-text">Prism</div>
          </div>
        </div>
        <Menu
          mode="inline"
          className="sidebar-menu"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <DashboardIcon />,
              label: "Dashboard",
            },
            {
              key: "2",
              icon: <DepartmentIcon />,
              label: "Department",
            },
            {
              key: "3",
              icon: <EmployeesIcon />,
              label: "Employees",
            },
            {
              key: "4",
              icon: <CalendarIcon />,
              label: "Calendar",
            },
            {
              key: "5",
              icon: <PayrollIcon />,
              label: "Payroll",
            },
            {
              key: "6",
              icon: <TimeOffIcon />,
              label: "Time off",
            },
            {
              key: "7",
              icon: <ReportIcon />,
              label: "Report",
            },
            {
              key: "8",
              icon: <CompanyIcon />,
              label: "Company",
            },
            {
              key: "9",
              icon: <SettingsIcon />,
              label: "Settings",
            },
          ]}
        />
        <div className="theme-mode">
          <span className="mode-text">Light mode</span>
          <div className="mode-icon">
            <div className="dark">
              <DarkModeIcon />
            </div>
            <div className="light">
              <LightModeIcon />
            </div>
          </div>
        </div>
      </Sider>
    </Layout>
  );
};

export default Sidebar;
