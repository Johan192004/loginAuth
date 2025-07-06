

let stateLog = sessionStorage.getItem("auth")

if(stateLog != "true"){
    window.location = "../../index.html"
    console.log("entre")
}

let logOutButon = document.getElementById("logOut")

logOutButon.addEventListener("click",(e)=>{
    sessionStorage.setItem("auth",false)
    window.location = "../../index.html"
})


let h2Welcomer = document.getElementById("welcome-user")

let users = JSON.parse(window.localStorage.getItem("users"))
console.log(users)
let currentUserIndex = parseInt(window.localStorage.getItem("currentUserIndex"))
console.log(currentUserIndex)

let currentUser = users[currentUserIndex-1]

h2Welcomer.textContent = `Bienvenido: ${currentUser.name}`

let productsField = document.getElementById("products")
let butonField = document.createElement("button")

if(currentUser.products.length === 0){
    console.log("I'll do nothing")
} else {

    productsField.innerHTML = ""

    let productAributesContainer = document.createElement("div")
    productAributesContainer.classList.add("productsField", "mb-4")

    productAributesContainer.innerHTML = `<div><b>Id</b></div>
                <div><b>Nombre</b></div>
                <div><b>Precio</b></div>
                <div><b>Descripcion</b></div>
                <div><b>Acciones</b></div>`

    productsField.appendChild(productAributesContainer)

    let elementField = document.createElement("div")


    currentUser.products.forEach(element => {

        let clonedProductAributesContainer = productAributesContainer.cloneNode(true)
        clonedProductAributesContainer.innerHTML = ""

        let clonedElementId = elementField.cloneNode(true)
        let clonedElementName = elementField.cloneNode(true)
        let clonedElementPrice = elementField.cloneNode(true)
        let clonedElementDescription = elementField.cloneNode(true)
        let butonField = document.createElement("button")

        clonedElementId.classList.add("productId")

        butonField.classList.add("btn","btn-danger")
        butonField.textContent = "Eliminar"
        
        
        butonField.addEventListener("click",(e)=>{
            if(confirm("¿Seguro que deseas eliminar el producto?")){
                let nearestDad = e.target.closest(".productsField")
                let idDiv = nearestDad.querySelector(".productId")
                let idProductNumber = parseInt(idDiv.textContent)

                currentUser.products = currentUser.products.filter(product => product.id != idProductNumber)

                window.localStorage.setItem("users",JSON.stringify(users))


                nearestDad.remove()
            }

        })
       

        clonedElementId.textContent = `${element.id}`
        clonedElementName.textContent = `${element.name}`
        clonedElementPrice.textContent = `${element.price}`
        clonedElementDescription.textContent = `${element.description}`

        clonedProductAributesContainer.appendChild(clonedElementId)
        clonedProductAributesContainer.appendChild(clonedElementName)
        clonedProductAributesContainer.appendChild(clonedElementPrice)
        clonedProductAributesContainer.appendChild(clonedElementDescription)
        clonedProductAributesContainer.appendChild(butonField)

        productsField.appendChild(clonedProductAributesContainer)

        

    });
}


let createButton = document.querySelector(".create-order")
createButton.classList.add("mb-4")
const modalElement = document.getElementById("modalField");
const modal = new bootstrap.Modal(modalElement);

createButton.addEventListener("click",(e)=>{
    modal.show()
})

let addProductButton = document.querySelector(".add-product-button")

addProductButton.addEventListener("click",(e)=>{
    let lastProductId = users[users.length - 1]

    let elementField = document.createElement("div")
    let productAributesContainer = document.createElement("div")
    productAributesContainer.classList.add("productsField")

    let clonedProductAributesContainer = productAributesContainer.cloneNode(true)
    clonedProductAributesContainer.innerHTML = ""

    let clonedElementId = elementField.cloneNode(true)
    let clonedElementName = elementField.cloneNode(true)
    let clonedElementPrice = elementField.cloneNode(true)
    let clonedElementDescription = elementField.cloneNode(true)
    let butonField = document.createElement("button")

    clonedElementId.classList.add("productId")

    butonField.classList.add("btn","btn-danger")
    butonField.textContent = "Eliminar"
    
    
    butonField.addEventListener("click",(e)=>{
        if(confirm("¿Seguro que deseas eliminar el producto?")){
            let nearestDad = e.target.closest(".productsField")
            let idDiv = nearestDad.querySelector(".productId")
            let idProductNumber = parseInt(idDiv.textContent)

            currentUser.products = currentUser.products.filter(product => product.id != idProductNumber)

            window.localStorage.setItem("users",JSON.stringify(users))


            nearestDad.remove()
        }
    })

    let inputName = document.getElementById("newName")
    let inputPrice = document.getElementById("newPrice")
    let inputDescription = document.getElementById("description")

    if(inputName.value && inputPrice.value && inputDescription.value){
        if(currentUser.products.length === 0){
             productsField.innerHTML = ""

            let productAributesContainer = document.createElement("div")
            productAributesContainer.classList.add("productsField")

            productAributesContainer.innerHTML = `<div><b>Id</b></div>
                        <div><b>Nombre</b></div>
                        <div><b>Precio</b></div>
                        <div><b>Descripcion</b></div>
                        <div><b>Acciones</b></div>`

            productsField.appendChild(productAributesContainer)
        }

        console.log(lastProductId)

        clonedElementId.textContent = `${lastProductId + 1}`
        clonedElementName.textContent = `${inputName.value}`
        clonedElementPrice.textContent = `${inputPrice.value}`
        clonedElementDescription.textContent = `${inputDescription.value}`

        clonedProductAributesContainer.appendChild(clonedElementId)
        clonedProductAributesContainer.appendChild(clonedElementName)
        clonedProductAributesContainer.appendChild(clonedElementPrice)
        clonedProductAributesContainer.appendChild(clonedElementDescription)
        clonedProductAributesContainer.appendChild(butonField)

        productsField.appendChild(clonedProductAributesContainer)

        currentUser.products.push({
            id:lastProductId + 1,
            name: inputName.value,
            price: `$${inputPrice.value}`,
            description: inputDescription.value
        })

        window.localStorage.setItem("users",JSON.stringify(users))

    }
    
})