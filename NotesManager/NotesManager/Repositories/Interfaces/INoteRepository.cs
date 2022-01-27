using NotesManager.Data.Entities;

namespace NotesManager.Repositories.Interfaces
{
    public interface INoteRepository
    {
        Task<IEnumerable<Note>?> GetNotesAsync();
        Task<Note?> GetNoteByIdAsync(int id);
        Task<int> AddAsync(string text, string title);
        Task<bool> DeleteAsync(int id);
        Task<bool> UpdateAsync(int id, string text, string title);
    }
}
