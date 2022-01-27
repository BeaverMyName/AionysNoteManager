import { Container } from 'inversify';
import DefaultHttpService, { type HttpService } from '../services/HttpService';
import DefaultNoteService, { NoteService } from '../services/NoteService';
import { NotesGridStore, NoteStore } from '../stores/components';
import ownTypes from './ownTypes';

export const container = new Container();
container.bind<HttpService>(ownTypes.httpService).to(DefaultHttpService).inSingletonScope();
container.bind<NoteService>(ownTypes.noteService).to(DefaultNoteService).inSingletonScope();

container.bind<NotesGridStore>(ownTypes.notesGridStore).to(NotesGridStore).inSingletonScope();
container.bind<NoteStore>(ownTypes.noteStore).to(NoteStore).inTransientScope();