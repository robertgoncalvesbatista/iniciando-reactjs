import { AppRoutes } from "./Routes";
import "./App.css";

export default function App() {
    return <AppRoutes />;
}

/////////////////////////////////////////////

/*
import { useState } from "react";
import { Tweet } from "./components/Tweet";

import "./App.css";

export default function App() {
    // <string[]> é uma generic do Typescript
    // Imutabilidade do React
    const [tweets, setTweets] = useState<string[]>([
        "Tweet 1",
        "Tweet 2",
        "Tweet 3",
        "Tweet 4",
    ]);

    const [input, setInput] = useState("");

    function CreateTweet() {
        setTweets([...tweets, input]);
    }

    return (
        <div>
            {tweets.map((tweet) => {
                return <Tweet text={tweet}></Tweet>;
            })}

            <input type="text" onChange={(e) => setInput(e.target.value)} />

            <button
                style={{
                    background: "#464646",
                    border: 0,
                    borderRadius: "8px",
                    color: "#ffffff",
                    padding: "0.5rem 1rem",
                }}
                onClick={CreateTweet}
            >
                Adicionar Tweet
            </button>
        </div>
    );
}
*/
