import { useState, createContext } from 'react';
import { UsersNotification } from './UsersNotification';

const NotificationContext = createContext();

function NotificationProvider(props) {
    const [items, setItems] = useState(UsersNotification);

    const allNotificationsRead = () => {
        items.forEach((n) => (n.read = true));
        const newArr = items.filter((n) => n.read);
        setItems(newArr);
    };

    const unreadNotification = items.filter(
        (notification) => !notification.read
    ).length;

    return (
        <NotificationContext.Provider
            value={{
                items,
                setItems,
                allNotificationsRead,
                unreadNotification,
            }}
        >
            {props.children}
        </NotificationContext.Provider>
    );
}

export { NotificationContext, NotificationProvider };
