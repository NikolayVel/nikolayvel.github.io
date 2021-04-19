import {html} from '../lib.js'

const educationTemplate = (onClick) => html`
    <section id="education" class="">
            <div class="education-container">
                <div class="education-header">

                    <h1>KNOWLEDGE</h1>
                    <h2>My Education</h1>

                </div>
                <div class="education-timeline">


                    <ul @click=${onClick}>
                        <li>
                            <div>
                                <h3><i class="fas fa-chevron-right"></i> 2021:JS Applications certificate - Software University Bulgaria</h3>
                                <p class="hidden"><span class="bold">Topics covered:</span> HTTP and REST Services, Asynchronous Programming, Remote Data and Authentication, Single Page Applications, Architecture and Testing, Routing, Modular Applications
                                    
                                </p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h3><i class="fas fa-chevron-right"></i> 2021:JS Advanced certificate - Software University Bulgaria</h3>
                                <p class="hidden"><span class="bold">Topics covered:</span> Syntax, Functions and Statements, Arrays and Nested Arrays, Objects and Composition, DOM Introduction, DOM Manipulations and Events, Advanced Functions, Unit Testing and Error Handling, Classes, Prototypes and Inheritance</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h3><i class="fas fa-chevron-right"></i> 2020: Python OOP - Software University Bulgaria</h3>
                                <p class="hidden"><span class="bold">Topics covered:</span>Defining Classes, Classes and Instances, Attributes and Methods, Encapsulation, Inheritance, Polymorphism and Magic Methods, SOLID, Iterators and Generators, Decorators, Testing, Design Patterns</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h3><i class="fas fa-chevron-right"></i> 2020: Python Advanced - Software University Bulgaria</h3>
                                <p class="hidden"><span class="bold">Topics covered:</span>Lists as Stacks and Queues, Tuples and Sets, Multidimensional Lists, Comprehension, Functions Advanced, File Handling, Modules, Workshop, Error Handling</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h3><i class="fas fa-chevron-right"></i> 2014–2016: MSc. in Economics and Business Administration, University of Southern Denmark</h3>
                                <p class="hidden"><span class="bold">Topics covered:</span> Innovation Management, Project Management, Strategy and Competition,Framework Conditions for Development of the Firm, Methodology of the Social Sciences and Qualitative Methods, Buyer Behavior, Quantitative Market Research Methods, Brand Management etc. </p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h3><i class="fas fa-chevron-right"></i> 2008–2011: MSc in Project Management, International Business School, Bulgaria</h3>
                                <p class="hidden"><span class="bold">Topics covered:</span></p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h3><i class="fas fa-chevron-right"></i> 2003–2007: BSc in IT - Information Brokering, University of Information Technologies and Library </h3>
                                <p class="hidden">Linear Algebra and Statistics, Computer Architecture, Theoretical Foundations of Informatics, Mathematical Analysis, Operation Systems, Programming, Data and Document Processing, Computer Information Technologies, Computer Networks and Communications, Database Design, System Analysis, Mathematical Modeling, Protection of Information, Software Projects Development and Management, Web Programming, Information Security etc.</p>
                            </div>
                        </li>
                        
                    </ul>

                </div>
            </div>
        </section> `;


export function educationPage(context) {
    context.render(educationTemplate(onClick));
    context.setActiveNav('education-link')
}

function onClick(event) {
    if (event.target.tagName == "H3") {
        const target = event.target.parentNode;
        const paragraph = target.querySelector('p')
        const icon = target.querySelector('i')

        if (paragraph.classList.contains('hidden')) {
            icon.classList.remove('fa-chevron-right')
            icon.classList.add('fa-chevron-down')
            paragraph.classList.remove('hidden')
        } else {
            icon.classList.add('fa-chevron-right')
            icon.classList.remove('fa-chevron-down')
            paragraph.classList.add('hidden')
        }
        
        
    }

}