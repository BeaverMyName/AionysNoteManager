import { inject, injectable } from "inversify";
import { makeAutoObservable } from "mobx";
import { NotesGridStore } from ".";
import ownTypes from "../../ioc/ownTypes";
import Note from "../../models/Note";
import { default as NoteService } from "../../services/NoteService";

@injectable()
export default class NoteStore {
    public note: Note = {id: 0, text: '', title: ''};
    public disabled = true;

    public constructor(
        @inject(ownTypes.noteService) private readonly noteService: NoteService,
        @inject(ownTypes.notesGridStore) private readonly notesGridStore: NotesGridStore
    ) {
        makeAutoObservable(this);
    }

    public init = async (note: Note) => {
        this.note = note;
    }

    public changeDisabled = async () => {
        this.disabled = !this.disabled;
    }

    public chagneText = async (text: string) => {
        this.note.text = text;
        this.noteService.update(this.note.id, this.note.text, this.note.title);
    }

    public changeTitle = async (title: string) => {
        this.note.title = title;
        this.noteService.update(this.note.id, this.note.text, this.note.title);
    }

    public delete = async (id: number) => {
        try {
            await this.noteService.delete(id);
            this.notesGridStore.notes.splice(this.notesGridStore.notes.indexOf(this.note), 1);
        } catch (e) {
            if (e instanceof Error) {
                console.log("Exception")
            }
        }
    }
}