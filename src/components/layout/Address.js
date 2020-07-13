import React from "react";

function Address() {
  return (
    <div>
      <div className="address">
        <div className="row">
          <div className="col-md-4">
            <h1>LOCATION</h1>
            <p>Powder Gali,Goregaon,Mumbai</p>
          </div>
          <div className="col-md-4">
            <h1 id="a1">AROUND THE WEB</h1>
            <h3 className="social">
              <i class="fab fa-linkedin-in" />
              {""} <i class="fab fa-facebook" /> <i class="fab fa-twitter"></i>
            </h3>
          </div>
          <div className="col-md-4">
            <h1>ABOUT</h1>
            <p>You can Plan your day,adding the events into it..</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Address;
