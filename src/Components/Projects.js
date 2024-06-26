import Chip from "@material-ui/core/Chip";
import Fab from "@material-ui/core/Fab";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useState } from "react";
import CodeIcon from "@material-ui/icons/Code";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";

const Projects = () => {
  const items = [
    {
      cardTitle: "BiFrost - No code ETL Tool",
      cardDetailedText: [
        "Developed a versatile web-based No-code tool, offering seamless data integration through an intuitive drag-and-drop GUI, catering to both stream and batch processing needs. ",
      ].map(function (text) {
      return <li>{text}</li>;
    }),
  technologies: ["React", "Django", "Apache Beam", "Apache Flink", "Redis", "PostgreSQL"],
    links: [
      {
        // url: "https://github.com/Suyog-007/Barcalays-Data-Protection-CLI-Package",
        text: "Paper Under Publicaiton",
      },
    ],
    },
    {
      cardTitle: "CLI Package - Data Protection",
      cardDetailedText: [
        "Automated data transfer between on-premises & AWS cloud using shell script CLI package.",
        "Bundled & encrypted data in transit with OpenSSL, decrypted at destination.",
        "Created a secure channel using OpenSSH & stored data in AWS S3 bucket.",
        "Developed a key management service(KMS) using EC2 Instance for encryption / decryption keys.",
      ].map(function (text) {
      return <li>{text}</li>;
    }),
  technologies: ["Shell Script", "AWS", "OpenSSL", "OpenSSH"],
    links: [
      {
        url: "https://github.com/Suyog-007/Barcalays-Data-Protection-CLI-Package",
        text: "View Source Code",
      },
    ],
    },
{
  cardTitle: "KRYPT - Cryptocurrency Website",
    cardDetailedText: [
      "Developed a website that enables users to conduct transactions using the Ethereum cryptocurrency",
      "Also providing real-time access to market data & news related to cryptocurrencies.",
    ].map(function (text) {
      return <li>{text}</li>;
    }),
      technologies: ["ReactJS","Tailwind","ExpressJS","NodeJS","Solidity","MetaMask"],
        links: [
          {
            url: "https://gilded-madeleine-f072d2.netlify.app/",
            text: "Website Link",
          },
          {
            url: "https://github.com/Suyog-007/CryptoExhangePlatform",
            text: "View Source Code",
          },
        ],
    },
{
  cardTitle: "FIREGYM – Fitness Website",
    cardDetailedText: [
      "Developed professional fitness website, enabling users to search exercises by Muscle type or Equipment.",
      "Utilized GIFs & videos to demonstrate appropriate exercise techniques.",
      "Incorporated customized workout plans, login functionality using passport & JWT token, BMI calculator, star/comment rating system for user feedback.",
    ].map(function (text) {
      return <li>{text}</li>;
    }),
      technologies: ["MongoDB", "ExpressJS", "ReactJS","NodeJS"],
        links: [
          {
            url: "https://snazzy-sawine-d3d0db.netlify.app/",
            text: "Website Link",
          },
          {
            url: "https://github.com/Suyog-007/Fitness-website",
            text: "View Source Code",
          },
        ],
    },
// {
//   cardTitle: "Finance Assistant Chatbot",
//     cardDetailedText: [
//       "Created a chatbot for Fin-tech companies for helping students regarding finances.",
//       "Tech stack comprises of Django, Rasa NLU and Postgresql.",
//     ].map(function (text) {
//       return <li>{text}</li>;
//     }),
//       technologies: ["Python", "Django", "Rasa"],
//         links: [
//           {
//             url: "https://github.com/Sitanshuk/HackPython",
//             text: "View Source Code",
//           },
//         ],
//     },
// {
//   cardTitle: "Text Summarization",
//     cardDetailedText: [
//       "It summarizes the given text into number of sentences or words in English and Punjabi.",
//       "Created in Flask and deployed on Google App Engine.",
//     ].map(function (text) {
//       return <li>{text}</li>;
//     }),
//       technologies: ["Python", "GCP"],
//         links: [
//           {

//           },
//         ],
//     },
// {
//   cardTitle: "Meeting App",
//     cardDetailedText:
//   "This project was created while I was working as a Full Stack Developer Intern. Created API's using Spring Boot and used the MVC architecture, and consumed these API's in the frontend.",
//     technologies: ["HTML", "CSS", "JS", "PHP"],
//       links: [
//         {

//         },
//       ],
//     },
// {
//   cardTitle: "Justalk",
//     cardDetailedText: "A chat application made using React and Firebase Auth",
//       technologies: ["React JS", "Firebase"],
//         links: [
//           {

//           },
//           {

//           },
//         ],
//     },
   ];

const [limit, setLimit] = useState(3);
const [loadButton, setLoadButton] = useState(true);
const [lessButton, setLessButton] = useState(false);

const loadMore = () => {
  setLimit(6);
  setLoadButton(false);
  setLessButton(true);
};

const loadLess = () => {
  setLimit(3);
  setLoadButton(true);
  setLessButton(false);
};

const addButton = () => (
  <Fab color="primary blue" aria-label="add">
    <AddIcon />
  </Fab>
);

return (
  <section id="projects" class="about background-alt">
    <div class="container" data-aos="fade-up">
      <div class="section-title">
        <h2>Projects</h2>
      </div>
      <div class="row">
        <div class="col-lg-12 d-flex justify-content-center">
          <VerticalTimeline className="custom-line">
            {items.slice(0, limit).map((data, i) => (
              <VerticalTimelineElement
                key={i}
                className="vertical-timeline-element--work"
                contentStyle={{ background: "#343a40" }}
                dateClassName="timeline-date"
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(33, 150, 243)",
                }}
                icon={<CodeIcon />}
                iconStyle={{
                  background: "#0563bb",
                  color: "#fff",
                }}
              >
                <div className="projects-technologies">
                  {data.technologies.map((name, i) => (
                    <Chip key={i} label={name}></Chip>
                  ))}
                </div>
                <h3
                  className="vertical-timeline-element-title"
                  style={{
                    fontSize: "12",
                    color: "rgba(255, 255, 255, 0.8)",
                  }}
                >
                  {data.cardTitle}
                </h3>
                <p
                  style={{
                    fontSize: "1em",
                    fontWeight: "350",
                    color: "#74808a",
                  }}
                >
                  {data.cardDetailedText}
                </p>
                <div className="project-links">
                  {data.links.map((link, j) => (
                    <div>
                      <br></br>
                      <Button
                        key={j} // eslint-disable-line react/no-array-index-key
                        variant="contained"
                        color="default"
                        target="_blank"
                        href={link.url}
                      >
                        {link.text}
                      </Button>
                    </div>
                  ))}
                </div>
              </VerticalTimelineElement>
            ))}
            {loadButton && (
              <VerticalTimelineElement
                iconOnClick={loadMore}
                iconClassName="d-flex justify-content-center"
                icon={
                  <IconButton aria-label="add">
                    <AddIcon
                      style={{
                        color: "#fff",
                        marginTop: "0.1px",
                      }}
                    />
                  </IconButton>
                }
                iconStyle={{
                  background: "#0563bb",
                  color: "#fff",
                }}
              />
            )}
            {lessButton && (
              <VerticalTimelineElement
                iconOnClick={loadLess}
                iconClassName="d-flex justify-content-center"
                icon={
                  <IconButton aria-label="add">
                    <RemoveIcon
                      style={{
                        color: "#fff",
                        marginTop: "0.1px",
                      }}
                    />
                  </IconButton>
                }
                iconStyle={{
                  background: "#0563bb",
                  color: "#fff",
                }}
              />
            )}
          </VerticalTimeline>
        </div>
      </div>
    </div>
  </section>
);
};

export default Projects;
