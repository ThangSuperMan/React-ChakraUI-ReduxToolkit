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
      state.notes.push(note)
    }
  }
})

export const { updateNote, addNote } = noteSlice.actions
export default noteSlice.reducer
