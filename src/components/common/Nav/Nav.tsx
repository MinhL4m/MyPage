import React, { useEffect } from 'react'
import Segment from 'segment-js'
import './nav.css'
import { Icons } from '../Icon/Icons'
import {Link, withRouter} from 'react-router-dom'
import { connect } from 'react-redux';
import {authRef} from '../../../firebase/firebase'

function mapStateToProps(state: any) {
	return {
		isAuth: state.authUser.isAuth
	};
}

function mapDispatchToProps(dispatch: any) {
	return {
		dispatchLogOut: () => dispatch({ type: 'LOGOUT' })
	};
}

const Nav: React.FC<{isAuth: boolean, history: any, dispatchLogOut: ()=>void}> = ({isAuth, history, dispatchLogOut}) => {

        useEffect(() => {
                var upper = document.getElementById("upper-line"),
                        segmentUpper = new Segment(upper),
                        lower = document.getElementById("lower-line"),
                        segmentLower = new Segment(lower),
                        mid = document.getElementById('mid-line'),
                        segmentMid = new Segment(mid)

                var isToggle = false

                var button = document.querySelector('.nav-btn')

                var aside = document.querySelector('.sidebar')

                segmentUpper.draw("0", "28.5%", 0)
                segmentLower.draw("0", "28.5%", 0)
                segmentMid.draw("0", "100%", 1)

                button?.addEventListener('click', () => {
                        isToggle = !isToggle
                        if (isToggle) {
                                aside?.classList.add('sidebar-show')
                                segmentUpper.draw("69.5%", "100%", .5)
                                segmentLower.draw("69.5%", "100%", .5)
                                segmentMid.draw("0", "0", .5)
                        } else {
                                aside?.classList.remove('sidebar-show')
                                segmentUpper.draw("0", "28.5%", .5)
                                segmentLower.draw("0", "28.5%", .5)
                                segmentMid.draw("0%", "100%", .5)
                        }
                })

                document.querySelector('.sidebar')?.addEventListener('click',(ev: any)=>{
                        if(ev.target.nodeName === 'A'){
                                isToggle = !isToggle
                                aside?.classList.remove('sidebar-show')
                                segmentUpper.draw("0", "28.5%", .5)
                                segmentLower.draw("0", "28.5%", .5)
                                segmentMid.draw("0%", "100%", .5)
                        }
                })

                window.addEventListener('resize',()=>{
                        if(window.innerWidth >= 768 && isToggle){
                                console.log(aside)
                                aside?.classList.remove('sidebar-show')
                                segmentUpper.draw("0", "28.5%", .5)
                                segmentLower.draw("0", "28.5%", .5)
                                segmentMid.draw("0%", "100%", .5)
                        }
                })
        }, [])

        function logout(){
                // console.log(history)
                authRef.signOut().then(function(){
                        dispatchLogOut()
                        history.push('/')
                }).catch(function (error){
                        console.log(error)
                })
        }

        return (
                <>
                        <nav className="nav">
                                <div className="nav-center">
                                        <div className="nav-header">
                                                <p className="logo">Minh Lam</p>
                                                <div className="nav-btn">
                                                        <svg version="1.1" viewBox="0 0 42.996 49.124" >
                                                                <g transform="translate(-90.622 -136.32)" fill="none" stroke="#000" strokeLinecap="round"
                                                                        strokeWidth="0.8">
                                                                        <path id='lower-line'
                                                                                d="m133.1 168.63h-42.229c0.0713 22.841 42.229 21.338 42.229 0l-41.961-15.502"
                                                                                strokeLinejoin="round" />
                                                                        <path id='upper-line'
                                                                                d="m133.37 153.13h-42.229c0.0713-22.841 42.229-21.338 42.229 0l-41.961 15.502"
                                                                                strokeLinejoin="round" />
                                                                        <path id='mid-line' d="m91.139 160.88h42.229" />
                                                                </g>
                                                        </svg>
                                                </div>
                                        </div >
                                        <div className="nav-links">
                                                <Link to="/">Home</Link>
                                                <Link to="/porfolio">Porfolio</Link>
                                                <Link to="/blog">Blog</Link>
                                                {isAuth?<button className="logout-btn"onClick={logout}>Log Out</button>:<Link to="/login">Log In</Link>}
                                        </div>
                                </div >
                        </nav >
                        <aside className="sidebar">
                                <div>
                                        <div className="links">
                                                <Link to="/">Home</Link>
                                                <Link to="/porfolio">Porfolio</Link>
                                                <Link to="/blog">Blog</Link>
                                                {isAuth?<button className="logout-btn"onClick={logout}>Log Out</button>:<Link to="/login">Log In</Link>}
                                        </div>
                                        <Icons className="icons" />
                                </div>
                        </aside>
                </>
        );
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Nav))