import Image from "next/image";
import React from "react";
import {
  TbLayoutSidebarRightCollapse,
  TbLayoutSidebarRightExpand,
} from "react-icons/tb";
import DashboardSidebarToggle from "./DashboardSidebarToggle";

const DashboardLayoutUi = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="drawer lg:drawer-open">
      {/* <input id="drawer-dashboard" type="checkbox" className="drawer-toggle" /> */}
      <DashboardSidebarToggle></DashboardSidebarToggle>
      <div className="drawer-content">
        {/* Navbar */}
        <nav className="navbar w-full bg-slate-700 border border-slate-500 md:flex grid grid-cols-[50px_auto_50px]">
          <label
            htmlFor="drawer-dashboard"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost md:hidden flex items-center"
          >
            {/* Sidebar toggle icon */}
            <TbLayoutSidebarRightCollapse className="my-1.5 inline-block size-4 text-2xl w-6 h-6" />
          </label>
          <div className="px-4 flex items-end gap-3">
            <Image
              src="/next.svg"
              width="120"
              height="50"
              alt="dashboard-logo"
              className="w-20"
            ></Image>
            <span className="leading-none font-semibold">Dashboard</span>
          </div>
        </nav>
        {/* Page content here */}
        <div className="p-4">{children}</div>
      </div>

      <div className="drawer-side is-drawer-close:overflow-visible border-slate-500 bg-slate-700">
        <label
          htmlFor="drawer-dashboard"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="flex min-h-full flex-col items-start border is-drawer-close:w-14 is-drawer-open:w-64 border-slate-500 bg-slate-700">
          {/* Sidebar content here */}
          <div className="px-2 py-0 border-b border-slate-500 w-full">
            <button
              className="is-drawer-close:tooltip cursor-pointer is-drawer-close:tooltip-right flex items-center  is-drawer-open:py-5 is-drawer-open:px-4 is-drawer-close:py-4"
              data-tip="Homepage"
            >
              <Image
                src="/next.svg"
                width="120"
                height="50"
                alt="dashboard-logo"
                className="is-drawer-open:w-20 is-drawer-close:10"
              ></Image>
              <span className="is-drawer-close:hidden">Dashboard</span>
            </button>
          </div>
          <ul className="menu w-full grow">
            {/* List item */}
            <li>
              <button
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Homepage"
              >
                {/* Home icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                  className="my-1.5 inline-block size-4"
                >
                  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                  <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                </svg>
                <span className="is-drawer-close:hidden">Homepage</span>
              </button>
            </li>

            {/* List item */}
            <li>
              <button
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Settings"
              >
                {/* Settings icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                  className="my-1.5 inline-block size-4"
                >
                  <path d="M20 7h-9"></path>
                  <path d="M14 17H5"></path>
                  <circle cx="17" cy="17" r="3"></circle>
                  <circle cx="7" cy="7" r="3"></circle>
                </svg>
                <span className="is-drawer-close:hidden">Settings</span>
              </button>
            </li>
          </ul>
          <div className="flex justify-start items-center w-full p-2">
            <label
              htmlFor="drawer-dashboard"
              aria-label="open sidebar"
              className="btn btn-square grow box-border flex is-drawer-open:flex-row-reverse justify-between items-center border-0 p-3 is-drawer-close:tooltip is-drawer-close:tooltip-right"
              data-tip="Open sidebar"
            >
              {/* Sidebar toggle icon */}
              <TbLayoutSidebarRightCollapse className="my-1.5 inline-block size-4 is-drawer-open:hidden" />
              <TbLayoutSidebarRightExpand className="my-1.5 inline-block size-4 is-drawer-close:hidden" />
              <span className="is-drawer-close:hidden">Close sidebar</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayoutUi;
