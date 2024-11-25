//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
//import icons from react icons
import { FcAutomotive } from 'react-icons/fc';
import { FiLogOut } from 'react-icons/fi';
import { RiPencilLine } from 'react-icons/ri';
import { BiCog } from 'react-icons/bi';

//import sidebar css from react-pro-sidebar module and our custom css
import 'react-pro-sidebar/dist/css/styles.css';
import './SideBar.css';
import { FcList, FcManager } from 'react-icons/fc';

// Và sử dụng các component này như sau
const SideBar = () => {
  //create initial menuCollapse state using useState hook

  //create a custom function that will change menucollapse state from false to true and true to false

  return (
    <>
      <div id="header">
        {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar>
          <SidebarHeader>
            <div className="logotext">
              {/* small and big change using menucollapse state */}
              <p>{'Logo'}</p>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem icon={<FcList />}>
                DashBoard <Link to="/admin" />
              </MenuItem>
              <MenuItem icon={<FcManager />}>
                ManageUser <Link to="/admin/manageuser" />
              </MenuItem>
              <MenuItem icon={<FcAutomotive />}>
                Favourite <Link to="/admin/managebike" />
              </MenuItem>
              <MenuItem icon={<RiPencilLine />}>Author</MenuItem>
              <MenuItem icon={<BiCog />}>Settings</MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>
                Logout <Link to="/" />
              </MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default SideBar;
