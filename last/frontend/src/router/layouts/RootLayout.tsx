import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { rootLayout } from "../styles";
import {useHandleSockets} from "@/src/services/hooks/useHandleSockets";
import { useSelector } from "react-redux";
import { RootState } from "@/src/states/store";
import { watchSocket } from "@/src/pages/modules/watchSocket";
import { useLayoutEffect } from "react";
import { closeSocket } from "@/src/pages/modules/closeSocket";
import { w3cwebsocket } from "websocket";

let notificationSocketHelper: w3cwebsocket | null = null;
const RootLayout = () => {
  const accessToken = useSelector((state: RootState) => state.accessToken.value)
  const {client : notificationSocket} = useHandleSockets({urlOfSocket : "notification", accessToken: accessToken, watchSocket: watchSocket});
  notificationSocketHelper = notificationSocket;

  useLayoutEffect(() => {
    return () => {
      closeSocket(notificationSocketHelper);
      notificationSocketHelper = null;
    }
  },[])
  return (
    <>
      <div className={rootLayout}>
        <ToastContainer
          draggable={true}
          closeOnClick={false}
          pauseOnFocusLoss={false}
          className="toast-container-style"
          toastClassName="toast-component-style"
          progressClassName="toast-progress-bar-style"
          pauseOnHover={true}
          autoClose={2000}
          limit={5}
          containerId={"requests"}
        />
        <ToastContainer
          pauseOnFocusLoss={false}
          pauseOnHover={false}
          draggable={true}
          containerId={"validation"}
          autoClose={2000}
          position={"top-center"}
        />
        <Outlet />
      </div>
    </>
  );
};
export default RootLayout;
