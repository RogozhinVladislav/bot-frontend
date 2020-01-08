import React, { useState, useEffect } from 'react'
import List from './components/List'
import { CreateInteractionForm } from './components/CreateInteractionForm'
import http from '@/utils/http'

export function Interactions() {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await http.get('/interactions')
      console.log('result', result)
      setData(result.data)
    }
    fetchData()
  }, [])

  return (
    <div>
      <h1>Создание взаимодействия</h1>
      <CreateInteractionForm />
      <List commands={data} />
    </div>
  )
}
