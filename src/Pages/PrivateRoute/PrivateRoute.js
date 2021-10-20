import { Spinner } from "react-bootstrap";
import { Redirect, Route } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
    console.log(children)
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return <Spinner animation="grow" variant="light" />
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user?.uid ? (
                    children

                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />

    )
};

export default PrivateRoute;