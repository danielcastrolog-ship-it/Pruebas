fetch('./Restricciones.json')
    .then(response => response.json())
    .then(data => {

        const contenedor =
            document.getElementById('contenedor');

        contenedor.innerHTML = "";

        for (const nave in data.naves) {

            const info = data.naves[nave];

            const card =
            `
            <div class="card">
                <h2>${nave}</h2>

                <p>
                    Capacidad:
                    ${info.capacidad} ton
                </p>

                <b>Restricciones:</b>

                <ul>
                    ${info.restricciones
                        .map(r => `<li>${r}</li>`)
                        .join('')}
                </ul>

            </div>
            `;

            contenedor.innerHTML += card;
        }

    })
    .catch(error => {

        document
            .getElementById("contenedor")
            .innerHTML =
            "Error al cargar datos";

        console.error(error);

    });
