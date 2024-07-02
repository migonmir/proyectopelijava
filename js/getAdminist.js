//cuando el dom se cargue 
document.addEventListener('DOMContentLoaded', async () => {
    // realizamos una peticion fetch a esta api para obtener todas las peliculas de la base:
    // configuracion de options, es un get y no necesita body
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const response = await fetch('http://localhost:8080/app/peliculas', options);
    const data = await response.json();
    console.log(data);
    //{idPelicula: 2, titulo: 'Transformers 2', genero: 'Accion', duracion: '3h 2m', imagen: 'transformers.jpg'}
    // Extraemos las películas de la respuesta
    const movies = data;
    // tenemos que insertar todas las peliculas en la tabla con id tablePeliculas, pero en tbody con la siguiente estructura de ejemplo:
    /*<!--este es solo un ejemplo porque se va a llenar desde js-->
                    <tr>
                        <td>The Super Mario Bros. Movie (2023)</td>
                        <td>3h 22m</td>
                        <td>Animation, Family, Adventure, Fantasy, Comedy</td>
                        <td><img width="150px" src="../assets/img/mario.jpg" alt="mario pelicula 2023"></td>
                        
                    </tr> 
    */
  
    //obtenemos el tbody de la tabla
    const tbody = document.getElementById('bodyTabla');
    // recorremos todas las peliculas
    movies.forEach(movie => {
        // creamos un tr
        const tr = document.createElement('tr');
         // creamos un td con el idPelicula de la pelicula
         const tdId= document.createElement('td');
         tdId.textContent = movie.idPelicula;
        // creamos un td con el titulo de la pelicula
        const tdTitle = document.createElement('td');
        tdTitle.textContent = movie.titulo;
        // creamos un td con la duracion de la pelicula
        const tdDuration = document.createElement('td');
        tdDuration.textContent = movie.duracion;
        // creamos un td con los generos de la pelicula
        const tdGenres = document.createElement('td');
        tdGenres.textContent = movie.genero;
        // creamos un td con la imagen de la pelicula
        const tdImage = document.createElement('td');
        const img1 = document.createElement('img');
        img1.src = "../assets/img/" + movie.imagen;
        img1.width = '100';
        img1.height ='150';
        img1.alt = movie.titulo;
        tdImage.appendChild(img1);
        //agrego la clase a la imagen para que se vea mejor de bootstrap fluid y thumbnail
       // img1.classList.add('img-fluid');
       // img1.classList.add('img-thumbnail');
       // const tdModif = document.createElement('td');
       // const modif =document.createElement('button');
       // modif.textContent  = "Modificar";
       // modif.className = "btmbuscar";
       // tdModif.appendChild(modif);


        // añadimos los td al tr
        tr.appendChild(tdId);
        tr.appendChild(tdTitle);
        tr.appendChild(tdDuration);
        tr.appendChild(tdGenres);
        tr.appendChild(tdImage);
       // tr.appendChild(tdModif);
        // añadimos el tr a al body
        tbody.appendChild(tr);

    });
});