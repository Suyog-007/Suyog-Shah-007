import img from "./images/Suyog_Photo_2.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function About() {
  return (
    <section id="about" class="about background-alt">
      <Container data-aos="fade-up">
        <div class="section-title">
          <h2>About Me</h2>
        </div>

        <Row>
          <Col lg={4} className="d-flex justify-content-center">
            <img
              src={img}
              height="100%"
              width="85%"
              style={{ borderRadius: "10%" }}
            />
          </Col>
          <Col lg={8} pt={4} className="content">
            <br></br>
            <h3>I am a Coder..</h3>
            <br></br>
            <p style={{ color: "#728394" }}>
Passionate to remain organized with a talent for creating data analysis algorithms & solving complex problems. Innovative
thinker, always open to new ideas & learning opportunities. Having excellent communication ability to build effective
relationships & multi-tasking skills, enabling me to be productive.
            </p>
            <p style={{ color: "#728394" }}>
              Always seeking challenging position in and organization where my
              skills find ample of oppurtunities for upgradation and growth of
              the company.
            </p>
            <p style={{ color: "#728394" }}>
              I also like to do <b>Competitive Programming.</b> Please checkout my <a style = {{color : ""}} target="_blank" href = "https://leetcode.com/suyogshahb701/" >LeetCode</a> , <a style = {{color : ""}} target="_blank" href = "https://www.codechef.com/users/suyog_shah" >CodeChef</a> , <a style = {{color : ""}} target="_blank" href = "https://codeforces.com/profile/suyogshahb701" >Codeforces</a> handle.
            </p>
            <br></br>
            <Row>
              <Col lg={4}>
                <ul>
                  <li>
                    <i class="bi bi-chevron-right"></i> <strong>Phone:</strong>{" "}
                    <span>+91 9769314965</span>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i> <strong>City:</strong>{" "}
                    <span>Mumbai, India</span>
                  </li>
                </ul>
              </Col>
              <Col lg={7}>
                <ul>
                  <li>
                    <i class="bi bi-chevron-right"></i> <strong>Degree:</strong>{" "}
                    <span>B.Tech in Comptuer Engineering @ S.P.I.T</span>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i> <strong>Email:</strong>{" "}
                    <span>
                      <a href="mailto:suyogshahb701@gmail.com">
                      suyogshahb701@gmail.com
                      </a>
                    </span>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
