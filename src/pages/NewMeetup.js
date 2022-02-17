import { useHistory } from 'react-router-dom';

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
    const history = useHistory();
    
    function addMeetupHandler(meetupData) {
        fetch(
            'https://react-first-app-91e36-default-rtdb.firebaseio.com/apartments.json',
                { 
                method: 'POST', 
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        ).then(() => {
            history.replace('/')
        });
    }

    return ( 
        <section>
            <h1>Add New Real Estate</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </section>
    );
}

export default NewMeetupPage;