using NotesManager.Models.Dtos;
using NotesManager.Models.Responses;

namespace NotesManager.Services.Interfaces
{
    public interface INoteService
    {
        Task<IEnumerable<NoteDto>?> GetNotesAsync();
        Task<NoteDto?> GetNoteByIdAsync(int id);
        Task<CreateNoteResponse<int>> AddAsync(string text, string title);
        Task<DeleteNoteResponse> DeleteAsync(int id);
        Task<UpdateNoteResponse> UpdateAsync(int id, string text, string title);
    }
}
