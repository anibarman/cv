const decreaseText = () => {
    const elements = document.querySelectorAll("body *");
    elements.forEach(element => {
    let fontSize = window.getComputedStyle(element, null).getPropertyValue("font-size");
    fontSize = parseFloat(fontSize) * 0.9;
    element.style.fontSize = fontSize + "px";
    });
    };
    