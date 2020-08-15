import fetchJsonp from 'fetch-jsonp';

export const FLICKR_API: String =
  'https://api.flickr.com/services/feeds/photos_public.gne?format=json&tagmode=any';

export const fetchPhotos = async (tags: string) => {
  try {
    const endpoint = `${FLICKR_API}&tags=${tags}`;
    //console.log('endpoint', endpoint)
    const response = await fetchJsonp(endpoint, {
      jsonpCallback: 'jsoncallback',
      timeout: 3000
    }).then(response => {
      return response.json()
    })
    return response.items
  } catch (error) {
    throw new Error(error);
  }
};
  