export function render(movie){
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="../style.css">
        <title>Movie Database Form</title>
    </head>
    <body>
    <h1>Add a new Movie</h1>
    <form action="/movies/save" method="post" class="addMovieForm">
        <input type="hidden" id="id" name="id" value="${movie.id}">
        <div>
            <label for="title">Movie Title: </label>
            <input type="text" id="title" name="title" value="${movie.title}">
        </div>
        <div>
            <label for="year">Movie Release Year: </label>
            <input type="text" id="year" name="year" value="${movie.year}">
        </div> 
        <div>
            <button type="submit">Save</button>
        </div>   
    </form>
    </body>
    </html>
    `
}