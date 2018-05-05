async function request(url) {
    try {
        const request = await fetch(url, { mode: 'no-cors' });
        console.log(request);
        return request.text();
    } catch (error) {
        throw new Error(error);
    }
}

(async () => {
    const data = await request('http://127.0.0.1:8080/');
    console.log(data);
})();
