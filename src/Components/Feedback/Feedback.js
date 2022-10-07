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
                  <label for="name">Name</label>
                  <input type="text" name="name" id="name" />
                </div>
                <div className="field half">
                  <label for="email">Email</label>
                  <input type="text" name="email" id="email" />
                </div>
                <label for="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  className="mytext"
                ></textarea>
              </div>
              <ul className="actions">
                <input type="submit" value="Send Message" />

                <input type="reset" value="Reset" />
              </ul>
            </form>
          </div>
        </article>
      </div>
    </>
  );
}

export default Feedback;
