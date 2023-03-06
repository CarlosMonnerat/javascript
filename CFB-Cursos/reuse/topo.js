const body = document.body

const estilotopo = 
    "display: flex;"+
    "justify-content: space-between;"+
    "align-items: center;"+
    "background-color: #00f;"
const topo = document.createElement("div")
topo.setAttribute("id","topo")
topo.setAttribute("style", estilotopo)
body.prepend(topo)