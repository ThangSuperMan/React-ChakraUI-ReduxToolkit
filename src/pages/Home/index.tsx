// @ts-ignore
import Navigation from '@/components/Navigation'
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input
} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { UseFormReturn, useForm } from 'react-hook-form'
import { addNote, Note } from '../../redux/noteSlice'
import NoteContainer from '../../components/NoteContainer'

function Home(): JSX.Element {
  const { notes } = useSelector((state: any) => state.note)
  console.log('notes :>> ', notes)
  const dispath = useDispatch()

  const { handleSubmit, register }: UseFormReturn<Note> = useForm<Note>()

  const handleAddNote = (note: Note) => {
    console.log('note :>> ', note)
    dispath(addNote(note))
  }

  return (
    <Box>
      <Navigation />
      <form onSubmit={handleSubmit(handleAddNote)}>
        <FormControl isRequired borderWidth='1px' borderRadius='lg' p={4}>
          <FormLabel>Note's title</FormLabel>
          <Input {...register('title')} type='text' />
          <FormErrorMessage>Error here</FormErrorMessage>
          <FormLabel mt='2'>Note's body</FormLabel>
          <Input {...register('body')} type='text' />
          <FormErrorMessage>Error here</FormErrorMessage>
          <Button bg='green.200' variant='outline' type='submit' mt='3'>
            Add note
          </Button>
        </FormControl>
      </form>
      <NoteContainer />
    </Box>
  )
}

export default Home
