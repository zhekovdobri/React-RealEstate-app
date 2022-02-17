import { useState, useEffect } from "react";

import MeetupList from "../components/meetups/MeetupList"; 

function AllMeetupsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch(
            'https://react-first-app-91e36-default-rtdb.firebaseio.com/apartments.json' 
        )
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            const meetups = [];

            for (const key in data) {
                const meetup = {
                    id: key,
                    ...data[key]
                };

                meetups.push(meetup);
            }

            setIsLoading(false);
            setLoadedMeetups(meetups);
        });
    }, []);

    if (isLoading) {
        return (
            <section>
               <p>Loading...</p> 
            </section>
        );
    }

    return ( 
        <section>
            <h1>All Apartments</h1>
            <MeetupList meetups={loadedMeetups} />
        </section>
        );
}

export default AllMeetupsPage;