import {
  Dashboard,
  Home,
  Projects,
  Reporting,
  Settings,
  Support,
  Tasks,
  Users,
} from "../assets";

const menuList = [
  {
    name: "Home",
    icon: Home,
    count: 0,
    isActive: false
  },
  {
    name: "Dashboard",
    icon: Dashboard,
    count: 10,
    isActive: false
  },
  {
    name: "Projects",
    icon: Projects,
    count: 0,
    isActive: false
  },
  {
    name: "Tasks",
    icon: Tasks,
    count: 0,
    isActive: false
  },
  {
    name: "Reporting",
    icon: Reporting,
    count: 0,
    isActive: false
  },
  {
    name: "Users",
    icon: Users,
    count: 0,
    isActive: false
  }
];
const menuSubList = [
  {
    name: "Support",
    icon: Support,
    count: 0,
    isActive: false
  },
  {
    name: "Settings",
    icon: Settings,
    count: 0,
    isActive: true
  },
];
const menuSettingsList = [
  {
    name: "My details",
    icon: null,
    count: 0,
  },
  {
    name: "Profile",
    icon: null,
    count: 0,
  },
  {
    name: "Password",
    icon: null,
    count: 0,
  },
  {
    name: "Team",
    icon: null,
    count: 0,
  },
  {
    name: "Plan",
    icon: null,
    count: 0,
  },
  {
    name: "Billing",
    icon: null,
    count: 0,
  },
  {
    name: "Notifications",
    icon: null,
    count: 0,
  },
  {
    name: "Integrations",
    icon: null,
    count: 0,
  },
  {
    name: "API",
    icon: null,
    count: 0,
  },
];

export { menuList, menuSubList, menuSettingsList };
