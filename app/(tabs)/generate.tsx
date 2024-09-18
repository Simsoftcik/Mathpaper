import { View, Text } from 'react-native'
import { useState, useEffect } from 'react'
import Graph from '@/components/Graph'
import createDrzewko from '../../logic/treeOfTheDay'

function formatDate(date: Date): string {
  return (date.getDate()>=10 ? date.getDate() : '0'+date.getDate()) + '.' + (date.getMonth()+1>=10 ? date.getMonth()+1 : '0'+(date.getMonth()+1)) + '.' + date.getFullYear()
}

const Generate: React.FC = () => {

  const [date, setDate] = useState(new Date()) 
  const [drzewko, setDrzewko] = useState({ nodes: [], links: [] })

  useEffect(() => {  
    let newDrzewko = createDrzewko(formatDate(date))
    setDrzewko(newDrzewko)
    const updateDate = () => setDate(new Date());
    const intervalId = setInterval(() => {
        const newDate = new Date();
        if (date.getDate() != newDate.getDate()) {
            updateDate();
        }
    }, 60000);
  }, [date.getDate()])

  return (
    <View>
      <Graph drzewko={drzewko}/>
    </View>
  )
}

export default Generate