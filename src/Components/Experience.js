import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@material-ui/icons/Work";

export default function Experience() {
  const items = [
    {
      date: "Feb 2024 - Present",
      cardTitle: "TransUnion, Pune",
      cardSubtitle: "Application Development Intern",
      cardDetailedText: [
        "Developed an internal Demand Fulfillment Portal using Java Spring Boot for RESTful APIs.",
        "Engineered algorithms for member allocation based on manager-provided projections, approved by admin.",
        "Implemented secure role-based authentication using Spring Security.",
      ].map(function (text) {
        return <li>{text}</li>;
      }),
    },
    {
      date: "June 2022 - June 2024 ",
      cardTitle: "Enactus S.P.I.T.",
      cardSubtitle: "Vice-President",
      cardDetailedText: [
        "Organized national-level competitions & community drives.",
        "Secured INR 50,000 business grant from KPMG.",
        "Launched 'Project Prithvi' to promote entrepreneurship, support Start-Up Entrepreneur's & Small Manufacturing Enterprises (SME).",
        "Collaborated with NGOs on 'Project Unnati' for empowering underprivileged childrens."
      ].map(function (text) {
        return <li>{text}</li>;
      }),
    },
    {
      date: "January 2023 - February 2023",
      cardTitle: "PredictRAM",
      cardSubtitle: "Finance Analyst Intern",
      cardDetailedText: [
        "Analyzed broad array of finance/economic statistics to identify trends & patterns.",
        "Interpreted, extrapolated & tracked diversified data.",
        "Amalgamated information, events happening around the world & prepared consolidated Reports.",
      ].map(function (text) {
        return <li>{text}</li>;
      }),
    }
    // {
    //   date: "August 2018 – January 2019",
    //   cardTitle: "TechSkills IT Consultants",
    //   cardSubtitle: "Fullstack Developer Intern",
    //   cardDetailedText:
    //     "Developed a Meeting App website which handles all the data that happens in a meeting. In this project I developed several REST API's using Spring Boot and used the MVC architecture. These API's are being consumed in the frontend.",
    // },
  ];

  return (
    <section id="experience" class="about background-alt">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Experience</h2>
        </div>
        <div class="row">
          <div class="col-lg-12 d-flex justify-content-center">
            <VerticalTimeline className="custom-line">
              {items.map((data, i) => {
                return (
                  <VerticalTimelineElement
                    key={i}
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "#343a40" }}
                    date={data.date}
                    dateClassName="timeline-date"
                    contentArrowStyle={{
                      borderRight: "7px solid  rgb(33, 150, 243)",
                    }}
                    iconStyle={{
                      background: "#0563bb",
                      color: "#fff",
                    }}
                    icon={<WorkIcon />}
                  >
                    <h3
                      className="vertical-timeline-element-title"
                      style={{
                        fontSize: "14",
                        color: "rgba(255, 255, 255, 0.8)",
                      }}
                    >
                      {data.cardTitle}
                    </h3>
                    <h4
                      className="vertical-timeline-element-subtitle"
                      style={{
                        fontSize: "1.2em",
                        fontWeight: "350",
                        color: "#7e8890",
                      }}
                    >
                      {data.cardSubtitle}
                    </h4>
                    <p
                      style={{
                        fontSize: "1em",
                        fontWeight: "350",
                        color: "#74808a",
                      }}
                    >
                      {data.cardDetailedText}
                    </p>
                  </VerticalTimelineElement>
                );
              })}
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </section>
  );
}
