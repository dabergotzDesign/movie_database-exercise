export function render(movies){
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
        <title>Movie List</title>
    </head>
    <body>
    <main>
    <h1>Movie Database</h1>
    <table>
    <thead>
        <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Year</th>
        </tr>
    </thead>
    <tbody>
        ${movies
            .map(
            (movie) => `
            <tr>
                <td>${movie.id}</td>
                <td>${movie.title}</td>
                <td>${movie.year}</td>
                <td class="edit"><a href="/movies/form/${movie.id}">&#128394;</a></td>
                <td><a href="/movies/delete/${movie.id}">&times;</a></td>
            </tr>`
            )
            .join("")}
    </tbody>
</table>
    <a href="/movies/form" class="add-btn">Add movie</a>
    </main>
    <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#305C61" fill-opacity="1" d="M0,224L48,224C96,224,192,224,288,192C384,160,480,96,576,90.7C672,85,768,139,864,144C960,149,1056,107,1152,101.3C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" style="--darkreader-inline-fill: #1e2122;" data-darkreader-inline-fill=""></path>
    </svg>
    </body>
    </html>            
    `;
}