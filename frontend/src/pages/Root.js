import MainNavigation from "../components/MainNavigation";
import { Outlet } from "react-router";

function RootLayout() {

    //const navigation = useNavigation();



    return <>
        <MainNavigation />
        <main>
            {/*navigation.state === 'loading' && <p>LOADING....</p>*/}
            <Outlet />
        </main>
    </>
}

export default RootLayout;