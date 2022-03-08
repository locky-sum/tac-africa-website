/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'
import styles from '../../../styles/layout/navbar.module.scss'
import Button_ from '../../button.jsx'
import { useRouter } from 'next/router'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'


export default function NavBar(){

    const [animateNavBar, setAnimateNavBar] = useState({backgroundColor: 'transparent', height: '20vh' })

    useScrollPosition(({ currPos }) => {
        // console.log(currPos.y)
        if (currPos.y < -47) {
            setAnimateNavBar( {backgroundColor: 'white', height: '15vh' })
        } else {
            setAnimateNavBar({backgroundColor: 'transparent', height: '20vh'})
        }
    } ) 

    console.log(animateNavBar)
    

    const about = [
        {href: '/about_us', name: 'About Us'},
        {href: '/founder', name: 'Founder'},
        {href: '/our_team', name: 'Our Team'},
        {href: '/partners_and_supporters', name: 'partners and supporters'},
        {href: '/gallery', name: 'Gallery'}
    ];

    const labs = [
        {href: '/drone_and_counter_drone', name: 'Drone And Counter Drone'},
        {href: '/cyber_security_and_cyber_defence', name: 'Cyber Security And Cyber Defence'},
        {href: '/ai_and_robotics_lab', name: 'AI And Robotics Lab'},
        {href: '/blockchain_and_crypto_lab', name: 'Blockchain And Crypto Lab'},
        {href: '/satellite_and_remote_sensing_lab', name: 'Satellite And Remote Sensing Lab'}
    ];

    const projects = [
        {href: '/blog', name: 'Blog' },
    ];

    const [currentPath, setCurrentPath] = useState('')

    useEffect(() => {
        setCurrentPath(() => router.pathname)
    },[])


    const getHref = (hrefArray, pathName) => {
        const hrefs = hrefArray.map(href =>  href.href)
            if (hrefs.includes(pathName)) {
                return true
            } else {
                return false
            }
    }


const router = useRouter()
  return(
    <div className={styles.nav_container} style={{ backgroundColor: animateNavBar.backgroundColor }} >
        <Navbar  className={styles.nav_inner__container} style={{ height: animateNavBar.height }} expand="lg">
        <Container fluid  >
            <Navbar.Brand href="#">
                <img src='/TAC_LOGO.png' alt='logo' style={{maxWidth: '100px'}} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse className={['justify-content-end', styles.navbar_collapse].join(' ')}
                id="navbarScroll" >
            <Nav className={['my-2 my-lg-0', styles.navbar_collapse__nav]} style={{paddingTop: '20px'}}  navbarScroll >
             <Nav.Link href={'/'} 
                       className={ router.pathname == "/" ? 'activeLink text-warning' : "text-primary"}  >
                           Home
             </Nav.Link>

                <NavDropdown title={<span className={getHref(about, currentPath ) ? 'text-warning' : 'text-primary' } >About</span> }
                             className='text-primary active'
                             style={{zIndex: 40}}
                             id="nav-dropdown" >
                                    {
                                        about.map(({name, href}, i) => (
                                            <NavDropdown.Item key={i} href={href} className={
                                                router.pathname == href ? 'text-warning' : "text-primary" 
                                                }
                                                eventKey={i}>{name}
                                            </NavDropdown.Item>
                                            ) 
                                        )
                                    }

                </NavDropdown>
                <NavDropdown title={<span className={getHref(labs, currentPath ) ? 'text-warning' : 'text-primary' }>Labs</span> }
                            
                             className="text-primary" 
                                 id="nav-dropdown"> 
                                    {
                                    labs.map(({name, href}, i) => (
                                        <NavDropdown.Item key={i} href={href} className={
                                            router.pathname == href ? 'activeLink text-warning' : "text-primary" 
                                            } 
                                            eventKey={i}>{name}
                                        </NavDropdown.Item>
                                        ) 
                                    )
                                }
                </NavDropdown>
                <NavDropdown title={<span className={getHref(projects, currentPath ) ? 'text-warning' : 'text-primary' }>Projects</span> }
                             
                             className="text-primary" 
                             id="nav-dropdown">
                                {
                                    projects.map(({name, href}, i) => (
                                        <NavDropdown.Item key={i} href={href} className={
                                            router.pathname == href ? 'activeLink text-warning' : "text-primary" 
                                            } 
                                            eventKey={i}>{name}
                                        </NavDropdown.Item>
                                        ) 
                                    )
                                }

                </NavDropdown>
            <Nav.Link href={'/contact'}  className={router.pathname == "/contact" ? 'activeLink text-warning' : "text-primary"}  >Contact</Nav.Link>
            
            <Nav.Item>
                <Button_ title={' Blog '} variant={'primary'}   />
            </Nav.Item>

            <Nav.Item>
                <Button_ title={'Donate'} variant={'outline-primary'}   />
            </Nav.Item>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
</div>

  )
}