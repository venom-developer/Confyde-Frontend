import React, { Component } from 'react';
import {Route, Redirect, Switch } from "react-router-dom";
import NavbarContainer from "./Navbar/NavbarContainer";
import Login from "../pages/Login";
import BannerSection from "../components/Banner/BannerSection";
import GettingStarted from './../pages/GettingStarted';

class AppContainer extends Component {
    
    state = {
        pos: document.documentElement.scrollTop,
        imglight: false,
        navClass: "",
    };

    componentDidMount() {
        window.addEventListener("scroll", this.scrollNavigation, true);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollNavigation, true);
    }

    scrollNavigation = () => {
        var scrollup = document.documentElement.scrollTop;
        if (scrollup > this.state.pos) {
            this.setState({ navClass: "nav-sticky", imglight: false });
        } else {
            this.setState({ navClass: "", imglight: false });
        }
    };

    render() {
        return (
            <>
            <NavbarContainer />
                <main className="container">
            <Switch>
             <Route path="/login" component={Login} />
             <Route path="/getting-started" component={GettingStarted} />
             <Redirect from ="/" exact to="home" />
            </Switch>

            {/*Importing Banner section */}
            <BannerSection />
            
            </main>    
            </>
        );
    }
}

export default AppContainer;
