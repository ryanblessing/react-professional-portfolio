import React from 'react'
import redDog from '../../assets/photos/red.JPG';
import remyDog from '../../assets/photos/remyDog.JPG'
import failure from '../../assets/photos/failure.jpg'

const About = () => {
    return (
       <section className="container-fluid">
           <div>
           <main>
               <h1 className="display-3 text-center">About Me</h1>
                   <div>
                       <div className="row">
                       <img src={failure} id="failPic" alt='fail/succeed'/>
                       
                       <p>My journey into the world of coding comes from a lot of failures, but having the ability to constantly look for the lessons learned within those failures.
                       Growing up I have gone into different careers in all different types of forms such as:
                           <ul>
                               <li>Bartender</li>
                               <li>Assistant Restaurant Manager</li>
                               <li>Nuclear Security Officer</li>
                               <li>Iron Worker</li>
                               <li>Personal Trainer</li>
                               <li>Carpenter</li>
                           </ul>
                       </p>
                       <p>Withing all of there I found one thing to be true, It was never enough for me to feel accomplished. I learned a lot, and how to deal with different types of situations, 
                           but never fully satisfied with myself. That was when I started looking outside the box.
                        </p>
                        </div>
                   </div>
                  <section>
                      <div>
                          <h3>My coding start</h3>
                          <p>   At this point in my life I was looking for answers, I wanted a Career that was challenging, evolving, and made a difference. I found that career with coding.</p>
                          <p>Through web development I have found the ability to reach people on multiple levels and apply my skill and knowledge to help make those peoples dreams a reality!
                              I can help a small business set up online web ordering, with a backend capable of keeping there clients information stored safely for future orders. I can help kickstart
                              the next big "facebook" or "instagram" with a team of the right people and give the next generation something to connect with. I can help build amd design anything in the world, and this 
                              is all possible because of coding.  
                          </p>
                          <p>Although I'm new on this journey, and I have So much to learn. The knowledge to know that I have barley scratched the surface of this great ability makes me 
                             truly grateful for the opportunity that is in front of me.
                             </p>
                      </div>
                  </section>
                  <sec>
                      <div>
                          <h3>My hobbies</h3>
                          <p>
                              My passion for being proactive and helping others goes back for most of my life,
                              it is what makes me tick. Thats not to say its the only thing I have though. In the Last 3 years 
                              my fiance and I have saved over 13 dogs from unknown futures, nursed them back to health
                              and had them adopted out to new families. Although the work is hard because you get a bond with the animals,
                              its also extremely rewarding so watch as they grow and become great family dogs all over again!
                          </p>
                          <p>
                              Here are a couple photos of the dogs we have rescued!
                          </p>
                          <div className="container-fluid" id="redBio">
                              <img src={redDog} id="redPic" alt="red"/>
                              <div className="container-fluid">
                                <h4>Meet Red</h4>
                                  <p>Red was a red bone cone hound that came to us after being on his own for quite some time, He was extremely malnourished and needed a lot of work!
                                     Over the next 4 months, Red had become a real family dog, He learned to sit, stay, off and down. Red had overcome his fears of other dogs by playing with our own boys,
                                     and learned what toys where! 
                                  </p>
                                  <p>
                                      Red had a ruff go of it, but has since been adopted to a loving new family!
                                  </p>
                              </div>
                          </div> 
                          <br/>
                          <div className="container-fluid" id="remBio">
                              <img src={remyDog} id="remPic" alt="Rem"/>
                              <div className="container-fluid">
                                <h4>Meet Remy</h4>
                                  <p>
                                      Remy is a 6 month old Puppy who went into my neighbors yard. She again was malnourished, had worms, needed all her vaccines, and had very bad Mange.
                                  </p>
                                  <p>
                                      We immediately took her in and started all treatment that was given to us from the vet to help out with all her infections. Within 3 weeks we had the mange non-contagious
                                      and her healing had started, She had gotten rid of the worms, gained about 10 lbs, had fur starting to grow back, got crate trained, and about 90% potty trained!
                                  </p>
                                  <p>
                                      Remy is still under our supervision, But we are hoping to find a great family soon! until then we keep teaching her how to be a dog, learning new tricks, and continue our path to a healthy long life!
                                  </p>
                              </div>
                          </div>           
                      </div>
                  </sec>
                  <footer>
                   <div>    
                       <p>If you would like to help, this is who we go though to find adoption families!</p>
                       <a class="btn btn-primary" href="https://www.facebook.com/waggintailsorganization/" role="button">Click Here!</a>
                   </div>
               </footer>
               </main>
               
           </div>
       </section>
    )
}

export default About;