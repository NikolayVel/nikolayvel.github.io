import {html} from '../lib.js'

const personalityTemplate = (onClick) => html`
<section id="personality" class="">
    <div class="hero-container">

        <header class="personality-header">
            <h1>ABOUT ME</h1>
            <h2>Know me more</h2>
        </header>
        <div class="personality-details">
            <div class="details-text">
                <h2>I'm <span class="green-text bold">Nikolay Velichkov</span> </h3>
                    <h4>a Project Management professional and Web Development enthusiast
                </h2>
                <p>I am an experienced Project management professional and Web Development enthusiast with a positive attitude and strong business acumen. Result-driven, proactive, and determined towards achieving objectives and delivering results of highest standard both individually and as a member of a team. At the same time have good technical knowledge in IT, data distribution, and software development. I strive for innovation, but when planning and organizing tasks, I stay focused and logical. I am self-aware, with high integrity and good communication skills. Adaptable towards change, confident when working under pressure in a multicultural environment and always striving to learn more and more. 
</p>
            </div>

            <div class="details-table">
                <ul>
                    <li class="details-row">
                        <p><span class="bold">Name:</span> Nikolay Velichkov</p>
                    </li>
                    <li class="details-row">
                        <p><span class="bold">Email:</span><span class="green-text"> velichkov.mail@gmail.com</span>
                        </p>
                    </li>
                    <li class="details-row">
                        <p><span class="bold">Tel:</span> +4571458336</p>
                    </li>
                    <li class="details-row">
                        <p><span class="bold">Age:</span> 38</p>
                    </li>
                    <li class="details-row">
                        <p><span class="bold">Location:</span> Horsens, Denmark</p>
                    </li>
                </ul>
            </div>
        </div>
        
        <div @click=${onClick} class="personality-hobbies">
            <h3>Family & Hobbies...</h3>
            
            <div  class="hobbies-container ">
                <div class="family box">
                <img class="family-photo" src="./img/family-small.jpg" alt="my-family">
                    <h4>Family <i class="fas fa-chevron-down"></i></h4>
                    <p class="hidden">Live in peace and harmony with my life companion Elena and our extremely sweet and playful, almost 4
                        years old daughter Sofia. </p>
                </div>
                <div class="snowboarding box">
                    <img class="family-photo" src="./img/winter.jpg" alt="my-family">
                    <h4>Winter <i class="fas fa-chevron-down"></i></h4>
                    <p class="hidden">I really love mountains and enjoy many types of winter sports, no matter if it's snowboarding, skiing, skating, or just hiking in the snow. </p>
                </div>
                <div class="motorcycling box">
                    <img class="family-photo" src="./img/bike.jpg" alt="my-family">
                    <h4>Summer <i class="fas fa-chevron-down"></i></h4>
                    <p class="hidden">Sunbathing on the beach during hot summer days, no thank you. I use every possibility on weekends to ride my motorcycles, no matter on or off-road.  </p>
                </div>
                <div class="mtb box">
                    <img class="family-photo" src="./img/cycling.jpg" alt="my-family">
                    <h4>All year <i class="fas fa-chevron-down"></i></h4>
                    <p class="hidden">The seasons go round and round but the bicycle is the thing that I enjoy daily also in Denmark, regardless of the weather outside. Mostly MTB in the woods and on the track but also for transportation and family trips. </p>
                </div>


            </div>

        </div>
    </div>
</section>`;

{/* <div class="overflow-pic family "><img src="./img/family-small.jpg" alt="Family picture"> </div>
            <div class="overflow-pic snowboarding hidden"><img src="./img/winter.jpg" alt="Winter picture"> </div>
            <div class="overflow-pic motorcycling hidden"><img src="./img/bike.jpg" alt="Summer picture"> </div>
            <div class="overflow-pic mtb hidden"><img src="./img/cycling.jpg" alt="$1"> </div> */}

export function personalityPage(context) {
    context.render(personalityTemplate(onClick))
    context.setActiveNav('personality-link')

}

let openedOverflow =''
function onClick(event) {
    
    if (event.target.tagName == 'H4'|| event.target.tagName == 'I') {
        let target = event.target;
        while (target.tagName != 'DIV') {
            target = target.parentNode
        }
        const icon = target.querySelector('.fas')
        const textBox = target.querySelector('p')
        
        if (icon.classList.contains('fa-chevron-down')){
            icon.classList.remove('fa-chevron-down')
            icon.classList.add('fa-chevron-up')
            textBox.classList.remove('hidden')

        } else {
            icon.classList.remove('fa-chevron-up')
            icon.classList.add('fa-chevron-down')
            textBox.classList.add('hidden')
        }
       
    } 
    
    if (event.target.classList.contains('family-photo') && !openedOverflow){
        const overflow = event.target.parentNode.querySelector('.overflow-pic')
        overflow.classList.remove('hidden')
        openedOverflow = overflow
    } else if (openedOverflow){
        openedOverflow.classList.add('hidden')
        openedOverflow =''
    }
    // } else if (event.target.parentNode.classList.contains('overflow-pic')) {
    //     const overflow = event.target.parentNode;
    //     console.log(overflow)
    //     overflow.classList.add('hidden')
    //     openedOverflow =''
    // }

}
