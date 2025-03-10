import { Center, Loader } from '@mantine/core'
import React from 'react'

function CenterLoader() {
  return (
    <Center w={"100%"} h={200}>
      <Loader size={30} /> 
    </Center>
  )
}

export default CenterLoader