const config_dgv={
    endpoint:"products.json",
    idDestino:"dgvDados",
}
const dgv=(config_dgv)=>{
    const dgvDados = document.getElementById(config_dgv.idDestino);
    dgvDados.innerHTML="";
    fetch(config_dgv.endpoint)
    .then(res=>res.json())
    .then(res=>{
        console.log(res)
        res.forEach(element => {
        //Div pai
            const dgvLinha = document.createElement("div");
            dgvLinha.setAttribute("class","dgvLinha");

        //Colunas    
            const c1 = document.createElement("div");
            c1.setAttribute("class","coluna c1");
            c1.innerHTML=element.id;
            dgvLinha.appendChild(c1);

            const c2 = document.createElement("div");
            c2.setAttribute("class","coluna c2");
            c2.innerHTML=element.produto;
            dgvLinha.appendChild(c2);

            const c3 = document.createElement("div");
            c3.setAttribute("class","coluna c3");
            c3.innerHTML=element.marca;
            dgvLinha.appendChild(c3);

            const c4 = document.createElement("div");
            c4.setAttribute("class","coluna c4");
            c4.innerHTML=element.modelo;
            dgvLinha.appendChild(c4);

            const c5 = document.createElement("div");
            c5.setAttribute("class","coluna c5");
            dgvLinha.appendChild(c5);

        //Icons
            const imgView = document.createElement("img");
            imgView.setAttribute("class","dgvIcone");
            imgView.setAttribute("src","./icon_SVG/visibility.svg");
            c5.appendChild(imgView);

            const imgEdit = document.createElement("img");
            imgEdit.setAttribute("class","dgvIcone");
            imgEdit.setAttribute("src","./icon_SVG/edit.svg");
            c5.appendChild(imgEdit);

            const imgDelete = document.createElement("img");
            imgDelete.setAttribute("class","dgvIcone");
            imgDelete.setAttribute("src","./icon_SVG/delete.svg");
            c5.appendChild(imgDelete);
            
        //Add na div do HTML    
            dgvDados.appendChild(dgvLinha);
        });
    })
}

dgv(config_dgv);

    // <div class="dgvLinha">
    //     <div class="c1">01</div>
    //     <div class="c2">processador</div>
    //     <div class="c3">Intel</div>
    //     <div class="c4">i7</div>
    //     <div class="c5">D E V</div>
    // </div>