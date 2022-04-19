/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import styles from '../styles/component.styles/ourLabs.module.scss'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Button_ from '../components/button'
import { Container } from 'react-bootstrap'
import Link from 'next/link'

const OurLabs = () => {

  const data =  [
    {
      title: 'Cyber Security & Cyber Defense',
      image: 'pexels-shalom-de-león-6165167.jpg',
      text: 'artificial intelligence (AI) and related technologies offer unique means to support law enforcement in solving such problems.'
    },
    {
      title: 'Artificial Intelligence And Robotics',
      image: 'retinal-biometrics-technology-with-man-s-eye-digital-remix.jpg',
      text: 'artificial intelligence (AI) and related technologies offer unique means to support law enforcement in solving such problems.'
    },
    {
      title: 'Blockchain And Payment Gateways',
      image: 'pexels-dids-3657268.jpg',
      text: 'artificial intelligence (AI) and related technologies offer unique means to support law enforcement in solving such problems.'
    },
    {
      title: 'Drone & Counter Drone',
      image: 'https://cdn.pixabay.com/photo/2021/12/09/11/47/river-6858013_960_720.jpg',
      text: 'artificial intelligence (AI) and related technologies offer unique means to support law enforcement in solving such problems.'
    },
    

  ]


  const responsive = {
    superLargeDesktop: { // the naming can be any, depends on you.
        breakpoint: {
            max: 4000,
            min: 3000
        },
        items: 5
    },
    desktop: {
        breakpoint: {
            max: 3000,
            min: 1024
        },
        items: 3
    },
    tablet: {
        breakpoint: {
            max: 1024,
            min: 464
        },
        items: 2
    },
    mobile: {
        breakpoint: {
            max: 464,
            min: 0
        },
        items: 1
    }
}


  return(
    <Container fluid className={ [ styles.carousel_container ].join(' ')} >

      <Container style={{paddingTop: '3em', paddingBottom: '5em'}} >

        <div className={ ['d-flex justify-content-between text-uppercase ', styles.carousel_header__component].join(' ')} >
          <h2 className={ styles.carousel_container__title } > Our <span className='text-primary ' >Labs</span></h2>
          <Button_ title={'ALL LABS'} variant={'outline-primary'} />
        </div>

        <Carousel responsive={responsive} 
                swipeable
                itemClass="carousel_item_padding_40_px"
                className="card-deck"
                >
                    {/* <div className="card-deck"> */}
            { data.map((edge, i) => (

<>
                    {/* <div key={i} className="card">
                      <img src="..." className={["card-img-top", styles.carousel_image ].join(' ')} src={ edge?.image } alt={ edge.image }/>
                      <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      </div>
                      <div className={ styles.carousel_details } >
                        <h2 className={ styles.carousel_title } >{ edge?.title }</h2>
                        <p className={ styles.carousel_text } >{ edge?.text }</p>
                      </div>
                    </div> */}



                  <div key={i} className={['card', styles.carousel_component_inner].join(' ')}  >
                      <div className={ styles.carousel_image }>
                        <img className={ styles.carousel_image } src={ edge?.image } alt={ edge.image } />
                        <div className={ styles.carousel_mask } >
                          <div className={ styles.carousel_button__container } >
                            <Button_ title={'Learn More'} variant={'outline-light' } style={{border: '2px solid white'}} />
                          </div>
                        </div>
                      </div>
                      <div className={ styles.carousel_details } >
                        <h2 className={ styles.carousel_title } >{ edge?.title }</h2>
                        <p className={ styles.carousel_text } >{ edge?.text }</p>
                      </div>
                  </div>

                  </>
            )) }
                    {/* </div> */}

          </Carousel>
      </Container>

    </Container>
  )
}

export default OurLabs;