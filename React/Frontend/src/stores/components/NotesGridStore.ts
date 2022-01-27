import { inject, injectable } from "inversify";
import { makeAutoObservable } from "mobx";
import ownTypes from "../../ioc/ownTypes";
import Note from "../../models/Note";
import { default as NoteService } from "../../services/NoteService";

@injectable()
export default class NotesGridStore {
    public notes: Note[] = [];

    public constructor(
        @inject(ownTypes.noteService) private readonly noteService: NoteService
    ) {
        makeAutoObservable(this);
    }

    public init = async () => {
        try {
            const result = await this.noteService.getNotes();
            this.notes = result;
        } catch (e) {
            if (e instanceof Error) {
                console.log("Exception");
            }
        }
    }

    public create = async (text: string, title: string) => {
        try {
            await this.noteService.create(text, title);
            // eslint-disable-next-line
            this.notes.push((await this.noteService.getNotes()).pop()!);
        } catch (e) {
            if (e instanceof Error) {
                console.log("Exception")
            }
        }
    }
}