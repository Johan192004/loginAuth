let realPassword = "1234"


let buton = document.querySelector(".btn")
let emailField = document.getElementById("email")
let passwordField = document.getElementById("password")


let usuarios = [
    { id: 1, name: "Juan", email: "juan@gmail.com", rol: "Admin", products:[
        { id: 1, name: "Tostada de Oro", price: "$99.99", description: "Tostada con pequeñas piezas de oro en su interior" },
        { id: 2, name: "Café Plateado", price: "$49.99", description: "Café con un toque de brillo plateado" },
        { id: 3, name: "Agua Diamante", price: "$199.99", description: "Agua mineral de lujo infusionada con diamantes" }
    ] },
    { id: 2, name: "Ana", email: "ana@gmail.com", rol: "Editor", products:[
        { id: 4, name: "Pastel de Rubí", price: "$120.00", description: "Pastel de chocolate con polvo de rubí" },
        { id: 5, name: "Té de Terciopelo", price: "$39.50", description: "Té negro sedoso con perlas de crema" },
        { id: 6, name: "Galleta Esmeralda", price: "$55.00", description: "Crujiente galleta con glaseado de esmeralda comestible" }
    ] },
    { id: 3, name: "Luis", email: "luis@gmail.com", rol: "Lector" , products:[
        { id: 7, name: "Jugo de Cristal", price: "$33.33", description: "Jugo fresco servido en frascos de cristal" },
        { id: 8, name: "Dona Platino", price: "$75.00", description: "Dona glaseada con chispas de platino" },
        { id: 9, name: "Leche Ópalo", price: "$60.00", description: "Leche infusionada con esencia de ópalo" }

    ]},
    { id: 4, name: "María", email: "maria@gmail.com", rol: "Editor", products:[
        { id: 10, name: "Elixir de Rosas", price: "$80.00", description: "Bebida perfumada hecha con pétalos de rosa" },
        { id: 11, name: "Muffin de Jade", price: "$66.66", description: "Muffin verde con cobertura inspirada en jade" },
        { id: 12, name: "Soda Zafiro", price: "$45.00", description: "Soda azul con un acabado brillante" }

    ]},
    { id: 5, name: "Pedro", email: "pedro@gmail.com", rol: "Lector", products:[
        { id: 13, name: "Galleta de Ámbar", price: "$30.00", description: "Galleta hecha con un toque de jarabe de ámbar" },
        { id: 14, name: "Yogur de Perla", price: "$25.50", description: "Yogur cremoso con burbujas tipo perla" },
        { id: 15, name: "Tarta Ónix", price: "$55.99", description: "Tarta de chocolate oscuro con glaseado ónix" }

    ] },
    { id: 6, name: "Sofía", email: "sofia@gmail.com", rol: "Admin", products:[
        { id: 16, name: "Pastel Piedra Solar", price: "$70.00", description: "Pastel brillante con núcleo cítrico" },
        { id: 17, name: "Latte Luz de Luna", price: "$42.00", description: "Latte suave inspirado en tonos de luna" },
        { id: 18, name: "Helado Estelar", price: "$58.00", description: "Helado con cristales de azúcar estelar" }

    ] },
    { id: 7, name: "Carlos", email: "carlos@gmail.com", rol: "Editor", products:[
        { id: 19, name: "Galleta Meteoro", price: "$37.50", description: "Galleta crujiente que parece un meteorito" },
        { id: 20, name: "Jugo Galáctico", price: "$65.00", description: "Jugo que brilla con colores galácticos" },
        { id: 21, name: "Panqueque Nebulosa", price: "$59.00", description: "Panqueque esponjoso con jarabe de nebulosa" }

    ] },
    { id: 8, name: "Lucía", email: "lucia@gmail.com", rol: "Lector", products:[
        { id: 22, name: "Brownie Volcán", price: "$48.00", description: "Brownie caliente con centro de lava derretida" },
        { id: 23, name: "Té Congelado", price: "$32.00", description: "Té frío con sabor a menta helada" },
        { id: 24, name: "Soufflé de Nube", price: "$61.50", description: "Soufflé suave que se derrite como una nube" }

    ] },
    { id: 9, name: "Jorge", email: "jorge@gmail.com", rol: "Admin", products:[
        { id: 25, name: "Batido Trueno", price: "$43.00", description: "Batido fuerte con color azul eléctrico" },
        { id: 26, name: "Macaron Aurora", price: "$46.00", description: "Macaron multicolor con relleno cremoso" },
        { id: 27, name: "Gelatina Gota de Lluvia", price: "$27.00", description: "Postre transparente en forma de gota" }

    ] },
    { id: 10, name: "Valeria", email: "valeria@gmail.com", rol: "Lector", products:[
        { id: 28, name: "Cupcake Nevada", price: "$35.00", description: "Cupcake de menta con escarcha de copo de nieve" },
        { id: 29, name: "Taco Volcánico", price: "$50.00", description: "Taco picante que estalla en sabor" },
        { id: 30, name: "Croissant Brisa", price: "$40.00", description: "Croissant ligero con aroma a brisa marina" }

    ] },
    30
];

let alreadyRun = false

console.log(window.localStorage.getItem("users"))

if(window.localStorage.getItem("users")){
    usuarios = JSON.parse(window.localStorage.getItem("users"))
    alreadyRun = true
}


buton.addEventListener("click",(e)=>{

    console.log("Hola")

    if(emailField.value && passwordField.value){
        console.log("entre al true")
        for(const user of usuarios){
            if (emailField.value == user.email){
                console.log("Encontre un email")
                emailField.classList.remove("is-invalid")
                passwordField.classList.remove("is-invalid") 
                if (passwordField.value == realPassword){
                    console.log("Login")

                    emailField.classList.add("is-valid")
                    passwordField.classList.add("is-valid")
                    emailField.classList.remove("is-invalid")
                    passwordField.classList.remove("is-invalid") 

                    console.log(!alreadyRun)

                    if(!alreadyRun){
                        window.localStorage.setItem("users",JSON.stringify(usuarios))
                    }
                    
                    setTimeout(()=>{
                        sessionStorage.setItem("auth",true)
                        window.location = "assets/other/in.html"
                        window.localStorage.setItem("currentUserIndex",`${user.id}`)


                    },2000)


                }
                break
            } else {
                emailField.classList.add("is-invalid")
                passwordField.classList.add("is-invalid")
            }
        }


    } else {
        console.log("entre al else")
        emailField.classList.add("is-invalid")
        passwordField.classList.add("is-invalid")
        emailField.classList.remove("is-valid")
        passwordField.classList.remove("is-valid") 
    }


})