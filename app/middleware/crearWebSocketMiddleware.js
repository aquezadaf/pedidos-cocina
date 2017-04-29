import io from "socket.io-client";
import webSocketMiddleware from "./webSocketMiddleware";

const socket = io(process.env.WEBSOCKET_URL);

export default webSocketMiddleware(socket);
