namespace NotesManager.Models.Requests
{
    public class CreateNoteRequest
    {
        public string Text { get; set; } = null!;
        public string Title { get; set; } = null!;
    }
}
