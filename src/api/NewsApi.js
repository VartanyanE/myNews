import axios from "axios";




export default axios.create({
  baseURL: "https://google-news1.p.rapidapi.com/search",
  params: {
    q: "Aviation",
    country: "US",
    lang: "en",
    
    limit: "1",
    media: "true",
    when: "30d",
  },
  headers: {
    "x-rapidapi-key": "3712cf1d6cmshb54d0c7fbc4a044p107200jsn8b9476230474",
    "x-rapidapi-host": "google-news1.p.rapidapi.com",
  },
});
