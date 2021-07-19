import {API_BASE_URL} from '../ConstantSourceNode.js'
function fetchWorkshops(){
    return fetch(`${API_BASE_URL}/workshops`)
    .then( response => response.json() );
}

function fetchWorkshopByID (){

}

export{
    fetchWorkshops,
    fetchWorkshopByID
}