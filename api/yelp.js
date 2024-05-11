import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer DXdffIEGwwQsjaCi4MDCS9X-jS02pfczpm2HITjeD2Wz_K4hRj5szmhfHdZVyS-pZrDZMvtzRGjVO_VdpE0OTgKi3bOpIaf7-WEYDTAefuMS1rJA98goSicNaCw_ZnYx",
  },
});
