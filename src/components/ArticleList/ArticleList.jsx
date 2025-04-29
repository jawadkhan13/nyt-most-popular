import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useGetMostViewedQuery } from '../../services/NYTDB'
import { Bounded } from '../Bounded'
const ArticleList = () => {
  const { data } = useGetMostViewedQuery()
  console.log(data)
  
  return (
    <Bounded>ArticleList</Bounded>
  )
}

export default ArticleList