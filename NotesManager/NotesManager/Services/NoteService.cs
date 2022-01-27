using NotesManager.Models.Dtos;
using NotesManager.Repositories.Interfaces;
using NotesManager.Services.Interfaces;
using AutoMapper;
using NotesManager.Models.Responses;

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

        public async Task<CreateNoteResponse<int>> AddAsync(string text, string title)
        {
            var result = await _noteRepository.AddAsync(text, title);
            return new CreateNoteResponse<int>() { Id = result };
        }

        public async Task<DeleteNoteResponse> DeleteAsync(int id)
        {
            var result = await _noteRepository.DeleteAsync(id);
            return new DeleteNoteResponse() { Success = result };
        }

        public async Task<UpdateNoteResponse> UpdateAsync(int id, string text, string title)
        {
            var result = await _noteRepository.UpdateAsync(id, text, title);
            return new UpdateNoteResponse() { Success = result };
        }
    }
}
