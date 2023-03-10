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
                <td><a href="/movies/delete/${movie.id}">&times;</a></td>
            </tr>`
            )
            .join("")}
    </tbody>
</table>
    </body>
    </html>            
    `;
}