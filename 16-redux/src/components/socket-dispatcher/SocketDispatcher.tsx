import { useEffect, type PropsWithChildren } from "react";
import { io } from "socket.io-client";
import { useAppDispatch } from "../../redux/hooks";
import { add } from "../../redux/profile-slice";


export default function SocketDispatcher(props: PropsWithChildren) {

    const dispatch = useAppDispatch()

    useEffect(() => {
        const socket = io(import.meta.env.VITE_IO_SERVER_URL)
        socket.onAny((eventName, payload) => {
            console.log(eventName, payload.post)
            switch(eventName) {
                case 'new-post':
                    dispatch(add(payload.post))
                    break;
            }
        })

        return () => {
            socket.disconnect()
        }
    }, [dispatch])

    return (
        <>
            {props.children}
        </>
    )
}