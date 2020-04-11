
const makeButton = (buttonName, color) => {
    const button = document.createElement('button')
    button.textContent = buttonName;
    button.style = color
    document.body.appendChild(button)
};

export { makeButton };