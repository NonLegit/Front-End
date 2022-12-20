import useFetch from '../../../../hooks/useFetch';

function getPostServer(postId) {
  const [data, error, statusCode] = useFetch(`/posts/${postId}`);
  if (statusCode === 200) {
    console.log('el post aho', data);
  } else {
    console.log('failed wl responseaho', data, statusCode);
  }
  return [data?.data, error];
}

export default getPostServer;
