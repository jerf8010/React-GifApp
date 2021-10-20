export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?limit=20&q=${ encodeURI(category)  }&api_key=B6epyS65FB008qZzjQTqaZKmgyzUNtYB`
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( ({ id, title, images }) => {
        return {
            id,
            title,
            url: images?.downsized_medium.url
        }
    })

    return gifs;
 

}