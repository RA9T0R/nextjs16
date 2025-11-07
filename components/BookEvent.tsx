'use client'
import {useState} from "react";

const BookEvent = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handelSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setTimeout(() => {
            setSubmitted(true);
        },500)
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
