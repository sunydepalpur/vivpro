import React, { useEffect, useState } from "react";
import { getAllSongs } from "../../services/allsongs";
import "./home.css";

function Home() {
  const [list, setList] = useState([]);

  useEffect(() => {
    let mounted = true;
    getAllSongs().then((items) => {
      console.log(items);
      if (mounted) {
        setList(items["songs"]);
      }
    });
    return () => (mounted = false);
  }, []);

  return (
    <div className="wrapper">
      <div className="container-fluid mt-3">
              <div className="table-container">
              <table className="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">title</th>
              <th scope="col">danceability</th>
              <th scope="col">energy</th>
              <th scope="col">key</th>
              <th scope="col">loudness</th>
              <th scope="col">mode</th>
              <th scope="col">acousticness</th>
              <th scope="col">instrumentalness</th>
              <th scope="col">liveness</th>
              <th scope="col">valence</th>
              <th scope="col">tempo</th>
              <th scope="col">duration_ms</th>
              <th scope="col">time_signature</th>
              <th scope="col">num_bars</th>
              <th scope="col">num_sections</th>
              <th scope="col">num_segments</th>
              <th scope="col">class</th>
              <th scope="col">star_rating</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item) => (
              <tr key={item.id}>
                    <th scope="row">{item.id}</th>
                    <th scope="row">{item.title}</th>
              <td scope="">{item.danceability}</td>
              <td scope="">{item.energy}</td>
              <td scope="">{item.key}</td>
              <td scope="">{item.loudness}</td>
              <td scope="">{item.mode}</td>
              <td scope="">{item.acousticness}</td>
              <td scope="">{item.instrumentalness}</td>
              <td scope="">{item.liveness}</td>
              <td scope="">{item.valence}</td>
              <td scope="">{item.tempo}</td>
              <td scope="">{item.duration_ms}</td>
              <td scope="">{item.time_signature}</td>
              <td scope="">{item.num_bars}</td>
              <td scope="">{item.num_sections}</td>
              <td scope="">{item.num_segments}</td>
              <td scope="">{item.class_}</td>
              <td scope="">{item.star_rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
}

export default Home;
