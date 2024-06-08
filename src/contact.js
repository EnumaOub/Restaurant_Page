


export default function contactGen() {
    const container = document.createElement("card");

    const title = document.createElement("h3");
    const address = document.createElement("card");

    title.textContent = "Address";
    address.textContent = `The Enchanted Gear & Goblet
                            Floating District, Skyward Plaza,
                            Eileanar`


    container.appendChild(title);
    container.appendChild(address);

    return container;
}