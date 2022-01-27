namespace NotesManager.Models.Requests
{
    public class DeleteNoteRequest<T>
    {
        public T Id { get; set; } = default(T) !;
    }
}
