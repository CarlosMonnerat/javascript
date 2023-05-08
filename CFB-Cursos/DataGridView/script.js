const config_dgv={
    endpoint:"products.json",
}
const dgv=(config_dgv)=>{
    fetch(config_dgv.endpoint)
    .then(res=>res.json())
    .then(res=>{
        console.log(res)
    })
}

