import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer KrXiGeGIw18AvFMSuhdL17YknC4b-EIZuTTb_lmUNeTGCCEEkSMsC_eCs5DJrMfoykBDVkXwoabkTzCK2kjGRkXeTRMFQz1tPzlHb3Ep0552kDwla3xxRA4Wm-rHX3Yx",
  },
});
