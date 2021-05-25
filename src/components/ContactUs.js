import React, { Component } from "react";
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns">
            <p className="lead">
              Feel free to contact me for any work or suggestions below
            </p>
          </div>
        </div>
        <div className="row">
          <aside className="eigth columns footer-widgets">
            <div className="widget">
              <h4>Linked in :{resumeData.linkedinId}</h4>
              <a href="mailto:eiman.h.zarrinh@gmail.com">Email Me</a>
              <br></br>
              <a href="https://github.com/zarriei">GitHub</a>
              <br></br>
              <a href="https://www.linkedin.com/in/eiman-zarrinhonar/">
                LinkedIn
              </a>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}
