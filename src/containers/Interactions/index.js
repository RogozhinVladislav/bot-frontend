import React, { useState, useEffect } from 'react'
import List from './components/List'
import CreateCommandForm from './components/CreateInteractionForm'
import http from '@/utils/http'

export default function interaction() {
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
      <CreateCommandForm />
      <List commands={data} />
    </div>
  )
}
