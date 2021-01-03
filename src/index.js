const requestMultipleURLs = async (urls) => {
  const results = await Promise.all(urls.map((url) => {
    try {
      const res = fetch(url)
      .then((r) => {
        if(r.ok) {
          return Promise.resolve(r.json());
        } 
        else {
          return Promise.reject(r.status)
        }
      })
    return res;
    }
    catch(err) {
      console.log(err);
    }
  }));

 return await results;
}
module.exports = requestMultipleURLs;

