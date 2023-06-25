import { createSlice } from '@reduxjs/toolkit'

export interface Note {
  id: number
  title: string
  body: string
}

export interface PayloadAction {
  payload: Note
}

interface NoteState {
  notes: Note[]
}

const initialState: NoteState = {
  notes: [
    {
      id: Date.now(),
      title: 'Note 1',
      body: 'Content of note 1'
    }
  ]
}

function isNoteExist(notes: Note[], title: string): boolean {
  const note = notes.find((note: Note) => note.title === title)
  console.log('note :>> ', note)
  return note ? true : false
}

export const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    updateNote: (state: NoteState, action: PayloadAction) => {
      const noteWillBeUpdate = state.notes.find(
        (note: Note) => note.id === action.payload.id
      )
      console.log('noteWillBeUpdate :>> ', noteWillBeUpdate)

      if (noteWillBeUpdate) {
        noteWillBeUpdate.title = action.payload.title
        noteWillBeUpdate.body = action.payload.body
      }
    },
    addNote: (state: NoteState, action: PayloadAction) => {
      const note: Note = {
        id: Date.now(),
        title: action.payload.title,
        body: action.payload.body
      }
      const isNoteExistBefore = isNoteExist(state.notes, note.title)
      if (isNoteExistBefore) {
        console.warn('This title of note exist before')
        return
      }
      return {
        ...state,
        notes: [...state.notes, note]
      }
    }
  }
})

export const { updateNote, addNote } = noteSlice.actions
export default noteSlice.reducer
