import { TabLayout } from "../../layout/TabLayout";
import Desgination from "../../pages/settings/desgination/Desgination";
import DoctorList from "../../pages/settings/doctor/DoctorList";
import NewRoom from "../../pages/settings/rooms/NewRoom";
import RoomList from "../../pages/settings/rooms/RoomList";
import NewUser from "../../pages/settings/user management/NewUser";
import UserList from "../../pages/settings/user management/UserList";
import UserManagement from "../../pages/settings/user management/UserManagement";

export default [
    {
        path:"settings",
        element:<TabLayout />,
        children:[
            {
                index:true,
                element:<Desgination />
            },
            {
                path:"user-management",
                element:<UserManagement />
            },
            {
                path:"user-list",
                element:<UserList />
            },
            {
                path:"new-user",
                element:<NewUser />
            },
            {
                path:"doctors-fee",
                element:<DoctorList />
            },
            {
                path:"rooms",
                element:<RoomList />
            },
            {
                path:"room-new-section",
                element:<NewRoom />
            },
        ]
    }
]