import { View, Text } from 'react-native'
import { useState, useEffect } from 'react'
import Graph from '@/components/Graph'
import createDrzewko from '../../logic/treeOfTheDay'

const [date, setDate] = useState(new Date()) 
const [drzewko, setDrzewko] = useState({ nodes: [], links: [] }) 

useEffect(() => { 
    let newDrzewko = createDrzewko(date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear())
    setDrzewko(newDrzewko)
    const updateDate = () => setDate(new Date());
    const intervalId = setInterval(() => {
        const newDate = new Date();
        if (date.getDate() != newDate.getDate()) {
            updateDate();
        }
    }, 60000);
  }, [date])

const generate: React.FC = () => {
  return (
    <View>
      <Graph drzewko={drzewko}/>
    </View>
  )
}

export default generate