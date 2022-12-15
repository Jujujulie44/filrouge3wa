// const products =[
//     {title: "mon titre", description : "bla bla bla bla bla", img:"./img/monImg.png"},
//     {title:"mon titre2", description:"bla bla bla bla 2", img: "./img/monImg.png"},
// ]

// const generateProduct= (titre, description, img) => {
//     //creer une box qui représente mon produit et la retourner
// }

// const addProductToDOM = (element) => {
//     //ajouter l'élément dans le DOM
// }


const products = [
    {title:"mon titre 2", description:"La description 2",img:"assets/images/product_0.jpg"},
    {title:"cappucino", description:"boisson a base de chocolat",img:"assets/images/product_1.jpg"},
    {title:"chocolat", description:"boisson n2", img:"assets/images/product_2.jpg"},
    {title: "tarte au chocolat",description:"boisson n2", img:"assets/images/product_3.jpg"},
    {title: "tiramisu fraise",description:"boisson n2", img:"assets/images/product_4.jpg"}
]

 const card = `
                <div class="container-product-img">
                    <img class='product-img' src="">
                </div>
                <div class="card-body-product">
                    <h3 class="title-product"></h3>
                    <p class="description-product"></p>
                    //<p class="price"></p>
                    <div class="footer-card">
                        <div class="footer-card-qte">
                            <button class="btn-product-qte">-</button>
                            <strong>0</strong>
                            <button class="btn-product-qte">+</button>
                        </div>
                        <button class="btn-product">Ajouter au panier</button>
                    </div>
                </div>
        `
        
document.addEventListener("DOMContentLoaded", () => {
    const generateProduct = (titre, description, img) => {
       
        const div = document.createElement("div") // ajouter la class card-product
        div.classList.add("card-product");
        div.innerHTML = card
        const imgElement =  div.getElementsByClassName("product-img")
        const titleElement =  div.getElementsByClassName("title-product")
        const descriptionElement =  div.getElementsByClassName("description-product")
    
        imgElement[0].src = img
        titleElement[0].innerText = titre
        descriptionElement[0].innerText = description
        
        addProductToDOM(div)
        
        
        
    }
    
    const bodyDiv= document.getElementsByClassName("container-products")
    const addProductToDOM = (element) => {
        bodyDiv[0].append(element)
    }
    
    for(let i=0; i<products.length; i++){
        generateProduct(products[i].title, products[i].description, products[i].img)
    }
    
    
    
     
    let btnQte = document.getElementsByClassName("btn-product-qte")
    //on recup tous les boutons
    for(let i=0; i<btnQte.length; i++){
         //On crée la boucle en fonction du nombre de boutons présents
        btnQte[i].addEventListener("click", () => {
            //activation au click
            let quantity = btnQte[i].parentElement.getElementsByTagName("strong")
            // cette variable récupère l'élément strong à l'intérieur de l'élément parent du button (div footer-card-qte)
            const valueQte = quantity[0].innerText
            //On recupère le contenu du texte à l'interieur
            if(btnQte[i].innerText === "+"){
                quantity[0].innerText = parseInt(valueQte) + 1
                //si le bouton est + cela rajoute 1
            }else {
                if(valueQte >0){
                    quantity[0].innerText = parseInt(valueQte) - 1
                } else {
                    quantity[0].innerText = 0 
                }
                //si le bouton est - on lui enlève un si et seulement si la valeur est superieure à 0
            }
        })
        
    
    }
    
    //  let panier = document.getElementsByClassName("btn-product")
    //     //on recup tous les boutons
    //     for(let i=0; i<panier.length; i++){
    //          //On crée la boucle en fonction du nombre de boutons présents
    //         panier[i].addEventListener("click", () => {
    //             //activation au click
    //             let quantity = btnQte[i].parentElement.getElementsByTagName("strong")
    //             // cette variable récupère l'élément strong à l'intérieur de l'élément parent du button (div footer-card-qte)
    //             const valueQte = quantity[0].innerText
    //             //On recupère la value des éléments strong en fonction de numéro du bouton
    //             if(btnQte[i].innerText === "+"){
    //                 quantity[0].innerText = parseInt(valueQte) + 1
    //             }else {
    //                 if(valueQte >0){
    //                     quantity[0].innerText = parseInt(valueQte) - 1
    //                 } else {
    //                     quantity[0].innerText = 0 
    //                 }
                    
    //             }
    //     }
    
    
})

        
