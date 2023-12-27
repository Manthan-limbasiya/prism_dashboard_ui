import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Input, Space } from "antd";
import React from "react";
import MessageIcon from "../Icons/MessageIcon";
import NotificationsIcon from "../Icons/NotificationsIcon";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header-main">
      <div className="input">
        <Space.Compact>
          <Input
            className="search-box"
            addonBefore={<SearchOutlined />}
            placeholder="Search…"
          />
        </Space.Compact>
      </div>
      <div className="profile">
        <div className="notificationIcon">
          <NotificationsIcon />
        </div>
        <div className="notificationIcon-dot"></div>
        <div className="messageIcon">
          <MessageIcon />
        </div>
        <div className="details">
          <Avatar icon={<UserOutlined />} />
          <div>
            <div className="profile-name">Justin Fagundez</div>
            <span className="designation">Admin - Designspace</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
