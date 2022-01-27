import { inject, injectable } from 'inversify';
import 'reflect-metadata';
import NoteDto from '../dtos/NoteDto';
import ownTypes from '../ioc/ownTypes';
import { default as HttpService, MethodType } from './HttpService';

export interface NoteService {
    getNotes(): Promise<NoteDto[]>;
    create(text: string, title: string): Promise<void>;
    update(id: number, text: string, title: string): Promise<void>;
    delete(id: number): Promise<void>;
}

const controllerName = '/NoteBff';

@injectable()
export default class DefaultNoteService implements NoteService {
    public constructor(
        @inject(ownTypes.httpService) private readonly httpService: HttpService
    ) {
    }

    public async getNotes(): Promise<NoteDto[]> {
        const result = await this.httpService.send<NoteDto[]>(`${controllerName}/Notes`, MethodType.GET);
        return result.data;
    }

    public async create(text: string, title: string): Promise<void> {
        await this.httpService.send(`${controllerName}/Create?Text=${text}&Title=${title}`, MethodType.POST);
    }

    public async update(id: number, text: string, title: string): Promise<void> {
        await this.httpService.send(`${controllerName}/Update?Id=${id}&Text=${text}&Title=${title}`, MethodType.PUT);
    }

    public async delete(id: number): Promise<void> {
        await this.httpService.send(`${controllerName}/Delete?Id=${id}`, MethodType.DELETE);
    }
}