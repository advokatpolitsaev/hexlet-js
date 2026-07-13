import _ from 'lodash'

// Создаём и экспортируем функцию
export default () => {
  // Берём последний элемент массива
  return _.last(['one', 'two'])
}
