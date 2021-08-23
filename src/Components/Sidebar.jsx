import React from "react";
import { FaInbox, FaCalendarDay, FaRegCalendar } from "react-icons/fa";

const Sidebar = ({ selectedTab, setselectedTab }) => {
  console.log(selectedTab);
  return (
    <div className="sidebar">
      <div className="active" onClick={() => setselectedTab("INBOX")}>
        <FaInbox className="icon" />
        Inbox
      </div>
      <div onClick={() => setselectedTab("TODAY")}>
        <FaCalendarDay className="icon" />
        Today
      </div>

      <div onClick={() => setselectedTab("NEXT_7")}>
        <FaRegCalendar className="icon" />
        Next 7 days
      </div>
    </div>
  );
};

export default Sidebar;
