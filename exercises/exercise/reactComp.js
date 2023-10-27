"use strict";
function reactFunction(){
    return (<div>all rights belong to Alabeedi group</div>);
}





const domNode = document.getElementById("reactComponent");
const root = ReactDOM.createRoot(domNode);
root.render(<reactFunction />);