const increaseText = () => {
    const elements = document.querySelectorAll("body *");
    elements.forEach(element => {
    let fontSize = window.getComputedStyle(element, null).getPropertyValue("font-size");
    fontSize = parseFloat(fontSize) * 1.1;
    element.style.fontSize = fontSize + "px";
    });
    };