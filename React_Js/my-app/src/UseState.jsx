import { useState } from "react";

const Form = () => {
    const [name, setName] = useState("");

    const handleNameClick = () => {
        if (name === "") {
            console.log("Name field is empty");
        } else {
            console.log("Name entered:", name);
        }
    };

    return (
        <section>
            <h3>Application Form</h3>

            <label>Name:</label>
            <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onClick={handleNameClick}
            />

            <br /><br />

            <label>E-mail:</label>
            <input
                type="text"
                id="email"
                onClick={() => {
                    console.log("Enter your e-mail");
                }}
            />

            <br /><br />

            <label>Phone No:</label>
            <input
                type="text"
                id="phone_no"
                onClick={() => {
                    console.log("Enter your Phone.No");
                }}
            />

            <br /><br />

            <input
                type="submit"
                value="submit"
                onClick={() => {
                    if (name === "") {
                        alert("Please enter your name before submitting!");
                    } else {
                        console.log("Your submission is complete");
                    }
                }}
            />
        </section>
    );
};

export default Form;