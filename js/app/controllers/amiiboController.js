import amiiboService from "../services/amiiboService.js"
import amiiboView from "../views/amiiboView.js"

const externals = {};
let globalIndex = 0;

externals.formHandler = (index) => {
    globalIndex = index;
    let amiibo = amiiboService.getAmiibo(index);
    amiiboView.render(amiibo, index);
}

externals.previousButtonHandler = () => {
    globalIndex--;
    let amiibo = amiiboService.getAmiibo(globalIndex);
    amiiboView.render(amiibo, globalIndex);
}

externals.nextButtonHandler = () => {
    globalIndex++;
    let amiibo = amiiboService.getAmiibo(globalIndex);
    amiiboView.render(amiibo, globalIndex);
}

externals.start = () => {
    amiiboView.render();
}

export default externals;