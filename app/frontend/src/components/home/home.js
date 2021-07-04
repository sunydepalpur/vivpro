import React, { useEffect, useState } from "react";
import { getAllSongs } from "../../services/allsongs";
import "./home.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"


function Home() {
  const [list, setList] = useState([]);

  $(document).ready(function () {
    $.noConflict();
    $(document).ready(function () {
      $('#dtTable').DataTable();
  });
    // $('.dataTables_length').addClass('bs-select');
  });

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
              <table id="dtTable" className="table table-striped table-responsive table-hover table-bordered table-md" cellSpacing="0" width="100%">
          <thead className="table-dark"> 
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Title</th>
              <th scope="col">Danceability</th>
              <th scope="col">Energy</th>
              <th scope="col">Key</th>
              <th scope="col">Loudness</th>
              <th scope="col">Mode</th>
              <th scope="col">Acousticness</th>
              <th scope="col">Instrumentalness</th>
              <th scope="col">Liveness</th>
              <th scope="col">Valence</th>
              <th scope="col">Tempo</th>
              <th scope="col">Duration_ms</th>
              <th scope="col">Time_signature</th>
              <th scope="col">Num_bars</th>
              <th scope="col">Num_sections</th>
              <th scope="col">Num_segments</th>
              <th scope="col">Class</th>
              <th scope="col">Star_rating</th>
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
