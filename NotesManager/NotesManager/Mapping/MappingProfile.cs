using NotesManager.Data.Entities;
using NotesManager.Models.Dtos;

namespace NotesManager.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Note, NoteDto>();
        }
    }
}
