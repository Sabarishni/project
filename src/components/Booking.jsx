/* eslint-disable react/prop-types */
import BookingForm from "./BookingForm";

export default function Booking(props){
    return(
        <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch} SubmitForm={props.SubmitForm}/>
    );
}