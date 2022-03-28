import axios from 'axios';

const interceptRequest = () => {
    // RootUrl
    // axios.defaults.baseURL = "http://localhost:3000";
    axios.defaults.baseURL = "https://justshop-api.herokuapp.com";
    // axios.defaults.headers.common['authorization', localStorage.getItem('token') ? localStorage.getItem('token').toString() : "Not Available"]

    // HTTP Request Interceptors. Eg: Loader Display and Adding Authorization headers etc
    axios.interceptors.request.use(req => {
        // spinning start to show
        // UPDATE: Add this code to show global loading indicator
        showSpinner();
        const token = window.localStorage.token;
        if (token) {
            // Adding authorization token if exist
            req.headers.authorization = `${token}`
        }
        return req;
    }, err => {
        console.log(err);
        // Fallback: Loader hide
        hideSpinner();
        return Promise.reject(err);
    });

    axios.interceptors.response.use(function (response) {
        // Loader hide
        // UPDATE: Add this code to hide global loading indicator
        hideSpinner();
        return response;
    }, function (error) {
        // Fallback: Loader hide
        hideSpinner();
        return Promise.reject(error);
    });

    function showSpinner() {
        document.body.classList.add('loading-indicator');
        document.getElementById("spinner").hidden = false;
    }
    function hideSpinner() {
        document.body.classList.remove('loading-indicator');
        document.getElementById("spinner").hidden = true;
    }


};

export default interceptRequest;