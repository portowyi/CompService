
import React, {Fragment} from "react";

import MyNavbar from './components/menu/myNavbar';

function App({children}) {
    return (
        <Fragment>
            <MyNavbar/>
            {children}
        </Fragment>
    );
}

export default App;
