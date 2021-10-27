import Content from "../components/Home/Content";
import AddRoom from "../components/Room/AddRoom";
import EditRoom from "../components/Room/EditRoom";
import ListRoom from "../components/Room/ListRoom";
import Page404 from '../components/ErrorPage/Page404'
import ListCustomer from "../components/Customer/ListCustomer";
import AddCustomer from "../components/Customer/AddCustomer";
import Delegation from "../components/Customer/Delegation";
import EditCustomer from "../components/Customer/EditCustomer";
import AddDelegation from "../components/Customer/AddDelegation";
import ListEmployee from "../components/Employee/ListEmployee";
import EditEmployee from "../components/Employee/EditEmployee";
import AddEmployee from "../components/Employee/AddEmployee";
import AddService from "../components/Service/AddService"
import ListService from "../components/Service/ListService"
import EditService from "../components/Service/EditService"
import ListTypeRoom from "../components/Room/ListTypeRoom";
import BookingRoom from "../components/Room/BookingRoom";
import CheckInRoom from "../components/Room/CheckInRoom";
import CheckoutRoom from "../components/Room/CheckoutRoom";
import AddDevice from "../components/Device/AddDevice";
import ListDevice from "../components/Device/ListDevice";
import EditDevice from "../components/Device/EditDevice";
import AddTypeRoom from "../components/Room/AddTypeRoom";
import EditTypeRoom from "../components/Room/EditTypeRoom";
import EditDelegation from "../components/Customer/EditDelegation";
import EmployeeProfile from "../components/Employee/EmployeeProfile";
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
        path: "/edit-customer",
        exact: true,
        main: ({ history }) => <EditCustomer history={history} />
    },
    {
        path: "/delegation",
        exact: true,
        main: ({ history }) => <Delegation history={history} />
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
        path: "/edit-employee",
        exact: true,
        main: ({ history }) => <EditEmployee history={history} />
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
        path: "/edit-service",
        exact: true,
        main: ({ history }) => <EditService history={history} />
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
        path: "/edit-device",
        exact: true,
        main: ({ history }) => <EditDevice history={history} />
    },
    {
        path: "/employee-profile",
        exact: true,
        main: ({ history }) => <EmployeeProfile history={history} />
    },
    {
        path: "",
        exact: true,
        main: () => <Page404 />
    },
]

export default routes;