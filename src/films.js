import React from 'react';
import React, { useEffect } from 'react';


function Films() {

    const [Home, setFilms]=useState([]);
        useEffect(()=> {
            fetch("https://localhost:3000/api/films")
            .then(res => res.json())
            .then(
                (result)=> {
                    setFilms (result);
                }
            );
        });


            return (
                <div>
                    <h2>View Films</h2>
                    <table>
                        <thread>
                            <tr>
                                <th>I need some Help</th>
                            </tr>
                        </thread>
                        <body>
                        {Films.map(emp => (
                            <tr key={emp.iNeedSomeHelp}>
                            </tr>
                        ))}
                        </body>
                    </table>
                </div>

                );
}

export default Films