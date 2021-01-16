import { useState } from "react";

const Home = () => {
    // let prefix = "Hello";
    const defaultPrefix = "Hello friend";
    const defaultAge = 20;
    const [prefix, setPrefix] = useState(defaultPrefix);
    const [age, setAge] = useState(defaultAge);

    const handleClick = (event) => {
        console.log(event.target);
        console.log(`prefix, You Clicked The Button`);
        const newPrefix = prefix === defaultPrefix ? "Hi There" : defaultPrefix;
        setPrefix(newPrefix);
        setAge(age+1);
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <button
                onClick={handleClick}
                style={{
                    color: "white",
                    backgroundColor: "#35f135",
                    borderColor: "white",
                    boxShadow: "none",
                    borderRadius: "2px"
                }}
            >Get Older
            </button>

            <p>{prefix}. You are {age} years old</p>

        </div>
    );
}

export default Home;