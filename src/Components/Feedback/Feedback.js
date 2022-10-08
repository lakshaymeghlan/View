import React from "react";
import "./Feedback.css";

function Feedback() {
  return (
    <>
      <div>
        {/* <h1 className="head">FEEDBACK</h1> */}
        <article className="feedback">
          <div className="feed-back">
            <form method="post" action="/">
              <div className="fields">
                <div className="field-half">
                  <label for="name">
                    <h3 style={{ color: "white" }}>Name</h3>
                  </label>
                  <input type="text" name="name" id="name" />
                </div>
                <div className="field half">
                  <label for="email">
                    <h3 style={{ color: "white" }}>Email</h3>
                  </label>
                  <input type="text" name="email" id="email" />
                </div>
                <label for="message">
                  <h3 style={{ color: "white" }}>Message</h3>
                </label>
                <textarea
                  name="message"
                  id="message"
                  className="mytext"
                ></textarea>
              </div>
              <ul className="actions">
                <input
                  className="button_rev_fed"
                  type="submit"
                  value="Send Message"
                />

                <input className="button_rev_fed" type="reset" value="Reset" />
              </ul>
            </form>
          </div>
        </article>
      </div>
    </>
  );
}

export default Feedback;
