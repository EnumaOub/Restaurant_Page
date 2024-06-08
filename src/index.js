import './styles.css';

import menuGen from './menu.js';
import homeGen from './home.js';
import contactGen from './contact.js';



const generatePage = (function() {

    const toggleActive = (button) => {
        const btn_active = document.getElementsByClassName("btn-nav active")[0];
        btn_active.classList.toggle("active");
        button.classList.toggle("active");
    }

    const changeTab = (button) => {
        const container = document.getElementById("content");
        let tabContainer = document.createElement("div");
        switch (button.id) {
            case "home":
                tabContainer = homeGen();
                break;
            case "contact":
                tabContainer = contactGen();
                break;
            case "menu":
                tabContainer = menuGen();
                break;
                
        }
        container.innerHTML = "";
        container.appendChild(tabContainer)        
    }
    
    
    const buttonLink = () => {
        const buttons = document.getElementsByClassName("btn-nav");
    
        for (const button of buttons) {
            button.addEventListener("click", (e) => {
                if (!(e.target.classList.contains("active"))){
                    toggleActive(e.target);
                    changeTab(e.target);
                }
            });
        }
    }
    
    const displayTab = () => {
        const btn_active = document.getElementsByClassName("btn-nav active")[0];
        changeTab(btn_active);
        buttonLink();

    }

    return {displayTab}

})()

generatePage.displayTab()

