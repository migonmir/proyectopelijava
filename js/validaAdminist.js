
        /*const isValidEmail = (email) => {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailPattern.test(email);
        };*/

        const displayErrorMessage = (elementId, message) => {
            const errorElement = document.getElementById(elementId);
            errorElement.innerText = message;
        };
        const resetErrorMessages = () => {
            const errorElements = document.querySelectorAll(".errormsg");
            errorElements.forEach((element) => {
                element.innerText = "";
            });            
        };
     
        const validarForm =  () => {
                resetErrorMessages();
                const titulo = document.getElementById("titulo").value.trim();
                const duracion = document.getElementById("duracion").value.trim();
               /* const director = document.getElementById("director").value.trim();
                const reparto = document.getElementById("reparto").value.trim();
                const fecha_lanza = document.getElementById("fecha_lanza").value.trim();*/
                const genero = document.getElementById("genero").value.trim();
                const imagen = document.getElementById("imagen").value.trim();
                let isValid = true;
                if (titulo === "") {
                    displayErrorMessage("tituloError", "Ingrese el titulo");
                    document.getElementById("titulo").classList.add("is-invalid");
                    isValid = false;
                } else {
                    document.getElementById("titulo").classList.remove("is-invalid");
                    document.getElementById("titulo").classList.add("is-valid");
                }
                if (duracion === "") {
                    displayErrorMessage("duracionError", "Ingrese la Duracion.");
                    document.getElementById("duracion").classList.add("is-invalid");
                    isValid = false;
                } else {
                    document.getElementById("duracion").classList.remove("is-invalid");
                    document.getElementById("duracion").classList.add("is-valid");
                }
                /*if (director === "") {
                    displayErrorMessage("directorError", "Ingrese el Director.");
                    document.getElementById("director").classList.add("is-invalid");
                    isValid = false;
                } else {
                    document.getElementById("director").classList.remove("is-invalid");
                    document.getElementById("director").classList.add("is-valid");
                };
                if (reparto === "") {
                   displayErrorMessage("repartoError", "Ingrese los actores de reparto.");
                   document.getElementById("reparto").classList.add("is-invalid");
                   isValid = false;
                } else {
                     document.getElementById("reparto").classList.remove("is-invalid");
                     document.getElementById("reparto").classList.add("is-valid");
                };
            
                if (fecha_lanza==="") {
                    displayErrorMessage("fecha_lanzaError", "Ingrese una fecha válida.");
                    document.getElementById("fecha_lanza").classList.add("is-invalid");
                    isValid = false;
                } else {
                    document.getElementById("fecha_lanza").classList.remove("is-invalid");
                    document.getElementById("fecha_lanza").classList.add("is-valid");
                };
                */
                /*
                if (terminos.checkSatate ="unchecked") {
                    displayErrorMessage("terminosError", "Acepte los Terminos y Condiciones.");
                    document.getElementById("terminos").classList.add("is-invalid");
                    isValid = false;
                } else {
                    document.getElementById("terminos").classList.remove("is-invalid");
                    document.getElementById("terminos").classList.add("is-valid");
                };*/
                if (genero==="") {
                    displayErrorMessage("generoError", "Selecione un tipo de genero.");
                    document.getElementById("genero").classList.add("is-invalid");
                    isValid = false;
                } else {
                    document.getElementById("genero").classList.remove("is-invalid");
                    document.getElementById("genero").classList.add("is-valid");
                };
                if (imagen==="") {
                    displayErrorMessage("imagenError", "Ingrese un nombre de imagen.");
                    document.getElementById("imagen").classList.add("is-invalid");
                    isValid = false;
                } else {
                    document.getElementById("imagen").classList.remove("is-invalid");
                    document.getElementById("imagen").classList.add("is-valid");
                };

                if (isValid) {
                    alert("¡Formulario enviado correctamente!");
                };
        };
       

        // Espera a que el DOM se cargue completamente
    /*    document.addEventListener('DOMContentLoaded', validarForm);*/
        document.addEventListener("DOMContentLoaded", () => {
            document.getElementById("formGestion").addEventListener("submit", (event) => {
                event.preventDefault();
                validarForm();
            });

            document.querySelectorAll(".control").forEach((input) => {
                input.addEventListener("keypress", (event) => {
                    resetErrorMessages();
                });   
                input.addEventListener("keydown", (event) => {
                    if (event.key === "Tab" || event.key === "Enter") {
                        event.preventDefault();
                        validarForm();
                    }
                });
            });
        });
    
