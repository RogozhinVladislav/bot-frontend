/**
 * СТАРШИЙ КОМПОНЕНТ-ХРАНИЛИЩЕ
 *
 * Является старшим по отношению к остальным хранилищам (кроме optionsStore)
 * Слушает изменения всех остальных компонентов. Директивно изменяет параметры в observable дочерних компонентов
 * Поток данных однонаправленный: commonStore слушает все изменения, которые происходят в зависимых хранилищах
 * Другие хранилища ничего никуда не передают, только изменяют своё состояние и взаимодействуют со своим отображением
 * commonStore инициализируется последним, поэтому некоторые действия в дочерних хранилищах (например, в statusStore) запускаются при инициализации commonStore,
 * чтобы можно было слушать изменения в observable дочерних хранилищ
 */

import { observable, computed, autorun, reaction, get, action } from 'mobx'
import CommandsStore from './CommandsStore'

class mainStore {
  constructor() {
    /**
     * Инициализация дочерних хранилищ
     */
    //this.CommandsStore = new CommandsStore();
  }
}

export default new mainStore()
