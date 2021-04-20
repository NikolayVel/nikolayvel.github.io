import {html} from '../lib.js'

const experienceTemplate = () => html`
 <section id="experience" class="">
            <div class="experience-container">

                <div class="experience-header">

                    <h1>PROFESSIONAL</h1>
                    <h2>My Experience</h1>

                </div>
                <div class="experience-timeline">
                    <div class="exp-box">
                        <p class="exp-years">2017 - </p>
                        <p class="exp-title">Project Manager</p>
                        <p class="exp-company">Data Wise Ltd.</p>
                        <p class="exp-description">Project manager in the Data Processing and Market Insides department, responsible for Data distribution and analysis. Coordination between clients and company departments. Leading the projects from set up, throughout whole lifecycle to final delivery. Negotiation of budget, timings and scope, allocation of teams and resources. Highlight potential risks or malfunctions and act proactively to resolve issues.
</p>
                    </div>

                    <div class="exp-box">
                        <p class="exp-years">2015 - 2017</p>
                        <p class="exp-title">Project Manager</p>
                        <p class="exp-company">cQuest/GemSeek Research and consulting  </p>
                        <p class="exp-description">Project manager in the Data Science and Analytics department. Manage multiple global projects to ensure they are executed on time, on budget, and according to specification; Act as main point of contact with client representatives and other project stakeholders; Complete project documentation throughout the project lifecycle; Complete project deliverables; Plan and control project risks; Present and guide the clients through the results 
</p>
                    </div>
                    <div class="exp-box">
                        <p class="exp-years">2012 - 2014</p>
                        <p class="exp-title">Entrepreneur and Owner</p>
                        <p class="exp-company"><a style="color:inherit; text-decoration:none" href="http://www.powertools.bg" target="_blank">PowerTools.bg</a></p>
                        <p class="exp-description">Development and maintenance of online e-commerce platform and databases using Opencart. Business and digital marketing strategy development. Monitor and report on Google Analytics metrics. Highlight potential risks or malfunctions and act proactively to resolve issues. Seek opportunities for improvement and suggest new projects. Coordination across integrated marketing channels. </p>
                    </div>
                    <div class="exp-box">
                        <p class="exp-years">2010 - 2012</p>
                        <p class="exp-title">IT Project coordinator</p>
                        <p class="exp-company">Hewlett Packard</p>
                        <p class="exp-description">Works on customer project delivery, under supervision, as, team member or in a project support role. Provides subject matter support in all areas of the Project Management Body of Knowledge to the project. Ensure the best technical solutions and business process flows that meet the client’s business needs and address relevant industry trends.</p>
                    </div>
                </div>
                <div class="skills-container">
                    <h2>My Skills</h2>
                    <div class="skills-boxes">
                        <div class="box js">
                            <div class="text">
                                <h3>Java Script</h3>
                                <h3>75%</h3>
                            </div>
                            <div class="bar">
                                <div class="base"></div>
                                <div class="overlay"></div>
                            </div>
                        </div>
                        <div class="box html">
                            <div class="text">
                                <h3>HTML/CSS</h3>
                                <h3>75%</h3>
                            </div>
                            <div class="bar">
                                <div class="base"></div>
                                <div class="overlay"></div>
                            </div>
                        </div>
                        <div class="box python">
                            <div class="text">
                                <h3>Python</h3>
                                <h3>60%</h3>
                            </div>
                            <div class="bar">
                                <div class="base"></div>
                                <div class="overlay"></div>
                            </div>
                        </div>
                        <div class="box excel">
                            <div class="text">
                                <h3>Excel</h3>
                                <h3>80%</h3>
                            </div>
                            <div class="bar">
                                <div class="base"></div>
                                <div class="overlay"></div>
                            </div>
                        </div>
                        <div class="box photoshop">
                            <div class="text">
                                <h3>Photoshop</h3>
                                <h3>60%</h3>
                            </div>
                            <div class="bar">
                                <div class="base"></div>
                                <div class="overlay"></div>
                            </div>
                        </div>
                        <div class="box pbi">
                            <div class="text">
                                <h3>PowerBI</h3>
                                <h3>70%</h3>
                            </div>
                            <div class="bar">
                                <div class="base"></div>
                                <div class="overlay"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>`;

export function experiencePage(context) {
    context.render(experienceTemplate());
    context.setActiveNav('experience-link')
}