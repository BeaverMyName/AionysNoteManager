using NotesManager.Models.Dtos;
using NotesManager.Repositories.Interfaces;
using NotesManager.Services.Interfaces;
using AutoMapper;

namespace NotesManager.Services
{
    public class NoteService : INoteService
    {
        private readonly INoteRepository _noteRepository;
        private readonly IMapper _mapper;

        public NoteService(
            INoteRepository noteRepository,
            IMapper mapper)
        {
            _noteRepository = noteRepository;
            _mapper = mapper;
        }

        public async Task<NoteDto?> GetNoteByIdAsync(int id)
        {
            var result = await _noteRepository.GetNoteByIdAsync(id);

            if (result is null)
            {
                return null;
            }

            return _mapper.Map<NoteDto>(result);
        }

        public async Task<IEnumerable<NoteDto>?> GetNotesAsync()
        {
            var result = await _noteRepository.GetNotesAsync();

            if (result is null)
            {
                return null;
            }

            return result.Select(n => _mapper.Map<NoteDto>(n)).ToList();
        }

        public async Task<int> AddAsync(string text, string title)
        {
            return await _noteRepository.AddAsync(text, title);
        }

        public async Task<bool> DeleteAsync(int id)
        {
            return await _noteRepository.DeleteAsync(id);
        }

        public async Task<bool> UpdateAsync(int id, string text, string title)
        {
            return await _noteRepository.UpdateAsync(id, text, title);
        }
    }
}
