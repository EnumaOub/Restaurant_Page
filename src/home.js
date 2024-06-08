import Restaurant from "./media/restaurant.jpeg";
import Serving from './media/serving.jpeg'

export default function homeGen() {
    const container = document.createElement("card");

    const aboutTitle = document.createElement("h3");
    const aboutCard = document.createElement("card");
    const aboutImage = document.createElement("img");

    const restaurantTitle = document.createElement("h3");
    const restaurantImage = document.createElement("img");

    // About Part

    aboutTitle.textContent = "About"

    aboutCard.innerHTML = `<p>The Enchanted Gear & Goblet is a captivating fusion of magical and mechanical themes, 
                                featuring an enchanting exterior that levitates slightly above the ground.</p> 
                            <p>Inside, floating chandeliers cast a warm glow over elegantly carved wooden tables and shelves lined with arcane artifacts. 
                                Automaton servers attend to guests with precision and charm, 
                                creating a seamless blend of traditional hospitality and magical efficiency. </p>
                            `
    
    aboutImage.src = Restaurant
    aboutImage.id = "home-gen"

    aboutCard.appendChild(aboutImage);

    container.appendChild(aboutTitle);
    container.appendChild(aboutCard);

    // Restaurant presentation

    restaurantTitle.textContent = "Our Restaurant"
    
    restaurantImage.src = Serving

    container.appendChild(restaurantTitle);
    container.appendChild(restaurantImage);



    return container;
}