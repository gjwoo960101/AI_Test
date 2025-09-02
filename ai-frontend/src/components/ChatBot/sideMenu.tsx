import { useState } from "react";

const SideMenu = () =>{

    const [isCollapsed, setIsCollapsed] = useState(false);
    const toggleSideMenu = () =>{
        setIsCollapsed(!isCollapsed);
    }

    return(
        <>
            <div className={`side-menu-container ${isCollapsed ? "collapsed" : ""}`}>
                <div className="side-menu-header">
                    <span className="side-menu-close-button" onClick={toggleSideMenu}></span>
                </div>
            </div>
        </>
    );
}

export default SideMenu;