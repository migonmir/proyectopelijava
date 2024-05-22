
        const isValidEmail = (email) => {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailPattern.test(email);
        };

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
                const nombre = document.getElementById("nombre").value.trim();
                const apellido = document.getElementById("apellido").value.trim();
                const email = document.getElementById("email").value.trim();
                const password = document.getElementById("ipassword").value.trim();
                const nacimiento = document.getElementById("fNacimiento").value.trim();
                const pais = document.getElementById("pais").value.trim();
                const terminos = document.getElementById("terminos").value.trim();
                let isValid = true;
                if (nombre === "") {
                    displayErrorMessage("nombreError", "Ingresar su Nombre.");
                    document.getElementById("nombre").classList.add("is-invalid");
                    isValid = false;
                } else {
                    document.getElementById("nombre").classList.remove("is-invalid");
                    document.getElementById("nombre").classList.add("is-valid");
                }
                if (apellido === "") {
                    displayErrorMessage("apellidoError", "Ingrse su Apellido.");
                    document.getElementById("apellido").classList.add("is-invalid");
                    isValid = false;
                } else {
                    document.getElementById("apellido").classList.remove("is-invalid");
                    document.getElementById("apellido").classList.add("is-valid");
                }
                if (!isValidEmail(email)) {
                    displayErrorMessage("emailError", "Ingrese un correo electrónico.");
                    document.getElementById("email").classList.add("is-invalid");
                    isValid = false;
                } else {
                    document.getElementById("email").classList.remove("is-invalid");
                    document.getElementById("email").classList.add("is-valid");
                };
                if (password.length < 8) {
                   displayErrorMessage("passwordError", "La contraseña debe tener al menos 8 caracteres.");
                   document.getElementById("ipassword").classList.add("is-invalid");
                   isValid = false;
                } else {
                     document.getElementById("ipassword").classList.remove("is-invalid");
                     document.getElementById("ipassword").classList.add("is-valid");
                };
                if (nacimiento==="") {
                    displayErrorMessage("fNacimientoError", "Ingrese una fecha válida.");
                    document.getElementById("fNacimiento").classList.add("is-invalid");
                    isValid = false;
                } else {
                    document.getElementById("fNacimiento").classList.remove("is-invalid");
                    document.getElementById("fNacimiento").classList.add("is-valid");
                };
                /*
                if (terminos.checkSatate ="unchecked") {
                    displayErrorMessage("terminosError", "Acepte los Terminos y Condiciones.");
                    document.getElementById("terminos").classList.add("is-invalid");
                    isValid = false;
                } else {
                    document.getElementById("terminos").classList.remove("is-invalid");
                    document.getElementById("terminos").classList.add("is-valid");
                };*/
                if (pais==="") {
                    displayErrorMessage("paisError", "Selecione un pais.");
                    document.getElementById("pais").classList.add("is-invalid");
                    isValid = false;
                } else {
                    document.getElementById("pais").classList.remove("is-invalid");
                    document.getElementById("pais").classList.add("is-valid");
                };

                if (isValid) {
                    alert("¡Formulario enviado correctamente!");
                };
        };
       

        // Espera a que el DOM se cargue completamente
    /*    document.addEventListener('DOMContentLoaded', validarForm);*/
        document.addEventListener("DOMContentLoaded", () => {
            document.getElementById("formRegist").addEventListener("submit", (event) => {
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
    
