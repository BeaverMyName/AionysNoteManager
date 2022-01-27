using NotesManager.Data;
using NotesManager.Data.Entities;
using NotesManager.Repositories.Interfaces;

namespace NotesManager.Repositories
{
    public class NoteRepository : INoteRepository
    {
        private readonly MockedDbContext _mockedDbContext;

        public NoteRepository()
        {
            _mockedDbContext = new MockedDbContext();
        }

        public async Task<Note?> GetNoteByIdAsync(int id)
        {
            await Task.Delay(1);
            return _mockedDbContext.Notes.FirstOrDefault(n => n.Id == id);
        }

        public async Task<IEnumerable<Note>?> GetNotesAsync()
        {
            await Task.Delay(1);
            return _mockedDbContext.Notes;
        }

        public async Task<int> AddAsync(string text, string title)
        {
            await Task.Delay(1);
            var note = new Note { Id = _mockedDbContext.Notes.Count() > 0 ? _mockedDbContext.Notes.Last().Id + 1 : 0, Text = text, Title = title };
            _mockedDbContext.Notes.Add(note);
            return note.Id;
        }

        public async Task<bool> DeleteAsync(int id)
        {
            await Task.Delay(1);
            var note = _mockedDbContext.Notes.FirstOrDefault(n => n.Id == id);

            if (note is null)
            {
                return false;
            }

            _mockedDbContext.Notes.Remove(note);

            return true;
        }

        public async Task<bool> UpdateAsync(int id, string text, string title)
        {
            await Task.Delay(1);
            var note = _mockedDbContext.Notes.FirstOrDefault(n => n.Id == id);

            if (note is null)
            {
                return false;
            }

            note.Text = text;
            note.Title = title;

            return true;
        }
    }
}
