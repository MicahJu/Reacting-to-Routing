import React, { useEffect } from 'react';


function Home() {

    const [Home, setHome]=useState([]);
        useEffect(()=> {
            fetch("https://localhost:3000/api/home")
            .then(res => res.json())
            .then(
                (result)=> {
                    setHome (result);
                }
            );
        });


            return (
                <div>
                    <h2>Go Home</h2>
                    <table>
                        <thread>
                            <tr>
                                <th>I need some Help</th>
                            </tr>
                        </thread>
                        <body>
                        {Home.map(emp => (
                            <tr key={emp.iNeedSomeHelp}>
                            </tr>
                        ))}
                        </body>
                    </table>
                </div>

                );
}

export default Home