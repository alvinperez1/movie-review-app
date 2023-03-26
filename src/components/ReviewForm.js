import React from 'react'
import Stars from "./Stars";

const ReviewForm = ({submitHandler}) => {

    return (
        <div>
            <form onSubmit = {submitHandler}>
                <label>Stars:</label>
                    <Stars name="stars" stars={null} />
                    <label>Comment:</label>
                    <br></br>
                    <textarea className='border border-danger rounded' cols="50" rows="3" name="comment"/> 
                    <br></br>
                    <button className='btn btn-danger mb-2' type="submit">Submit</button>
            </form>
        </div>
    );
}
export default ReviewForm;
