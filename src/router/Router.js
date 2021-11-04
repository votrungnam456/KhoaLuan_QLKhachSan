import Content from "../components/Home/Content";
import AddRoom from "../components/Room/Manage/AddRoom";
import EditRoom from "../components/Room/Manage/EditRoom";
import ListRoom from "../components/Room/Manage/ListRoom";
import Page404 from '../components/ErrorPage/Page404'
import ListCustomer from "../components/Customer/Customers/ListCustomer";
import AddCustomer from "../components/Customer/Customers/AddCustomer";
import ListDelegation from "../components/Customer/Delegation/ListDelegation";
import EditCustomer from "../components/Customer/Customers/EditCustomer";
import AddDelegation from "../components/Customer/Delegation/AddDelegation";
import ListEmployee from "../components/Employee/ListEmployee";
import EditEmployee from "../components/Employee/EditEmployee";
import AddEmployee from "../components/Employee/AddEmployee";
import AddService from "../components/Service/AddService"
import ListService from "../components/Service/ListService"
import EditService from "../components/Service/EditService"
import ListTypeRoom from "../components/Room/TypeRoom/ListTypeRoom";
import BookingRoom from "../components/Room/Booking/BookingRoom";
import CheckInRoom from "../components/Room/Booking/CheckInRoom";
import CheckoutRoom from "../components/Room/Booking/CheckoutRoom";
import AddDevice from "../components/Device/AddDevice";
import ListDevice from "../components/Device/ListDevice";
import EditDevice from "../components/Device/EditDevice";
import AddTypeRoom from "../components/Room/TypeRoom/AddTypeRoom";
import EditTypeRoom from "../components/Room/TypeRoom/EditTypeRoom";
import EditDelegation from "../components/Customer/Delegation/EditDelegation";
import EmployeeProfile from "../components/Employee/EmployeeProfile";
import RoomDetail from "../components/Room/RoomDetail";
const routes = [
    {
        path: "/",
        exact: true,
        main: ({ history }) => <Content history={history} />
    },
    {
        path: "/add-room",
        exact: true,
        main: ({ history }) => <AddRoom history={history} />
    },
    {
        path: "/list-room",
        exact: true,
        main: ({ history }) => <ListRoom history={history} />
    },
    {
        path: "/edit-room/:idRoom",
        exact: true,
        main: ({ history,match }) => <EditRoom history={history} match={match}/>
    },
    {
        path: "/list-customer",
        exact: true,
        main: ({ history }) => <ListCustomer history={history} />
    },
    {
        path: "/add-customer",
        exact: true,
        main: ({ history }) => <AddCustomer history={history} />
    },
    {
        path: "/edit-customer/:idCustomer",
        exact: true,
        main: ({ history,match }) => <EditCustomer match={match} history={history} />
    },
    {
        path: "/list-delegation",
        exact: true,
        main: ({ history }) => <ListDelegation history={history} />
    },
    {
        path: "/add-delegation",
        exact: true,
        main: ({ history }) => <AddDelegation history={history} />
    },
    {
        path: "/edit-delegation",
        exact: true,
        main: ({ history }) => <EditDelegation history={history} />
    },
    {
        path: "/add-employee",
        exact: true,
        main: ({ history }) => <AddEmployee history={history} />
    },
    {
        path: "/list-employee",
        exact: true,
        main: ({ history }) => <ListEmployee history={history} />
    },
    {
        path: "/edit-employee/:idEmployee",
        exact: true,
        main: ({ history, match }) => <EditEmployee match={match} history={history} />
    },
    {
        path: "/add-service",
        exact: true,
        main: ({ history }) => <AddService history={history} />
    },
    {
        path: "/list-service",
        exact: true,
        main: ({ history }) => <ListService history={history} />
    },
    {
        path: "/edit-service/:idService",
        exact: true,
        main: ({ history,match }) => <EditService match={match} history={history} />
    },
    {
        path: "/list-type-room",
        exact: true,
        main: ({ history }) => <ListTypeRoom history={history} />
    },
    {
        path: "/add-type-room",
        exact: true,
        main: ({ history }) => <AddTypeRoom history={history} />
    },
    {
        path: "/edit-type-room/:idTypeRoom",
        exact: true,
        main: ({ history,match }) => <EditTypeRoom history={history} match={match} />
    },
    {
        path: "/booking-room",
        exact: true,
        main: ({ history }) => <BookingRoom history={history} />
    },
    {
        path: "/check-in-room",
        exact: true,
        main: ({ history }) => <CheckInRoom history={history} />
    },
    {
        path: "/check-out-room",
        exact: true,
        main: ({ history }) => <CheckoutRoom history={history} />
    },
    {
        path: "/add-device",
        exact: true,
        main: ({ history }) => <AddDevice history={history} />
    },
    {
        path: "/list-device",
        exact: true,
        main: ({ history }) => <ListDevice history={history} />
    },
    {
        path: "/edit-device/:idDevice",
        exact: true,
        main: ({ history,match }) => <EditDevice match={match} history={history} />
    },
    {
        path: "/employee-profile/:idCustomer",
        exact: true,
        main: ({ history,match }) => <EmployeeProfile match={match} history={history} />
    },
    {
        path: "/room-detail",
        exact: true,
        main: ({ history,match }) => <RoomDetail match={match} history={history} />
    },
    {
        path: "",
        exact: true,
        main: () => <Page404 />
    },
]

export default routes;