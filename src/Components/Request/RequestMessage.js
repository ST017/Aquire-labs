import { useEffect, useState } from "react";

export const RequestMessage = ({ request }) => {
    const [timeAgo, setTimeAgo] = useState("");

    // Function to calculate the time difference
    const calculateTimeAgo = () => {
        const now = new Date(); // Current date
        const messageTime = new Date(request.createdAt.seconds * 1000); // Convert Firestore Timestamp to Date

        const difference = now - messageTime; // difference in milliseconds

        // Convert difference into hours, minutes, or seconds
        const hoursAgo = Math.floor(difference / (1000 * 60 * 60));
        const minutesAgo = Math.floor((difference / (1000 * 60)) % 60);
        const secondsAgo = Math.floor((difference / 1000) % 60);

        // Customize display for hours, minutes, or seconds
        if (hoursAgo > 0) {
            return `${hoursAgo} hour${hoursAgo > 1 ? "s" : ""} ago`;
        } else if (minutesAgo > 0) {
            return `${minutesAgo} min${minutesAgo > 1 ? "s" : ""} ago`;
        } else {
            return `${secondsAgo}  sec${secondsAgo > 1 ? "s" : ""} ago`;
        }
    };

    // Update the "time ago" every second
    useEffect(() => {
        const interval = setInterval(() => {
            setTimeAgo(calculateTimeAgo());
        }, 1000); // Updates every second

        // Clean up the interval when component unmounts
        return () => clearInterval(interval);
    }, [request.createdAt]);

    // Return a JSX element containing the timeAgo value
    return <span>{timeAgo}</span>; // Use a span or another element to wrap the timeAgo
};

export default RequestMessage;
