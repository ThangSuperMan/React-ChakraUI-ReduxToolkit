import { useState } from 'react'
// @ts-ignore
import Navigation from '@/components/Navigation'
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Text,
  Input
} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { UseFormReturn, useForm } from 'react-hook-form'
import { updateNote, addNote, Note } from '../../redux/noteSlice'

function Home(): JSX.Element {
  const [count, setCount] = useState<number>(0)
  const { notes } = useSelector((state: any) => state.note)
  console.log('notes :>> ', notes)
  const dispath = useDispatch()

  const { handleSubmit, register }: UseFormReturn<Note> = useForm<Note>()

  const handleAddNote = (note: Note) => {
    console.log('note :>> ', note)
    dispath(addNote(note))
  }

  const handleClickButton = () => {
    console.log('handleClickButton ')
    setCount((prev: number) => prev + 1)
  }

  return (
    <Box>
      <Navigation />
      <form onSubmit={handleSubmit(handleAddNote)}>
        <FormControl isRequired borderWidth='1px' borderRadius='lg' p={4}>
          <FormLabel>Note's title</FormLabel>
          <Input {...register('title')} type='text' />
          <FormHelperText>Fill your title</FormHelperText>
          <FormErrorMessage>Error here</FormErrorMessage>
          <FormLabel mt='2'>Note's body</FormLabel>
          <Input {...register('body')} type='text' />
          <FormHelperText>Fill your body</FormHelperText>
          <FormErrorMessage>Error here</FormErrorMessage>
          <Button type='submit'>Add note</Button>
        </FormControl>
      </form>
      <Button onClick={handleClickButton}>Change count</Button>
      <Text fontSize='50px' color='tomato'>
        {count}
      </Text>
    </Box>
  )
}

export default Home
