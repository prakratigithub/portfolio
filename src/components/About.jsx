import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

function Skills() {
  return (
    <HelmetProvider>
      <section className="about" id="about">
        <Helmet>

            <title>Portfolio | Prakrati Goyal | About</title>
        </Helmet>
        <h1>About me</h1>
        <div className="container">
        <div className="about-bx">
        <p>An enthusiastic Learner with highly motivated and leadership skills going to complete my bachelors of engineering degree in Computer Science  Engineering.
             Expert in implementation of each step of project.
             Eager to learn new technologies and methodologies.
             Always willing to innovate the new things which can improve the existing technology.</p>
        </div>

        </div>
        <div id="tech-stack">
          <h2>My Technology Stack</h2>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="about-bx wow zoomIn">
                  <div className="techStack-lang">
                    <h3>Languages</h3>

                            <img src="https://img.shields.io/badge/c-1563b1.svg?style=flat&logo=c&logoColor=white" alt="C"/>
                            <img src="https://img.shields.io/badge/Java-3a75b0?style=flat&logo=openjdk&logoColor=white" alt="java"/>
                            <img src="https://img.shields.io/badge/MySql-f29111.svg?style=flat&logo=mysql" alt="MySql"/>
                            <img src="https://img.shields.io/badge/HTML5-%23E34F26.svg?style=flat&logo=html5&logoColor=white" alt="HTML5"/>
                            <img src="https://img.shields.io/badge/CSS3-%231572B6.svg?style=flat&logo=css3&logoColor=white" alt="CSS3"/>
                            <img src="https://img.shields.io/badge/JavaScript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E" alt="JavaScript"/>


        

                        
                            <img src="https://img.shields.io/badge/ReactJS-282c34.svg?style=flat&logo=react&logoColor=61dafb" alt="ReactJS"/>
                



                            <img src="https://img.shields.io/badge/-GitHUb-161b22?logo=github" alt="GitHub"/>
                            <img src="https://img.shields.io/badge/Canva-%2300C4CC.svg?style=flat&logo=Canva&logoColor=white" alt="Canva"/>
                            <img src="https://img.shields.io/badge/VSCode-1f1f1f?logo=visualstudiocode&logoColor=026ec1" alt="VS Code"/>

                            <h3>Soft Skills</h3>

                            <img src="https://img.shields.io/badge/Communication-831827.svg?" alt="communication"/>
                            <img src="https://img.shields.io/badge/Inter personal skills-189232.svg?" alt="inter personal"/>
                            <img src="https://img.shields.io/badge/work ethic-7828282.svg?" alt="work"/>
                            <img src="https://img.shields.io/badge/time management -923893.svg?" alt="time management"/>
                            <img src="https://img.shields.io/badge/teamwork-262282.svg?" alt="teamwork"/>
                            <img src="https://img.shields.io/badge/Leadership-217182.svg?" alt="Leadership"/>


                        
                    </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
}

export default Skills;