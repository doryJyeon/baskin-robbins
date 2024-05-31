export const fetchData = async<T>(url: string): Promise<T | undefined> => {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      cache: 'no-cache',
      mode: 'cors',       // 크로스 도메인 요청 허용
      redirect: 'follow',
      referrerPolicy: 'no-referrer'
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data: T = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error fetching data from ${url}: ${error.message}`);
    } else {
      console.error('Unexpected error fetching data', error);
    }
    return undefined;
  }
};