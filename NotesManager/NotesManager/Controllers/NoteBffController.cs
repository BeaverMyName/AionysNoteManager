using NotesManager.Models.Dtos;
using NotesManager.Models.Requests;
using NotesManager.Models.Responses;
using NotesManager.Services.Interfaces;

namespace NotesManager.Controllers
{
    [Route(ComponentDefaults.DefaultRoute)]
    public class NoteBffController : ControllerBase
    {
        private readonly INoteService _noteService;

        public NoteBffController(
            INoteService noteService)
        {
            _noteService = noteService;
        }

        [HttpGet]
        [ProducesResponseType(typeof(IEnumerable<NoteDto>), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> Notes()
        {
            var result = await _noteService.GetNotesAsync();
            return Ok(result);
        }

        [HttpGet]
        [ProducesResponseType(typeof(NoteDto), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> Note(int id)
        {
            var result = await _noteService.GetNoteByIdAsync(id);
            return Ok(result);
        }

        [HttpPost]
        [ProducesResponseType(typeof(CreateNoteResponse<int>), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> Create(CreateNoteRequest request)
        {
            var result = await _noteService.AddAsync(request.Text, request.Title);
            return Ok(new CreateNoteResponse<int> { Id = result });
        }

        [HttpDelete]
        [ProducesResponseType(typeof(DeleteNoteResponse), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> Delete(DeleteNoteRequest<int> request)
        {
            var result = await _noteService.DeleteAsync(request.Id);
            return Ok(new DeleteNoteResponse { Success = result });
        }

        [HttpPut]
        [ProducesResponseType(typeof(UpdateNoteResponse), (int)HttpStatusCode.OK)]
        public async Task<IActionResult> Update(UpdateNoteRequest<int> request)
        {
            var result = await _noteService.UpdateAsync(request.Id, request.Text, request.Title);
            return Ok(new UpdateNoteResponse { Success = result });
        }
    }
}
