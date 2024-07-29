import { useContext, useEffect, useState } from "react";
import { appContext } from "../../App";

function NotificationList() {
  const { ws } = useContext(appContext);

  useEffect(() => {
    if (ws !== null) {
      ws.onmessage = (e) => {
        console.log(e);
      };
    }
  }, [ws]);
}

export default NotificationList;
