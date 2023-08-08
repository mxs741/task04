const COMMENTS_URL: string = 'https://jsonplaceholder.typicode.com/comments';
const resultArr: string[] = []

interface Element {
  id: number,
  email: string
}

const getData: (url: string) => Promise<Element[]> = (url: string): Promise<Element[]> => {
  return fetch(url, {
    method: 'GET'
  })
  .then((data: { json: () => Promise<Element[]>; }): Promise<Element[]> => data.json())
}

getData(COMMENTS_URL)
  .then((data: Element[]) => {
    data.forEach((el: Element): void => {
      resultArr.push(`ID: ${el.id}, Email: ${el.email}`)
    })
    console.log(resultArr)
  })

/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */