import React, { useState, useEffect } from 'react'
import { observer } from 'mobx-react'
import { InteractionsContext } from '@/contexts/interactions-context'
import { InteractionsList } from './components/InteractionsList'
import { CreateInteractionForm } from './components/CreateInteractionForm'
import { useStores } from '@/hooks'

export function Interactions() {
  const { interactionsStore } = useStores()

  useEffect(() => {
    interactionsStore.fetchInteractions()
  }, [])

  return (
    <InteractionsContext.Provider value={{
      interactions: interactionsStore.interactions,
      createInteraction: interactionsStore.createInteraction,
      updateInteraction: interactionsStore.updateInteraction,
      deleteInteraction: interactionsStore.deleteInteraction,
    }}>
      <div>
        <h1>Создание взаимодействия</h1>
        <CreateInteractionForm />
        <InteractionsList interactions={interactionsStore.interactions} />
      </div>
  </InteractionsContext.Provider>
  )
}
