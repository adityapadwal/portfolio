import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/display1.png'
import IMG2 from '../../assets/display2.png'
import IMG3 from '../../assets/display3.png'
import IMG4 from '../../assets/display4.png'
import IMG5 from '../../assets/display5.png'
import IMG6 from '../../assets/display6.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Weather App",
    github: "https://github.com/adityapadwal/Javascript-MiniProjects/tree/master/Advanced/Weather%20App",
    demo: "https://adityapadwal-weatherapp.netlify.app"
  },
  {
    id: 2,
    image: IMG2,
    title: "Spotify Clone",
    github: "https://github.com/adityapadwal/Spotify-Clone",
    demo: "https://adityapadwal-spotify.netlify.app"
  },
  {
    id: 3,
    image: IMG3,
    title: "News App",
    github: "https://github.com/adityapadwal/NewsMonkey-React",
    demo: "https://github.com/adityapadwal/NewsMonkey-React"
  },
  {
    id: 4,
    image: IMG4,
    title: "Snake Game",
    github: "https://github.com/adityapadwal/Snake-Game",
    demo: "https://adityapadwal-snakegame.netlify.app"
  },
  {
    id: 5,
    image: IMG5,
    title: "TextUtils",
    github: "https://github.com/adityapadwal/TextUtils-React",
    demo: "https://adityapadwal-textutils.netlify.app"
  },
  {
    id: 6,
    image: IMG6,
    title: "Calculator",
    github: "https://github.com/adityapadwal/Calculator-React",
    demo: "https://github.com/adityapadwal/Calculator-React"
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
      {
        data.map(({id, image, title, github, demo}) => {
        return (
          <article key={id} className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} className='btn' target="_blank" rel="noreferrer">Github</a>
                <div className="portfolio__item-cta-demo">
                <a href={demo} className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
                </div>
            </div>
          </article>
        )
      })  
      }    
      </div>
    </section>
  )
}

export default Portfolio