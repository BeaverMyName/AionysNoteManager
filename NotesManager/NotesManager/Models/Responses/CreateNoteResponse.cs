namespace NotesManager.Models.Responses
{
    public class CreateNoteResponse<T>
    {
        public T Id { get; set; } = default(T) !;
    }
}
