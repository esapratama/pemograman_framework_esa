// const fetcher = (url: string) => fetch(url).then((res) => res.json());

// export default fetcher;

const fetcher = (url: string) => fetch(url).then((res) => {
  if (!res.ok) {
    throw Error('Gagal mengambil data');
  }
  return res.json();
});
export default fetcher;