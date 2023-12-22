type TypeGetData = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

export type TypeResult = {
    data: TypeGetData[], count: number
}

export const getData = async () : Promise<TypeResult> => {
    const dataJson = await fetch('http://localhost:8000/get-data')
    const data = await dataJson.json()
  
    return data
}