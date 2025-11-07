'use client'
import {useState} from "react";
import {createBooking} from "@/lib/actions/booking.actions";
import posthog from "posthog-js";

const BookEvent = ({eventId,slug}:{eventId:'string',slug:'string'}) => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handelSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const {success} = await createBooking({eventId,slug,email});

        if(success) {
            setSubmitted(true);
            posthog.capture('event_booked',{eventId,slug,email})
        }else{
            console.log("Error creating booking failed");
            posthog.captureException("Error creating booking failed");
        }
    }

    return (
        <div id="book-event">
            {submitted ? (
                <p className="text-sm">Thank tou for signing up!</p>
            ) : (
                <form onSubmit={handelSubmit}>
                    <div>
                        <label htmlFor="email">Get Updates about this event</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            id="email"
                            placeholder="Enter your email address"
                        />
                    </div>

                    <button type="submit" className="button-submit">Submit</button>
                </form>
            )}
        </div>
    )
}
export default BookEvent
