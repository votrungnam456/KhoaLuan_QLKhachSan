import Content from "../components/Home/Content";
import AddRoom from "../components/Room/AddRoom";
import EditRoom from "../components/Room/EditRoom";
import ListRoom from "../components/Room/ListRoom";
import Page404 from '../components/ErrorPage/Page404'

const routes = [
    {
        path: "/",
        exact: true,
        main: ({ history }) => <Content history={history} />
    },
    {
        path: "/addroom",
        exact: true,
        main: ({ history }) => <AddRoom history={history} />
    },
    {
        path: "/listroom",
        exact: true,
        main: ({ history }) => <ListRoom history={history} />
    },
    {
        path: "/editroom",
        exact: true,
        main: ({ history }) => <EditRoom history={history} />
    },
    {
        path: "",
        exact: true,
        main: () => <Page404 />
    },
]

export default routes;