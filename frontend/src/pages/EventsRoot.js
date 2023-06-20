import { Outlet } from "react-router";
import EventsNavigation from "../components/EventsNavigation";


function EventsRoutLayout() {
    return (
        <>
            <EventsNavigation />
            <Outlet />
        </>
    )
};

export default EventsRoutLayout;