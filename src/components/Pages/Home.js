import FontAwesome from 'react-fontawesome';
import ryanPhoto from '../../assets/photos/ryan.JPG'

const Home = () => {
    return (
        <div className='container-fluid'>   
          <main>
          <div>
            <img src={ryanPhoto}  className="rounded" alt="ryan" id="ryanPhoto"/>
            <div className='main-content'>
              <h1 id="homeName">Ryan Blessing</h1>
              <h3>Web Developer</h3>
                <p>Focused on creating, managing and updating web development with new and improved design.</p>
                <p>Forever a student, always looking to learn the newest way to improve myself and the work I put forth. </p>
                <p> I invite you to take a look!</p>
            </div>
          </div>
          </main>
        </div>
    )
}

export default Home;
