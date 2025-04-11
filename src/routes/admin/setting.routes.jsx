import { TabLayout } from "../../layout/TabLayout";
import Desgination from "../../pages/settings/desgination/Desgination";
import DoctorList from "../../pages/settings/doctor/DoctorList";
import NewRoom from "../../pages/settings/rooms/NewRoom";
import RoomList from "../../pages/settings/rooms/RoomList";
import RoomName from "../../pages/settings/rooms/RoomName";
import NewUser from "../../pages/settings/user management/NewUser";
import UserList from "../../pages/settings/user management/UserList";
import UserManagement from "../../pages/settings/user management/UserManagement";

export default [
    {
        path:"settings",
        element:<TabLayout />,
        children:[
            {
                path:"designation",
                element:<Desgination />
            },
            {
                path:"user-management",
                element:<UserManagement />
            },
            {
                path:"user-management/user-list",
                element:<UserList />
            },
            {
                path:"user-management/new-user",
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
                path:"rooms/room/:name",
                element:<RoomName />
            },
            {
                path:"rooms/add-room",
                element:<NewRoom />
            },
        ]
    }
]