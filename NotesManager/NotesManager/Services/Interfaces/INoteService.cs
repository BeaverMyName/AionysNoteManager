using NotesManager.Models.Dtos;

namespace NotesManager.Services.Interfaces
{
    public interface INoteService
    {
        Task<IEnumerable<NoteDto>?> GetNotesAsync();
        Task<NoteDto?> GetNoteByIdAsync(int id);
        Task<int> AddAsync(string text, string title);
        Task<bool> DeleteAsync(int id);
        Task<bool> UpdateAsync(int id, string text, string title);
    }
}
