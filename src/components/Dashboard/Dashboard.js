import { UserOutlined } from "@ant-design/icons";
import { Avatar, Steps } from "antd";
import React from "react";
import AddCalenderIcon from "../Icons/AddCalenderIcon";
import CrossIcon from "../Icons/CrossIcon";
import DollerNoteIcon from "../Icons/DollerNoteIcon";
import RightArrowIcon from "../Icons/RightArrowIcon";
import "./Dashboard.scss";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="todo-main">
        <div className="todo-things">Things to do</div>
        <div>
          <Steps
            progressDot
            initial={0}
            direction="vertical"
            items={[
              {
                title: "Time off requests",
                description:
                  "You have 4 off request to review and approve for 3 employees.",
                subTitle: "Today",
              },
              {
                title: "Run Late Payroll",
                description:
                  "Oops, you missed the original deadline fot the 24/02/2021 - 24/03/2021 pay period. That’s okay, you can run it now. Your employees will be paid 3 business days after you run payroll.",
                subTitle: "19 Feb 2021",
              },
              {
                title: "Invite your accountant",
                description: "Oops, lorem ipsum dolor sit amet",
                subTitle: "19 Feb 2021",
              },
              {
                title: "Finnish setting up benefits",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                subTitle: "19 Feb 2021",
              },
            ]}
          />
          <div className="viewAll">
            View All Things to do <RightArrowIcon />
          </div>
        </div>
      </div>
      <div className="Suggested-main">
        <div className="Suggested">Suggested</div>

        <div className="varification-main">
          <div className="varification">
            <div className="dollerNoteIcon">
              <DollerNoteIcon />
            </div>
            <div className="close">
              <CrossIcon />
            </div>
          </div>
          <div className="varification-step">
            <div className="step-title">Run Late Payroll</div>
            <div className="step-description">
              2-step verification is the best way to keep your company’s account
              safe.
            </div>
            <div className="step-link">{"Enable 2-step verification >"}</div>
          </div>
        </div>
        <div className="Upcoming-main">
          <div className="event-main">
            <div className="Upcoming">Upcoming</div>
            <div className="event">
              <div className="event-day">Today</div>
              <div className="event-description">
                Run payroll by 4:00pm PST for Sep 27 - Oct 10
              </div>
            </div>
            <div className="event event-profile">
              <div>
                <div className="event-day">Monday, 22 Mar 2021</div>
                <div className="event-description">Jeffrey Reid’s birthday</div>
              </div>
              <div>
                <Avatar icon={<UserOutlined />} />
              </div>
            </div>
            <div className="event">
              <div className="event-day">Today</div>
              <div className="event-description">
                Run payroll by 4:00pm PST for Sep 27 - Oct 10
              </div>
            </div>
          </div>
          <div className="add-reminder">
            <AddCalenderIcon /> Add reminder to your calendar
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
