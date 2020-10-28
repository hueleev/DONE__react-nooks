export const useNotification = (title, options) => {
    if (!("Notification" in window)) {
        console.log(window);
        return;
    }
    const fireNotification = () => {
        if (Notification.permission !== "granted") {
            Notification.requestPermission().then((permission) => {
                if (permission === "granted") {
                    console.log(permission);
                    new Notification(title, options);
                } else {
                    return;
                }
            });
        } else {
            new Notification(title, options);
        }
    };
    return fireNotification;
};
