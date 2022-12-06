Make an API get request to https://thesimpsonsquoteapi.glitch.me/
and get the random character name that you will get as a key inside your response object.
[
{
"quote": "Last night's \"Itchy & Scratchy\" was, without a doubt, the worst episode ever. Rest assured that I was on the Internet within minutes, registering my disgust throughout the world.",
"character": "Comic Book Guy",
"image": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FComicBookGuy.png?1497567511970",
"characterDirection": "Right"
}
]
(It takes ~10secs for the server to wake up so just wait, it is working I promise :slightly_smiling_face: )
Then use that character name to make a new API request to Giphy (doco here) and show the gif you received on your html page. Or just a console log is also fine :slightly_smiling_face:
Notes: For your api request to Giphy you need to pass in parameters to your get request. Here is how you can do it with fetch:
fetch('https://api.giphy.com/v1/gifs/search?'+ new URLSearchParams({
api_key: "[YOUR OWN API KEY HERE]",
q: "[String Interpolate The Simpsons Character Name Here]"
})).then(res => res.json()).then(res => console.log(res.data))
Good luck and let me know if you have any questions :slightly_smiling_face: (edited)

developers.giphy.comdevelopers.giphy.com
GIPHY Developers
The GIPHY Developer Portal is how you integrate the world's best GIF API into your business, app or project.
