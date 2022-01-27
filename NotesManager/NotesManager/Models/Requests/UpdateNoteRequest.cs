namespace NotesManager.Models.Requests
{
    public class UpdateNoteRequest<T>
    {
        public T Id { get; set; } = default(T) !;
        public string Text { get; set; } = null!;
        public string Title { get; set; } = null!;
    }
}
