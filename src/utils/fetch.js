const fetchUrl = async (url, options = {}) => {
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log('API failed', url);
      console.log('API failed', error.message);
      return { error };
    }
  };

export default fetchUrl;