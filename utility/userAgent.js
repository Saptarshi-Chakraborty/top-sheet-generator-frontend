import { osName, osVersion, browserName, deviceType, fullBrowserVersion, isMobile, isDesktop, isTablet } from "react-device-detect";

const getUserAgentDetails = () => {
    let _deviceType = "";
    if (isMobile == true)
        _deviceType = "mobile"
    else if (isDesktop == true)
        _deviceType = "desktop"
    else if (isTablet == true)
        _deviceType = "tablet"

    return { osName, osVersion, browserName, deviceType: _deviceType, fullBrowserVersion }
}

export default getUserAgentDetails;