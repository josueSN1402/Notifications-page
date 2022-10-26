import { createContext } from 'react';

const NotificationContext = createContext();

function NotificationProvider(props) {
	return (
		<NotificationContext.Provider>
			{children}
		</NotificationContext.Provider>
	);
}

export { NotificationContext, NotificationProvider }