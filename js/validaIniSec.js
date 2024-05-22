
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
                const email = document.getElementById("email").value.trim();
                const password = document.getElementById("ipassword").value.trim();
                let isValid = true;
                if (!isValidEmail(email)) {
                    displayErrorMessage("emailError", "Ingresar un correo electrónico válido.");
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
                if (isValid) {
                    alert("¡Formulario enviado correctamente!");
                };
        };
       

        // Espera a que el DOM se cargue completamente
    /*    document.addEventListener('DOMContentLoaded', validarForm);*/
        document.addEventListener("DOMContentLoaded", () => {
            document.getElementById("formInicioSec").addEventListener("submit", (event) => {
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
    
