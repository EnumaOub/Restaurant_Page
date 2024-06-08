import Restaurant from "./media/restaurant.jpeg";
import Serving from './media/serving.jpeg'

export default function homeGen() {
    const container = document.createElement("card");

    const aboutTitle = document.createElement("h3");
    const aboutCard = document.createElement("card");
    const aboutImage = document.createElement("img");

    const restaurantTitle = document.createElement("h3");
    const restaurantCard = document.createElement("card");
    const restaurantImage = document.createElement("img");

    // About Part

    aboutTitle.textContent = "About"

    aboutCard.textContent = `The Enchanted Gear & Goblet is a captivating fusion of magical and mechanical themes, 
                                featuring an enchanting exterior that levitates slightly above the ground. 
                            Inside, floating chandeliers cast a warm glow over elegantly carved wooden tables and shelves lined with arcane artifacts. 
                                Automaton servers attend to guests with precision and charm, 
                                creating a seamless blend of traditional hospitality and magical efficiency. 
                            The open kitchen showcases chefs blending culinary arts with enchantments, 
                                while diners enjoy a unique ambiance enhanced by melodic tunes and color-changing floral centerpieces. 
                            Special areas like the Alchemist's Lounge and Gearwork Garden offer serene escapes and panoramic views, 
                                making every visit a truly enchanting experience.`
    
    aboutImage.src = Restaurant
    aboutImage.id = "home-gen"

    aboutCard.appendChild(aboutImage);

    container.appendChild(aboutTitle);
    container.appendChild(aboutCard);

    // Restaurant presentation

    restaurantTitle.textContent = "Our Restaurant"
    
    restaurantImage.src = Serving

    restaurantCard.appendChild(restaurantImage);

    container.appendChild(restaurantTitle);
    container.appendChild(restaurantCard);



    return container;
}