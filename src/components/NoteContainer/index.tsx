import {
  Box,
  Flex,
  IconButton,
  Spacer,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  VStack,
  StackDivider
} from '@chakra-ui/react'
import { EditIcon } from '@chakra-ui/icons'
import { Note } from '../../redux/noteSlice'
import { useSelector } from 'react-redux'

interface NoteItemProps {
  note: Note
}

function NoteItem(props: NoteItemProps): JSX.Element {
  const {
    note: { title, body }
  } = props
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex
      p='2'
      alignItems='center'
      borderWidth='1px'
      borderRadius='lg'
      bg='gray.50'
      borderColor='blue'
    >
      <Text noOfLines={[2]}>{title}</Text>
      <Spacer />
      <IconButton
        onClick={onOpen}
        variant='outline'
        colorScheme='blue'
        aria-label='Search database'
        icon={<EditIcon boxSize={4} />}
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit your note</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>{body}</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  )
}

function NoteContainer(): JSX.Element {
  const { notes } = useSelector((state: any) => state.note)
  console.log('notes :>> ', notes)

  return (
    <Box maxW='sm' mt='4'>
      <VStack
        divider={<StackDivider borderColor='gray.200' />}
        spacing='2'
        align='stretch'
      >
        {notes.map((note: Note) => (
          <NoteItem key={note.title} note={note} />
        ))}
      </VStack>
    </Box>
  )
}

export default NoteContainer
