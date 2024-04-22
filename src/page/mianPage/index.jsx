import React from 'react'

export default function mainPge() {
  return (
    <>
        <section className="hero">
  <header>
    <h2 className="company-name">Company name</h2>

    <nav className="mainmenu">
      <ul>
        <li><a href="#" className="active">Home</a></li>
        <li><a href="#">Our Services</a></li>
        <li><a href="#">The Team</a></li>
        <li><a href="#">Get in Touch</a></li>
      </ul>
    </nav>
  </header>
  <img className="hero-image" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/96252/octavector-stock1.jpg" alt="" />
  <div className="hero-message">
    <h1>A fantastic and bold<br />opening message</h1>
    <h3>Here is a sentance about our company values</h3>
    <a href="#" className="btn cta">Find out more</a>
  </div>
</section>

<section className="about_us">
  <div className="row nomargin">
    <h2 className="section_title">About us</h2>
  </div>
  <div className="row row2">
    <div>
      <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</h2>
      <p>Lorem ipsum dolor sit amet, <a href="#">A quality web link</a> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    </div>
    <div>
      <figure>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/96252/octavector-stock2.jpg" alt="" />
        <figcaption>A meaningful image caption will go here</figcaption>
      </figure>

    </div>
  </div>
</section>

<section className="services">
  <div className="row nomargin">
    <h2 className="section_title">Our Services</h2>
  </div>
  <div className="row row4">
    <div className="service">
      <h3>
        "Lorem ipsum dolor sit amet, <span className="highlight">here is a highlight, wow!</span> sed do eiusmod tempor incididunt ut."
      </h3>
    </div>
    <div className="service">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
    </div>
    <div className="service">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
    </div>
    <div className="service">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
    </div>
  </div>
</section>

<section className="team">
  <div className="row nomargin">
    <h2 className="section_title white">The Team</h2>
  </div>
  <div className="row row4mobile">
    <div className="profile">
      <figure>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/96252/octavector-stock3.jpg" alt="" />
      </figure>
      <p className="profile_name">Staff Name</p>
      <p className="profile_position">Position / Job Title</p>
    </div>
    <div className="profile">
      <figure>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/96252/octavector-stock3.jpg" alt="" />
      </figure>
      <p className="profile_name">Staff Name</p>
      <p className="profile_position">Position / Job Title</p>
    </div>
    <div className="profile">
      <figure>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/96252/octavector-stock3.jpg" alt="" />
      </figure>
      <p className="profile_name">Staff Name</p>
      <p className="profile_position">Position / Job Title</p>
    </div>
    <div className="profile">
      <figure>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/96252/octavector-stock3.jpg" alt="" />
      </figure>
      <p className="profile_name">Staff Name</p>
      <p className="profile_position">Position / Job Title</p>
    </div>
  </div>
</section>

<section>
  <div className="row nomargin">
    <h2 className="section_title">Get in Touch</h2>
  </div>
  <div className="row row2">
    <div>
      <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
    <div>
      <form action="" method="post" className="contact_form">
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="user_name" />
        </div>
        <div>
          <label htmlFor="mail">E-mail</label>
          <input type="email" id="mail" name="user_mail" />
        </div>
        <div>
          <label htmlFor="msg">Message</label>
          <textarea id="msg" name="user_message" cols="20" rows="5"></textarea>
        </div>
        <div>
          <button type="submit">Send your message</button>
        </div>
      </form>

    </div>
  </div>
</section>
<footer>

        <div className="row row4">
            <div>
            <address>
                <h3>Contact</h3>
            <p>
                123 Street Name <br/>
            Region<br/>
            The County/State<br/>
            Country
                </p>
                <p><a href="mailto:">hello@ouremail.com</a> </p>
            </address>
            </div>
            <div>
            <h3>Links</h3>
            <ul>
                <li>
                <a href="">Terms and Conditions</a></li>
                <li><a href="">Privacy Policy</a></li>
                <li> <a href="">Cookie Policy</a></li>

            </ul>

            </div>
            <div></div>
            <div>
            <h3>Social</h3>

            <a href="#" className="icon" title="Facebook"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M0 0v24h24v-24h-24zm16 7h-1.923c-.616 0-1.077.252-1.077.889v1.111h3l-.239 3h-2.761v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z"/></svg></a>

            <a href="#" className="icon" title="Twitter"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M0 0v24h24v-24h-24zm18.862 9.237c.208 4.617-3.235 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.079-4.03 3.198-4.03.944 0 1.797.398 2.396 1.037.748-.147 1.451-.42 2.085-.796-.245.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.44.656-.997 1.234-1.638 1.697z"/></svg></a>

            <a href="#" className="icon" title="LinkedIn"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
            </div>
        </div>
    </footer>
    </>
  )
}
