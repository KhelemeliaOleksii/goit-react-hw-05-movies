const http = {
    async get(url) {
        const response = await fetch(url);
        if (response.ok) {
            return await response.json();
        }
        return Promise.reject(new Error('Not found'));
    }
};

export default http;