
import { getData, TypeResult } from '../../data'
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query'
import { useState, useEffect, useMemo } from 'react'
import { queryClient } from '../_app'

export const getServerSideProps = async () => {
    const data = await queryClient.fetchQuery({ queryKey: ['key'], queryFn: getData })
    return {props: data}
}
export default (props:any) => {
    return <h1>{JSON.stringify(props)}</h1>
}